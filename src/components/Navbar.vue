<template>
<side-menu>
   <side-menu-item label="Home">
      <iron-icon icon="home" slot="icon"></iron-icon>
   </side-menu-item>
   <side-menu-item label="Accounts" href="/accounts"><iron-icon icon="account-circle" slot="icon"></iron-icon></side-menu-item>
   <side-menu-item label="Favorites" expanded>
      <iron-icon icon="favorite" slot="icon"></iron-icon>
      <side-menu-item label="Learn">
         <side-menu-item
            label="How to"
            href="/howto"
            target="_blank">        
         </side-menu-item>
      </side-menu-item>
      <side-menu-item
         label="Web Components"
         href="/webcomponents"
         target="_blank">
      </side-menu-item>
      <side-menu-item label="Guides" href="guides"></side-menu-item>
   </side-menu-item>
</side-menu>
</template>

<script lang="ts" type="module">

import { defineComponent, ref } from 'vue';
import '@maksu/side-menu/side-menu.js';
import '@maksu/side-menu/side-menu-item.js';
import {LitElement, html} from "lit-element";

export default defineComponent({
  name: 'Navbar',
  
});
  
</script>

     
<style>


</style>