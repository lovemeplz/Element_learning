<template>
    <div id="animate">
        <navbar></navbar>
        <animate-fade></animate-fade>
    </div>
</template>

<script>
import animateFade from './components/fade'
import navbar from '../public/navbar'
export default {
  components: {
    animateFade,
    navbar
  }
}
</script>

<style>

</style>
