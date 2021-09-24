<template>
  <div>
    <li class="todo-item" :class="{ finish: item.isFinish }" v-bind:key="index">
      <!-- <i class="fa fa-circle-o" aria-hidden="false"></i> -->
      <input type="checkbox" :checked="item.isFinish" @click="finishTodo(item)">
      <div class="todo-content">
        <span>{{ index + 1 }}</span
        >.
        <!-- <span>{{ item.name }}</span> -->
        <span>{{ item.name }}</span>
      </div>
      <!-- <div class="operation" v-on:click.stop="finishTodoItem(item)"> -->
        <!-- <i class="fa fa-check"></i> -->
        <i class="fa fa-trash" @click.stop="deleteTodoItem(index)"></i>
      <!-- </div> -->
    </li>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "TodoItem",
  props: ["item", "todoList", "index"],
  // data() {
  //   return {
  //     title: "TODO LIST",
  //     todoList: [],
  //     newTodo: "",
  //     finishTotal: 0,
  //   };
  // },
  // computed: {
  //   finishTodoLength() {
  //     return this.todoList.filter((item) => item.isFinish).length;
  //   },
  // },
  // created() {
  //   this.todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  // },

  methods: {
    finishTodo(item){
      if(item.isFinish == false){
        item.isFinish = true;
      } else {
        item.isFinish = false;
      }
    },

    // finishTodoItem(item) {
    //   item.isFinish = true;
    // },
    deleteTodoItem(indexTarget) {
      // console.log(this);
      // this.todoList.splice(indexTarget, 1);
      pubsub.publish("deleteTodoItem", indexTarget);
    },
    // addTodoItem() {
    //   if (!this.newTodo.trim()) {
    //     alert("todo 不能为空");
    //     return;
    //   }

    //   this.todoList.push({
    //     name: this.newTodo,
    //     isFinish: false,
    //   });

    //   this.newTodo = "";
    // },
  },

  watch: {
    todoList: {
      deep: true,
      handler: function (to) {
        localStorage.setItem("todoList", JSON.stringify(to));
      },
    },
  },
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px;
  line-height: 36px;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
}
.todo-item.finish .todo-content {
  text-decoration: line-through;
}

input[type="checkbox"]{
  zoom:180%;
}
</style>