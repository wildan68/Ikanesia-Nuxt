<template>
  <div class="load-page">
    <div class="spinner">
      <div class="spinner__square"></div>
      <div class="spinner__square"></div>
      <div class="spinner__square"></div>
      <div class="spinner__square"></div>
    </div>
    <b>Mohon tunggu</b>
  </div>
</template>

<script>
    export default {
        name: 'loading_page'
    }
</script>

<style scoped>
    .load-page {
        display: flex;
        height: auto;
        align-items: center;
        justify-content: center;
        position: absolute;
        flex-direction: column;
        color: var(--black-light);
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    
    .spinner {
        width: 72px;
        height: 72px;
        position: relative;
        transform-origin: center center;
        animation: spinnerSpin 2.8s 0s ease-in-out infinite forwards;
        margin-bottom: 20px;
    }
    
    .spinner__square {
        top: 0px;
        left: 24px;
        width: 24px;
        height: 24px;
        position: absolute;
        background-color: var(--green-light);
        animation-delay: 0;
        animation-duration: 1.4s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        border-radius: 50%;
    }
    
    .spinner__square:nth-child(1) {
        animation-name: spinnerSquareContract_1;
    }
    
    .spinner__square:nth-child(2) {
        top: 24px;
        left: 48px;
        animation-name: spinnerSquareContract_2;
    }
    
    .spinner__square:nth-child(3) {
        top: 24px;
        left: 0px;
        animation-name: spinnerSquareContract_3;
    }
    
    .spinner__square:nth-child(4) {
        top: 48px;
        left: 24px;
        animation-name: spinnerSquareContract_4;
    }
    /* Animations */
    
    @keyframes spinnerSpin {
        0% {
            transform: rotateZ(0deg);
        }
        30%,
        100% {
            transform: rotateZ(360deg);
        }
    }
    
    @keyframes spinnerSquareContract_1 {
        0%,
        60% {
            transform: translateY(0)
        }
        80%,
        100% {
            transform: translateY(24px);
        }
    }
    
    @keyframes spinnerSquareContract_2 {
        0%,
        60% {
            transform: translateX(0)
        }
        80%,
        100% {
            transform: translateX(-24px);
        }
    }
    
    @keyframes spinnerSquareContract_3 {
        0%,
        60% {
            transform: translateX(0)
        }
        80%,
        100% {
            transform: translateX(24px);
        }
    }
    
    @keyframes spinnerSquareContract_4 {
        0%,
        60% {
            transform: translateY(0)
        }
        80%,
        100% {
            transform: translateY(-24px);
        }
    }
</style>