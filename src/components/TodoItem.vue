<template>
  <div>
    <li class="todo-item" :class="{ finish: item.isFinish }" v-bind:key="index">
      <input type="checkbox" :checked="item.isFinish" @click="finishTodo(item)">
      <div class="todo-content">
        <span>{{ index + 1 }}</span
        >.
        <span>{{ item.name }}</span>
      </div>
        <i class="fa fa-trash" @click.stop="deleteTodoItem(index)"></i>
    </li>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "TodoItem",
  props: ["item", "todoList", "index"],

  methods: {
    finishTodo(item){
      if(item.isFinish == false){
        item.isFinish = true;
      } else {
        item.isFinish = false;
      }
    },
    deleteTodoItem(indexTarget) {
      pubsub.publish("deleteTodoItem", indexTarget);
    },
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