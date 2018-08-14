<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    //
  },
  data() {
    return {
      msg: "",
    }
  },
  /** Vue構築完了時の処理 */
  created: function init() {
    this.msg = "Hello Vue"
  },
  methods: {
    test() {
      console.log(this.msg)
    },
  },
})
</script>
