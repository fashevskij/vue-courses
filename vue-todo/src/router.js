import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home";

Vue.use(Router)
//для создания страниц и переходов между ними
export default new Router({
	mode: 'history',
	routes: [//регистрация путей
		{
			path: '/',
			component: Home
		},
		{
			path: '/todos',
			component: () => import('./views/Todos.vue')//ленивая загрузка
		}
	]
})