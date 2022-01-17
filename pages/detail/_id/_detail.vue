<template>
  <div class="mainapp">
    <div v-if="$nuxt.$route.params.detail != null && $nuxt.$route.params.id != null">
        <Header />
        <Detail />
    </div>
    <NotFound v-else msg="Halaman tidak ditemukan"/>
  </div>
</template>

<script>
    import Header from '../../../layouts/header.vue'
    import Detail from '../../../layouts/content/detail.vue'
    import NotFound from '../../../components/not_found.vue'

    export default {
        name: 'detail',
        components: {
            Header,
            Detail,
            NotFound,
        },
        data() {
            return {
                title_page: '',
            }
        },
        methods: {
            title() {
                if (this.$nuxt.$route.params.id != null && this.$nuxt.$route.params.detail != null) {
                    return this.$conf.capitalize(this.$conf.url_fetch_rever(this.$nuxt.$route.params.detail))
                } else {
                    return 'Tidak Ditemukans'
                }
            }
        },
        head() {
            return {
                title: this.title() + ' | MajorFish Store'
            }
        }

    }
</script>