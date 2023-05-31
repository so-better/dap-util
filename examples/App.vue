<template>
	<div style="padding: 20px">
		<button>按钮</button>
	</div>
</template>
<script>
import Dap from '../src'
export default {
	mounted() {
		console.log(Dap.element.string2dom('<td>444</td>', 'p'))
	}
}
</script>
<style lang="less"></style>
