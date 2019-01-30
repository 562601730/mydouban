<template>
  <div id="app">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/commons/Tabbar";
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>

</style>
