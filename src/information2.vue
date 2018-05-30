<template>
    <div id="opp">
            <div class="utilisateur">
                <img class="imma" src="./assets/logo.png" >
                John Doe
            </div>
        
            <div class="h3">Opération en cours</div>
            <div class="h2">Retrait par chèque personnel </div> <p></p>
            <div class="h3">Détails de la transaction</div><br/>
            <div class="gras"><b>Montant</b></div>

<div class="montant">
        <input class="case" type="text" placeholder="FCFA">
        <!--<span uk-icon="pencil"></span>-->
        <img class="edit" src="./assets/edit.svg" >
</div>
<p></p>

<div class="uk-child-width-expand@s uk-text-center" uk-grid uk-height-match="target: > div > .uk-card">
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <div class="gras"><b>Recevant</b></div><br/>
                <div><b>Nom </b> John Doe</div><hr>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body"><div class="gras "><b>Titulaire</b></div><br/>
                <div><b>Nom </b> John Doe</div><hr>
                <div><b>Nº de compte</b> 4512 5869 6697 6321</div><hr>
              </div>
            </div>
</div>
<p></p>
           
       <app-button></app-button> 
      
       </div>
      
</template>

<script>
</script>

<style>
#opp{
    color: black;
}
.utilisateur{
    overflow: auto;
    padding-left: 70%;
}

.h2{
  font-size: 40px;
  color: rgb(223, 5, 4);
}

.h3{
  font-size: 20px;
}

.gras{
  font-size: 20px;
}

.montant{
    height: 50px;
}

.case {
    outline: 0;
    background: white;
    border: 1px solid #3c3c3c;
    margin: 0 0 15px;
    padding: 12px;
    box-sizing: border-box;
    font-size: 14px;
    width: 45%;
    float: left;
       
}
span{
    background-color: black;
}

hr{
  margin-top: 0em;
color: black;
background-color: black;
height: 1px;

}



.uk-card-body{
    text-align: left;
    padding-top: 5px;
    color: black;
    padding-left: 1%;
}
.edit{
    padding:10px;    
height: 42px;
width:43px;
 background-color: rgb(223, 5, 4);
}

</style>
