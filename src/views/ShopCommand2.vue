<template>
  <body>
  <div class="standard">
    <div class="header"><h1>Purchase</h1></div>
    <div class="main">
       <form ref="form" @submit.prevent='sendEmail'>
            <input type="text" placeholder="e-mail" v-model="email" name="mail"/>
            <br/>
           <input type="text" placeholder="Product" v-model="product" name="prod"/>
           <br/>
           <input type="number" placeholder="quantity" v-model="quantity" name="quant"/>
            <br/>
           <input type="number" placeholder="Total price" v-model="total" name="tot"/>
           <br/>
           <input type="submit" value="pass command" id="button">
       </form>
       </div>
  </div>
</body>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
    data(){
        return{
            product:'vase artisanale',
            quantity:0,
        }
    },
    computed:{
        total(){
            return 22*this.quantity
        }
    },
    methods: {
    sendEmail() {
       emailjs.sendForm('service_1yw1ba5', 'template_q58fpz3', this.$refs.form, '9him34PyDxfotMEXa')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            alert('commende passé');
        }, (error) => {
            console.log('FAILED...', error.text);
        });
       
    }
  }

}
</script>

<style>
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