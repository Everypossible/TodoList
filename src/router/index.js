import VueRouter from 'vue-router'
import TodoList from '../components/TodoList'
import ActiveTodoList from '../components/ActiveTodoList'
import Completed from '../components/CompletedTodoList'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/all'
        },
        {
            path: '/all',
            component: TodoList
        },
        {
            path: '/active',
            component: ActiveTodoList
        },
        {
            path: '/completed',
            component: Completed
        }
    ]
})