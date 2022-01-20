<template>
  <div class="header" id="header">
    <div class="wrapper">
      <div class="toggle-menu" style="justify-content: flex-start">
        <button class="btn-toggle" v-ripple="'#bdbdbd80'" @click="onMenuShow"><ion-icon name="menu"></ion-icon></button>
      </div>
      <div class="logo">
        <img src="~/assets/img/logo.png" @click="$router.push('/')">
      </div>
      <div class="search-form" id="search-form">
        <form @submit.prevent="searchInput.length == 0 ? $toast.warning('Kolom Pencarian Kosong') : $nuxt.$router.push('/search/'+$conf.url_fetch(searchInput))">
          <input type="text" id="search-input" name="search-input" @input="searchInput = $event.target.value" placeholder="Cari Ikan.." autocomplete="off">
          <button @click="searchInput.length == 0 ? $toast.warning('Kolom Pencarian Kosong') : $nuxt.$router.push('/search/'+$conf.url_fetch(searchInput))">
            <ion-icon name="search"></ion-icon>
          </button>
        </form>
        <SearchPopup v-if="searchInput != ''" :InputSearch="searchInput"/>
      </div>
      <div class="nav-menu-overlay" id="nav-menu-overlay" @click="onMenuClose"></div>
      <div class="nav-menu" id="nav-menu">
        <NavMenu :items="menuItems" />
      </div>
      <div class="toggle-menu" id="toggle-search">
          <button class="btn-toggle" v-ripple="'#bdbdbd80'" @click="onSearch"><ion-icon :name="searchMenu ? 'close' : 'search'"></ion-icon></button>
      </div> 
    </div>
  </div>
</template>

<script>
    import SearchPopup from '../components/search_form.vue'
    import NavMenu from '../components/nav_menu.vue'

    export default {
        name: 'Header',
        components: {
            SearchPopup,
            NavMenu,
        },
        data() {
            return {
                searchMenu: false,
                searchInput: '',
                menuItems: [{
                    label: 'Menu',
                    isPC: true,
                    isMobile: true,
                    items: [{
                        label: 'Home',
                        icon: 'home',
                        to: '/',
                    }, {
                        label: 'Kategori',
                        icon: 'copy',
                        items: [{
                            label: 'Ikan Hias',
                            icon: 'fish',
                        }, {
                            label: 'Ikan Indukan',
                            icon: 'fish',
                        }, {
                            label: 'Lain Lain',
                            icon: 'ellipsis-horizontal-circle',
                        }]
                    }, {
                        label: 'Pesan',
                        to: '/chat',
                        icon: 'chatbox-ellipses'
                    }, ],
                }, {
                    label: 'Panduan',
                    isPC: false,
                    isMobile: true,
                    items: [{
                        label: 'Pembayaran',
                        icon: 'wallet',
                        items: [{
                            label: 'Syarat & Ketentuan',
                            icon: 'document-text',
                        }, {
                            label: 'Kebijakan Pembayaran',
                            icon: 'document-text',
                        }, ]
                    }, {
                        label: 'Tentang kami',
                        to: '/about',
                        icon: 'information'
                    }, ]
                }, {
                    label: 'Bantuan',
                    isPC: false,
                    isMobile: true,
                    items: [{
                        label: 'Kebijakan Privasi',
                        to: '#',
                        icon: 'document-text'
                    }, {
                        label: 'Sitemap',
                        to: '#',
                        icon: 'map'
                    }, {
                        label: 'Kontak Kami',
                        to: '#',
                        icon: 'call'
                    }, ]
                }],
            }
        },
        methods: {
            onMenuShow() {
                document.getElementById('nav-menu').style.display = 'block'
                document.getElementById('nav-menu').style.animation = 'showMenu 0.5s ease'
                document.getElementById('nav-menu-overlay').style.display = 'block'
            },
            onMenuClose() {
                document.getElementById('nav-menu').style.animation = 'closeMenu 0.5s ease'

                setTimeout(() => {
                    document.getElementById('nav-menu').style.display = 'none'
                    document.getElementById('nav-menu-overlay').style.display = 'none'
                }, 500)
            },
            onSearch() {
                if (!this.searchMenu) {
                    document.getElementById('search-form').style.display = 'flex'
                    document.getElementById('search-form').style.animation = 'searchShow 0.5s ease'
                    this.searchMenu = true
                } else {
                    document.getElementById('search-form').style.animation = 'searchClose 0.5s ease'

                    setTimeout(() => {
                        document.getElementById('search-form').style.display = 'none'
                        this.searchMenu = false
                        document.getElementById('search-input').value = ''
                        this.searchInput = ''
                    }, 500)

                }
            },
        },
        mounted() {
            var header = document.getElementById("header");

            var myScrollFunc = async() => {
                var y = window.scrollY;
                if (y >= 50) {
                    header.style.boxShadow = '2px 5px 35px -10px rgba(0, 0, 0, 0.24)'
                } else {
                    header.style.boxShadow = 'none'
                }
            };

            window.addEventListener("scroll", myScrollFunc);
        }
    }
