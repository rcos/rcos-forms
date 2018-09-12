<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card card-body">

          <!-- Interpolte `message` between HTML tags -->
          <p class="lead">
            Welcome to Vue.js Workshop!
          </p>

      </div>
    </div>
  </div>
</template>

<!-- // // // // -->

<script>

export default {
  name: 'Hello'
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
