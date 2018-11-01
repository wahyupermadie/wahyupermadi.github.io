<template src="../../static/theme/base/skills.html">
</template>

<script>
export default {
  computed: {
    skills () {
      return this.$store.getters.getSection('skills')
    }
  }
}
</script>

<style scoped>

</style>
