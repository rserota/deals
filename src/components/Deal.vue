<template>
	<div class="deal my-2">
		<b-card 
			:img-src="deal.image_urls['88x88']" 
			srcset="elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
			sizes="(max-width: 600px) 480px,
            800px"
			:title="deal.headline" 
			img-right
		>
			<b-card-text>
				{{deal.description_preview}}
			</b-card-text>
			<i v-html="deal.quote"></i>
		</b-card>
	</div>
</template>

<script>

export default {
	name: 'Deal',
	props: {
		deal: Object
	}
}
</script>

<style scoped lang="stylus">
.card-img-right
  height 88px
  align-self center
  padding-right 16px
a
  color #42b983

  
</style>
