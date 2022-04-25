<template>
<body>
  <div class="standard">
    <div class="header"><h1>Register</h1></div>
    <div class="main">
       <form @submit.prevent='Register'>
           <input type="text" placeholder="Email" v-model="email"/>
           <br/>
           <input type="password" placeholder="password" v-model="password"/>
            <br/>
           <input type="submit" value="Register" id="button">
           <p>Have  an account <router-link to ="/login">login here </router-link> </p>
       </form>
       </div>
  </div>
</body>
</template>

<script>
import {ref} from 'vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export default {
  setup(){
     const email = ref("")
     const password = ref("")
     const Register=()=>{
       firebase
       .auth()
       .createUserWithEmailAndPassword(email.value,password.value)
       .then(user => alert(user))
       .catch(err=>alert(err.message))
     }
     return{
       Register,
       email,
       password
     }

  }

}
</script>

<style scoped>
body{
    font-family: sans-serif;
    background-image: url(../assets/jj.jpg);
    background-repeat:no-repeat ;
    overflow: hidden;
    background-size:cover ;
    margin:0;
    padding:0;
    }
.standard{
    width: 380px;
    margin: 10% auto;
    border-radius: 25px;
    background-color: rgba(0,0,0,0.1);
    text-align: center;
    box-shadow: 0 0 20px #333;
}
.header{
    text-align: center;
    padding-top: 75px;
}
.header h1{
    color:#333;
    font-size: 45px;
    margin-bottom: 80px;
}
.main{
    text-align: center;
}

.main input,button{
    width: 300px;
    height:40px;
    border: none;
    outline:none;
    padding-left: 40px;
    box-sizing: border-box;
    font-size: 15px;
    color: #333;
    margin-bottom: 40px;
}
#button{
    padding-left: 0;
    background-color: #009688;
    letter-spacing: 1px;
    text-align: center;
    font-weight: bold;
}
#button:hover 
{
    box-shadow: 2px 2px 5px #555;
}
.main input:hover{
 box-shadow: 2px 2px 5px #555;
 background-color: #ddd;
}
#pp{
    transform: translateY(-60%)
}
#rr{
    color:black;
    font-weight: bold;
}

</style>