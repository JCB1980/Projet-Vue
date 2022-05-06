<template>

  <div>Résultat </div>

  <span>Prix du bien : {{lmnp.valeurAmortissable}}</span>

</template>

<script setup lang="ts">

import { useLmnpService } from '../LMNPService';

const { lmnp } = useLmnpService();

</script>

