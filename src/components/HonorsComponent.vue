<template src="../../static/theme/base/honors.html"></template>

<script>
import TimelineComponent from './TimelineComponent'
export default {
  computed: {
    honors () {
      return this.$store.getters.getSection('honors')
    }
  },
  components: {'TimelineComponent': TimelineComponent}
}
</script>

<style scoped>
.media {
  border: none;
}
</style>
