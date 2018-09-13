<template>
  <div id="app">
    <nav class="navbar bg-white">
      <a class="navbar-brand text-dark d-flex" href="#/">
        <img width="30" height="30" src="https://github.com/rcos/rcos-branding/blob/master/img/logo-square-red.png?raw=true">
        <span class='ml-3'>
          RCOS URP Form Tool
        </span>
      </a>

      <a class="navbar-brand text-dark" href="https://github.com/rcos/rcos-forms" target="_blank">
        <i class="fa fa-lg fa-github mr-1"></i>
        GitHub Source
      </a>
    </nav>

    <div class="container pt-4">
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
html {
  height: 100%;
}

body {
  height: 100%;
  background: #f5f6f9;
}

#app {
  height: 100%;
  width: 100%;
}
</style>
