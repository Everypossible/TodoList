<template>
  <div>
    <!-- 待办列表 -->
    <ul class="todo-list" v-if="todoList.length > 0">
      <TodoItem v-for="item,index in todoList" :key="index" :item="item" :index="index" v-show="!item.isFinish"/>
    </ul>
    <div v-else class="no-todo-list">no Data</div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: ['todoList'],
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