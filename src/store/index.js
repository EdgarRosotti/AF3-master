import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{Id:1, Typeid: 1, name: 'Headset', price: 875, amount: 5,bought:2, route: '/'}
               ],
    moreProducts: [],
    created: false
  },
  mutations: {
    ReduceAmount(state, payload){
      const id = payload.id;
      const productType = payload.productType
      if(productType < 3){
        state.products[id-1].amount--;
        state.products[id-1].bought++;
        return state.products[id-1]
      } else {
        state.moreProducts.find((r, index) => {if (r.Id == id) {
          console.log(r.name);
          state.moreProducts[index].amount--;
          state.moreProducts[index].bought++;
          console.log(state.moreProducts[index].name);

          return state.moreProducts[index]
        }})
      }
    },
    SetmoreProducts(state, products) {
      products.forEach(product => {
        state.moreProducts.push({
          Id: product.id + 8,
          name: product.name,
          price: product.price,
          amount: (Math.random()*10).toFixed(),
          bought: 0
        })
      });
    },
    setCreated(state){
      state.created = true;
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow&price_less_than=7')
          .then(response => {
              commit('SetmoreProducts', response.data)
          }).catch(err => {
            console.log(err);
          })
  }
  },
  getters: {
    getProductbyType: (state) => (id) => {
      const products = [];
      if(id == 1 || id == 2 ){
        state.products.forEach((product) => {
          if(product.Typeid == id && product.amount > 0)
          products.push(product);
        })      
      } else if (id == 3) {
        state.moreProducts.forEach((product) => {
          if(product.amount > 0)
          products.push(product)
        })
      } else if (id == 4) {
        state.products.forEach((product) => {
          if(product.amount == 0)
            products.push(product)
        })
        state.moreProducts.forEach((product) => {
          if(product.amount == 0)
            products.push(product)
        })
      }
      return products;
    },
    getMostBought(state){
      let MostBoughtProduct ;
      state.products.forEach((r) => {
        if (!MostBoughtProduct){
          MostBoughtProduct = r
        }
        if(r.bought > MostBoughtProduct.bought){
          MostBoughtProduct = r;
        }
      })
      state.moreProducts.forEach((r) => {
        if (!MostBoughtProduct){
          MostBoughtProduct = r
        }
        if(r.bought > MostBoughtProduct.bought){
          MostBoughtProduct = r;
        }
      })      
      return MostBoughtProduct;
    }
  },
  modules: {
  }
})
