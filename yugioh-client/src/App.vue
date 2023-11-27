<script>
import { RouterView } from "vue-router" 
import { mapActions } from "pinia"
import { userStore } from "./stores/userStore"

export default {
    methods: {
        ...mapActions(userStore, ["checkLogin"])
    },
    created() {
        this.checkLogin()
    }
}

</script>

<template>
    <div class="flex-container">
        <RouterView />
    </div>
</template>