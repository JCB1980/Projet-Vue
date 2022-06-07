<template>
  <div>
    <span>Valeur nette comptable année N : {{ lmnp.amortissementMobilier.vnc }}</span>
    <br />
    <span>Annuité N : {{ lmnp.amortissementMobilier.annuite }}</span>
    <br />
    <span>Date de début d'activité : {{ lmnp.dateDebut.startDate }}</span>
  </div>
</template>

<script setup lang="ts">

import { useLmnpService } from '../services/LMNPService2';

const { lmnp } = useLmnpService();

</script>
