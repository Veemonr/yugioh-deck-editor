<script>
import { mapActions, mapState } from 'pinia';
import { deckStore } from '../stores/deckStore';

export default {
    data() {
        return {

        }
    },
    computed: {
        
    }, 
    methods: {

    }
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
                <form>
                  <label style="font-size: 20px">Insert .ydk File</label>
                  <input style="width: 200px" type="file" />
                  <input
                    class="button-hover animation-3d small"
                    type="submit"
                  />
                </form>
                <button class="button-hover animation-3d small">
                  Create Deck
                </button>
              </div>
              <div>
                <label style="font-size: 20px">Exchange Rate</label>
                <select>
                  <option value="USD">USD</option>
                  <option value="IDR">IDR</option>
                  <option value="JPN">JPN</option>
                </select>
              </div>
            </div>
          </div>
          <div class="deckList-content">
            <div class="deckList-card">
              <div class="deckList-image">
                <img
                  width="85px"
                  height="85px"
                  src="https://en.play-in.com/img/product/deck_box_classique_noir.png"
                />
              </div>
              <div class="deckList-info">
                <p>Melfy Sprite</p>
                <p>100$</p>
                <button class="button-hover animation-smaller small">
                  See Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
