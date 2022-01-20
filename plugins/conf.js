import Vue from 'vue'

export default ({ app }, inject) => {
    inject('conf', Vue.observable({
        /*GLOBAL VARIABLE*/
        URL_API: 'https://majorwebapi.herokuapp.com/mfstore/',
        GET_IKAN_NEWS: 'get_ikan.php',
        SEARCH: 'search.php',
        GET_IKAN_DETAIL: 'detail_ikan.php',

        /*GLOBAL METHOD*/
        rupiah(angka) {
            var rupiah = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++)
                if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
            return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
        },
        url_fetch(s) {
            return s.replace(/ /g, '-')
        },
        url_fetch_rever(s) {
            return s.replace(/-/g, ' ')
        },
        capitalize(str) {
            var splitStr = str.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                // You do not need to check if i is larger than splitStr length, as your for does that for you
                // Assign it back to the array
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            // Directly return the joined string
            return splitStr.join(' ');
        },
        rating(context) {
            if (context <= 2) {
                return 'star-outline'
            } else if (context > 2 && context < 4) {
                return 'star-half-outline'
            } else {
                return 'star'
            }
        },
        excerpt_nama(string) {
            if (string.length > 12) {
                return string = string.substr(0, 10) + '...'
            } else {
                return string.substr(0, 10)
            }
        },
        parseInt(i) {
            return this.parseInt(i)
        }
    }))
}