module.exports = {
    modules: ['@nuxtjs/toast'],
    /*
     ** Headers of the page
     */
    head: {
        title: 'MajorFish Store',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'MajorFish Store' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '/style.css' }
        ],
        script: [
            { type: 'module', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js' },
            { type: 'nomodule', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' },
        ],

    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#00b894;' },
    css: ['swiper/swiper-bundle.min.css'],
    plugins: [
        { src: './plugins/vue-awesome-swiper.js', ssr: false },
        { src: './plugins/conf.js' },
    ],
    // Toast
    toast: {
        position: 'top-center',
        duration: 1000,
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        extractCSS: {
            allChunks: true
        },
    }
}