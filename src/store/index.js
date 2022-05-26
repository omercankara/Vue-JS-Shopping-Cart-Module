import { createStore } from 'vuex'

export default createStore({
        state:
        {
                Pss: [
                        {
                                id: 1,
                                productİmg: require("/src/img/patates.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                
                                totalCount: null,
                                productTitle: "Patates",
                                test: [],
                        },

                        {
                                id: 2,
                                productİmg: require("/src/img/sarimsak.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Sarımsak",
                        },

                        {
                                id: 3,
                                productİmg: require("/src/img/sogan.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Sogan",
                        },

                ],

                vegetable: [
                        {
                                id: 4,
                                productİmg: require("/src/img/sebzeler/biber.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Biber",
                        },
                        {
                                id: 5,
                                productİmg: require("/src/img/sebzeler/lahana.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Lahana",
                        },
                        {
                                id: 6,
                                productİmg: require("/src/img/sebzeler/yesilbiber.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Yeşil Biber",
                        },
                ],

                fruit: [
                        {
                                id: 7,
                                productİmg: require("/src/img/meyveler/ananas.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Ananas",
                        },
                        {
                                id: 8,
                                productİmg: require("/src/img/meyveler/avakado.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Avakado",
                        },
                        {
                                id: 9,
                                productİmg: require("/src/img/meyveler/elma.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Elma",
                        },


                ],

                driedfruitvegetables: [

                        {
                                id: 10,
                                productİmg: require("/src/img/kurumeyvesebze/ananas.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Ananas",
                        },

                        {
                                id: 11,
                                productİmg: require("/src/img/kurumeyvesebze/armut.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Armut",
                        },

                        {
                                id: 12,
                                productİmg: require("/src/img/kurumeyvesebze/hurm.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Hurma",
                        },

                        {
                                id: 13,
                                productİmg: require("/src/img/kurumeyvesebze/kivi.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Kivi",
                        },



                        {
                                id: 14,
                                productİmg: require("/src/img/kurumeyvesebze/portakal.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Portakal",
                        },

                        {
                                id: 15,
                                productİmg: require("/src/img/kurumeyvesebze/seftali.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Seftali",
                        },
                        {
                                id: 16,
                                productİmg: require("/src/img/kurumeyvesebze/tarcin.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Tarçın",
                        },
                        {
                                id: 17,
                                productİmg: require("/src/img/kurumeyvesebze/visne.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Visne",
                        },
                        {
                                id: 18,
                                productİmg: require("/src/img/kurumeyvesebze/meyve.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Meyve",
                        },


                ],

                driedfruit: [

                        {
                                id: 19,
                                productİmg: require("/src/img/kurutulmus/bezelye.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Patates",
                        },

                        {
                                id: 20,
                                productİmg: require("/src/img/kurutulmus/elma.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Patates",
                        },

                        {
                                id: 21,
                                productİmg: require("/src/img/kurutulmus/misir.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                productTitle: "Patates",
                        },

                        {
                                id: 22,
                                productİmg: require("/src/img/kurutulmus/sogan.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Patates",
                        },


                ],

                saladMaterial: [

                        {
                                id: 23,
                                productİmg: require("/src/img/salatamalz/laho.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Patates",
                        },
                        {
                                id: 24,
                                productİmg: require("/src/img/salatamalz/maro.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Patates",
                        },

                ],


                citrus: [
                        {
                                id: 25,
                                productİmg: require("/src/img/Narenciye/greyfurt.jpg"),
                                productCount: 4.95,
                                adet: 1,
                                totalCount: null,
                                productTitle: "Patates",
                        },
                        {
                                id: 26,
                                productİmg: require("/src/img/Narenciye/portakal.jpg"),
                                productCount: 4.95,
                                adet: 1,

                                totalCount: null,
                                productTitle: "Patates",
                        },

                ],


                totalBalance: null,
                selectedİtem: []
        },
        getters: {
                getPss(state) {
                        return state.Pss
                },
                vegetable(state) {
                        return state.vegetable
                },
                fruit(state) {
                        return state.fruit
                },
                driedfruitvegetables(state) {
                        return state.driedfruitvegetables
                },
                driedfruit(state) {
                        return state.driedfruit
                },
                saladMaterial(state) {
                        return state.saladMaterial
                },
                citrus(state) {
                        return state.citrus
                },
                toplamFiyat(state) {

                        return state.selectedİtem.reduce((sum, selectedİtem) => sum + selectedİtem.totalCount, 0)

                },

                getSelectedİtem(state) {
                        return state.selectedİtem
                },

                getBalance(state) {
                        var total = null
                        state.selectedİtem.forEach(element => {
                                total += element.productCount
                        })
                        return total
                }
        },
        mutations: {
                selectedİtem(state, selected) {
                        const oneİtem = state.selectedİtem.findIndex(x => x.id == selected.id) //
                        if (oneİtem === -1) {
                                state.selectedİtem.push(selected) //Eğer seçilen elemandan yok ise sepete ekle  
                                state.selectedİtem.forEach(items => { //seçilen elemanın indexOf değerini al
                                        var idBilgi = state.selectedİtem.indexOf(items)
                                        console.log(idBilgi)
                                        state.selectedİtem[idBilgi].totalCount = state.selectedİtem[idBilgi].productCount * state.selectedİtem[idBilgi].adet
                                        //gelen id bilgili elemanın total countını gelen id bilgili elemanın product count ve adeti ile çarp eşitle 
                                })
                        } else {
                                state.selectedİtem[oneİtem].adet++
                                state.selectedİtem[oneİtem].totalCount = state.selectedİtem[oneİtem].productCount * selected.adet
                        }
                },
                removeItem(state, selected) {
                        state.selectedİtem = state.selectedİtem.filter(e => e.id != selected.id) //gelen data haricindekileri yeniden dön
                },

                down(state,newCount){
                        const id  = state.selectedİtem.indexOf(newCount)
                        state.selectedİtem[id].adet-=1
                        state.selectedİtem[id].totalCount = state.selectedİtem[id].productCount * newCount.adet
                        if(state.selectedİtem[id].adet < 1){
                                         state.selectedİtem[id].adet=0
                                         state.selectedİtem[id].totalCount = state.selectedİtem[id].productCount * newCount.adet
                        }
                },

                 update(state,upData){
                        const newİd  = state.selectedİtem.indexOf(upData)
                        state.selectedİtem[newİd].adet++
                        state.selectedİtem[newİd].totalCount = state.selectedİtem[newİd].productCount * upData.adet
                }
        },

          




        actions: {
        },
        modules: {
        }
})
