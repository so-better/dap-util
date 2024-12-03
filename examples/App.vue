<template>
  <div style="padding: 20px"></div>
</template>
<script lang="ts">
import { number, element, common, data, color } from '../src'

export default {
  mounted() {
    data.set(document.body, 'name', 'kailing')
    const name = data.has(document.body, 'name')
    console.log(name);

  }
}
</script>
<style lang="less"></style>
