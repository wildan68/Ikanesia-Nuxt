<template>
  <div v-swiper:mySwiper="bannerOptions" class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="~/assets/img/p1.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="~/assets/img/p2.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="~/assets/img/p3.jpg" />
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev" id="navBannerPrev"></div>
    <div class="swiper-button-next" slot="button-next" id="navBannerNext"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
    export default {
        name: 'banner_news',
        data() {
            return {
                bannerOptions: {
                    slidesPerView: 1,
                    loop: true,
                    autoplay: {
                        delay: 2500,
                    },
                    pagination: {
                        clickable: true,
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        }
    }
</script>

<style>
    .home .left .banner-news {
        width: 100%;
        --swiper-navigation-size: 12px !important;
        --swiper-navigation-color: var(--white) !important;
        --swiper-pagination-color: var(--green) !important;
        cursor: pointer;
    }
    
    .home .left .banner-news .swiper {
        width: 40em;
        height: 20em;
        overflow: hidden;
    }
    
    .home .left .banner-news .swiper-slide {
        display: flex;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    
    .home .left .banner-news .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .home .left .banner-news .swiper .swiper-button-next,
    .swiper-button-prev {
        background-color: rgba(0, 255, 76, 0.5);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s ease;
        opacity: 0;
    }
    
    .home .left .banner-news .swiper .swiper-button-next:hover,
    .swiper-button-prev:hover {
        background-color: var(--green);
    }
    
    @media (max-width: 768px) {
        .home .left .banner-news .swiper {
            width: 100%;
            height: 15em;
        }
    }
</style>