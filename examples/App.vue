<template>
	<div style="padding: 20px"></div>
</template>
<script lang="ts">
import { number } from '../src'

export default {
	mounted() {
		console.log(number.divide(3, 2))
	}
}
</script>
<style lang="less"></style>
