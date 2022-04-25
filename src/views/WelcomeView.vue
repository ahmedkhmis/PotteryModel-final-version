<template>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Présentation Bootstrap</title>
</head>
<body>
    <div class="banner">
         <div class="contenu">
             <h1>POTTERY App</h1>
             <p>Design your own model and get a price prediction of it</p>
             <div>
                 <button type="button" @click="redirect()"><span></span>Get started</button>
             </div>
         </div>
    </div>
</body>
</html>
</template>

<script>
export default {
     methods:{
         redirect(){
             this.$router.push('/login')
         }
     }

}
</script>

<style scoped>

*{
    margin: 0;
    padding:0;
    font-family:sans-serif;
} 
.banner{
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url(../assets/jj.jpg);
    background-size: cover;
    background-position: center;
}
.navbar{
    width: 85%;
    margin: auto;
    padding: 35px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
}
.navbar ul li{
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    position: relative;
}
.navbar ul li a{
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-size: small;
}
.navbar ul li a::after{
    content: '';
    height: 3px;
    width: 0;
    background: #009688;
    position: absolute;
    left: 0;
    bottom:-10px;
    transition: 0.5s;
}
.navbar ul li a:hover::after{
    width: 100%;
}
.contenu{
    width: 100%;
    position: absolute;
    top:50%;
    transform: translateY(-60%);
    text-align: center;
    color: #fff;
}
.contenu h1{
    font-size:50px;
    margin-top: 80px;
}
.contenu p{
    margin: 20px auto;
    font-weight: 100;
    line-height: 25px;
}
button{
    width: 200px ;
    padding: 15px 0;
    text-align: center;
    margin: 20px 10px;
    border-radius: 25px;
    font-weight: bold;
    border: 2px solid #009688;
    background: transparent;
    color:#fff;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
span{
    background: #009688;
    height: 100%;
    width:0;
    border-radius: 25px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: 0.5ms;
}
button:hover span{
    width: 100%;
}
button:hover{
    border: none;
}
body{
    scroll-behavior: smooth;
}

</style>