</script>

<style>
    .header {
        height: 4em;
        background-color: var(--white);
        box-shadow: none;
        display: flex;
        padding: 10px 0 10px 0;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5;
        justify-content: center;
        transition: box-shadow 0.5s ease;
    }
    
    .header .wrapper {
        display: flex;
        width: 1200px;
        height: 100%;
        align-items: center;
    }
    
    .header .wrapper .logo {
        flex: 1;
        cursor: pointer;
    }
    
    .header .wrapper .logo img {
        width: 180px;
    }
    
    .header .wrapper .search-form {
        flex: 2;
        display: flex;
        justify-content: center;
        position: relative;
    }
    
    .header .wrapper .search-form form {
        position: relative;
        width: 80%;
    }
    
    .header .wrapper .search-form form input[type=text] {
        height: 3em;
        width: 80%;
        border-radius: 7px;
        background-color: var(--white-light);
        padding: 0 5% 0 5%;
        transition: all 0.2s linear;
    }
    
    .header .wrapper .search-form form button {
        background-color: var(--green);
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 48px;
        border-radius: 0 7px 7px 0;
        cursor: pointer;
    }
    
    .header .wrapper .search-form button ion-icon {
        width: 24px;
        height: 24px;
    }
    
    .header .wrapper .nav-menu {
        flex: 3;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 135%;
    }
    
    .header .wrapper .nav-menu>nav {
        margin-right: 5%;
    }
    
    .header .wrapper .nav-menu nav.menu-list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em;
        transition: all 0.5s ease;
        cursor: pointer;
        font-weight: 600;
        color: var(--black-light);
        position: relative;
        border-bottom: 3px solid var(--white);
    }
    
    .header .wrapper .nav-menu nav.menu-list#active {
        border-bottom: 3px solid var(--green);
    }
    
    .header .wrapper .nav-menu nav.menu-list:hover {
        background-color: var(--white-light);
        color: var(--black);
    }
    
    .header .wrapper .toggle-menu {
        display: none;
    }
    
    .header .wrapper .nav-menu-overlay {
        display: none;
    }
    
    @media (max-width: 1400px) {
        .header .wrapper {
            width: 80%;
        }
    }
    
    @media (max-width: 1100px) {
        .header {
            padding: 10px 5% 10px 5%;
        }
        .header .wrapper {
            width: 95%;
        }
        .header .wrapper .nav-menu-overlay {
            display: none;
            background-color: black;
            opacity: 0.5;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
        .header .wrapper .nav-menu {
            flex: 1;
            display: none;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            background-color: var(--white);
            width: 30%;
            padding: 5% 5% 5% 5%;
            animation: showMenu 1s ease;
            overflow-y: scroll;
            overflow-x: hidden;
            height: 100%;
        }
        @keyframes showMenu {
            from {
                transform: translate(-100%);
            }
            to {
                transform: translate(0);
            }
        }
        @keyframes closeMenu {
            from {
                transform: translate(0);
            }
            to {
                transform: translate(-100%);
            }
        }
        .header .wrapper .toggle-menu {
            display: flex;
            justify-content: flex-end;
            flex: 1;
        }
        .header .wrapper .toggle-menu#toggle-search {
            display: none;
        }
        .header .wrapper .toggle-menu>button {
            margin-left: 1%;
            margin-right: 1%;
        }
        .header .wrapper .toggle-menu .btn-toggle {
            padding: 1em;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--black-light);
            cursor: pointer;
        }
        .header .wrapper .toggle-menu .btn-toggle ion-icon {
            width: 24px;
            height: 24px;
        }
        .header .wrapper .toggle-menu .btn-toggle:hover {
            color: var(--black);
        }
    }
    
    @media (max-width:768px) {
        .header {
            padding: 10px 5% 10px 5%;
        }
        .header .wrapper .toggle-menu#toggle-search {
            display: flex;
        }
        .header .wrapper .search-form {
            display: none;
            position: absolute;
            top: 5em;
            left: 0;
            right: 0;
            background-color: var(--white);
            padding: 2% 0 2% 0;
            justify-content: center;
            animation: searchShow 1s ease;
        }
        @keyframes searchShow {
            from {
                opacity: 0;
                transform: translate(0, -100%);
            }
            to {
                opacity: 1;
                transform: translate(0, 0);
            }
        }
        @keyframes searchClose {
            from {
                opacity: 1;
                transform: translate(0, 0);
            }
            to {
                opacity: 0;
                transform: translate(0, -100%);
            }
        }
        .header .wrapper .nav-menu {
            width: 60%;
        }
    }
</style>