const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [],
            apiUrl: './list.php',
            textToAdd: '',
        }
    },
    methods:{
        getDataList(){
            axios.get(this.apiUrl)
            .then((response) => {
                console.log(response.data.todos);
                this.todoList = response.data.todos;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        },
        addTodo(newText){
            objToAdd = {
                text: newText,
                done: false
            };
            this.todoList.push(objToAdd);
            this.textToAdd = '';
        } 
    },
    created(){
        this.getDataList();
    },
}).mount('#app')