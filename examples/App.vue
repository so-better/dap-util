<template>
  <div style="padding: 20px"></div>
</template>
<script lang="ts">
import { event } from '../src'

export default {
  mounted() {
    event.on(document.body, 'click', e => {
      console.log(111);
    })
    const name = event.get(document.body)
    console.log(name);

  }
}
</script>
<style lang="less"></style>
