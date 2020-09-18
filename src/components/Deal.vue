<template>
	<div class="deal my-3">
		<b-card 
			:img-src="deal.image"
			:title="deal.headline" 
			img-right
			class="d-none d-md-flex"
		>
			<i class="quote" v-html="deal.quote"></i>
			<b-card-text v-html="deal.description_preview"></b-card-text>
			<b-button variant="info" @click="viewDeal" class="view-deal" v-b-modal.deal-modal>Read More</b-button>
		</b-card>
		<b-card 
			:img-src="deal.image_urls['160x160']" 
			:title="deal.headline" 
			img-bottom
			class="d-flex d-md-none"
		>
			<i class="quote" v-html="deal.quote"></i>
			<b-card-text v-html="deal.description_preview"></b-card-text>
			<b-button variant="info" @click="viewDeal" class="view-deal" v-b-modal.deal-modal>Read More</b-button>
		</b-card>
	</div>
</template>

<script>

export default {
	name: 'Deal',
	props: {
		deal: Object
	},
	methods: {
		viewDeal() {
			this.$emit('view-deal', this.$props.deal)
		}
	}
}
</script>

<style scoped lang="stylus">
.deal .card
  background-color #7584ad

.card-img-right
  height 160px
  width 160px
  align-self center
  padding 1.5rem

a
  color #42b983

.card-text
  font-size 1.5rem

i.quote p
  padding 0
  margin 0
  
</style>
