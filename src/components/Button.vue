<template>
    <div>
   
  <button @click="increment">Compteur</button>
{{n}}
</div>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Button',

  setup(){
    const n = ref(0);
    const increment= function(){
        n.value++
    }
    return{n,increment};
  }
});
</script>
<style>
</style>