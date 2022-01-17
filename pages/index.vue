<template>
  <div class="mainapp">
    <Header />
    <HomeContent/>
  </div>
</template>

<script>
    import Header from '../layouts/header.vue'
    import HomeContent from '../layouts/content/home.vue'
    export default {
        name: 'index',
        components: {
            Header,
            HomeContent,
        },
        head() {
          return {
            title: 'Home | MajorFish Store'
          }
        }
    }
</script>
