<template>
	<div style="padding: 20px">
		<button @click="copyText">按钮</button>
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
		copyText() {
			Dap.common.copyText('复制成功').then(() => {
				console.log('复制成功')
			})
		}
	}
}
</script>
<style lang="less"></style>
