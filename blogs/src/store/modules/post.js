 //выносим отдельным модулем и импортируем в index.js
//
export default {
     actions: {
         //что бы инамически менять лимит показаных постов можно передать лимит
         //в action первый параметр всегда некоторый контекст (ctx)
         //action так же моэет принимать async fetchPost ({commit, getters, dispatch}, limit = 10) {

         async fetchPost (ctx, limit = 10) {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + limit);//получаем список постов
            const posts = await res.json();//помещаем эти посты в массив
             ctx.commit('updatePosts', posts)//вызываем мутацию первый параметр мутация, второй пост массив
         }
     },//
     mutations: {//функции которые напрямую меняет store
         updatePosts(state,posts) {
             state.posts = posts
         },
         createPost(state, newPost) {
             state.posts.unshift(newPost)
         }
     },
     state: {// данные приложения
         posts: []
     },
     getters: {//транформируем и получаем из store
         validPosts(state) {
             return state.posts.filter(fun=>{
                return fun.title && fun.body
             })
         },
         allPosts(state){
             return state.posts
         },
         postsCount(state, getters){//получаем длину всех постов
             return getters.validPosts.length
         }
     },
 }