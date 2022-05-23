<template>

    <div class="container">
        <div class="form-group">


            <label for="A1">Frais d'administration :</label>
            <input id="A1" type="number" v-model.number="lmnp.chargesExternes.fraisAdministration"
                class="form-control-sm">
            <br>
            <label for="A1">Frais Local :</label>
            <input id="A1" type="number" v-model.number= "lmnp.chargesExternes.fraisLocal" 
                class="form-control-sm">
            <br>
            <label for="A1">Indemnités d'éviction :</label>
            <input id="A1" type="number" v-model.number= "lmnp.chargesExternes.indemnitésEviction" 
                class="form-control-sm">
            <br>
            <label for="A1">Charges Locatives :</label>
            <input id="A1" type="number" v-model.number= "lmnp.chargesExternes.chargesLocatives" 
                class="form-control-sm">
            <br>
            <label for="A1">Primes Assurances :</label>
            <input id="A1" type="number" v-model.number= "lmnp.chargesExternes.primesAssurances" 
                class="form-control-sm">
            <br>
            <label for="A1">Provisions pour charges de copropriété :</label>
            <input id="A1" type="number" v-model.number= "lmnp.chargesExternes.provisionsChargesCopro" 
                class="form-control-sm">
            <br>
            <label for="A6">Valeur du mobilier :</label>
            <input type="number" v-model.number="lmnp.mobilier"  required class="form-control-sm" id="A6"/><br>
             <label for="A13">Impôts</label>
      <input type="number" v-model.number="lmnp.impots" class="form-control-sm" id="A13"><br>

           
        </div>

    </div>

</template>



<script setup lang="ts">


import { useLmnpService } from '../services/LMNPService2';

const { lmnp } = useLmnpService();


</script>



<style>
label {
    display: block;
    width: 350px;
    float: left;
}
</style>