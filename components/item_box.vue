<template>
    <div class="item-box-container" v-if="data_item != null" :style="columnSearch1100 ? 'grid-template-columns: auto auto auto auto' : 0">
        <div class="item-box" v-for="(d, index) in data_item.slice(0, width)" :key="index">
            <nuxt-link :to="'/detail/'+d.id_ikan+'/'+$conf.url_fetch(d.nama.toLowerCase())" class="item-box-inside">
                <div class="tag-category">
                    <Tag :label="d.kategori"/>
                </div>
                <div class="img">
                    <img :src="'/upload/'+d.gambar">
                </div>
                <div class="item-info">
                    {{ $conf.excerpt_nama(d.nama) }}
                    <h4> {{ $conf.rupiah(d.harga) }} </h4>
                    <div class="location">
                        <ion-icon name="location"></ion-icon> Tegal, Jawa Tengah
                    </div>
                    <div class="rating">
                        <rating :rating="parseFloat(d.rating)" :increment="0.5" :max-rating="5" :read-only="true" :star-size="14" :show-rating="false"></rating>
                        <span class="text">{{ d.rating }}</span>
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>
    <div v-else class="item-box-container" :style="columnSearch1100 ? 'grid-template-columns: auto auto auto auto' : 0">
        <div class="item-box" v-for="index in width" :key="index">
            <div class="item-box-inside" id="pre-load">
                <!--lazy-->
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Tag from '@/components/tag.vue'

    export default {
        name: 'item_box',
        props: {
            api_url: String,
            func: String,
            mode: {
                type: String,
                default: 'post',
            },
            columnSearch1100: false,
        },
        components: {
            Tag,
        },
        data() {
            return {
                data_item: null,
                width: null,
                rating: 5,
            }
        },
        async mounted() {
            if (this.func == 'search') {
                if (await document.body.offsetWidth >= 768) {
                    this.width = 8
                    this.columnSearch1100 = true
                } else {
                    this.width = 6
                }
            } else {
                if (document.body.offsetWidth >= 768) {
                    this.width = 8
                } else {
                    this.width = 6
                }
            }
            // AXIOS
            if (this.mode == 'post') {
                await axios
                    .post(this.$conf.URL_API + this.api_url)
                    .then(response => {
                        this.data_item = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally()
            } else if (this.mode == 'get') {
                await axios
                    .get(this.$conf.URL_API + this.api_url)
                    .then(response => {
                        this.data_item = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally()
            }
        },
    }
</script>

<style scoped>
    .item-box-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
    }
    
    .item-box-container .item-box {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em 0 1em 0;
    }
    
    .item-box-container .item-box .item-box-inside {
        width: 10em;
        background-color: var(--white);
        height: 17em;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        font-size: 12px;
        cursor: pointer;
        transition: color 0.5s ease;
        position: relative;
    }
    
    .item-box-container .item-box .item-box-inside:hover {
        color: var(--green-dark);
    }
    
    .item-box-container .item-box .item-box-inside#pre-load {
        background: linear-gradient(130deg, #e6e6e6, #d2d2d2, #a8a8a8);
        background-size: 600% 600%;
        animation: preLoad 1.5s ease infinite;
    }
    
    @keyframes preLoad {
        0% {
            background-position: 0% 4%
        }
        50% {
            background-position: 100% 97%
        }
        100% {
            background-position: 0% 4%
        }
    }
    
    .item-box-container .item-box .item-box-inside .tag-category {
        position: absolute;
        top: 5px;
        left: 5px;
    }
    
    .item-box-container .item-box .item-box-inside .rating {
        display: flex;
        margin-top: 10px;
        align-items: center;
    }
    
    .item-box-container .item-box .item-box-inside .rating .text {
        margin-left: 5px;
        color: var(--black-light);
    }
    
    .item-box-container .item-box .item-box-inside .img {
        height: 6em;
        width: 100%;
        overflow: hidden;
    }
    
    .item-box-container .item-box .item-box-inside .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .item-box-container .item-box .item-box-inside .item-info {
        padding: 10px;
    }
    
    .item-box-container .item-box .item-box-inside .item-info h4 {
        margin: 0;
    }
    
    .item-box-container .item-box .item-box-inside .item-info .location {
        font-size: 10px;
        color: var(--black-light);
        margin-top: 10px;
    }
    
    @media (max-width: 1366px) {
        .item-box-container .item-box {
            height: auto;
        }
        .item-box-container .item-box .item-box-inside {
            width: 9em;
        }
        .item-box-container .item-box .item-box-inside .img {
            width: 100%;
        }
    }
    
    @media (max-width: 1100px) {
        .item-box-container {
            display: grid;
            grid-template-columns: auto auto auto auto auto auto;
        }
    }
    
    @media (max-width: 768px) {
        .item-box-container {
            grid-template-columns: auto auto auto;
        }
        .item-box-container .item-box {
            height: auto;
        }
    }
</style>