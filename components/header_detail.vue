<template>
    <div class="header-detail">
        <div class="menu-btn-detail">
            <button class="back" @click="onBack" v-ripple.mouseover>
                <ion-icon name="arrow-back"></ion-icon>
            </button>
        </div>
        <div class="menu-btn-detail" style="justify-content: flex-end">
            <button class="back" v-ripple>
                <ion-icon name="bookmark"></ion-icon>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'header_detail',
        methods: {
            onBack() {
                setTimeout(() => $nuxt.$router.back(), 500)
            }
        }
    }
</script>

<style scoped>
    .header-detail {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        background: rgb(0, 0, 0);
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0) 100%);
    }
    
    .header-detail .menu-btn-detail {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 14px 14px 14px 14px;
    }
    
    .header-detail .menu-btn-detail button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        color: #fff;
        border-radius: 50%;
    }
    
    .header-detail .menu-btn-detail button ion-icon {
        width: 24px;
        height: 24px;
    }
</style>