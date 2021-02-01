export default {
    /*  namespaced: true - убирет проблемы с пересечением имен одинаковых находящихся
    * в разных модулях например item
    * обращение к ним будет выглядить так $store.state['products/item]
    * $store.state['menu/item]
    * */

    namespaced: true,
    state: {
        items: [
            {
                url: '/products',
                text: 'Products List'
            },
            {
                url: '/cart',
                text: 'Your Cart'
            },
            {
                url: '/checkout',
                text: 'Order Now'
            },
        ]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        items(state) {
            return state.items;
        }
    }
}