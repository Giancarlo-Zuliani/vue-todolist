const APP = new Vue({
  el:'#app',
  data:{
    todos : ['fare la cacca','fare schifo','comprare la roba'],
    newtodos:''
  },
  methods:{
    addTodo : function(){
      this.todos.push(this.newtodos)
    },
    removeTodo : function(i){
      this.todos.splice(i,1);
    }
  }
})
