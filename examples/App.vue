<template>
  <div style="padding: 20px"></div>
</template>
<script lang="ts">
import { number, element, common, data } from '../src'

export default {
  mounted() {
    data.set(window, 'a', 'hello')
    console.log(data.has(window, 'a'))
  }
}
</script>
<style lang="less"></style>
