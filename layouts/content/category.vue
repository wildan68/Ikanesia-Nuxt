<template>
    <div class="wrapper-content">
        <div class="wrapper">
            <div class="category-content">
                <h3>Kategori Ikan {{ this.$conf.capitalize(this.$conf.url_fetch_rever(this.$nuxt.$route.params.category)) }}</h3>
                <ItemBox :api_url="'kategori.php?cat='+this.$conf.capitalize(this.$conf.url_fetch_rever(this.$nuxt.$route.params.category))" func="search" mode="get"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemBox from '../../components/item_box.vue'
    import LoadPage from '../../components/load_page.vue'
    import NotFound from '../../components/not_found.vue'

    export default {
        name: 'category_layouts',
        components: {
            LoadPage,
            NotFound,
            ItemBox,
        },
        data() {
            return {
                category: null
            }
        },

    }
</script>