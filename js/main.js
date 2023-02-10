// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce


// Setting Vue Js
const settingVue = Vue.createApp({
    data() {
        return {
            games: {
                title: [
                    // index 0
                    "spiderman",
                    // index 1
                    "rat",
                    // index 2
                    "yellow",
                    // index 3
                    "cat",
                    // index 4
                    "avengers",
                ],

                images: [
                    // spider  index 0
                    "./img/01.webp",
                    // rat  index 1
                    "./img/02.webp",
                    // yellow index 2
                    "./img/03.webp",
                    // cat index 3
                    "./img/04.webp",
                    // avengers index 4
                    "./img/05.webp"
                ],

                activeImage: 0,
                activeTitle: 0
            }
        }
    },
    methods: {
        prevImage() {
            if (
                this.games.activeImage - 1 < 0 &&
                this.games.activeTitle - 1 < 0
            ) {
                this.games.activeImage = this.game.images.length - 1;
                this.games.activeTitle = this.game.title.length - 1;
            } else {
                this.games.activeImage--;
                this.games.activeTitle--;
            }

        },
        nextImage() {
            if (
                this.games.activeImage + 1 >= this.games.images.length &&
                this.games.activeTitle + 1 >= this.games.title.length
            ) {
                this.games.activeImage = 0;
                this.games.activeTitle = 0;
            } else {
                this.games.activeImage++;
                this.games.activeTitle++;
            }


        },

        switchImage() {
            alert("funziona" + index)
        }
    }



})

settingVue.mount("#root")