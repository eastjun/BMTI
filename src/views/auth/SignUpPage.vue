<template>
  <v-sheet height="100vh" class="px-2 absolute top-0 w-100">
    <v-card flat class="max-width-sm">
      <v-card-title>회원가입</v-card-title>
      <v-form ref="singupForm" v-model="valid" class="px-2" @submit.prevent>
        <v-text-field v-model="userInfo.email" placeholder="이메일" color="grey darken-2" :rules="rules.email" autofocus required></v-text-field>
        <v-text-field v-model="userInfo.name" placeholder="이름" color="grey darken-2" :rules="rules.name" required></v-text-field>
        <v-text-field
          v-model="userInfo.password"
          :type="'password'"
          placeholder="비밀번호"
          color="grey darken-2"
          :rules="rules.password"
          required
        ></v-text-field>
        <v-btn @click="onSubmit" width="100%" color="primary" :disabled="!valid" depressed :dark="valid">회원가입</v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
import validator from '@/utils/validator'
import { mapActions, mapMutations } from 'vuex'
import { SIGNUP } from '@/store/shared/action.types'
import { SNACKBAR_MESSAGES } from '@/utils/constants'
import { SHOW_SNACKBAR } from '@/store/shared/mutation.types'

export default {
  name: 'SignUp',
  methods: {
    ...mapMutations([SHOW_SNACKBAR]),
    ...mapActions([SIGNUP]),
    isValid() {
      return this.$refs.singupForm.validate()
    },
    async onSubmit() {
      try {
        await this.signup(this.userInfo)
        await this.$router.replace('/login')
      } catch (e) {
        this.showSnackbar(SNACKBAR_MESSAGES.SIGN_UP.FAIL)
        throw new Error(e)
      }
    }
  },
  data() {
    return {
      userInfo: {
        email: '',
        name: '',
        password: ''
      },
      valid: false,
      rules: {
        ...validator
      }
    }
  }
}
</script>

<style scoped></style>
