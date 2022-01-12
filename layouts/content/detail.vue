<template>
  <div class="wrapper-content">
    <div class="wrapper">
      <div class="detail-item">
        Test Detail Item {{ $conf.capitalize(data_name) }} {{ $nuxt.$route.params.id }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detail_item',
    data() {
      return {
        data_name: '',
      }
    },
    mounted() {
      this.data_name = this.$conf.url_fetch_rever($nuxt.$route.params.detail)
      axios
        .post(this.$conf.URL_API + this.$conf.GET_IKAN_NEWS)
        .then(response => {
          this.dataIkan = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
        .finally()
    },
  }

</script>

<style>

</style>
