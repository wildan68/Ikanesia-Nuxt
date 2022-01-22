<template>
  <div class="wrapper-content">
    <div class="wrapper">
      <div class="home">
        <div class="left">
          <h3>Promo untuk kamu</h3>
          <div class="banner-news" @mouseover="bannerHover" @mouseout="bannerBlur">
            <BannerNews/>
          </div>
          <h3>Semua Kategori</h3>
          <CatMenu :items="categoryMenu"/>
          <div class="title">
            <h3>Terbaru, nih</h3>
            <hr/>
          </div>
          <div class="item-news">
              <ItemNews/>
          </div>
        </div>
        <div class="right">
          <div class="title">
            <h3>Paling banyak dicari</h3>
            <hr/>
          </div>
          <div class="most-searched">
            <ItemBox api_url="get_ikan.php"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import BannerNews from '../../components/banner_news.vue'
    import ItemNews from '../../components/item_news.vue'
    import ItemBox from '../../components/item_box.vue'
    import CatMenu from '../../components/category.vue'

    export default {
        name: 'home_layout',
        components: {
            BannerNews,
            ItemNews,
            ItemBox,
            CatMenu,
        },
        data() {
          return {
            categoryMenu: [{
              label: 'Ikan<br>Hias',
              icon: 'betta-fish.svg',
              to: '#',
            }, {
              label: 'Ikan<br>Indukan',
              icon: 'fish.svg',
              to: '#',
            },{
              label: 'Pakan<br>Vitamin, dll',
              icon: 'food-fish.svg',
              to: '#',
            }, {
              label: 'Aquarium',
              icon: 'aquarium.svg',
              to: '#',
            },{
              label: 'Lain Lain',
              icon: 'more.svg',
              to: '#',
            }, ]
          }
        },
        methods: {
          bannerHover() {
              document.getElementById("navBannerPrev").style.transform = 'translate(-20%)'
              document.getElementById("navBannerPrev").style.opacity = '1'
              document.getElementById("navBannerNext").style.transform = 'translate(20%)'
              document.getElementById("navBannerNext").style.opacity = '1'
          },
          bannerBlur() {
              document.getElementById("navBannerPrev").style.transform = 'translate(0%)'
              document.getElementById("navBannerPrev").style.opacity = '0'
              document.getElementById("navBannerNext").style.transform = 'translate(0%)'
              document.getElementById("navBannerNext").style.opacity = '0'
          }
        },
    }
</script>

<style scoped>
    .home {
        display: flex;
    }
    
    .home>div {
        margin-left: 1%;
        margin-right: 1%;
    }
    
    .home .left {
        flex: 1;
    }
    
    .home .title {
        position: relative;
    }
    
    .home hr {
        border: none;
        background-color: var(--green);
        height: 5px;
        margin-top: -10px;
        width: 30%;
        position: absolute;
        left: 0;
    }
    
    .home .right {
        flex: 1;
    }
    
    @media (max-width: 1100px) {
        .home {
            flex-direction: column;
        }
    }
</style>