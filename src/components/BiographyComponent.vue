<template src="../../static/theme/base/biography.html">
</template>

<script>
export default {
  computed: {
    biography () {
      return this.$store.getters.getSection('biography')
    }
  }
}
</script>

<style scoped>
</style>
