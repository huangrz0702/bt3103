<template>
<link href='https://unpkg.com/css.gg@2.0.0/icons/css/mail.css' rel='stylesheet'>
<link href='https://unpkg.com/css.gg@2.0.0/icons/css/lock.css' rel='stylesheet'>
<main class="Container">
    <div>
      <section class="form">
        <form class="login" @submit.prevent="login">
          <p class="register">
            Don't have an account?
            <router-link class="router-link" to="/Register"
              >Register</router-link
            >
          </p>
          <h2>Login</h2>
          <div class="input">
            <i class="gg-mail"></i>
            <input
              type="email"
              placeholder="Email"
              v-model="login_form.email"
              required
            />
          </div>

          <div class="input">
            <i class="gg-lock"></i>
            <input
              type="password"
              placeholder="Password"
              v-model="login_form.password"
              required
            />
          </div>

          <input class="btn" type="submit" value="Log in" />
        </form>
      </section>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";
import "firebase/compat/auth";

export default {
  setup() {
    const login_form = ref({});
    return {
      login_form,
    };
  },

  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(
          auth,
          this.login_form.email,
          this.login_form.password
        ).then(() => {
          alert("Log in successfully!");
        });
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }

      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.Container {
  padding: 10vh;
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

.register {
  font-size: 13px;
  margin-bottom: 30px;
}

.form {
  float:right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 85vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}

.form .login {
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

p {
  font-size: 20;
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
  font-size: 15px;
}

.gg-mail {
    overflow: hidden;
    transform: scale(var(--ggs,1));
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
    transform: scale(var(--ggs,1));
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



.btn {
  width: 30%;
  padding: 10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
}
</style>
