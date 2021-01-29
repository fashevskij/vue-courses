 //выносим отдельным модулем и импортируем в index.js

export default {
     actions: {
         fetchPost() {

         }
     },//
     mutations: {},//функции которые напрямую меняет store
     state: {// данные приложения
         posts: []
     },
     getters: {//транформируем и получаем из store
         allPosts(state){
             return state.posts
         }
     },
 }