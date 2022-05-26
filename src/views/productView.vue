<template>

<div class="container-fluid   ">
                  <div class="row">
                        <div class="header-panel col-md-12 d-flex p-0">
                             <div class="col-md-11 p-0 h-100">
                                           <ul 
                                        class="
                                                d-flex
                                                justify-content-center
                                                align-items-center
                                                h-100
                                                py-3 
                                        "
                                >
                                        <li @click="addPss">
                                                Patates Soğan Sarımsak
                                        </li>
                                        <li @click="addSebze">Sebzeler</li>
                                        <li @click="addMeyve">Meyveler</li>
                                        <li @click="addNarenciye">Narenciye</li>
                                        <li  @click="addSalataMalz">
                                                Salata Malzemeleri
                                        </li>
                                        <li @click="addKuru">
                                                Kurutulmuş Meyve Sebze
                                        </li>
                                        <li @click="addKuruMeyveSebze" >
                                                Dondurulmuş Sebze Meyve
                                        </li>
                                     
                                </ul>
                             </div>
                             <div class="col-md-1  d-flex justify-content-start align-items-center">
                                        <i style="font-size:45px" class='bx bx-shopping-bag' @click="this.$router.push({name:'shop'})"></i>
                             </div>
                        </div>
                </div>

        <div class="row  main">
                <div class="col-md-12 position-relative  bg-dark">

                </div>
                <div class="col-md-12 bg-light  mt-2">
                   <div class="col-md-11  d-flex justify-content-end align-items-end p-0 position-absolute ml-5"  v-if="visible" >
                        <div class="col-md-3 animate__animated animate__shakeX  alert alert-success " style="z-index:999">Ürün Sepetinize Eklendi.</div>
                   </div>
                      <div class="row  py-3 px-5">
                          <div class="col-md-2  position-relative " v-for="(product,index) in item" :key="index" >

                                <div class="product-img col-md-12 position-relative p-0" @click="event(product)">
                                     
                                        <img class="img-fluid border mt-1  p-0" :src="product.productİmg">
                                        
                                </div>

                                <div class="col-md-12 product-count mt-1 d-flex justify-content-center   ">
                                        <div class="col-md-5  p-0">
                                                  <p class="text-center  bg-warning p-0" >{{product.productCount}} TL</p>
                                        </div>
                                </div>

                               <div class="col-md-12 product-title">
                                        <p class="text-center">{{product.productTitle}}</p>
                                </div>
                                <div class="col-2 col-md-2 d-flex justify-content-center align-items-center   buy-icon ">
                                       <i @click="Selectedİtem(product)" class='bx bx-plus-medical bx-flashing' style='color:#f1eaea'  ></i>
                                </div>
                        </div>
                      </div>
                </div>
        </div>
</div>
</template>



<script>
import {mapGetters} from "vuex"
export default {
        data(){
                return{
                        item:[],
                        visible:false
                }
        },
        created(){
                this.item = this.getPss
        },
        methods:{
                addPss(){
                        this.item = this.getPss
                },
                addSebze(){
                        this.item = this.vegetable
                },
                addMeyve(){
                        this.item = this.fruit
                }, 
                addNarenciye(){
                        this.item = this.citrus
                },
                addSalataMalz(){
                        this.item = this.saladMaterial
                },
          
                addKuruMeyveSebze(){
                        this.item = this.driedfruitvegetables
                },
                addKuru(){
                        this.item = this.driedfruit
                },
                Selectedİtem(e){
                        this.$store.commit("selectedİtem",e)
                        this.visible=true
                       setTimeout(()=>{
                                this.visible=false
                       },1000)
                }
               
        },      
        computed:{      
                ...mapGetters([
                 'getPss',
                 'vegetable',
                 'fruit',
                 'driedfruitvegetables',
                 'driedfruit',
                 'saladMaterial',
                 'citrus'
                 ])
        }
}
</script>





<style scoped>
.buy-icon{
        position: absolute;
        right:5px !important;
        top: 5px;
        background-color:gray;
        border-radius: 1vh;
}

.header-panel{
        box-shadow: 1px 1px 4px 1px rgb(223, 215, 215);
}


ul li {
        padding-right: 5vh;
        list-style-type: none;
        cursor: pointer;
}
i{
        cursor: pointer;
}
</style>