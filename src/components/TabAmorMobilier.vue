<template>
  <div>

    <span>Mon tableau d'amortissement  : {{ lmnp.amortissementMobilier }}</span>

  </div>

</template>

<script setup lang="ts">

import { useLmnpService } from '../services/LMNPService2';

const { lmnp } = useLmnpService();

</script>