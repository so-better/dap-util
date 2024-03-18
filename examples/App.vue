<template>
	<div style="padding: 20px">
		<div style="height: 3000px"></div>
		<input type="file" @change="change" />
	</div>
</template>
<script lang="ts">
import { number } from '../src'

export default {
	mounted() {
		console.log(number.divide(3, 2))
	},
	methods: {
		change(e) {}
	}
}
</script>
<style lang="less"></style>
