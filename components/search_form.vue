<template>
    <div class="search_popup">
        <div v-if="dataSearch == null" class="loading">
            <img src="~/assets/img/ico/loading-green.svg">
            Mohon tunggu, yay!
        </div>
        <div v-else class="result">
            <div v-if="dataSearch.status == 1">
                Hasil pencarian dari <h4>{{ InputSearch }}</h4>
                <div class="result-box">                  
                    <div class="result-item" v-for="(d, index) in dataSearch.data.slice(0, 5)" :key="index" @click="$nuxt.$router.push('/detail/'+d.id_ikan+'/'+$conf.url_fetch(d.nama.toLowerCase()))">
                        <div class="img">
                            <img :src="'/upload/'+d.gambar">
                        </div>
                        <div class="info-item">
                            {{ d.nama }}
                            <h4>{{ $conf.rupiah(d.harga) }}</h4>
                        </div>
                    </div>
                    <button class="view-more" v-if="dataSearch.data.length >= 5">
                        Lihat Lainnya
                    </button>
                </div>
            </div>
            <div v-else class="not-found">
                <img src="~/assets/img/ico/search-not-found.svg">
                Hasil tidak ada yang cocok
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'search_popup',
    props: {
        InputSearch: String,
    },
    data() {
        return {
            dataSearch: null,
        }
    },
    watch: {
        InputSearch: async function() {
            this.dataSearch = null

            await axios
                .post(this.$conf.URL_API + this.$conf.SEARCH, {
                    field: this.InputSearch
                })
                .then(response => {
                    this.dataSearch = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        }
    },
    async created() {  
        await axios
            .post(this.$conf.URL_API + this.$conf.SEARCH, {
                field: this.InputSearch
            })
            .then(response => {
                this.dataSearch = response.data
            })
            .catch(error => {
                console.log(error)
            })
            .finally() 
    }
}
</script>

<style>
    .search_popup {
        background-color: var(--white);
        box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 110%;
        width: 70%;
        height: auto;
        border-radius: 7px;
        padding: 1em;
        animation: popupSearchShow 0.5s ease;
    }
    @keyframes popupSearchShow {
        from {
            height: 0;
        }
        to {
            height: 20em;
        }
    }
    .search_popup .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-weight: 600;
    }
    .search_popup .loading img {
        width: 40%;
    }
    .search_popup .result {
        display: block;
    }
    .search_popup .result h4 {
        margin: 0;
    }
    .search_popup .result .result-box {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
    .search_popup .result .result-box>div {
        margin-bottom: 1%;
    }
    .search_popup .result .result-box .result-item {
        background-color: var(--white);
        display: flex;
        height: 5em;
        cursor: pointer;
    }
    .search_popup .result .result-box .result-item:hover {
        background-color: var(--white-light);
    }
    .search_popup .result .result-box .result-item .img {
        width: 20%;
        height: 100%;
        overflow: hidden;
    }
    .search_popup .result .result-box .result-item .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .search_popup .result .result-box .result-item .info-item {
        padding: 0 10px 0 10px;
    }
    .search_popup .result .not-found {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        padding: 2em 0 2em 0;
        text-align: center;
    }
    .search_popup .result .result-box .view-more {
        background-color: var(--white);
        cursor: pointer;
        margin-top: 10px;
        padding: 10px 0 10px 0;
        font-weight: 600;
        color: var(--black-light);
    }
    .search_popup .result .result-box .view-more:hover {
        background-color: var(--white-light);
        color: var(--black);
    }
    .search_popup .result .not-found img {
        width: 50%;
        margin-bottom: 20px;
    }
</style>