<template>

    <div class="container">
        <div class="form-group">

            <label for="A1">Valeur du bien immobilier :</label>
            <input id="A1" type="number" v-model.number="lmnp.valeurImmobilisable.prixDuBien" required
                class="form-control-sm">

            <br>
            <label for="A3">Honoraires agence :</label>
            <input id="A3" type="number" v-model.number="lmnp.valeurImmobilisable.honorairesAgence"
                class="form-control-sm">

            <br>
            <label for="A4">Frais de notaire :</label>
            <input id="A4" type="number" v-model.number="lmnp.valeurImmobilisable.fraisNotaire" class="form-control-sm">

            <br>
            <label for="A5">Frais bancaire:</label>
            <input id="A5" type="number" v-model.number="lmnp.valeurImmobilisable.fraisBancaire"
                class="form-control-sm">

            <br>
            <label for="A6">Valeur du mobilier :</label>
            <input id="A6" type="number" v-model.number="lmnp.valeurImmobilisable.valeurMobilier" required
                class="form-control-sm" /><br>

        </div>

    </div>

</template>



<script setup lang="ts">

import { useLmnpService } from '../services/LMNPService';

const { lmnp } = useLmnpService();

</script>



<style>
label {
    display: block;
    width: 350px;
    float: left;
}
</style>