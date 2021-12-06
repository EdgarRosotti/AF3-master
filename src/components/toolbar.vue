<template>
  <v-app-bar dense dark>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(n, i) in $store.state.products"
          :key="i"
          @click="() => {}"
          :to="{ path: n.route }"
        >
          <v-list-item-title>{{ n.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-toolbar-title></v-toolbar-title>
    <v-spacer></v-spacer>
    <center>
      <v-toolbar-items>
        <center>
          <v-btn text>
            <v-icon>mdi-cart</v-icon>
            <router-link to="/" tag="button"> Compra </router-link>
          </v-btn>
        </center>
        <center>
        </center>
      </v-toolbar-items>
    </center>
  </v-app-bar>
</template>