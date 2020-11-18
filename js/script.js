const APP = new Vue({
  el:'#app',
  data:{
    todos : ['fare la cacca','fare schifo','comprare la robbba','rapinare vecchiette','prostituirsi'],
    newtodos:'',
    show:true
  },
  methods:{
    addTodo : function(){
      if(this.newtodos==='' || this.todos.includes(this.newtodos)){
        alert('new todo not valid or already inlist')
      }else{
        this.todos.push(this.newtodos)
      }
      this.newtodos = ''
    },
    removeTodo : function(i){
      this.todos.splice(i,1);
    }
  }
})
