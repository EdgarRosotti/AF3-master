<template>
  <div>
    <v-card min-height="81vh" fill-height >
      <navigation />
      <div  v-if="getProductbyType.length === 0" class="text-center" min-height="80vh" >
        <v-card class="mx-auto" min-height="80vh"  color="white">
          <v-card-text><h1> Não foi encontrado nenhum produto para essa categoria</h1></v-card-text>
        </v-card>
      </div>
      <v-container v-else fill-height>
        <v-card class="mx-auto" max-width="1000" color="grey">
          <v-container fluid>
            <v-row dense >
              <v-col v-for="(n, i) in getProductbyType " :key="i" cols="12" sm="6" no-gutters>
                <v-card width="500" height="20vh">
                  <v-img>
                    <v-card-title v-text="n.name"> </v-card-title>
                    <v-card-subtitle> Preço: R${{ n.price }} </v-card-subtitle>
                    <v-card-text> quantidade disponivel: {{n.amount}}</v-card-text>
                  </v-img>

                  <v-card-actions>
                    <v-btn outlined rounded text v-if="n.amount >= 1" @click="comprar(n.Id)"> Comprar  </v-btn>
                    <v-btn outlined rounded text v-else > Indisponivel</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    </v-card>
    <Footer />
    <bottomNavigation />
  </div>
</template>


<script>
import systemBar from "../components/systemBar";
import navigation from "../components/navigation";
import bottomNavigation from "../components/bottomNavigation";

export default {
  name: "produtos",

  props: {
    productType: String,
    compare: String,
  },

  methods: {
    comprar (id) {
      this.$store.commit('ReduceAmount', {id, productType: this.productType})
    },
  },
  computed: {
    myProducts () {
      return this.$store.state.products
    },
    outOfStock () {
      return this.$store.state.outOfStock
    },
    amount() {
      return this.$store.getters.getLowAmount
    },
    getProductbyType() { 
      return this.$store.getters.getProductbyType(this.productType);
    }
  },
  components: {
    systemBar,
    navigation,
    bottomNavigation,
  },
};
</script>