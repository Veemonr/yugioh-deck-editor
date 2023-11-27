<script>
import { mapActions } from 'pinia';
import { userStore } from "../stores/userStore"

export default {
    data() {
        return {
            formInput: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions(userStore, ["formLogin", "formRegister"]),

        async buttonRegister() {
            await this.formRegister(this.formInput)
        },

        async buttonLogin() {
            const success = await this.formLogin(this.formInput)
            if(success) this.$router.push("/home")
        },
        
        loginGuest() {
            this.$router.push("/home")
        }
    }
}

</script>

<template>
    <div class="login-flex">
            <div class="login-box" >
                <div class="box-info" style="padding-left: 5px;">
                    <div class="box-flex">
                        <div class="info-head" style="font-size: 20px; padding: 5px;">Login/Register Form</div>
                        <button @click.prevet="loginGuest" class="medium animation-smaller button-hover">Login As Guest</button>
                        <form class="form-flex">
                            <p>Username</p>
                            <input v-model="formInput.username" type="text" placeholder="Input your username">
                            <p>Password</p>
                            <input  v-model="formInput.password" type="password" placeholder="Input your password">
                            <div class="login-input">
                                <button @click.prevent="buttonLogin" class="small animation-3d button-hover">Login</button>
                                <button @click.prevent="buttonRegister" class="small animation-3d button-hover">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>   
</template>