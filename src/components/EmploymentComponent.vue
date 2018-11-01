<template src="../../static/theme/base/employment.html"></template>

<script>
import TimelineView from './TimelineComponent'
export default {
  data () {
    return {
      employment: this.$store.getters.getSection('employment')
    }
  },
  components: {'TimelineView': TimelineView}
}
</script>

<style scoped>

</style>
