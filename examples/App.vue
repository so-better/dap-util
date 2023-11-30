<template>
	<div style="padding: 20px">
		<input type="file" @change="change" />
	</div>
</template>
<script>
import Dap from '../src'
export default {
	mounted() {
		const a = {
			a: {
				xx: 1
			},
			b: 2
		}
		const b = {
			a: {
				xx: 1,
				prop: 1
			},
			b: 2
		}
		console.log(Dap.common.equal(a, b))
	},
	methods: {
		change(e) {}
	}
}
</script>
<style lang="less"></style>
