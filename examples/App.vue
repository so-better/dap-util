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
		console.log(Dap.platform.os())
	},
	methods: {
		change(e) {}
	}
}
</script>
<style lang="less"></style>
