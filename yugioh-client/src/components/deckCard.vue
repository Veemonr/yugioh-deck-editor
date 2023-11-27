<script>
import { mapActions } from 'pinia';
import { deckStore } from '../stores/deckStore';

export default{
    props: ["deck", "rateNow"],
    data() {
        return{
            price: this.deck.totalPrice
        }
    },
    methods: {
        ...mapActions(deckStore, ["exchangeRate"])
    },
    computed: {
        findRate() {
            let price = 0
            Promise.any([this.exchangeRate(this.deck.totalPrice, this.rateNow)])
             .then(data => {
                console.log(data)
                price = data
                this.price = price
             })
        }
    }
}
</script>

<template>
  <div class="deckList-card">
    <div class="deckList-image">
      <img
        width="85"
        height="85"
        src="https://en.play-in.com/img/product/deck_box_classique_noir.png"
      />
    </div>
    <div class="deckList-info">
      <p>{{deck.name}}</p>
      <p>{{ this.price }}</p>
      <RouterLink :to="'deck/' + deck._deckCardId" class="button-hover animation-smaller small" style="font-size: 15px;">See Detail</RouterLink>
    </div>
  </div>
</template>
