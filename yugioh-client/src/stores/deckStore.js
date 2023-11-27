import { defineStore } from 'pinia'
import axios from "axios"
import Swal from 'sweetalert2'

export const deckStore = defineStore('deck', {
    state: () => ({
            baseUrl : "http://localhost:3000",
            userData: {},
            publicData: [],
            baseRate: "USD",
            targetRate: "USD",
            rate: 1,
            file: ""
        }),
    actions: {
        async getUserData() {
            try {
                const { data } = await axios({
                    url: this.baseUrl + "/user",
                    method: "get",
                    headers: {
                        access_token : localStorage.getItem("access_token")
                    }
                })
                this.userData = data
            } catch {
                Swal.fire(err.response.data.message, "", "error")
            }
        },
        async getRate(target) {
            try {
                
                const { data } = await axios({
                    url: this.baseUrl + "/public/rate/" + target ,
                    method: "get",
                })
                this.rate = await data.coversionRate
            } catch(err){
                console.log(err);
                Swal.fire(err.response.data.message, "", "error")
            }
        },
        async exchangeRate(value, target) {
            if(target !== this.targetRate) {
                this.targetRate = target
                await this.getRate(target)
            }
            const convert = await value * this.rate
            return convert
        },
        async createDeck() {
            console.log("test");
            try {
                await axios({
                    url: this.baseUrl + "/deck/card",
                    method: "post",
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    },
                    data: {
                        name : "New Deck"
                    }
                })
                this.getUserData()
                Swal.fire("Succes create empty deck", "", "success")
            }catch(err) {
                Swal.fire(err.response.data.message, "", "error")
            }
        },
        changeFile(file) {
            console.log(file);
            this.file = file
        },
        async submitFile() {
            try {
              let formData = new FormData();
              formData.append('uploaded_file', this.file);
              console.log('>> formData >> ', formData);
              const { data } = await axios.post("http://localhost:3000/deck/ydk",
                formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  access_token: localStorage.getItem("access_token")
                    }
                  })
                  await this.getUserData()
                Swal.fire("Succes Submit Deck", "", "success")
      
            } catch(err) {
                Swal.fire(err.response.data.message, "", "error")
            }
          }
    },
  })