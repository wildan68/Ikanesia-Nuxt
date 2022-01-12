<template>
  <div v-swiper:mySwiper="itemNewsOptions" class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(d, index) in dataIkan" :key="index">
        <div class="item-news-list" @mouseover="itemHover(index)" @mouseout="itemBlur(index)">
            <div class="rating">
                <ion-icon :name="rating(d.rating)"></ion-icon>
                {{ d.rating }}
            </div>
            <div class="img">
                <img :src="'/upload/'+ d.gambar" :id="'img_item_'+index">
            </div>
            <div class="item-info">
                {{ d.nama }}
                <h4>{{ $conf.rupiah(d.harga) }}</h4>
                <div class="location"><ion-icon name="location"></ion-icon> Tegal, Jawa Tengah</div>
                <button class="more-info" @click="$router.push('/detail/'+d.id_ikan+'/'+$conf.url_fetch(d.nama.toLowerCase()))">Lihat Ikan</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'item_news',
        data() {
            return {
                itemNewsOptions: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    breakpoints: {
                        1100: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 2,
                        }
                    }
                },
                dataIkan: [],
            }
        },
        methods: {
            itemHover(i) {
                document.getElementById("img_item_"+i).style.transform = 'rotate(10deg)'
                document.getElementById("img_item_"+i).style.width = '120%'
                document.getElementById("img_item_"+i).style.height = '140%'
            },
            itemBlur(i) {
                document.getElementById("img_item_"+i).style.transform = 'rotate(0deg)'
                document.getElementById("img_item_"+i).style.width = '100%'
                document.getElementById("img_item_"+i).style.height = '100%'
            },
            rating(context) {
                if (context < 2) {
                    return 'star-outline'
                }
                else if (context > 2 && context < 4) {
                    return 'star-half-outline'
                }
                else {
                    return 'star'
                }
            },
        },
        mounted() {
            axios
                .post(this.$conf.URL_API + this.$conf.GET_IKAN_NEWS)
                .then(response => {
                    this.dataIkan = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        }
    }
</script>

<style>
    .home .left .item-news {
        width: 100%;
    }
    
    .home .left .item-news .swiper {
        width: 40em;
        height: 20em;
        padding: 20px 0 20px 0;
    }
    
    .home .left .item-news .swiper-slide {
        display: flex;
        justify-content: center;
    }
    
    .home .left .item-news .swiper-slide .item-news-list {
        background-color: var(--white);
        width: 100%;
        border-radius: 7px;
        overflow: hidden;
        box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        position: relative;
    }
    .home .left .item-news .swiper-slide .item-news-list .rating {
        position: absolute;
        background-color: var(--yellow);
        color: var(--black);
        top: 0;
        right: 10px;
        width: 2.5em;
        height: 3em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 10px 0 10px 0;
        clip-path: polygon(0% 0%, 100% 0, 100% 100%, 50% 75%, 0% 100%);
        z-index: 2;
        font-size: 12px;
        font-weight: 600;
    }
    .home .left .item-news .swiper-slide .item-news-list .img {
        width: 100%;
        height: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .home .left .item-news .swiper-slide .item-news-list .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: all 0.5s ease;
    }
    .home .left .item-news .swiper-slide .item-news-list .item-info {
        margin: 10px;
        
    }
    .home .left .item-news .swiper-slide .item-news-list .item-info h4 {
         margin: 0;
    }
    .home .left .item-news .swiper-slide .item-news-list button.more-info {
        background-color: var(--green);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        width: 100%;
        height: 3em;
        align-items: center;
        justify-content: center;
        color: var(--white);
        font-weight: 600;
        cursor: pointer;
    }
    .home .left .item-news .swiper-slide .item-news-list button.more-info:hover {
        filter: brightness(90%); 
    }
    .home .left .item-news .swiper-slide .item-news-list .location {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--white-dark);
        margin-top: 10px;
        color: var(--light-black);
        font-size: 12px;
    }
    @media (max-width: 1100px) {
        .home .left .item-news .swiper {
            width: 100%;
        }
    }
    @media (max-width: 1100px) {
        .home .left .item-news .swiper {
            width: 100%;
            height: 22em;
        }
    }
    @media (max-width: 768px) {
        .home .left .item-news .swiper {
            width: 100%;
            height: 25em;
        }
    }
</style>