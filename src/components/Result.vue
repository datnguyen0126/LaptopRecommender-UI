<template>
    <div class="container text-dark main">
        <h3>Here are products for you, enjoy</h3>
        <router-link to="/"><button class="btn btn-primary">Back to home</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'result'
}
</script>

<style>
.main {
  padding-top: 70px;
  border-bottom: 1px solid #eee;
  font-size: 15px;
}
</style>
