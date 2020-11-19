const APP = new Vue({
  el:'#app',
  data:{
    todos : ['fare la spesa','fare schifo','comprare la robbba'],
    newtodos:'',
    show:false
  },
  methods:{
    addTodo : function(){
      if(this.newtodos==='' || this.todos.includes(this.newtodos)){
        this.show = true;
      }else{
        this.todos.push(this.newtodos)
      }
      this.newtodos = ''
    },
    removeTodo : function(i){
      this.todos.splice(i,1);
    },
    togglePopUp : function(){
      this.show = false;
    }
  }
})
