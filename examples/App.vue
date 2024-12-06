<template>
  <div style="padding: 20px"></div>
</template>
<script lang="ts">
import { platform } from '../src'

export default {
  mounted() {
    console.log(platform.browser());

  }
}
</script>
<style lang="less"></style>
