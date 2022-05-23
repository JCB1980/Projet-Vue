<template>
  <div>

<<<<<<< HEAD
    <span>Total immobilisation corporelle : {{ lmnp.valeurAmortissable }}</span>
=======
    <span>Prix total du bien : {{ lmnp.valeurAmortissable }}</span>
>>>>>>> 2ed989d545862893acb4b4d71ebf05c67aa121f7

  </div>

</template>

<script setup lang="ts">

import { useLmnpService } from '../services/LMNPService';

const { lmnp } = useLmnpService();

</script>
<<<<<<< HEAD
=======

>>>>>>> 2ed989d545862893acb4b4d71ebf05c67aa121f7
