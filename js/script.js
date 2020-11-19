const APP = new Vue({
  el:'#app',
  data:{
    todos : [{todo:'eat',textarea:false},{todo:'sleep',textarea:false},{todo:'rave',textarea:false},{todo:'repeat',textarea:false}],
    newtodos:'',
    show:false,
    modified:''
  },
  methods:{

    addTodo(){
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

    removeTodo(i){
      this.todos.splice(i,1);
    },

    togglePopUp(){
      this.show = false;
    },

    moveUp(i){
      if(i > 0){
        let prov = this.todos[i];
        this.todos[i]= this.todos[i-1];
        this.todos[i-1] = prov;
        APP.$forceUpdate()
      }
    },

    moveDown(i){
      if(i<(this.todos.length-1)){
        let prov = this.todos[i];
        this.todos[i]= this.todos[i+1];
        this.todos[i+1] = prov;
        APP.$forceUpdate()
      }
    },

    modText(i){
      this.todos[i].textarea = true;
        APP.$forceUpdate()
    },

    modTodo(i){
      let newtodo={};
      newtodo.todo = this.modified;
      newtodo.textarea= false;
      this.todos[i]=newtodo;
      this.modified='';
      APP.$forceUpdate()
    }
  }
});
