<template>
    <link href="https://unpkg.com/css.gg@2.0.0/icons/css/mail.css" rel="stylesheet" />
    <link href="https://unpkg.com/css.gg@2.0.0/icons/css/lock.css" rel="stylesheet" />
    <link href="https://unpkg.com/css.gg@2.0.0/icons/css/profile.css" rel="stylesheet" />
    <link href="https://unpkg.com/css.gg@2.0.0/icons/css/heart.css" rel="stylesheet" />
    <main class="Container">
        <section class="form">
            <form class="register" @submit.prevent="register">
                <p class="login">
                    Already have an account?
                    <router-link class="router-link" to="/Login">Login</router-link>
                </p>

                <h2>Register</h2>
                <div class="input">
                    <i class="gg-mail"></i>
                    <input id="email" type="email" placeholder="Please enter a legitimate email address" v-model="register_form.email"
                        required />
                </div>

                <div class="input">
                    <i class="gg-profile"></i>
                    <input id="username" type="text" placeholder="Please enter your username" v-model="register_form.username" required />
                </div>

                <div class="input">
                    <i class="gg-lock"></i>
                    <input id="password" type="password" placeholder="Password must contain at least 6 characters"
                        v-model="register_form.password" required />
                </div>

                <div class="input">
                    <i class="gg-lock"></i>
                    <input id="password_c" type="password" placeholder="Please confirm your password" v-model="register_form.password_c"
                        required />
                </div>

                <div class="input">
                    <i class="gg-heart"></i>
                    <select required v-model="register_form.preference">
                        <option value="null" disabled selected>Food Preference</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Gluten-free">Gluten-free</option>
                        <option value="Halal">Halal</option>
                        <option value="Diet">Diet</option>
                    </select>
                </div>

                <input class="btn" type="submit" value="Register" />
            </form>
        </section>
    </main>
</template>
    
    
<script>
import { ref } from "vue";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../firebase.js";
import { doc, setDoc } from "firebase/firestore";

export default {
    setup() {
        const register_form = ref({});

        return {
            register_form,
        };
    },
    methods: {
        async register() {
            try {
                var password1 = document.getElementById("password").value;
				var password2 = document.getElementById("password_c").value;
				if (password1 !== password2) {
					throw "Passwords do not match";
				}
                await createUserWithEmailAndPassword(
                    auth,
                    this.register_form.email,
                    this.register_form.password
                );
                sendEmailVerification(auth.currentUser).then(() => {
                    alert("Email verification sent!");
                });
            } catch (error) {
                switch (error.code) {
                    case "auth/email-already-in-use":
                        alert("Email already in use");
                        break;
                    case "auth/invalid-email":
                        alert("Invalid email");
                        break;
                    case "auth/operation-not-allowed":
                        alert("Operation not allowed");
                        break;
                    case "auth/weak-password":
                        alert("Weak password");
                        break;
                    default:
                        alert("Passwords do not match");
                }
                return;
            }

            await setDoc(doc(db, "meNUS", auth.currentUser.uid), {
                email: this.register_form.email,
                username: this.register_form.username,
                preference: this.register_form.preference,
            });

            this.$router.push({ name: "Login" });
        },
    },
};
</script>
    
<style scoped>
.Container {
    padding: 5vh;
    height: 60%;
    display: flex;
    background-image: url("../assets/pic/campus-background-4.jpg");
    background-color: white;
    background-size: 100% 100%;
}

h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 5vh;
    font-weight: bold;
}

.login {
    font-size: 13px;
    margin-bottom: 30px;
}

.form {
    padding: 30px;
    margin: 30px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 30px;
}

.form .register {
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.input {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 5vh;
    width: 50%;
}

.input input {
    width: 100%;
    border: none;
    padding: 4px 4px 4px 30px;
    height: 50px;
    border-radius: 10px;
    font-size: 12px;
    background-color: -internal-light-dark(rgb(232, 240, 254),
            rgba(70, 90, 126, 0.4)) !important;
    color: -internal-light-dark(black, white) !important;
}

.gg-mail {
    overflow: hidden;
    transform: scale(var(--ggs, 1));
    position: absolute;
    width: 19px;
    top: auto;
    left: 0px;
    border-radius: 2px;
}

.gg-lock {
    box-sizing: border-box;
    position: absolute;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 11px;
    border: 2px solid;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom: transparent;
    margin-top: -12px;
    top: auto;
    left: 5px;
}

.gg-profile {
    overflow: hidden;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
    position: absolute;
    top: auto;
    left: 0px;
}


.gg-heart {
    box-sizing: border-box;
    position: absolute;
    display: block;
    top: auto;
    left: 7px;
}

select {
    width: 100%;
    border: none;
    padding: 4px 4px 4px 30px;
    height: 50px;
    border-radius: 10px;
    font-size: 15px;
    background-color: -internal-light-dark(rgb(232, 240, 254),
            rgba(70, 90, 126, 0.4)) !important;
    color: -internal-light-dark(black, white) !important;
}

.btn {
    width: 30%;
    padding: 10px;
    border: 0ch;
    border-radius: 30px;
    cursor: pointer;
}
</style>