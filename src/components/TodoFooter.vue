<template>
  <div class="todoFooter">
    <div class="finish-count">{{ finishTodoLength }} items left</div>
    <div class="showOptions">
      <router-link to="/all" active-class="active">All</router-link>
      <router-link to="/active" active-class="active">Active</router-link>
      <router-link to="/completed" active-class="active">Completed</router-link>
    </div>
    <div class="clearCompleted" @click="clearCompleted">Clear completed</div>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ['todoList'],
  computed: {
    finishTodoLength() {
      return this.todoList.filter((item) => !item.isFinish).length;
    },
  },

  methods: {
    clearCompleted() {
      for(let i = 0; i < this.todoList.length; i++) {
        if(this.todoList[i].isFinish) {
          this.todoList.splice(i, 1);
          i = 0;
        }
      }
    }
  },
};
</script>

<style scoped>
.todoFooter {
  display: flex;
  font-size: 14px;
}
.showOptions {
  margin-left: 60px;
}
.showOptions a {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  color: inherit;
}
/* 设置选项框的大小 */
.showOptions a:first-child {
  width: 40px;
}
.showOptions a:nth-child(2) {
  width: 60px;
}
.showOptions a:nth-child(3) {
  width: 80px;
}
/* 设置选项框选中的样式 */
.active {
  border: solid 2px rgba(199, 66, 66, 0.8);
  border-radius: 4px;
}
/* 清除已完成的项目 */
.clearCompleted {
  margin-left: 70px;
  cursor: pointer;
}
</style>