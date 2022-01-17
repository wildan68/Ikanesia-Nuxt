<template>
  <div class="item-not-found">
    <img src="~/assets/img/ico/page_not_found_re_e9o6.svg" />
    <br><br>
    <b>{{ msg }}</b>
    <button class="btn-back" @click="$nuxt.$router.push('/')"><ion-icon name="arrow-back"></ion-icon> Kembali</button>
  </div>
</template>

<script>
    export default {
        name: 'not_found',
        props: {
            msg: String,
        }
    }
</script>

<style scoped>
    .item-not-found {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50em;
        justify-content: center;
    }
    
    .item-not-found img {
        width: 20%;
        margin-bottom: 20px;
    }
    
    .item-not-found b {
        color: var(--black-light);
    }
    
    .item-not-found .btn-back {
        background-color: var(--green);
        color: var(--white);
        padding: 1em 2em 1em 2em;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 7px;
    }
    
    .item-not-found .btn-back:hover {
        background-color: var(--green-dark);
    }
    
    .item-not-found .btn-back ion-icon {
        width: 24px;
        height: 24px;
        margin-right: 20px;
    }
    
    @media (max-width: 768px) {
        .item-not-found {
            height: 30em;
        }
        .item-not-found img {
            width: 50%;
            margin-bottom: 30px;
        }
    }
</style>