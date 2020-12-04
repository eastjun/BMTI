<template>
  <v-dialog v-model="show" :max-width="options.width" :style="{ zIndex: options.zIndex }" @keydown.esc="cancel">
    <v-card>
      <v-toolbar :color="options.color" dark dense flat>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!message" class="pa-4">
        현재 페이지를 작성중입니다. 페이지 이동시 변경된 내용은 저장되지 않습니다
      </v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn @click.native="cancel" color="grey" text>취소</v-btn>
        <v-btn @click.native="agree" color="error">이동</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  computed: {
    show: {
      get() {
        return this.dialog
      },
      set(value) {
        this.dialog = value
        if (value === false) {
          this.cancel()
        }
      }
    }
  },
  methods: {
    open(title, message, options) {
      this.dialog = true
      this.title = title
      this.message = message
      this.options = Object.assign(this.options, options)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    agree() {
      this.resolve(true)
      this.dialog = false
    },
    cancel() {
      this.resolve(false)
      this.dialog = false
    }
  },
  data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      message: null,
      title: null,
      options: {
        color: 'primary',
        width: 290,
        zIndex: 200
      }
    }
  }
}
</script>

<style scoped></style>
