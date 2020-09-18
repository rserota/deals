<template>
	<div class="container">
		<b-button v-b-modal.modal-1>Launch demo modal</b-button>
		<Deal v-for="deal in deals" :deal="deal" :key="deal.id"></Deal>

		<b-modal id="modal-1" title="BootstrapVue">
			<p class="my-4">Hello from modal!</p>
		</b-modal>
	</div>
</template>

<script>
import Deal from './Deal.vue'
import axios from 'axios'


export default {
	name: 'Deals',
	data: ()=> {
		return {
			deals: []
		}
	},
	components: {
		Deal,
	},
	async created(){
		console.log(process.env)
		let baseUrl = process.env.NODE_ENV === 'production' ? 'https://production.website.url' : 'http://localhost:8000'
		const dealResponse = await axios.get(`${baseUrl}/deals`)
		if ( dealResponse.status === 200 ) {
			console.log(dealResponse.data)
			this.deals = dealResponse.data.deals
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
