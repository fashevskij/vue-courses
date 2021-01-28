<template>
	<div>
		<ul>
			<TodoItem 
			v-for="(todo, index) in todos"
			:todo="todo"
			:index="index"
			@remove-todo="removeTodo"/>
		</ul>
	</div>
</template>

<script>
//так как мы передали todos из app его нужно принять, для этого создаем props(входные данные)
//v-for="todo in todos" перебираем массив который мы получили, после перебора нужно каждый элемент масива выводить, для этого передадим todo в компонент todoitem вот так :todo="todo"
/*подписываемся на событие которое мы создали в todoitem чтобы передать todo.id
для этого делаем @remove-todo="removeTodo" где @remove-todo подписка на событие и когда оно происходить вызовится метод removeTodo

:index="index" передаем index эелементов в todoitem чтобы выводить их нумерация была последовательна
*/


import TodoItem from '@/components/Todoitem.vue'
import Todoitem from './Todoitem.vue'
export default {
	props: ['todos'],//передача параметром без валидации
  components: {//компоненты которые мы импортировали
	TodoItem
  },
  methods: {
	  removeTodo(id){//cоздаем метод который принимает todo.id из компонента todoitem который мы передавали
		  this.$emit('remove-todo', id)//и так же создаем событие чтобы передать этот id  в app.vue
	  }
  }
  
}

//scoped - спец атрибут который позволяет создать стили локально для этого компонента
</script>

<style scoped>
ul {
	list-style: none;
	margin: 10px;
	padding: 0;
}
</style>
