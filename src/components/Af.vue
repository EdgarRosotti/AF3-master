<template>
  <div>
    <systemBar />
    <v-card height="79vh">
      <navigation />
      <v-container fill-height="10vh">
        <v-card class="mx-auto" max-width="800" max-height="80vh" color="grey">
          <v-container fluid>
            <v-row dense >
              <v-col v-for="(n, i) in $store.state.products" :key="i" cols="12" sm="6" >
                <v-card v-if="n.Typeid === 1" width="400" height="20vh">
                  <v-img>
                    <v-card-title v-text="n.description"></v-card-title>
                    <v-card-subtitle> Price: {{ n.price }} </v-card-subtitle>
                  </v-img>

                  <v-card-actions>
                    <v-btn outlined rounded text> Comprar </v-btn>
                    <v-btn outlined rounded text> Abrir </v-btn>
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
  name: "Af",

  components: {
    systemBar,
    navigation,
    bottomNavigation,
  },
};
</script>