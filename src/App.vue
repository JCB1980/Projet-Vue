<template>


<Formulaire/>
<ValeursAmortissables/>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Formulaire from './components/Formulaire.vue';
import ValeursAmortissables from './components/ValeursAmortissables.vue';


export default defineComponent({
    name: "App",
    components: { Formulaire, ValeursAmortissables}
});
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'font-awesome/css/font-awesome.min.css';

h1{
  
  color:green;
  font-size : 20px
}


</style>
