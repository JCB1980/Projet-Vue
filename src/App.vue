<template>

<Navbar/> 
<Formulaire2/>
<ChargesExternes/>


</template>


<script lang="ts">

import { defineComponent } from 'vue';



import Navbar from './components/Navbar.vue';
import Formulaire2 from './components/Formulaire2.vue';
import ChargesExternes  from './components/ChargesExternes.vue';


export default defineComponent({
    name: "App",
    components: { Formulaire2,  Navbar, ChargesExternes}
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
