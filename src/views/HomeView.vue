<template>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div class="container">
        <div class="navbar">
          <nav>
            <ul>
              <li><button type="button" @click="Logout">LOGOUT</button></li>
            </ul>
          </nav>
        </div>
        <div class="row p-5">
          <div class="col">
            <h1>Welcome {{ name }}!</h1>
            <p>Your past models</p>
            <router-link to="/model">
            <button type="button" >Create your model</button>
            </router-link>
            <router-link to="/shop">
            <button type="button" >Go to store</button>
            </router-link>
          </div>
          <div class="col">
            <div class="card card1">
              <h4>price:15DT</h4>
            </div>
            <div class="card card2">
              <h4>price:8DT per piece</h4>
            </div>
            <div class="card card3">
              <h4>price:20DT</h4>
            </div>
            <div class="card card4">
              <h4>price:18DT</h4>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  setup() {
    const name = ref("");
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("signed out "))
        .catch((err) => alert(err.message));
    };
    return {
      name,
      Logout,
    };
  },
};
</script>
<style scoped>
html {
  background: url(../assets/jj.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
* {
  margin: 0%;
  padding: 0%;
  font-family: "Roboto", sans-serif;
}
body {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/jj.jpg);
  background-position: center;
  background-size: cover;
}
.container {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/jj.jpg);
  background-position: center;

  background-size: cover;

  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
}
.navbar {
  height: 12%;
  display: flex;
  align-items: center;
}
nav {
  flex: 1;
  text-align: right;
}
nav ul li {
  list-style: none;
  display: inline-block;
  margin-left: 60px;
}
.row {
  display: flex;
  height: 88%;
  align-items: center;
}
.col {
  flex-basis: 50%;
}
h1 {
  color: #fff;
  font-size: 100px;
}
p {
  color: #fff;
  font-size: 11px;
  line-height: 16px;
}
button {
  width: 180px;
  color: #000;
  font-size: 12px;
  padding: 12px 0;
  background: #fff;
  border: 0;
  border-radius: 20px;
  outline: none;
  margin-top: 30px;
}
.card {
  width: 200px;
  height: 230px;
  display: inline-block;
  border-radius: 10px;
  padding: 15px 25px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 10px 15px;
  background-image: url(../assets/d.jpg);
  background-position: center;
  background-size: cover;
  transition: transform 0.5s;
}
.card1 {
  background-image: url(../assets/d.jpg);
}
.card2 {
  background-image: url(../assets/g.webp);
}
.card3 {
  background-image: url(../assets/images.jpg);
}
.card4 {
  background-image: url(../assets/m.jpg);
}
h4 {
  color: white;
}
.card:hover {
  transform: translateY(-20px);
}
</style>
