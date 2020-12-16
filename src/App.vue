<template>
  <v-app id="inspire">
    <router-view />
  </v-app>
</template>
<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import '@/styles/Variables.scss';
@import '@/styles/Base.scss';

#inspire {
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>
