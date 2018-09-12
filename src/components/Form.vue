<template>
  <div class="card card-body">

    <p class="lead">New ToDo</p>

    <input type="text" class='form-control' v-model="newTodo">

    <button class="btn btn-success mt-4" v-on:click="submit()">
      Submit
    </button>

  </div>
</template>

<!-- // // // // -->

<script>

export default {
  name: 'Form',
  props: ['addTodo'],
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    submit () {
      this.addTodo(this.newTodo)
      this.newTodo = ''
    }
  }
}

</script>

<style type="text/css" scoped>
  p {
    color: blue;
  }
</style>
