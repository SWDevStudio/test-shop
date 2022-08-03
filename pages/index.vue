<template>
  <div>
    <NuxtTutorial></NuxtTutorial>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NuxtTutorial from "~/components/Tutorial.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {NuxtTutorial},
})
</script>
