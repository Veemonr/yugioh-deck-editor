<script>
import { mapActions, mapState } from 'pinia';
import { deckStore } from '../stores/deckStore';
import deckCard from "./deckCard.vue"


export default {
    data() {
        return {
          rateNow: "USD"
        }
    },
    components: {
      deckCard,
    },
    computed: {
        ...mapState(deckStore, ["userData"])
    }, 
    methods: {
        ...mapActions(deckStore, ["getUserData","createDeck", "submitFile","changeFile" ]),
      async createDeckButton() {
        await this.createDeck()
      },
      handleFileUploud() {
        this.changeFile(this.$refs.file.files[0]);
      },
      changedRate() {

      }
    },
    async created() {
      await this.getUserData()
    },
}
</script>

<template>
  <div class="deckList-flex">
    <div class="deckList-box">
      <div class="box-info">
        <div class="deckList-box-flex">
          <div class="info-head" style="font-size: 30px; padding: 10px">
            <p>User Deck List</p>
            <div class="deckList-option">
              <div class="deckList-create">
                <form @submit.prevent="submitFile" enctype="multipart/form-data" >
                  <label style="font-size: 20px">Insert .ydk File</label>
                  <input @change="handleFileUploud()" style="width: 200px" type="file" name="uploaded_file" class="form-control-file" id="file" ref="file" />
                  <input
                    class="button-hover animation-3d small"
                    type="submit"
                  />
                </form>
                <button class="button-hover animation-3d small" @click="createDeckButton">
                  Create Deck
                </button>
              </div>
              <div>
                <label style="font-size: 20px">Exchange Rate</label>
                <select @change="changeRate" v-model="rateNow">
                  <option value="USD">USD</option>
                  <option value="IDR">IDR</option>
                  <option value="JPN">JPN</option>
                </select>
              </div>
            </div>
          </div>
          <div class="deckList-content">


            <deckCard v-for="deck of userData.decks" :key="deck.id" :deck=deck :rateNow="rateNow" />
            

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
