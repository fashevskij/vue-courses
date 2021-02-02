<template>
	<form @submit.prevent="onSubmit">
		<button class="btn btn-dark" type="submit">create</button>
    <input type="text" value="" v-model="title">
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
    margin: 10px;
	}
	input {
    width: 300px;
    font-size: 13px;
    padding: 6px 0 4px 10px;
    border: 1px solid #cecece;
    background: #F6F6f6;
    border-radius: 8px;
    margin-left: 20px;
	}
  .btn {
    margin-left: 20px;
  }
</style>