import {  Link } from 'react-router-dom';
import React from "react";

function Julieta(){

  const url = "https://appbluemusicguil.herokuapp.com/Destaque"


   function buscarinf() {
     fetch(url)
     .then(resposta => {
       resposta.json()
       .then(obj => {
       mostrarinf(obj);
     })
   })
   .catch()
   }
   function mostrarinf(inf) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', inf.Destaque[6].capa);
       document.getElementById('capa7').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Romeu-julieta'> <div id="capa7" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Julieta;

   
 
   
   
           
    
 

 