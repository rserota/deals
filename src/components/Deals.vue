<template>
	<div class="container">
		<h1 class="mb-5">Your Daily Deals!</h1>
		<Deal v-for="deal in deals" :deal="deal" :key="deal.id" @view-deal="viewDeal"></Deal>

		<b-modal ok-only id="deal-modal" :title="focusedDeal.headline">
			<p v-html="focusedDeal.description" class="my-4"></p>
			<b v-html="focusedDeal.instructions" class="my-4"></b>
			<b-img center class="modal-img" :src="focusedDeal.image"></b-img>
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
			deals: [],
			focusedDeal: {}, // which deal is currently being displayed in the modal
		}
	},
	components: {
		Deal,
	},
	async created(){
		let baseUrl = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://localhost:8000'
		const dealResponse = await axios.get(`${baseUrl}/deals`)
		if ( dealResponse.status === 200 ) {
			this.deals = dealResponse.data.deals
			console.log(this.deals)
		}
	},
	methods: {
		viewDeal(chosenDeal){
			this.focusedDeal = chosenDeal
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

a
  color #42b983
</style>
