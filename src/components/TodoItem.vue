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
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
body {
  background: linear-gradient(135deg, #eebd89, #d13abd);
}
.container {
  margin: 100px 0 0 100px;
  width: 300px;
  padding: 0 30px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #efefef;
  box-shadow: 6px 2px 5px rgba(0, 0, 0, 0.2);
}

.todo-list-title {
  color: #333;
  text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.2);
  text-align: center;
}

ul {
  list-style: none;
}
.todo-list {
  margin-top: 10px;
}
.todo-list .todo-item {
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
.no-todo-List {
  margin-top: 40px;
  text-align: center;
  color: #999;
  font-size: 14px;
}
.todo-item.finish {
  text-decoration: line-through;
}

.add-todo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0;
}

.add-todo-container input {
  flex: 1;
  margin-left: 10px;
  margin-right: 12px;
  line-height: 32px;
  border: none;
  outline: none;
  border-radius: 4px;
}
.add-todo-container .add-btn {
  display: inline-block;
  padding: 0 18px;
  border-radius: 4px;
  line-height: 32px;
  color: #fff;
  background: #1989fa;
  cursor: pointer;
}
</style>