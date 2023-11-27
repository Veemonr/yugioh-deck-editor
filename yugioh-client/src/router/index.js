import { createRouter, createWebHistory } from 'vue-router'
import loginRegister from "../components/loginRegister.vue"
import homeMenu from "../components/homeMenu.vue"
import deckListUser from "../components/deckListUser.vue"
import deckListPublic from "../components/deckListPublic.vue"
import dataDeckEdit from "../components/dataDeckEdit.vue"
import dataDeckView from "../components/dataDeckView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: loginRegister,
      name: "login",
      beforeEnter(to, from) {
        if(localStorage.getItem("access_token")){
          return "/home"
        }
        else {
          return true
        }
      }
    },
    {
      path: "/home",
      component: homeMenu,
      name: "home"
    },
    {
      path: "/user",
      component: deckListUser,
      name: "userDeck"
    },
    {
      path: "/public",
      component: deckListPublic,
      name: "public"
    },
    {
      path: "/deck/:id",
      component: dataDeckEdit,
      name: "deckUser"
    },
    {
      path: "/view/:id",
      component: dataDeckView,
      name: "deckPublic"
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.name === "deckUser" || to.name === "userDeck") {
    if(localStorage.getItem("access_token")){
      next()
    } else {
      next("/home")
    }
  }
})

export default router
