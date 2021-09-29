<template>
  <div class="root">
    <!-- 引入font-awesome字体图标 -->
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    <div id="app">
      <div class="container">
        <!-- 项目标题 -->
        <TodoHeader v-on:addItem="addItem"/>

        <!-- 待办列表 -->
        <!-- :todoList="todoList" 父组件向子组件传参数 -->
        <router-view :todoList="todoList"></router-view>
        <TodoFooter :todoList="todoList"/>
      </div>
    </div>
  </div>
</template>

<script>
// pubsub-js 消息订阅与发布 用于子组件向父组件传参
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
      //插入数据到数组头
      this.todoList.unshift(todoItem);
    },
    deleteTodoItem(_, index) {
      //splice：修改数组数据
      this.todoList.splice(index, 1);
    },
  },

  mounted() {
    //消息订阅与发布的订阅
    this.pubId = pubsub.subscribe("deleteTodoItem", this.deleteTodoItem);
  },

  beforeDestroy() {
    //销毁该组件时取消订阅
    pubsub.unsubscribe(this.pubId);
  },

  watch: {
    todoList: {
      //深度监测:可监测数组内容的变化
      deep: true,
      //就算不写handler，这个function编译完成后也会默认编译成handler
      handler: function (to) {
        //本地存储
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
  /* background: linear-gradient(135deg, #fdfbfb, #e7f0fd); */
  padding-top: 100px;
  height: 500px;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
}
.container {
  /* margin: 100px 0 0 100px; */
  margin: auto;
  /* margin-top: 100px; */
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
