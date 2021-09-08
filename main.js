/* Stampiamo i numeri da 1 a 100 tramite la direttiva v-for
BONUS: stampare solo i numeri pari */
Vue.config.devtools = true;

const app = new Vue({
    el : '#root',
    
    data : {

        images: [
            "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
            "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"],
        timer: null,
        currentIndex: 0
    },

    mounted: function() {
        this.startSlide();
      },

    methods: {
        startSlide: function() {
            this.timer = setInterval(this.next, 3000);
          },
        prev: function() {
            this.currentIndex -= 1;
            if(this.currentIndex < 0) this.currentIndex = this.images.length - 1;
        },
        next: function() {
            this.currentIndex += 1;
            if(this.currentIndex == this.images.length) this.currentIndex = 0;
        },

    
    },

});
