<template>

  <!-- `row` class wraps Bootstrap columns -->
  <div class="row">

    <!-- 6/12 width Bootstrap column -->
    <div class="col-lg-6">

      <!-- Vue.js Basics  -  styled as Bootstrap card -->
      <div class="card card-body">

        <!-- Interpolte `message` between HTML tags -->
        <p class="lead">
          {{ message }}
        </p>

        <!-- `v-model` directive - binds `message` -->
        <input type="text" class='form-control' v-model="message">

        <hr>

        <!-- Interpolate an expression -->
        <p class="lead">
          {{ checked ? 'Checked' : 'Unchecked' }}
        </p>

        <div class="row">
          <div class="col-lg-6">

            <!-- `v-model` directive  -  binds `checked` in component-->
            <input type="checkbox" v-model="checked">

          </div>

          <div class="col-lg-6">

            <!-- `v-if` directive  -  conditionally render -->
            <i class="fa fa-3x fa-check" v-if="checked"></i>
            <i class="fa fa-3x fa-times" v-else></i>

            <!-- `v-bind:some_attribute` directive -->
            <!-- Evaluates some JS and assigns it to an attribute on an HTML element -->
            <i v-bind:class=" checked ? 'fa fa-3x fa-check' : 'fa fa-3x fa-times' "></i>

            <!-- `v-bind` directive with `computed` value -->
            <!-- NOTE - see `computed` in <script> tag -->
            <i v-bind:class="checkedIcon"></i>

          </div>
        </div>

      </div>
    </div>

    <!-- 6/12 width Bootstrap column -->
    <div class="col-lg-6">

      <!-- Rock-Paper-Scissors  -  styled as Boostrap Card -->
      <div class="card card-body">

        <!-- Typeography - use `lead` class on <p> elements for  -->
        <p class="lead">Rock, Paper, Scissors</p>

        <!-- `row` class wraps Bootstrap columns -->
        <div class="row">

          <!-- 9/12 width Bootstrap column -->
          <div class="col-lg-9">

            <!-- `v-on:some_event` directive -->
            <!-- Assigns an event handler method to an HTML element  -->
            <!-- NOTE - see `methods` in <script> tag -->
            <button class="btn btn-dark" v-on:click="onClick('ROCK')">ROCK</button>
            <button class="btn btn-dark" v-on:click="onClick('PAPER')">PAPER</button>
            <button class="btn btn-dark" v-on:click="onClick('SCISSOR')">SCISSOR</button>

          </div>

          <!-- 3/12 width Bootstrap column -->
          <div class="col-lg-3">

            <!-- `v-if` directive  -  conditionally render some HTML -->
            <!-- `v-else-if` and `v-else` directives  -  chain after `v-if` -->
            <i class="fa fa-3x fa-hand-rock-o" v-if='rps === "ROCK"'></i>
            <i class="fa fa-3x fa-hand-paper-o" v-else-if='rps === "PAPER"'></i>
            <i class="fa fa-3x fa-hand-scissors-o" v-else></i>

          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<!-- // // // // -->

<script>

export default {
  name: 'Hello',
  data () {
    return {
      message: 'Welcome to Vue workshop!',
      checked: true,
      rps: 'ROCK'
    }
  },
  methods: {
    onClick (message) {
      this.rps = message
    }
  },
  computed: {
    checkedIcon () {
      return this.checked ? 'fa fa-3x fa-check' : 'fa fa-3x fa-times'
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
