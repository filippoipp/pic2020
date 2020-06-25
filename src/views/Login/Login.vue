<template>
  <div class="login-page">
    <div class="form">
      <form class="login-form">
        <input
          type="text"
          placeholder="Email"
          v-model="email"
          @click="$v.email.$reset()"
          :style="{
                border: $v.email.$error
                  ? '1px solid #cc1133'
                  : '1px solid #c1c3c7'
              }"
        />
        <p v-if="$v.email.$error">Campo obrigatório</p>
        <input
          type="password"
          placeholder="Senha"
          v-model="password"
          @click="$v.password.$reset()"
          :style="{
                border: $v.password.$error
                  ? '1px solid #cc1133'
                  : '1px solid #c1c3c7'
              }"
        />
        <p v-if="$v.password.$error">Campo obrigatório</p>
        <button @click.prevent="$v.$invalid ? $v.$touch() : handleLogin()" class="btn">Login</button>
        <p class="message">
          Não é registrado?
          <a href="#">Crie uma conta</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import users from '../../../users.json'

export default {
  name: "login",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    handleLogin() {
        const usuario = users.users.find(user => user.email == this.email);
        if(!usuario || usuario.password != this.password) {
            alert('Dados inválidos');
        } else {
            this.$router.push({ path: 'dashboard' })
        }
    }
  }
};
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form .btn {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  border: 0;
  text-decoration: none;
  padding: 10px 115px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8dc26f);
  background: -moz-linear-gradient(right, #76b852, #8dc26f);
  background: -o-linear-gradient(right, #76b852, #8dc26f);
  background: linear-gradient(to left, #76b852, #8dc26f);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.form p {
  color: #cc1133;
  font-size: 9pt;
  margin-top: -15px;
  margin-bottom: 15px;
  right: 10px;
  z-index: 10;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  border: none !important;
  transition: all 500ms ease-in-out;
  animation: feedback 500ms ease;
}
</style>
