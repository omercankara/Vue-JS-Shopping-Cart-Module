<template>
   
       <div class="container-fluid">
                <div class="row">

                        <div class="col-md-12  px-5">
                                <h1 class="text-center">Sepetim</h1>
                        </div>
                      
                        <div class="col-md-12 px-5   ">
                                <div class="row">
                                 <div class="col-md-9 mt-2 px-5 d-flex justify-content-center align-items-center" v-for="(product,index) in selected" :key="index" style="border:1px solid gray;">
                                         
                                         <div class="col-md-1">
                                                 <i style="font-size:35px" @click="removeData(product)" class='bx bx-trash'></i>
                                           </div>

                                        <div class="col-md-3 px-4" style="border:1px solid gray; border-radius:3vh;">
                                                <img class="img-fluid" :src="product.productİmg">
                                        </div>

                                  <div class="col-md-7   ">
                                        <div class="col-md-12   d-flex flex-column">
                                                <div class="col-md-12 ">
                                                        <p style="font-weight:bold;">{{product.productTitle}}</p>
                                                </div>
                                                  <div  style="font-weight:bold;" class="col-md-12"><p>{{$filters.currencyUSD(product.totalCount)}}  TL</p></div>
                                        </div>
                                  </div>

                                <div class="col-md-2  d-flex  align-items-center justify-content-around">

                                        <i @click="update(product)"  style="font-size:25px;" class='bx bx-chevron-up-circle'></i>
                                                <p style="font-weight:bold" class="mt-3 ">{{product.adet}} Adet </p>
                                          <i  @click="down(product)" class='bx bx-chevron-down-circle' style="font-size:25px;"></i>
                                </div>

                              </div>
                                        


                              <div class="col-md-3 p-0 d-flex flex-column position-absolute" style="top:0; right:0">
                                        <div class="card">
                                                <div class="card-header d-flex flex-column justify-content-center align-items-center p-4">
                                       
                                                <h3 class="text-center">Seçilen Ürünler</h3>
                                                <h2 class="text-center"> {{$filters.currencyUSD(toplamFiyat)}}  TL</h2>
                                                <button class="btn btn-warning">Alışveriş Tamamla</button>
                                                </div>
                                        </div>
                                        
                              </div>
                        
                                </div>
                                <div v-if="selected.length==0"  class="col-md-9  alert alert-warning">
                                                   Henüz Sepetinizde Ürün Yok
                                </div>
                        </div>
                                        
                </div>
       </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
        computed:{
                ...mapGetters(['getSelectedİtem','toplamFiyat'])
        },
        data(){
                return{
                        selected:[]
                }
        },
        methods:{
                removeData(item){
                         this.$store.commit("removeItem",item)
                         this.selected =  this.selected.filter(e => e.id != item.id)
                         console.log(this.selected)
                },
                down(e){
                        console.log(e)
                        this.$store.commit("down",e)
                },
                update(e){
                        this.$store.commit("update",e)
                }
        },
        created(){
                this.selected = this.getSelectedİtem
        }
}
</script>
<style scoped>
i:hover{
       cursor: pointer;
}
</style>