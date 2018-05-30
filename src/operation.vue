<template>
  <div id="app">
    <div  class="uk-background-muted">
      <div class="uk-container uk-container-small opt">Opérations</div>
        <div class="uk-container uk-container-small cont">
            <div class="champ champ2">
                <div class="imm"><img class="imma" src="./assets/money.png" ></div>
                <div class="msgParent"><strong> Retrait par chèque personnel<br/></strong>
                  <b>200.000F</b>
                   <div class="traiter2"> TRAITER</div></div>
                 
            </div>
        </div>
        <app-container></app-container>
        <app-container></app-container>
        <app-container></app-container>
        <app-container></app-container>
        <app-container></app-container>
        <app-container></app-container>
        <app-container></app-container>
        <app-container></app-container>

    </div>
<div class="justecolor"></div>
<triangle></triangle>

  <div class="appInfo">
  <app-information></app-information>
    </div>
<router-view></router-view>

  </div>
  
</template>

<script>

import container from './container.vue';
import triangle from './triangle.vue';
import information from './information2.vue';
import button from './button_op.vue';


    export default {
        components:{
            'app-container': container,
            'triangle': triangle,
            'app-information': information,
            'app-button': button
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli');

#app2{
  display: flex;
  height: 100%;
}

.uk-background-muted{
  background-color: rgb(179, 179, 179);  
  color: black;
  width: 25%;
  height: 100%;
}

.justecolor{
  background-color: rgb(223, 5, 4);
  width: 10px;
}
.uk-container-small{
padding: 5px;
}

.cont{
padding-top: 5px;
padding-bottom: 5px;
padding-left: 0px;
padding-right: 0px;
}


.opt{
  padding-top: 15px;
}





.imm{
  margin: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  float:left;
  background-color: white;
}

.imma{
   margin: 5px;
  width: 30px;
  height: 30px;
 
}

.champ{
  background-color: rgb(230, 230, 230);
  height: 60px;
  font-size: 14px;
  padding: 5px;
}

.appInfo{
  width: 70%;
  height: 100%;
  padding-left: 20px; 
  padding-right: 20px;
 padding-top: 20px;
  padding-bottom: 20px;
}

.traiter2{
  float: right ;
  padding-left: 20px; 
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
  margin-right: 20px;
    border-radius: 20px;
    width: 25%;
    text-align: center;

  font-size: 12px;
    color: white;
    background-color: rgb(158, 4, 4);
}
.traiter:hover{
  background-color: rgb(167, 1, 1);
  color: white;
  border: 2px solid rgb(223, 5, 4);

}
.champ2{
  background-color: rgb(223, 5, 4);
  color:white;
  height: 70px;
  padding-top: 20px;
  padding-left: 15px;
  font-size: 15px;
}
.msgParent{
  padding-left: 10px;
}

b{
  font-size: 16px;
}


</style>
