# vue-courses
дерективы:
v-bind: однонаправленное связывание данных
v-model: двунаправленное связывание данных
v-on: добавляет событие на елемент
v-if: вернет если тру (елемента в дом дереве нет)
v-show: по принципу v-if но вешает display=none;


key: Уникальный идинтификатор полезен при выводе из бд массива данных , в случае удаления одного из елементов остальные оставят уникальные ключи, если их не задать будет смещение при удалении елементов..и обращение к етим елементам как раньше не прокатит, у них будут новые ключи если их не задать!


data: обьект с входными данными
methods: методы, которые будут добавлены к экземпляру Vue(отличаеться от computed тем что вызов функций внутри просиходит каждый раз с взаимодействием(его изменение) с екземпляром vue)
computed: Вычисляемые свойства, которые будут добавлены к экземпляру Vue. В геттерах и сеттерах this будет указывать на экземпляр Vue.(вызов происходит только когда происходит изменение данного своиства).Так же его нельзя использовать при выполнения асинхронных операций так как это своиство расчитываеться сразу.
watch: аналог computed только хорошо подходить для асинхронных операций.

//В нутри js во вью доступ к переменным через this, в html разметке на прямую
//в обьектах новые свойства не реактивны, а существующие в обьекте изначально реактивны!!чтобы сделать реактивными добавленые новые свойства нужно их добавлять с помощью this.$set(куда, ключ, значение);
//hoock - зацепиться за событие (похоже на ивент в браузере)
template - преоритет выше чем у обычной разметке html

Указать в :class можно string,array,object,[str,obj]
keep-alive: внутри этого тега компоненты зраняться в памяти и заново не пересоздаються


/***veux*///
...распаковывает один обьект в другой
commit(мутаця) - вызов мутации 
dispatch(актив) - вызов из актив

