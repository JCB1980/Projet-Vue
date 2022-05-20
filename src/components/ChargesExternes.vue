<template>
  <div>

    <span>Total des charges externes de l'année  : {{ lmnp.totalChargesExternes }}</span>

  </div>

</template>

<script setup lang="ts">

import { useLmnpService } from '../services/LMNPService2';

const { lmnp } = useLmnpService();

</script>
