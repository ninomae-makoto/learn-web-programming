<template>
  <div>
    <div class="draggable" v-bind:class="{ dragover: isDragOver }"
      @dragleave.prevent="onDragLeave"
      @dragover.prevent="onDragOver"
      @drop.prevent="onDrop">
      <p>Drag &amp; Drop</p>
    </div>
    <ul>
      <li v-for="fileName in fileNameList" v-bind:key="fileName">
        {{ fileName }}
      </li>
    </ul>
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
      isDragOver: false,
      fileNameList: [] as string[],
    }
  },
  /** Vue構築完了時の処理 */
  created: function init() {
    this.msg = "Hello Vue"
  },
  methods: {
    onDragOver(event: any) {
      this.isDragOver = true
      // console.log(event)
    },

    onDrop(event: any) {
      this.isDragOver = false
      console.log(event)
      const files = event.dataTransfer.files as FileList
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < files.length; i++) {
        console.log(files[i])
        this.fileNameList.push(files[i].name)
      }
    },

    onDragLeave(event: any) {
      this.isDragOver = false
      // console.log(event)
    },
  },
})
</script>
