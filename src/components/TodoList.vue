<template>
  <div>
    <!-- 待办列表 -->
    <ul class="todo-list" v-if="todoList.length > 0">
      <TodoItem v-for="item,index in todoList" :key="index" :item="item" :index="index"/>
    </ul>
    <!-- 无待办事项时的提示 -->
    <div v-else class="no-todo-list">暂时没有待办事项</div>
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
</style>