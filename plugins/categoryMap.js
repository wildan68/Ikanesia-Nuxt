import Vue from 'vue'

export default ({ app }, inject) => {
    inject('category', Vue.observable({
        map: [
            'Halfmoon',
            'Plakat',
            'Giant',
            'Dumbo',
            'Ear',
            'Slayer',
            'Alien',
            'Crowntail',
            'Doubletail',
            'Fancy',
        ]
    }))
}