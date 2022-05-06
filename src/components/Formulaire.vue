<template>
 
<div class="container">

<div>
  <title>Ma plateforme LMNP REEL</title>
  <h1 id="h1"> Date de début d'activité LMNP</h1>
    <p class="text-primary text-justify" > Vous devez renseigner la date à laquelle vous avez crée votre activité auprès de l'administration fiscale. Cette date peut différer du 1er jour de l'année. La plateforme calculera au prorata temporis les valeurs financières de la première année d'activité.
    
    <a href="https://bofip.impots.gouv.fr/" title="Plus d'informations sur le statut de LMNP"> BOFIP </a>
    </p>
    
  </div> 
      <div class="form-control-range">
      
      <label for="StartDate">Sélectionner votre date de début</label>
      <input id="start_date" type="date" required />
    </div>
  
  <p>
  <h1 id="h1">J'ajoute mes valeurs</h1>
  </p>

  <form>
      <div class="form-group">
      
      <label for="A1" >Valeur du bien immobilier :</label>
      <input type="number" v-model.number="valeursImmobilisable.prixDuBien" required class="form-control-sm" id="A1"><br>
      <label for="A2">Montant annuel du loyer HC :</label>
      <input type="number" v-model.number="valeursProduit.montantAnnuelLoyer" required class="form-control-sm" id="A2"/><br>
      <label for="A3">Honoraires agence :</label>
      <input type="number" v-model.number="valeursImmobilisable.honorairesAgence" class="form-control-sm" id="A3"> <br>
      <label for="A4">Frais de notaire :</label>
      <input type="number" v-model.number="valeursImmobilisable.fraisNotaire" class="form-control-sm" id="A4"><br>
      <label for="A5">Frais bancaire:</label>
      <input type="number" v-model.number="valeursImmobilisable.fraisBancaire" class="form-control-sm" id="A5"><br>
      <label for="A6">Valeur du mobilier :</label>
      <input type="number" v-model.number="valeursImmobilisable.valeurMobilier"  required class="form-control-sm" id="A6"/><br>
      <label for="A7">Montant de l'emprunt:</label>
      <input type="number" v-model.number="valeursAutres.montantEmprunt" class="form-control-sm" id="A7"><br>
      <label for="A8">Frais d'aministration et de gestion</label>
      <input type="number" v-model.number="valeursChargesExterne.fraisAministration" class="form-control-sm" id="A8"><br>
      <label for="A9">Frais par local :</label>
      <input type="number" v-model.number="valeursChargesExterne.fraisLocal" readonly class="form-control-sm" id="A9"><br>
      <label for="A10">Indemnités d'éviction et frais de relogement</label>
      <input type="number" v-model.number="valeursChargesExterne.indemnitesEviction" class="form-control-sm" id="A10"><br>
      <label for="A11">Dépenses de travaux</label>
      <input type="number" v-model.number="valeursChargesExterne.depensesTravaux" class="form-control-sm" id="A11"><br>
      <label for="A12"> Charges locatives</label>
      <input type="number" v-model.number="valeursChargesExterne.chargesLocatives" class="form-control-sm" id="A12"><br>
      <label for="A13">Impôts</label>
      <input type="number" v-model.number="valeursTaxes.impots" class="form-control-sm" id="A13"><br>
      <label for="A14">Primes d'assurances :</label>
      <input type="number" v-model.number="valeursChargesExterne.primesAssurances" class="form-control-sm" id="A14"><br>
      <label for="A15">Provisions pour charges de copropriété :</label>
      <input type="number" v-model.number="valeursChargesExterne.provisionsChargesCopropriete" class="form-control-sm" id="A15"><br>
      <label for="A16">Intérêts et frais d'emprunt :</label>
      <input type="number" v-model.number="valeursAutres.interetsEtFraisEmprunt" class="form-control-sm" id="A16"><br>
      <label for="A17"> Déductions spécifiques :</label>
      <input type="number" v-model.number="valeursChargesExterne.deductionsSpecifiques" class="form-control-sm" id="A17"><br>
    </div>

    <div @click="calculer">
        <button type="submit" class="btn btn-primary" >Valider</button>
    </div> 
           
  </form>

</div>

</template>
<script lang="ts">


import { defineComponent, ref } from 'vue';
import ValeursAmortissables from './ValeursAmortissables.vue';

export default defineComponent({
    name: "Formulaire",
    data() {
        let valeursImmobilisable = ref({
            prixDuBien: "",
            valeurMobilier: "",
            honorairesAgence: "",
            fraisNotaire: "",
            fraisBancaire: "",
        });

        const A=1;

        let valeursChargesExterne = ref({
            fraisAministration: "",
            fraisLocal: 20,
            indemnitesEviction: "",
            depensesTravaux: "",
            chargesLocatives: "",
            primesAssurances: "",
            provisionsChargesCopropriete: "",
            deductionsSpecifiques: ""
        });
        let valeursTaxes = ref({
            impots: "",
        });
        let valeursAutres = ref({
            montantEmprunt: "",
            interetsEtFraisEmprunt: "",
        });
        let valeursProduit = ref({
            montantAnnuelLoyer: "",
        });
        return { valeursImmobilisable, valeursChargesExterne, valeursTaxes, valeursAutres, valeursProduit, A };
    },
    methods: {
        calculer() {
            this.valeursImmobilisable.prixDuBien + this.valeursImmobilisable.fraisNotaire;
        },
    
    },
    components : {ValeursAmortissables}
    
});


</script>

<style>
label {
  display: block;
  width: 350px;
  float: left;
}


</style>