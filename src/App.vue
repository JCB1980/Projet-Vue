<template>


<Formulaire2/>
<ValeursAmortissables2/>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Formulaire2 from './components/Formulaire2.vue';
import ValeursAmortissables2 from './components/ValeursAmortissables2.vue';


export default defineComponent({
    name: "App",
    components: { Formulaire2, ValeursAmortissables2}
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
