<template>
    <div class="category-menu">
        <div class="cat-box"> 
            <div class="cat-box-item">
                <img src="~/assets/img/ico/betta-fish.svg" class="ico"/>
                Ikan<br>Hias
            </div>
        </div>
        <div class="cat-box">
            <div class="cat-box-item">
                <img src="~/assets/img/ico/fish.svg" class="ico"/>
                Ikan<br>Indukan              
            </div>
        </div>
        <div class="cat-box">
            <div class="cat-box-item">
                <img src="~/assets/img/ico/food-fish.svg" class="ico"/>
                Makanan<br>
                Vitamin, dll      
            </div>
        </div>
        <div class="cat-box">
            <div class="cat-box-item">
                <img src="~/assets/img/ico/aquarium.svg" class="ico"/>
                Aquarium<br>    
            </div>
        </div>
        <div class="cat-box">
            <div class="cat-box-item">
                <img src="~/assets/img/ico/more.svg" class="ico"/>
                Lain Lain<br>    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cat_menu',
    }
</script>

<style scoped>
    .category-menu {
        display: grid;
        padding: 0.5em;
        grid-template-columns: auto auto auto;
    }
    
    .category-menu>div {
        margin-bottom: 10px;
    }
    
    .category-menu .cat-box {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        color: var(--white);
    }
    
    .category-menu .cat-box .cat-box-item {
        width: 12em;
        height: 5em;
        border-radius: 7px;
        padding: 1em;
        background: rgb(9, 200, 134);
        background: linear-gradient(54deg, rgba(9, 200, 134, 1) 0%, rgba(4, 126, 102, 1) 100%);
        word-wrap: break-word;
        cursor: pointer;
        position: relative;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    .category-menu .cat-box .cat-box-item .ico {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 40%;
        opacity: 0.5;
    }
    
    @media (max-width: 768px) {
        .category-menu .cat-box {
            width: auto;
        }
        .category-menu .cat-box .cat-box-item {
            width: 6.5em;
            height: 5em;
        }
    }
</style>