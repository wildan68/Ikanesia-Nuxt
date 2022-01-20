<template>
  <div class="menu-container">
    <div class="menu-list" v-for="(menu, i) in items" :key="i">
      <div v-if="menu.isPC && !isMobile" style="display: flex;">
        <nav class="menu" v-for="(d, index) in menu.items" :key="index"
          @click="d.items != null ? subMenu(i, index) : $nuxt.$router.push(d.to)">
          <div style="display: flex; align-items: center;">
            <ion-icon :name="d.icon" class="ico" v-if="isMobile"></ion-icon>
            {{ d.label }}
            <span :id="'chevron-'+i+'-'+index" style="display: flex; align-items: center">
              <ion-icon name="chevron-down" class="ico" v-if="d.items != null">
              </ion-icon>
            </span>
          </div>
          <div class="sub-menu-list" v-if="d.items != null" :id="'sub-'+i+'-'+index">
            <nav class="sub-menu" v-for="(a, index) in d.items" :key="index" @click="$nuxt.$router.push('/test')">
              <ion-icon :name="a.icon" class="ico"></ion-icon> {{ a.label }}
            </nav>
          </div>
        </nav>
      </div>
      <div v-if="menu.isMobile && isMobile">
        <h4>{{ menu.label }}</h4>
        <nav class="menu" v-for="(d, index) in menu.items" :key="index"
          @click="d.items != null ? subMenu(i, index) : $nuxt.$router.push(d.to)">
          <div style="display: flex; align-items: center;">
            <ion-icon :name="d.icon" class="ico" v-if="isMobile"></ion-icon>
            {{ d.label }}
            <span :id="'chevron-'+i+'-'+index" style="display: flex; align-items: center">
              <ion-icon name="chevron-down" class="ico" v-if="d.items != null" style="margin-left: 10px;">
              </ion-icon>
            </span>
          </div>
          <div class="sub-menu-list" v-if="d.items != null" :id="'sub-'+i+'-'+index">
            <nav class="sub-menu" v-for="(a, index) in d.items" :key="index" @click="$nuxt.$router.push('/test')">
              <ion-icon :name="a.icon" class="ico"></ion-icon> {{ a.label }}
            </nav>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'nav_menu',
        props: {
            items: Array,
        },
        data() {
            return {
                sub_menu: [],
                isMobile: false,
            }
        },
        methods: {
            subMenu(i, index) {
                let x = document.getElementById("sub-" + i + "-" + index)
                let chevron = document.getElementById("chevron-" + i + "-" + index)
                if (x.style.display == 'none') {
                    x.style.animation = 'subMenuShow 0.5s ease'
                    x.style.display = "block"
                    chevron.style.animation = 'chevronUp 0.5s ease'
                    setTimeout(() => chevron.style.transform = 'rotate(180deg)', 500)
                } else {
                    x.style.animation = 'subMenuClose 0.5s ease'
                    chevron.style.animation = 'chevronDown 0.5s ease'
                    setTimeout(() => {
                        x.style.display = "none"
                        chevron.style.transform = 'rotate(0deg)'
                    }, 500)

                }
            }
        },
        async mounted() {
            if (document.body.offsetWidth > 1100) {
                return this.isMobile = false
            } else {
                return this.isMobile = true
            }
        }
    }
</script>

<style lang="postcss">
    .menu-list {
        display: flex;
        transition: all 0.5 ease;
    }
    
    .menu-list h4 {
        color: var(--black-light);
    }
    
    .menu-list nav {
        padding: 1em 1.5em 1em 1.5em;
        transition: all 0.5s ease;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: all 0.5 ease;
    }
    
    .menu-list nav:hover {
        color: var(--green);
    }
    
    .menu-list nav .sub-menu-list {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        box-shadow: 0px 5px 25px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 5px 25px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 25px -10px rgba(0, 0, 0, 0.25);
        animation: subMenuShow 0.5s ease;
        transition: all 0.5s ease;
    }
    
    @keyframes subMenuShow {
        from {
            opacity: 0;
            transform: translate(0, -100%);
        }
        to {
            opacity: 1;
            transform: translate(0, 0);
        }
    }
    
    @keyframes subMenuClose {
        from {
            opacity: 1;
            transform: translate(0, 0);
        }
        to {
            opacity: 0;
            transform: translate(0, -100%);
        }
    }
    
    .menu-list nav .sub-menu-list nav {
        background-color: var(--white);
        color: var(--black-light);
        padding: 1em 2em 1em 2em;
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }
    
    .menu-list nav .sub-menu-list nav:hover {
        background-color: var(--white-light);
        color: var(--black);
    }
    
    .menu-list nav .sub-menu-list nav .ico {
        margin-right: 10px;
    }
    
    @media (max-width: 1100px) {
        .menu-container {
            margin-bottom: 2em;
        }
        .menu-list {
            flex-direction: column;
        }
        .menu-list nav {
            display: block;
        }
        .menu-list nav .ico {
            margin-right: 10px;
        }
        .menu-list nav .sub-menu-list {
            position: relative;
            margin: 20px -20% 0 -20%;
            padding: 1em 1em 1em 2.5em;
            box-shadow: none;
            background-color: var(--white-light);
        }
        .menu-list nav .sub-menu-list nav {
            box-shadow: none;
            background-color: inherit;
            width: auto;
        }
        @keyframes chevronUp {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(180deg);
            }
        }
        @keyframes chevronDown {
            from {
                transform: rotate(180deg);
            }
            to {
                transform: rotate(0deg);
            }
        }
    }
</style>