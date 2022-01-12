import Vue from 'vue'

export default ({ app }, inject) => {
    inject('conf', Vue.observable({
        /*GLOBAL VARIABLE*/
        URL_API: 'http://192.168.157.1/ikanesia_api/',
        GET_IKAN_NEWS: 'get_ikan.php',
        SEARCH: 'search.php',

        /*GLOBAL METHOD*/
        rupiah(angka) {
            var rupiah = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++)
                if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
            return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
        },
        url_fetch(context) {
            return context.replaceAll(' ', '-')
        },
        url_fetch_rever(context) {
            return context.replaceAll('-', ' ')
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
    }))
}