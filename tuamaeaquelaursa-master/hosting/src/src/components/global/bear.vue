<template>
  <div class="bear-container">
    <div class="bear"></div>
    <div class="ear-left"></div>
    <div class="ear-right"></div>
    <div class="eye-left"></div>
    <div class="eye-right"></div>
    <div class="nose"></div>
    <div class="mouth"></div>
    <div class="hand"></div>
  </div>
</template>

<script>
  export default {
    name: 'bear',
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/_color.scss';

  $bear-border-shape: 10px solid $bear-shape;

  .bear-container {
    position: absolute;
    margin-left: -150px;
    left: 50%;
    background: $bear-background;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    overflow: hidden;
    border:$bear-border-shape;
  }
  .bear {
    position: absolute;
    border:$bear-border-shape;
    background: $bear-body;
    width: 176px;
    height: 300px;
    top: 150px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 110px;
    z-index: 10;
  }
  .ear-left,
  .ear-right {
    border:$bear-border-shape;
    position: absolute;
    width: 42px;
    height: 42px;
    background-color: $bear-nose;
    border-radius: 100%;
    top: 58px;
  }
  .ear-left {
    left: 50px;
  }
  .ear-right {
    right: 50px;
    animation: wiggle 2s ease-in-out;
    animation-iteration-count: infinite;
    transform-origin: bottom left;
  }
  .eye-left,
  .eye-right {
    position: absolute;
    width: 22px;
    height: 22px;
    background-color: $bear-shape;
    border-radius: 100%;
    top: 135px;
    z-index: 10;
    animation: blink 2s ease-in-out forwards;
    animation-iteration-count: infinite;
  }
  .eye-left {
    left: 96px;
  }
  .eye-right {
    right: 96px;
  }

  .nose {
    position: absolute;
    width: 100px;
    height: 80px;
    background-color: $bear-nose;
    border-radius: 100%;
    top: 150px;
    left: 0px;
    right: 0px;
    margin: auto;
    z-index: 10;

    &::before {
      content: '';
      background-color: $bear-shape;
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
  .mouth {
    width: 55px;
    height: 15px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border:$bear-border-shape;
    border-top: 0;
    position: absolute;
    top: 192px;
    z-index: 10;
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
      background-color: $bear-shape;
      display: block;
      left: 0;
      right: 0;
      margin: auto;
      margin-top: -10px;
    }
  }

  .hand {
    position: absolute;
    border:$bear-border-shape;
    background: $bear-body;
    background-image:
      radial-gradient(circle at 10px 25px, $bear-nose 4px, transparent 4px ),
      radial-gradient(circle at 20px 18px, $bear-nose 4px, transparent 4px ),
      radial-gradient(circle at 32px 18px, $bear-nose 4px, transparent 4px ),
      radial-gradient(circle at 42px 25px, $bear-nose 4px, transparent 4px ),
      radial-gradient(circle at 26px 40px, $bear-nose 12px, transparent 12px );
    width: 51px;
    height: 150px;
    top: 150px;
    left: 0;
    border-radius: 100px;
    animation: move .6s ease-in-out ;
    animation-iteration-count: infinite;
    transform-origin: bottom right;
    z-index: 120;
  }

  @keyframes move {
    50% { transform: translateY(20px) rotateZ(5deg) }
  }

  @keyframes blink {
     5% { transform: scaleY(1) }
    15% { transform: scaleY(.2) }
    25% { transform: scaleY(1) }
  }

  @keyframes wiggle {
     0% { transform: rotateZ(0); }
    10% { transform: rotateZ(10deg); }
    20% { transform: rotateZ(0); }
    30% { transform: rotateZ(10deg); }
    45% { transform: rotateZ(0); }
  }
</style>
