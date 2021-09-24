<template>
  <div>
    <h2 class="todo-list-title">{{ title }}</h2>
    <!-- 项目标题 -->
    <div class="add-todo-container">
      <input
        type="text"
        v-model.trim="newTodo"
        @keyup.enter="addTodoItem"
        placeholder="What needs to be done？"
      />
      <span class="add-btn" @click="addTodoItem">添加</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  data() {
    return {
      title: "todos",
      newTodo: "",
    }
  },
  props: ['addItem'],
  methods: {
    addTodoItem() {
      if (!this.newTodo.trim()) {
        alert("todo 不能为空");
        return;
      }

      const todoItem = {name: this.newTodo, isFinish: false};
      // this.addItem(todoItem);
      this.$emit('addItem', todoItem);

      this.newTodo = "";
    },
  },
  
};
</script>

<style scoped>
/* * {
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
} */
/* 文本占位符斜体 */
::-webkit-input-placeholder {
   font-style: italic;
}
:-moz-placeholder {
   font-style: italic;  
}
::-moz-placeholder {
   font-style: italic;  
}
:-ms-input-placeholder {  
   font-style: italic; 
}
/* 标题样式 */
.todo-list-title {
  color: rgb(134, 35, 35);
  text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.2);
  text-align: center;
}

ul {
  list-style: none;
}
/* .todo-list {
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
} */

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

.add-todo-container input:focus {
  border: 1px solid rgb(167, 56, 56);
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