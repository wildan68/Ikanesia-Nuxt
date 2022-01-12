<template>
  <div class="mainapp">
    <Header />
    <Detail/>
  </div>
</template>

<script>
    import Header from '../../../layouts/header.vue'
    import Detail from '../../../layouts/content/detail.vue'
    export default {
        name: 'detail',
        components: {
            Header,
            Detail,
        }
    }
</script>
