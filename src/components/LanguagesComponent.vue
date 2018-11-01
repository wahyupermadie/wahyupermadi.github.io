<template src="../../static/theme/base/languages.html"></template>

<script>
var Flags = require('emoji-flags')
export default {
  computed: {
    languages () {
      return this.$store.getters.getSection('languages')
    }
  },
  methods: {
    getFlag (icon) {
      return Flags.countryCode(icon).emoji
    }
  }
}
</script>

<style scoped>

</style>
