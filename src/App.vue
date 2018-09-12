<template>
  <div>

    <nav class="navbar bg-dark">
      <a class="navbar-brand text-light" href="#/">RCOS URP Forms</a>
    </nav>

    <div id="app" class="container pt-4">
      <router-view/>
    </div>

  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style type="text/css">
  footer {
    position: absolute;
    bottom: 0;
  }
</style>
