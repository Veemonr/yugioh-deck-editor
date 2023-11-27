<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import { userStore } from '../stores/userStore';

export default{
    components: {
        RouterLink
    },
    computed: {
        ...mapState(userStore, ["isLogin"])
    },
    methods: {
        ...mapActions(userStore, ["logout"]),

        logoutButton() {
            const success = this.logout()
            if(success) this.$router.push("/")
        }
    }
}

</script>

<template>
    
  <div class="homeMenu-flex">
    <div class="homeMenu-box">
      <div class="box-info">
        <div class="homeMenu-box-flex">
          <div class="info-head" style="font-size: 30px">Home Menu</div>
          <RouterLink to="/user"
            v-if="isLogin"
            class="long animation-smaller button-hover"
            style="font-size: 25px"
          >
            View My Deck
          </RouterLink>
          <RouterLink to="/public"
            class="long animation-smaller button-hover"
            style="font-size: 25px"
          >
            View Public Deck
          </RouterLink>
          <button
            @click="logoutButton"
            class="long animation-smaller button-hover"
            style="font-size: 25px"
          >
            Logout
          </button>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
