<template>
  <div>

    <span>Total immobilisation corporelle : {{ lmnp.valeurAmortissable }}</span>

  </div>

</template>

<script setup lang="ts">

import { useLmnpService } from '../services/LMNPService';

const { lmnp } = useLmnpService();

</script>
