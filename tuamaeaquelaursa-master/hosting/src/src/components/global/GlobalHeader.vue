<template>
  <header id="header" class="global-header">
    <router-link class="global-header-back-button" v-if="$route.params.email" :to="'/' + ($route.params.message ? $route.params.email : '')"><img src="@/assets/chevron-left.svg" style="display:block;"></router-link>

    <GlobalBear class="global-header-bear" />

    <h1 class="global-header-h1">Tua mãe, aquela ursa</h1>
    <h3 class="global-header-h3">Crie um email descartável {{_hosting.suffix.replace(/\.com.*/, '')}}</h3>

    <GlobalEmailForm class="global-header-email-form" />
  </header>
</template>

<script>
  import { mapState } from 'vuex';
  import GlobalBear from '@/components/global/GlobalBear.vue';
  import GlobalEmailForm from '@/components/global/GlobalEmailForm.vue';

  export default {
    name: 'GlobalHeader',
    components: { GlobalBear, GlobalEmailForm },
    computed: mapState([ 'current_page', '_hosting' ]),
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/_color.scss';
  $duration: 0.3s;

  .global-header {
    padding: 1rem 1rem 0;
    transition: $duration padding;
    overflow: hidden;
    position: relative;

    &-back-button {
      position: absolute;
      margin-top: -3.25rem;
      top: 50%;
      left: 1rem;
      width: 2rem;
      opacity: 0;
      animation: fadeIn .5s ease-in-out forwards;
      z-index: 3;
    }

    &-bear {
      transition:
        $duration margin-top,
        $duration margin-bottom,
        $duration transform;
      transform-origin: bottom center;
      margin-left: auto;
      margin-right: auto;
      z-index: 1;
    }

    &-h1, &-h3 {
      overflow: hidden;
      transition:
        $duration max-height,
        $duration margin;
      max-height: 100px;
      margin: 0;
    }
    &-h1 {
      font-weight: 900;
      font-size: 43px;
      color: $black;
    }
    &-h3 {
      color: $bright-text;
      margin-bottom: 30px;
      font-size: 19px;
    }

    &-email-form {
      position: relative;
      z-index: 2;
    }
  }

  @media only screen and (max-width:1000px) {
    .global-header {
      &-h1 { font-size: 2.00em; }
      &-h3 { font-size: 1.25em; }
    }
  }

  .MessageList,
  .MessageDetail {
    .global-header {
      &-bear {
        transform: scale(.5);
        margin-top: -160px;
        margin-bottom: -40px;
      }

      &-h1, &-h3 {
        max-height: 0px;
        margin: 0px;
      }
    }
  }

  @keyframes fadeIn {
      0% { opacity: 0.0; }
    100% { opacity: 0.7; }
  }
</style>
