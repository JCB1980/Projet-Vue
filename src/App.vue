<template>

<h1>
  BONJOUR
</h1>
<Navbar/> 
<Formulaire2/>
<ChargesExternes/>
<Impots/>
<TabAmorMobilier/>





</template>


<script lang="ts">

import { defineComponent } from 'vue';




import Navbar from './components/Navbar.vue';
import Formulaire2 from './components/Formulaire2.vue';
import ChargesExternes  from './components/ChargesExternes.vue';
import Impots from './components/Impots.vue';
import TabAmorMobilier from './components/TabAmorMobilier.vue'





export default defineComponent({
    name: "App",

    components: { Formulaire2,  Navbar, ChargesExternes, Impots, TabAmorMobilier}

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
