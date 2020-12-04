<template>
  <v-dialog v-model="dialog" :persistent="persistent" :width="width">
    <template #activator="{ on }">
      <div v-on="on">
        <slot name="trigger"></slot>
      </div>
    </template>
    <v-card>
      <v-card-title class="headline">
        <slot name="title" />
      </v-card-title>
      <div class="mx-auto my-3">
        <slot name="image"></slot>
      </div>
      <v-card-text class="text-center overflow-y-auto">
        <slot name="text" />
      </v-card-text>
      <v-card-actions v-if="actions" class="px-9 pb-8">
        <v-spacer></v-spacer>
        <v-btn text @click="closeDialog">취소</v-btn>
        <slot name="action" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    width: {
      type: Number,
      required: false,
      default: 400
    },
    persistent: {
      type: Boolean,
      required: false,
      default: false
    },
    actions: {
      type: Boolean,
      required: false,
      default: true
    },
    close: {
      type: Boolean,
      required: false,
      default: false
    },
    toggle: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  watch: {
    close() {
      this.closeDialog()
    },
    toggle() {
      if (!this.dialog) {
        this.dialog = !this.dialog
      }
    }
  },
  methods: {
    closeDialog() {
      this.dialog = !this.dialog
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
