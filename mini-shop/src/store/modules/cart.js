export default {
    namespaced: true,
    state: {
        products: []
    },
    mutations: {
        add(state, id_products) {//данная мутация добавляет продукт в массив продуктов
            if (state.products.indexOf(id_products) === -1) {
                state.products.push(id_products)
            }
        },
        remove(state, id_product) {
            let pos = state.products.indexOf(id_product)
            if ( pos !== -1) {
                state.products.splice(pos, 1)
            }
        }
    },
    actions: {
        add(store, id_product) {
            store.commit('add', id_product)
        },
        remove(store, id_product) {
            store.commit('remove', id_product)
        }
    },
    getters: {
        products(state) {
            return state.products;
        },
        cnt(state) {
            return state.products.length;
        }
    }
}