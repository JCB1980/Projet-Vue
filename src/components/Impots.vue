<template>
  <div>

    <span>Total Impots et taxes  : {{ lmnp.totalImots }}</span>

  </div>

</template>

<script setup lang="ts">

import { useLmnpService } from '../services/LMNPService2';

const { lmnp } = useLmnpService();

</script>