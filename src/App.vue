<template>
  <div class="root">
    <!-- 引入font-awesome字体图标 -->
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    <div id="app">
      <div class="container">
        <!-- 项目标题 -->
        <TodoHeader v-on:addItem="addItem"/>

        <!-- 待办列表 -->
        <router-view :todoList="todoList"></router-view>
        <TodoFooter :todoList="todoList"/>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import TodoHeader from "./components/TodoHeader";
import TodoFooter from "./components/TodoFooter";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoFooter,
  },
  data() {
    return {
      todoList: [],
    }
  },
  created() {
    this.todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  },
  methods: {
    addItem(todoItem) {
      this.todoList.unshift(todoItem);
    },
    deleteTodoItem(_, index) {
      this.todoList.splice(index, 1);
    },
  },

  mounted() {
    this.pubId = pubsub.subscribe("deleteTodoItem", this.deleteTodoItem);
  },

  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
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

<style>
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
  /* margin: 100px 0 0 100px; */
  margin: auto;
  margin-top: 100px;
  width: 500px;
  padding: 0 30px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #efefef;
  box-shadow: 6px 2px 5px rgba(0, 0, 0, 0.2);
}

ul {
  list-style: none;
}
</style>
