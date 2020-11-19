const APP = new Vue({
  el:'#app',
  data:{
    todos : [{todo:'fare la spesa',textarea:false},{todo:'fare schifo',textarea:false},{todo:'comprare la robbba',textarea:false}],
    newtodos:'',
    show:false,
    modified:''
  },
  methods:{
    addTodo : function(){
      if(this.newtodos==='' || this.todos.filter(item => item.todo === this.newtodos).length > 0){
        this.show = true;
      }else{
        let newtodo ={};
        newtodo.todo=this.newtodos;
        newtodo.textarea= false
        this.todos.push(newtodo)
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
    },
    text:function(i){
      this.todos[i].textarea = true;
        APP.$forceUpdate()
    },
    modTodo:function(i){
      let newtodo={};
      newtodo.todo = this.modified;
      newtodo.textarea= false;
      this.todos[i]=newtodo;
      this.modified='';
      APP.$forceUpdate()
    }
  }
})
