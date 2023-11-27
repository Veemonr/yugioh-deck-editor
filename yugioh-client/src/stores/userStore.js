import { defineStore } from 'pinia'
import axios from "axios"
import Swal from 'sweetalert2'

export const userStore = defineStore('user', {
  state: () => ({
       isLogin: false,
       baseUrl : "http://localhost:3000"
      }),
  actions: {
    checkLogin() {
      if(localStorage.getItem("access_token")) {
          this.isLogin = true
      }
    },
    async formLogin(formInput) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/user/login",
          method: "post",
          data: formInput
        })
        this.isLogin = true
        Swal.fire("Login Succesfuly", "", "success")
        localStorage.setItem("access_token", data.access_token)
        return true
      } catch(err) {
        Swal.fire(err.response.data.message, "", "error")
        return false 
      }
    },
    async formRegister(formInput) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/user/register",
          method: "post",
          data: formInput
        })
        Swal.fire("Register Succesfuly", "", "success")
        return true
      } catch(err) {
        Swal.fire(err.response.data.message, "", "error")
        return false 
      }
    },
    logout() {
      this.isLogin = false
      localStorage.removeItem("access_token")
      return true
    }
  },
})