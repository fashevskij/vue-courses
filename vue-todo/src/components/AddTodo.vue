<template>
	<form @submit.prevent="onSubmit">
		<input type="text" value="" v-model="title">
		<button type="submit">create</button>
	</form>
</template>

<script>

/*@submit.prevent - отмена по умолчанию отправки формы

v-mode="title" - двусторонне связываем data.title и инпут в который можем изменить это поле data.title
*/
export default {
	data() {
		return {
			title: ''
		}
	},
	methods: {
		onSubmit()  {//создаем метод
			if (this.title != ''){//проверяем не пустая ли строка
				const newTodo = {//создаем новый обьект
					id: Date.now(),//id = дата сейчас
					title: this.title,//title = введенному в инпут
					completed: false//что бы небыло зачеркнуто
				}
				this.$emit('add-todo', newTodo)//cоздаем событие add-todo и передаем обьект newTodo
				this.title = ''//после того как событие сработало очистим инпут
			}
		}
	}
}
</script>

<style scoped>
	form {
		display: flex;
	}
	input {
		width: 300px;
		margin: 10px;
	}
</style>