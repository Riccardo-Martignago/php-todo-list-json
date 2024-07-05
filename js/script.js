const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [],
            apiUrl: './list.php',
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
        } 
    },
    created(){
        this.getDataList();
    }
}).mount('#app')