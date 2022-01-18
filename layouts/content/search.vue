<template>
  <div class="wrapper-content">
    <div class="wrapper">
      <div class="search-result">
        <div class="title">
          Menampilkan hasil dari <b>{{ search_params }}</b>
        </div>
        <div class="container">
          <div class="filter">
            <span class="title" @click="isMobile ? onCatShow() : 0"><ion-icon name="filter"></ion-icon> Filter <span class="ico-show-filter"><ion-icon name="chevron-up" id="chevron-filter"></ion-icon></span></span>
            <div class="filter-box" id="filter-box">
                Kategori
                <div class="nav-cat">
                    <nav class="cat">
                        <input type="checkbox" name="ikan_hias" id="ikan_hias"/>
                        <label for="ikan_hias">Ikan Hias</label>
                    </nav>
                    <nav class="cat">
                        <input type="checkbox" name="ikan_indukan" id="ikan_indukan"/>
                        <label for="ikan_indukan">Ikan Indukan</label>
                    </nav>
                    <nav class="cat">
                        <input type="checkbox" name="pakan" id="pakan"/>
                        <label for="pakan">Pakan, Vitamin, dll</label>
                    </nav>
                    <nav class="cat">
                        <input type="checkbox" name="aquarium" id="aquarium"/>
                        <label for="aquarium">Aquarium</label>
                    </nav>
                </div>
            </div>
          </div>
          <div class="result">
            <ItemBox api_url="get_ikan.php" func="search" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import ItemBox from '@/components/item_box.vue'

    export default {
        name: 'search_layout',
        components: {
            ItemBox,
        },
        data() {
            return {
                search_params: '',
                cat_box: true,
                isMobile: false,
            }
        },
        methods: {
            onCatShow() {
                if (this.cat_box) {
                    document.getElementById("filter-box").style.animation = 'filterClose 0.5s ease'
                    document.getElementById("chevron-filter").style.animation = 'filterChevronDown 0.5s ease'
                    document.getElementById("chevron-filter").style.transform = 'rotate(180deg)'
                    setTimeout(() => {
                        document.getElementById("filter-box").style.display = 'none'

                        this.cat_box = false
                    }, 500)
                } else {
                    document.getElementById("filter-box").style.display = 'block'
                    document.getElementById("filter-box").style.animation = 'filterShow 0.5s ease'
                    document.getElementById("chevron-filter").style.animation = 'filterChevronUp 0.5s ease'
                    document.getElementById("chevron-filter").style.transform = 'rotate(0deg)'
                    this.cat_box = true
                }
            }
        },
        async mounted() {
            this.search_params = this.$conf.capitalize(this.$conf.url_fetch_rever($nuxt.$route.params.search))
            document.getElementById("chevron-filter").style.transform = 'rotate(180deg)'
            if (window.screen.availWidth > 768) {
                this.cat_box = true
                this.isMobile = false
            } else {
                this.cat_box = false
                this.isMobile = true
            }
        },
    }
</script>

<style lang="postcss">
    .search-result {
        width: 100%;
    }
    
    .search-result .title {
        display: flex;
        margin-top: 20px;
    }
    
    .search-result .title b {
        margin-left: 5px;
    }
    
    .search-result .container {
        display: flex;
        margin-top: 20px;
    }
    
    .search-result .container .filter {
        flex: 1;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .search-result .container .result {
        flex: 2;
    }
    
    .search-result .container .filter .title {
        width: 100%;
        font-weight: 600;
        display: flex;
        align-items: center;
    }
    
    .search-result .container .filter .title .ico-show-filter {
        display: none;
    }
    
    .search-result .container .filter .title ion-icon {
        margin-right: 10px;
        width: 24px;
        height: 24px;
    }
    
    .search-result .container .filter .filter-box {
        background-color: var(--white);
        width: 80%;
        margin-top: 10px;
        padding: 1em;
        border-radius: 7px;
        box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
    }
    
    .search-result .container .filter .filter-box .nav-cat {
        margin-left: 20px;
    }
    
    .search-result .container .filter .filter-box .nav-cat>nav {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .search-result .container .filter .filter-box .nav-cat nav {
        border-radius: 7px;
        padding: 0.5em 1em 0.5em 1em;
        color: var(--black-light);
    }
    
    .search-result .container .filter .filter-box .nav-cat nav:hover {
        background-color: var(--white-light);
        color: var(--black);
    }
    
    .search-result .container .filter .filter-box .nav-cat input[type=checkbox]+label {
        display: block;
        margin: 0.2em;
        cursor: pointer;
        padding: 0.2em;
    }
    
    .search-result .container .filter .filter-box .nav-cat input[type=checkbox] {
        display: none;
    }
    
    .search-result .container .filter .filter-box .nav-cat input[type=checkbox]+label:before {
        content: "\2714";
        border: 0.1em solid #000;
        border-radius: 0.2em;
        display: inline-block;
        width: 1em;
        height: 1em;
        padding-left: 0.2em;
        padding-bottom: 0.3em;
        margin-right: 1em;
        vertical-align: bottom;
        color: transparent;
        transition: 0.5s;
    }
    
    .search-result .container .filter .filter-box .nav-cat input[type=checkbox]+label:active:before {
        transform: scale(0);
    }
    
    .search-result .container .filter .filter-box .nav-cat input[type=checkbox]:checked+label:before {
        background-color: MediumSeaGreen;
        border-color: MediumSeaGreen;
        color: #fff;
    }
    
    .search-result .container .filter .filter-box .nav-cat input[type=checkbox]:disabled+label:before {
        transform: scale(1);
        border-color: #aaa;
    }
    
    .search-result .container .filter .filter-box .nav-cat input[type=checkbox]:checked:disabled+label:before {
        transform: scale(1);
        background-color: #bfb;
        border-color: #bfb;
    }
    
    @media (max-width: 768px) {
        .search-result .title {
            margin-top: 10px;
        }
        .search-result .container {
            display: block;
            margin-top: 10px;
        }
        .search-result .container .filter .title {
            padding: 1em 0.5em 1em 0.5em;
            border-radius: 7px;
            position: relative;
            cursor: pointer;
            transition: all 0.5s ease;
        }
        .search-result .container .filter .title:hover {
            background-color: var(--white-light);
        }
        .search-result .container .filter .filter-box {
            display: none;
            animation: filterShow 0.5s ease;
        }
        @keyframes filterShow {
            from {
                transform: translate(0, -100%);
                opacity: 0;
            }
            to {
                transform: translate(0, 0);
                opacity: 1;
            }
        }
        @keyframes filterClose {
            from {
                transform: translate(0, 0);
                opacity: 1;
            }
            to {
                transform: translate(0, -100%);
                opacity: 0;
            }
        }
        .search-result .container .filter .title .ico-show-filter {
            display: block;
            position: absolute;
            right: 10px;
        }
        .search-result .container .filter .title .ico-show-filter #chevron-filter {
            animation: filterChevronDown 0.5s ease;
        }
        @keyframes filterChevronUp {
            from {
                transform: rotate(180deg);
            }
            to {
                transform: rotate(0deg);
            }
        }
        @keyframes filterChevronDown {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(180deg);
            }
        }
    }
</style>