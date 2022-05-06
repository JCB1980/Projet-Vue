<template>
  <div>

    <span>Prix total du bien : {{ lmnp.valeurAmortissable }}</span>

  </div>

</template>

<script setup lang="ts">

import { useLmnpService } from '../services/LMNPService';

const { lmnp } = useLmnpService();

</script>

