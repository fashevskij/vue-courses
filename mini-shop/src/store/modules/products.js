import Vue from 'vue'
export default {
    namespaced: true,
    state: {
        items: []
    },
    mutations: {
        loadItems(state, data){
            state.items = data
        }
    },
    actions: {
        loadItems(store){
            Vue.http.get('vueback.php')
                .then(response=> response.json())
                .then(data=>{
                    store.commit('loadItems', data)
                })
        }
    },
    getters: {
        items(state){
            return state.items;
        },
        itemsMap(state){
          let itemsMap = {}

          for (let i = 0; i < state.items.length; i++){
              let product = state.items[i];
              itemsMap[product.id_product] = product;
          }
          return itemsMap
        },
        item:(state, getters) => (id) => {
            return getters.itemsMap[id];
        }
    }
};
/*
function getProducts() {
    return [
        {
            id_product: 1,
            title: 'Iphone 5',
            price: 20000
        },
        {
            id_product: 2,
            title: 'Iphone 6',
            price: 23000
        },
        {
            id_product: 3,
            title: 'Iphone 7',
            price: 26000
        },
    ]
}*/