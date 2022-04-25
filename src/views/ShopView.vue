<template>
   <section class="product-list ">
      <div>
        <h1 class="align-center">
          Products
        </h1>
      </div>
      
    

      <div class="product-container">
        
        
     
<!--       First Product -->

      <div class="card">
        <div class="content">
          
          <div class="new">
            <img src="https://cdn.glitch.com/9cf36649-4cc8-43b3-936f-9f591ad3040c%2Fnew.png?v=1586849341161">
            
          </div>
          
          
       
        <div class="title">Tajine 13dt</div>
        <div class="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMemPKlGV77toUiDTjWXM4sCM-7XLzDyHw3Q&usqp=CAU"
          />
        </div>
        <div class="text">
          
        </div>
         </div>
         <router-link to="/shopC1">
          <button  class="buy-button details">
            Buy Now
          </button>
         </router-link>
     
      </div>

      <!-- Second Product -->

      <div class="card">
        <div class="title">Vase artisanal 22dt</div>
        <div class="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcdMtnhJ8cYjeEZmIjLSpTFmii25d5ALCOQ&usqp=CAU"
          />
        </div>
        <div class="text">
          
        </div>
       <router-link to="/shopC2">
           <button  class="buy-button details">
            Buy Now
          </button>
       </router-link>
     
      </div>
      
<!--       Third Product -->
      <div class="card">
        <div class="title">Poubelle 12dt</div>
        <div class="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVTM_svGAyByY1mIMotmI5R6VCeYu8tJa9A&usqp=CAU"
          />
        </div>
        <div class="text">
          
        </div>
   <router-link to="/shopC3">
           <button  class="buy-button details">
            Buy Now
          </button>
   </router-link>
      </div>
      
      
<!--       Fourth Product -->
      <div class="card">
        <div class="title">mini bol 6dt/pièce</div>
        <div class="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTle2fGiFDofYRDb23krYWfs13RRQ2y0zKMA&usqp=CAU"
          />
        </div>
        <div class="text">
          
        </div>
   <router-link to="/shopC4">
           <button  class="buy-button">
            Buy Now
          </button>
   </router-link>
      </div>
         </div>
      
      
      
    </section>
</template>
    
<script>
export default {

}
</script>

<style>
     .product-list {

  padding: 3em;
   background-image: url(../assets/jj.jpg);
   background-repeat:no-repeat ;
    overflow: hidden;
    background-size:cover ;
}

.product-list .card {
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  box-shadow: 0px 10px 5px #b2bec3;
  text-align: center;
  font-family: "Poppins";
}

.card .title {
  font-size: 18px;
  font-weight: bold;
}

.card img {
  max-width: 100%;
  border-radius: 5px;
}

.card .text {
  text-align: left;
  margin-left: 2em;
  margin-bottom: 0.5em;
  font-size: 12px;
}

.buy-button {
  background-color: #f9ca24;
  border: none;
  padding: 1em;
  border-radius: 5px;
  font-weight: bold;
  width: 100%;
}
.buy-button:hover {
  box-shadow: 0px 5px 5px #b2bec3;
  color: #eb4d4b;
}

.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
}

.align-center {
  text-align: center;
}
.nav-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 3em;
}

.sub-menu {
  max-width: 20%;
  padding: 1em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px #8395a7;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: 1s ease;
}

.sub-menu a:hover {
  color: #8395a7;
}

nav ul li:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  transition: 1s ease;
}

.card img {
  transition: 0.5s ease;
}

.card:hover img {
  transform: scale(1.1);
  transition: 1s ease;
}

.card .details {
  position: relative;
  top: 50px;
  transition: 2s ease;
  visibility: hidden;
  opacity: 0;
}

.card:hover .details {
  opacity: 1;
  visibility: visible;
  top: 0px;
  transition: 2s ease;
}

.text,
.title {
  opacitiy: 1;
  transition: 0.5s ease;
}

.card:hover .text,
.card:hover .title {
  opacity: 0;
  transition: 1 ease;
}

.new {
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 5;
  animation: pulse 2s ease-in infinite;
}

@keyframes pulse {
  0% {
    transform: scale (1);
  }

  50% {
    transform: rotate(45deg) scale(1.3);
    
  }
}

.searchbar {
  background: #fff;
  height : 40px;
  margin: 1em auto;
  border-radius: 10px;
  border: 2px solid #e4e4e4;
  display: flex;
  padding: 0.3em;
  width: 10%;
  transition: width 0.5s ease-in;
  
}

.search-icon {
  width: 100%;
  background : url("https://cdn.glitch.com/9cf36649-4cc8-43b3-936f-9f591ad3040c%2Fmagnifying-glass.svg?v=1586850286628") no-repeat center center;
  background-size: contain;
  margin: 0.5em;
  opacity: 0.5;
  
}

.search-input {
  width: 90%;
  margin: 0.5em;
  border: none;
  color: #b4b4b4;
  font-family: 'Poppins';
  display: none;

}

.searchbar:hover {
  width: 60%;
  box-shadow: 0 2px 15px #b4b4b4;
  transition: width 1s ease-in;
}

.searchbar:hover .search-input {
  display: flex;
  transition: 1s ease-in;
}
.searchbar:hover .search-icon {
  opacity: 1;
  width: 10%;
  transition: width 1s ease-in;
}

.search-input:focus {
  outline: none;
}
</style>