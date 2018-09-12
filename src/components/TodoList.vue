<template>
  <div class="row">

    <div class="col-lg-6">
      <div class="card card-body">
        <p class="lead">ToDo List Goes Here</p>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card card-body">
        <p class="lead">Todo Form Goes Here</p>
      </div>
    </div>

  </div>
</template>

<!-- // // // // -->

<script>

export default {
  name: 'TodoList',
  data () {
    return {
      todos: [
        { label: 'Eat', done: true },
        { label: 'Sleep', done: false },
        { label: 'Breath', done: true },
        { label: 'Code', done: false }
      ]
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
