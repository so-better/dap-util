<template>
	<div style="padding: 20px">
		<div style="height: 3000px"></div>
		<input type="file" @change="change" />
	</div>
</template>
<script>
import Dap from '../src'
export default {
	mounted() {
		console.log(Dap.string.replace('这是一个美好且充满无限可能的世界', 4, 13, '糟糕'))
	},
	methods: {
		change(e) {}
	}
}
</script>
<style lang="less"></style>
