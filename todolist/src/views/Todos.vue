<template>
  <div>
    <router-link to="/"><button class="btn btn-dark">Home</button></router-link>
    <AddTodo @add-todo="addTodo" />
    <label>
      <select class="form-select" v-model="filter">
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="not-completed">not-completed</option>
      </select>
    </label>
    <hr />
	<Loader v-if="loading"/>
    <TodoList v-else-if="filterTodos.length" :todos="filterTodos" @remove-todo="rem" />
    <p v-else>No todos =(</p>
  </div>
</template>


<script>
//:todos="todos" передаем доступ на чтение данных из этого компонента в TodoList
//filterTodos мы фильтруем массив todos
//что бы прослушать событие add-todo, нужно на него подписаться @add-todo.
//после того как подписались на событие @add-todo будет вызван метод addTodo
import TodoList from "@/components/Todolist.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from "@/components/Loader.vue";
export default {
  name: "App",
  data() {
    return {
      todos: [
        //Теперь данные для массива берем из сервера json fake
        /*{id: 1, title: 'Тренировка', completed: false},
        {id: 2, title: 'Купить хлеб', completed: false},
        {id: 3, title: 'Набрать воды', completed: false},
        {id: 4, title: 'Учеба', completed: false},
        {id: 5, title: 'Спать', completed: false},*/
      ],
	  loading: true,
	  filter: 'all'
    };
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  /*
  watch: {//
	  filter(value){//название функции указываем то за которым мы следим
		console.log(value)
	  }
  },*/
  computed: {
	  filterTodos() {
		  if (this.filter === 'all') {//если фильтр = all
			  return this.todos//вернем весь массив
		  }
		  if (this.filter === 'completed') {//если фильтр = completed
			  return this.todos.filter(t => t.completed)//вернем те значения из массива completed которых равен true
		  }
		  if (this.filter === 'not-completed') {//если фильтр = completed
			  return this.todos.filter(t => !t.completed)//вернем те значения из массива completed которых равен false
		  }
	  }
  },
  methods: {
    rem(id) {
      this.todos = this.todos.filter((t) => t.id !== id); //создаем удаление с помощью метода filter
    },
    addTodo(todo) {
      //создаем метод который принимает обьект newTodo из компонента AddTodo
      this.todos.push(todo); //добавляем этот обьект в конец массива todos
    },
  },
  mounted() {
    //хук когда html шаблон подготовлен и готов создать дом дерево
    /*подключаем фейк api json */
    //Метод fetch() принимает один обязательный аргумент —  путь к данным, которые вы хотите получить. Он возвращает promise, который разрешается в (Response) независимо от того, был ли запрос удачным. Вы можете также передать во втором аргументе необязательный объект с указанием опций (см. Request.)
    // установили лимит в 10 елементов показ ?_limit=10
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json()) //далее получаем ответ и кладем его в json
      .then((json) => {
		  setTimeout(()=>{//ставим таймер чтобы увидеть лоадер
			  this.todos = json; //записываем ответ в наш массив
        		this.loading = false; //Запускаем компонент лоадинг когда вытягиваем данные из сервера
		  },1000)
      });
  },
};
</script>