<template>
  <div id="login">
    
    <div class="login-page">
   <form class="form" id="form" @submit.prevent="login" action="secure.vue" method="post">
      <p v-if="$route.query.redirect">
      You need to login first.
    </p>
    <img class="logo"  width="180px" height="80px" src="../assets/logosogelibred.svg" />
     <p v-if="error" class="error">Identifiant ou mot de passe incorrect</p>
     <div class="input-container">    
        <div class="column" style="padding-down: 10px;"><img class="log" :src="require('../assets/login.svg')" fill="gray"  /></div>
                  <input v-model="identifiant" placeholder="Identifiant" name="identifiant">
                </div>
         <div class="input-container"> 
      <div class="column" > <img class="pass" :src="require('../assets/password.svg')"  /></div> 
                  <input v-model="pass" placeholder="Mot de passe" type="password" name="pass">
                </div> 
      
      <div class="button">
                    <div class="column"></div> 
                 <button type="button" v-on:click="login()"><b>Valider</b></button>
              </div>
     
      
       </form>
    </div>
    
  </div>
</template>

<script>

import auth from '../auth'

export default {
  data () {
    return {
      identifiant: '',
      pass: '',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.identifiant, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/operation')
        }
      })
    }
  }
}
</script>

<style>
@font-face {
  font-family: muli;
  src: url('https://fonts.googleapis.com/css?family=Muli');
}
@import url('https://fonts.googleapis.com/css?family=Butterfly+Kids');

#app 
.login-page {
    width: 450px;
    padding: 8% 0 0;
  align-items: center;
  margin-left: auto;
  margin-right: auto ;
  margin-bottom: auto ;
  margin-top: auto ;
  }
  

    .input-container, .button{
      display: flex;
      width: 100%;
      margin-bottom: 10px;
  }
  
  
  
      .column {
        width:10%;
        padding-left: 0px;
        padding-right: 10px;
        padding-top: 5px;
       
    }
    
  .form {
    width: 400px;
    padding: 8% 0 0;
    position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  padding-right: 40px;
  padding-left: 35px;
  padding-top: 20px;
  padding-bottom: 40px;
  text-align: center;
  box-shadow: 0 0 2px 0 #f0f0f0, 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  
  }
 
  
  .form input {
    outline: 0;
    background: white;
    width: 100%;
    border: 1px solid #9E9E9E;
    margin: 0 0 15px;
    padding: 12px;
    box-sizing: border-box;
    font-size: 16px;
    letter-spacing: 0.2px;
    font-family: 'Butterfly Kids', cursive;
}

 
  .form button {
   text-transform: uppercase;
    outline: 0;
    background: #df0504;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    letter-spacing: 0.2px;
    font-size: 17px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form button:hover,.form button:active,.form button:focus {
    background: rgb(238, 44, 44);}

    body {
      font-family: 'Butterfly Kids', cursive;
        background-color: #f2f2f2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
              
      }
  .pass{
    padding-bottom: 10px;
    height: 30px;
  }
  .log{
    padding-top: 2px;
    height: 28px;
  }
  .logo{
    padding-bottom: 10px;
      }
  
.error {
  color: red;
}
</style>