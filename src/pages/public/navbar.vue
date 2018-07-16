<template>
  <ul id="app">
    <li>
        <router-link :to="{ name: 'Animate'}">
            Animate
        </router-link>
    </li>
    <li>
        <router-link :to="{ name: 'Layout'}">
            Layout
        </router-link>
    </li>
    <li>
        <router-link :to="{ name: 'Container'}">
            Container
        </router-link>
    </li>
    <li>
        <router-link :to="{ name: 'Select'}">
            Select
        </router-link>
    </li>
    <li></li>
    <li></li>
  </ul>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
