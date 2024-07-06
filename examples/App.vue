<template>
	<div style="padding: 20px"></div>
</template>
<script lang="ts">
import { number, element } from '../src'

export default {
	mounted() {
		console.log(element.string2dom('<td>333</td>'))
	}
}
</script>
<style lang="less"></style>
