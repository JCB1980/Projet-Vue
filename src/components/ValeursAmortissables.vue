<template>
    
<h1> Mes valeurs amortissables</h1>
  <p> L'ensemble des valeurs amortissables entrent dans la défiscalisation de vos revenus locatifs(BIC) par le jeu des dotations aux amortissements.</p>
  
  <table class="table table-striped table table-bordered table-sm" >
  
  <thead class="thead-light">
          <tr>
            <th>Catégorie </th>
            <th>Montant</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prix du bien</td>
            <td>{{}}</td>
            
          </tr>
          <tr>
            <td>Honoraires d'agence</td>
            <td>{{}}</td>
           
          </tr>
          <tr>
            <td>Frais de notaire</td>
            <td>{{}}</td>
            
          </tr>
          <tr>
            <td>Frais bancaire</td>
            <td>{{}}</td>
            
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>TOTAL</td>
            <td>{{total}}</td>
            
          </tr>
        </tfoot>
  </table>
                
</template>

<script lang="ts">
import { computed,defineComponent,reactive,toRefs } from "vue";
import {Formulaire} from './Formulaire.vue'



export default defineComponent({
    name: "ValeursAmortissables",
    setup(){
      const valeurs = reactive({
        val1: 10,
        val2 : 20
      });
      const total = valeurs.val1+valeurs.val2;
      

      return {total};
    }
    
    
    
})

</script>

