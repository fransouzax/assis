<template>
  <div class="bear">
    <div class="bear-ear-left"></div>
    <div class="bear-ear-right"></div>
    <div class="bear-body"></div>
    <div class="bear-eye-left"></div>
    <div class="bear-eye-right"></div>
    <div class="bear-nose"></div>
    <div class="bear-mouth"></div>
    <div class="bear-hand"></div>
    <div class="bear-frame"></div>
  </div>
</template>

<script>
  export default {
    name: 'GlobalBear',
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/_color.scss';

  $bear-border-shape: 10px solid $black;

  .bear {
    position: relative;
    background-color: $background;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    overflow: hidden;
    mask-image: radial-gradient(white, black);
    backface-visibility: hidden;

    &-body {
      border: $bear-border-shape;
      background-color: $dark-brown;
      width: 176px;
      height: 300px;
      position: absolute;
      top: 150px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 110px;
    }
    &-ear-left,
    &-ear-right {
      border:$bear-border-shape;
      position: absolute;
      width: 42px;
      height: 42px;
      background-color: $light-brown;
      border-radius: 100%;
      top: 58px;
    }
    &-ear-left {
      left: 50px;
    }
    &-ear-right {
      right: 50px;
      animation: wiggle 2s ease-in-out;
      animation-iteration-count: infinite;
      transform-origin: bottom left;
    }
    &-eye-left,
    &-eye-right {
      position: absolute;
      width: 22px;
      height: 22px;
      background-color: $black;
      border-radius: 100%;
      top: 135px;
      animation: blink 2s ease-in-out forwards;
      animation-iteration-count: infinite;
    }
    &-eye-left {
      left: 96px;
    }
    &-eye-right {
      right: 96px;
    }

    &-nose {
      position: absolute;
      width: 100px;
      height: 80px;
      background-color: $light-brown;
      border-radius: 100%;
      top: 150px;
      left: 0px;
      right: 0px;
      margin: auto;

      &::before {
        content: '';
        background-color: $black;
        width: 36px;
        height: 30px;
        display: block;
        border-radius: 100%;
        left: 0;
        right: 0;
        margin: auto;
        margin-top: 8px;
      }
    }
    &-mouth {
      width: 55px;
      height: 15px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      border: 10px solid $black;
      border-top: 0;
      position: absolute;
      top: 192px;
      left: 0;
      right: 0;
      margin: auto;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;

      &::before {
        content: '';
        width: 10px;
        height: 22px;
        background-color: $black;
        display: block;
        left: 0;
        right: 0;
        margin: auto;
        margin-top: -10px;
      }
    }

    &-hand {
      position: absolute;
      height: 150px;
      width: 51px;
      top: 150px;
      left: 0;

      border: $bear-border-shape;
      border-radius: 100px;

      background-color: #775D46;
      background-image:
        radial-gradient(circle at 10px 25px, $light-brown 4px, transparent 4px ),
        radial-gradient(circle at 20px 18px, $light-brown 4px, transparent 4px ),
        radial-gradient(circle at 32px 18px, $light-brown 4px, transparent 4px ),
        radial-gradient(circle at 42px 25px, $light-brown 4px, transparent 4px ),
        radial-gradient(circle at 26px 40px, $light-brown 12px, transparent 12px );

      animation: move .6s ease-in-out forwards;
      animation-iteration-count: infinite;
    }

    &-frame {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      border: $bear-border-shape;
      border-radius: 100%;
    }
  }

  @keyframes move {
      0% { transform: translate3d( 0, 20px, 0 ); }
     35% { transform: translate3d( 0,  0px, 0 ); }
    100% { transform: translate3d( 0, 20px, 0 ); }
  }

  @keyframes blink {
      0% { transform: scaleY(1.0); }
     10% { transform: scaleY(0.2); }
     30% { transform: scaleY(1.0); }
    100% { transform: scaleY(1.0); }
  }

  @keyframes wiggle {
     0% { transform: rotate(  0deg ); }
    10% { transform: rotate( 12deg ); }
    20% { transform: rotate(  0deg ); }
    30% { transform: rotate( 12deg ); }
    50% { transform: rotate(  0deg ); }
  }

</style>
