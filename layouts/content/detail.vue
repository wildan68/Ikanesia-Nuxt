<template>
  <div class="wrapper-content" :style="isMobile ? 'margin-top: 0' : 0">
    <div class="wrapper" v-if="dataIkan != null">
      <div v-if="dataIkan.status == 1">
        <HeaderDetail v-if="isMobile" />
        <div class="detail-item" v-for="(d, index) in dataIkan.data" :key="index">
          <div class="product-info">
            <div class="img">
              <img :src="'/upload/'+d.gambar" />
            </div>
          </div>
          <div class="desc-info">
            <h3>{{ d.nama }}</h3>
            <div class="tag-category">
                <Tag :label="$category.map[d.kategori]" />
              </div>
            <div class="sub-desc">
              <span class="stok"
                :style="d.status == 'Ada' ? 'background-color: var(--green-light)' : 'background-color: var(--red-light)'">
                <b :style="d.status == 'Ada' ? 'color: var(--green-dark)' : 'color: var(--red)'">{{ d.status }}</b>
              </span>
              <div class="rating">
                <rating :rating="parseFloat(d.rating)" :increment="0.5" :max-rating="5" :read-only="true"
                  :star-size="14" :show-rating="false"></rating>
                <span class="text">{{ d.rating }}</span>
              </div>
            </div>
            <h2>{{ $conf.rupiah(d.harga) }}</h2>
            <hr />
            <div class="desc-menu">
              <nav class="desc-menu-list" id="active">
                Detail
              </nav>
              <nav class="desc-menu-list">
                Ulasan
              </nav>
            </div>
            <hr />
            <div class="desc-text" v-html="d.deskripsi">
              <!--desc-->
            </div>
          </div>
          <div class="btn-open-buy">
            <button class="open-buy" @click="buyPrepare">Beli Ikan</button>
          </div>
          <div class="overlay-prepare" id="overlay-prepare" @click="closePrepare"></div>
          <div class="price-info" id="buy-prepare">
            <div class="price-info-inner mobile">
              <h4>
                <ion-icon name="cart"></ion-icon> Atur Keranjang
              </h4>
              <br>
              <div class="flex" style="align-items: center;">
                <div style="flex: 1">Mau beli berapa?</div>
                <div class="quantity">
                  <button class="btn-quantity" @click="onQuantity(quantity - 1)">-</button>
                  <input type="number" id="quantity" name="quantity" :value="quantity"
                    @input="onQuantity($event.target.value)" />
                  <button class="btn-quantity" @click="onQuantity(quantity + 1)">+</button>
                </div>
              </div>
              <br>
              <div class="flex" style="align-items: center;">
                <div style="flex: 1">
                  Total harga
                </div>
                <b style="font-size: 18px; color: var(--green)">
                  {{ $conf.rupiah(quantity_total) }}
                </b>
              </div>
              <br>
              <button class="buy">
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
      <NotFound msg="Maaf, Item tidak tersedia" v-else />
    </div>
    <div class="wrapper" v-else>
      <LoadPage />
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import LoadPage from '../../components/load_page.vue'
    import NotFound from '../../components/not_found.vue'
    import HeaderDetail from '../../components/header_detail.vue'
    import Tag from '../../components/tag.vue'

    export default {
        name: 'detail_layout',
        components: {
            LoadPage,
            NotFound,
            HeaderDetail,
            Tag,
        },
        data() {
            return {
                data_name: '',
                dataIkan: null,
                quantity: 1,
                quantity_total: '',
                isMobile: false,
            }
        },
        watch: {
            quantity: function() {
                if (this.quantity <= 1) {
                    this.quantity = 1
                    document.getElementById("quantity").value = '1'
                } else if (this.quantity == null) {
                    this.quantity = 1
                    document.getElementById("quantity").value = '1'
                }
            }
        },
        methods: {
            buyPrepare() {
                document.getElementById('buy-prepare').style.display = 'flex'
                document.getElementById('buy-prepare').style.animation = 'prepareBuy 0.5s ease'
                document.getElementById('overlay-prepare').style.display = 'block'
            },
            closePrepare() {
                document.getElementById('buy-prepare').style.animation = 'prepareClose 0.5s ease'
                setTimeout(() => {
                    document.getElementById('buy-prepare').style.display = 'none'
                    document.getElementById('overlay-prepare').style.display = 'none'
                }, 500)
            },
            onQuantity(context) {
                if (context <= 1) {
                    this.quantity_total = this.dataIkan.data[0].harga
                    return this.quantity = 1
                } else {
                    this.quantity_total = this.dataIkan.data[0].harga * context
                    return this.quantity = context
                }
            },
        },
        async mounted() {
            this.data_name = this.$conf.url_fetch_rever($nuxt.$route.params.detail)
            if (document.body.offsetWidth > 868) {
                this.isMobile = false
            } else {
                this.isMobile = true
            }
            await axios
                .post(this.$conf.URL_API + this.$conf.GET_IKAN_DETAIL, {
                    id: this.$nuxt.$route.params.id,
                    nama: this.data_name,
                })
                .then(response => {
                    this.dataIkan = response.data
                    if (this.dataIkan.status == 1) {
                        this.quantity_total = this.dataIkan.data[0].harga
                    } else {
                        document.title = "Item Tidak Tersedia | MajorFish"
                    }
                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        },
    }
</script>

<style>
    .detail-item {
        display: flex;
        padding: 0.5em;
    }
    
    .detail-item .product-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1em 0 1em 0;
        align-items: center;
    }
    
    .detail-item .product-info .img {
        width: 18em;
        height: 20em;
        overflow: hidden;
    }
    
    .detail-item .product-info .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .detail-item .desc-info {
        flex: 1;
        height: auto;
    }
    .detail-item .desc-info .tag-category {
        display: flex;
        margin-bottom: 20px;
    }
    .detail-item .desc-info .sub-desc {
        display: flex;
        align-items: center;
    }
    
    .detail-item .desc-info .sub-desc .stok {
        padding: 0.5em 1em 0.5em 1em;
        border-radius: 7px;
        font-size: 12px;
    }
    
    .detail-item .desc-info .sub-desc .rating {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    
    .detail-item .desc-info .sub-desc .rating .text {
        margin-left: 5px;
        color: var(--black-light);
        font-weight: 600;
    }
    
    .detail-item .desc-info hr {
        height: 2px;
        border: none;
        background-color: var(--white-light);
        margin: 0 0 10px 0;
    }
    
    .detail-item .desc-info .desc-menu {
        padding: 0 1% 0 1%;
        display: flex;
    }
    
    .detail-item .desc-info .desc-menu .desc-menu-list {
        font-weight: 600;
        color: var(--black-light);
        font-size: 14px;
        height: 100%;
        border-bottom: 2px solid var(--white);
        padding: 10px 1em 10px 1em;
        cursor: pointer;
        transition: all 0.5s ease;
    }
    
    .detail-item .desc-info .desc-menu .desc-menu-list:hover {
        background-color: var(--white-light);
    }
    
    .detail-item .desc-info .desc-menu .desc-menu-list#active {
        color: var(--green);
        border-bottom: 2px solid var(--green);
    }
    
    .detail-item .desc-info .desc-text {
        font-size: 12px;
    }
    
    .detail-item .price-info {
        display: flex;
        justify-content: center;
        flex: 1;
        padding: 1em;
    }
    
    .detail-item .price-info h4 {
        margin: 0;
        display: flex;
        align-items: center;
        color: var(--black);
    }
    
    .detail-item .price-info h4 ion-icon {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
    
    .detail-item .price-info .price-info-inner {
        border: 2px solid var(--white-light);
        border-radius: 7px;
        width: 80%;
        padding: 1em;
        display: flex;
        flex-direction: column;
        color: var(--black-light);
    }
    
    .detail-item .price-info .price-info-inner .quantity {
        display: flex;
        justify-content: flex-end;
        height: 2.5em;
        margin: 10px 0 10px 0;
        flex: 1;
    }
    
    .detail-item .price-info .price-info-inner .quantity input[type=number] {
        background-color: var(--white-light);
        width: 30%;
        padding: 0 10px 0 10px;
        text-align: center;
    }
    
    .detail-item .price-info .price-info-inner button {
        background-color: var(--green);
        padding: 0 1em 0 1em;
        color: var(--white);
        font-weight: 600;
        cursor: pointer;
    }
    
    .detail-item .price-info .price-info-inner .buy {
        height: 4em;
        border-radius: 7px;
    }
    
    .detail-item .price-info .price-info-inner button:hover {
        background-color: var(--green-dark);
    }
    
    .detail-item .btn-open-buy {
        display: none;
    }
    
    .detail-item .desc-info .overlay-prepare {
        display: none;
    }
    
    @media (max-width:868px) {
        .detail-item {
            display: block;
        }
        .detail-item .product-info {
            padding: 0;
            margin: -2% -4% 0 -4%;
            overflow: hidden;
        }
        .detail-item .product-info .img {
            width: 100%;
            height: 30em;
        }
        .detail-item .desc-info {
            height: auto;
            margin-bottom: 5em;
        }
        .detail-item .price-info {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: var(--white);
            padding: 0;
            border-radius: 14px 14px 0 0;
            display: none;
            box-shadow: 0px -5px 30px -10px rgba(0, 0, 0, 0.24);
            -webkit-box-shadow: 0px -5px 30px -10px rgba(0, 0, 0, 0.24);
            -moz-box-shadow: 0px -5px 30px -10px rgba(0, 0, 0, 0.24);
            animation: prepareBuy 0.5s ease;
        }
        @keyframes prepareBuy {
            from {
                transform: translate(0, 100%);
            }
            to {
                transform: translate(0, 0);
            }
        }
        @keyframes prepareClose {
            from {
                transform: translate(0, 0);
            }
            to {
                transform: translate(0, 100%);
            }
        }
        .detail-item .price-info .price-info-inner {
            border: none;
            width: 100%;
        }
        .detail-item .btn-open-buy {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4em;
            background: rgb(255, 255, 255);
            background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(240, 240, 240, 1) 75%, rgba(249, 249, 249, 0) 100%);
            justify-content: center;
            padding: 10px 0 10px 0;
        }
        .detail-item .btn-open-buy button {
            background-color: var(--green);
            padding: 0 1.5em 0 1.5em;
            color: var(--white);
            font-weight: 600;
            cursor: pointer;
            width: 80%;
            border-radius: 7px;
        }
        .detail-item .btn-open-buy button:hover {
            background-color: var(--green-dark);
        }
        .detail-item .overlay-prepare {
            display: none;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #000;
            opacity: 0.5;
        }
    }
</style>