<template>
  <Formulaire/>
    <div class="container mt-5">
        <h1>Mes charges externes</h1>
    </div>
   
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Formulaire from './components/Formulaire.vue';


export default defineComponent({
  name: 'ChargesExterne',
  components:{Formulaire}, 
  
});
</script>

<style> 

</style>
