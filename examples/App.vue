<template>
	<div style="padding: 20px">
		<input type="file" @change="change" />
	</div>
</template>
<script>
import Dap from '../src'
export default {
	mounted() {
		const rgb = [0, 100, 200]
		console.log('rgb', rgb)
		const hsv = Dap.color.rgb2hsv(rgb)
		console.log('hsv', hsv)
		console.log('rgb', Dap.color.hsv2rgb(hsv))
	},
	methods: {
		change(e) {
			const file = e.currentTarget.files[0]
			Dap.file.compressImage(file).then(res => {
				console.log(res)
			})
		}
	}
}
</script>
<style lang="less"></style>
