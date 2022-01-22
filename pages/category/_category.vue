<template>
  <div class="mainapp">
    <div v-if="$nuxt.$route.params.category != null">
      <Header/>
      <Category/>
    </div>
    <NotFound v-else msg="Halaman tidak ditemukan" />
  </div>
</template>

<script>
    import NotFound from '../../components/not_found.vue'
    import Header from '../../layouts/header.vue'
    import Category from '../../layouts/content/category.vue'

    export default {
        name: 'category',
        components: {
            NotFound,
            Header,
            Category,
        },
        data() {
            return {
                title_page: '',
            }
        },
        methods: {
            title() {
                if (this.$nuxt.$route.params.category != null) {
                    return this.$conf.capitalize(this.$conf.url_fetch_rever(this.$nuxt.$route.params.category))
                } else {
                    return 'Tidak Ditemukan'
                }
            },
        },
        head() {
            return {
                title: this.title() + ' | MajorFish Store'
            }
        }
    }
</script>