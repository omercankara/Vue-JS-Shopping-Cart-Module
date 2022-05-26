<template>
        <div>
                <router-view></router-view>
                
        </div>
</template>


<script>
import { mapGetters } from "vuex";
//import productContainer from "./views/productContainer.vue"

export default {
        components: {
                // productContainer,
              
        },
        computed: {
                ...mapGetters([
                        "getPss",
                        "getSebze",
                        "getMeyve",
                        "getKuruMeyveSebze",
                        "getKurutulmus",
                        "getSalataMalz",
                        "getNarenciye",
                ]),
        },
        created() {
                //console.log(this.gelen)
        },
        data() {
                return {
                        gelen: null,
                };
        },
};
</script>