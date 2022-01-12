module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'ikanesia',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
    loading: { color: '#3B8070' },
    css: ['swiper/swiper-bundle.min.css'],
    plugins: [
        { src: './plugins/vue-awesome-swiper.js', ssr: false },
        { src: './plugins/conf.js' },
    ],
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
        }
    }
}