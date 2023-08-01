<template>
	<div style="padding: 20px">
		<button @click="copyText">按钮</button>
	</div>
</template>
<script>
import Dap from '../src'
export default {
	mounted() {
		console.log(Dap.element.string2dom('<td>444</td>', 'p'))
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
