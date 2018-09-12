<template>
  <div class="row">

    <!-- V-FOR -->
    <div class="col-lg-6">
      <ul class="list-group">
        <li :class='eachCss(each)' v-for="each in todos" :key="each.label">

          <!-- todoIcon computed -->
          <i v-bind:class="eachIcon(each)" v-on:click="each.done = !each.done"></i>

          {{ each.label }}

          <button class="btn btn-danger pull-right btn-sm" @click="removeTodo(each)">
            <i class="fa fa-trash"></i>
          </button>

        </li>
      </ul>
    </div>

    <div class="col-lg-6">
      <Form v-bind:addTodo="add"/>
    </div>

  </div>
</template>

<!-- // // // // -->

<script>

import Form from './Form'

export default {
  name: 'TodoList',
  components: {
    Form
  },
  data () {
    return {
      todos: [
        { label: 'Eat', done: true },
        { label: 'Sleep', done: false },
        { label: 'Breath', done: true },
        { label: 'Code', done: false }
      ]
    }
  },
  methods: {
    add (newTodo) {
      this.todos.push({ label: newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo (todo) {
      this.todos = this.todos.filter(e => { return e.label !== todo.label })
    },
    eachCss (each) {
      return each.done ? 'list-group-item list-group-item-success' : 'list-group-item'
    },
    eachIcon (each) {
      return each.done ? 'fa fa-check' : 'fa fa-square-o'
    }
  }
}

</script>

<!-- // // // // -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p.subtitle {
    font-size: 1.25rem;
    color: #999999;
  }
</style>
