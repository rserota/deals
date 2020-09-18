<template>
	<div id="app">
		<Deals />
	</div>
</template>

<script>
import Deals from './components/Deals.vue'

export default {
	name: 'App',
	components: {
		Deals
	}
}
</script>

<style lang="stylus">

html
  font-size 14px

body
  background-color #314570

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #aed1d6
  margin-top 60px
</style>
