<template>
	<li>
		<span :class="{done: todo.completed}">
			<input type="checkbox" value="" @change="todo.completed = !todo.completed">
			<strong>{{index + 1}}</strong>
		{{todo.title | upper}}
		</span>
		<button class="btn" @click="remove">X</button>
	</li>
</template>

<script>
/*создали кдасс done(зачеркивает текст) 
далее создали :class="{done: todo.complated}"
где :class - динамически обьявили класс в который передали обьект (ключ done:,значение todo.complated)"{done: todo.complated}" соответственно когда значение true это клас активируеться

@change="todo.complated = true"
@change - вызываем событие изменения в котором указываем 
todo.complated = !todo.complated Другими словами переключаем с false на true

index + 1 для того чтобы не выводить первый елемент списка с нулевым индексом
*/

//входные параметры в props можно валидировать на входе
export default {
	props: {
		todo: {
			type: Object,//тип обьект
			required: true//если todo не передан компонент не сможет работать
		},
		index: Number //принимаем idex из компонента todolist
	},
	filters: {//Для распространённых задач форматирования текста во Vue используются фильтры
		upper(value){//функция принимает в качестве value todo.title({{то что стоит тут | upper}})
			//console.log(value)
			return value.toUpperCase()//перегоняем текст в верхний регистр
		}
	},
	methods: {
		remove(){//создаем метод для удаления 
		/* создаем события $emit('название события', данные которые передаем) */
		 this.$emit('remove-todo', this.todo.id)
		}
	}
}
</script>

<style scoped>
li {
	
border: 1px solid #ccc;
display: flex;
justify-content: space-between;
padding: .5rem 2rem;
margin-bottom: 1rem;
}
.btn{
	background: red;
	color: #fff;
	border-radius: 50%;
	font-weight: bold;
}
input {
	margin-right: 2rem;
}
.done{
	text-decoration: line-through;
}
</style>