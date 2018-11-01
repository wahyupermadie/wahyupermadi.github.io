<template src="../../static/theme/base/profile.html">
</template>

<script>
export default {
  name: 'headerview',
  computed: {
    profile () {
      return this.$store.getters.getSection('profile')
    }
  }
}
</script>

<style>
</style>
