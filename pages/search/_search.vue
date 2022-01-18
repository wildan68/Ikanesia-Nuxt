<template>
    <div class="mainapp">
    <div v-if="$nuxt.$route.params.search != null">
        <Header />
        <Search/>
    </div>
    <NotFound v-else msg="Halaman tidak ditemukan"/>
  </div>
</template>

<script>
    import Header from '@/layouts/header.vue'
    import NotFound from '@/components/not_found.vue'
    import Search from '@/layouts/content/search.vue'

    export default {
        name: 'search',
        components: {
            Header,
            NotFound,
            Search,
        },
        methods: {
            title() {
                if (this.$nuxt.$route.params.search != null) {
                    return this.$conf.capitalize(this.$conf.url_fetch_rever(this.$nuxt.$route.params.search))
                } else {
                    return 'Tidak Ditemukan'
                }
            },
        },
        head()  {
            return {
                title: this.title() + ' | MajorFish Store'
            }
        }
    }
</script>