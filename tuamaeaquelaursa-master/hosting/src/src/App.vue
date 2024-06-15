<template>
  <div :class="['global-app', current_page]">
    <global-header />
    <router-view class="global-content" />
    <global-footer />
  </div>
</template>

<script>
  // import 'normalize.css';

  import { mapState } from 'vuex';

  import GlobalHeader from '@/components/global/GlobalHeader';
  import GlobalFooter from '@/components/global/GlobalFooter';

  export default {
    name: 'App',
    components: { GlobalHeader, GlobalFooter },
    computed: mapState([ 'current_page' ]),
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/_color.scss';

  .global-app {
    font-family: Lato,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display: flex;
    flex-flow: column;
    min-height: 100vh;

    background-color: $app-background;
  }

  .global-content {
    flex: 1 1 auto;
    background-color: $app-foreground;
  }

  .global-header,
  .global-footer {
    flex: 0 1 auto;
    text-align: center;
  }
</style>
