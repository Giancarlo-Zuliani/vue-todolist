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
    },
    moveUp :function(i){
      if(i > 0){
        var prov = this.todos[i];
        this.todos[i]= this.todos[i-1];
        this.todos[i-1] = prov;
        APP.$forceUpdate()
      }
    },
    moveDown:function(i){
      if(i<(this.todos.length-1)){
        let prov = this.todos[i];
        this.todos[i]= this.todos[i+1];
        this.todos[i+1] = prov;
        APP.$forceUpdate()
      }
    }
  }
})
