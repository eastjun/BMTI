<template>
  <v-sheet height="100vh" class="px-2 absolute top-0 w-100">
    <v-card flat class="max-width-sm">
      <v-card-title>로그인</v-card-title>
      <v-form ref="loginForm" v-model="valid" class="px-2" @submit.prevent>
        <v-text-field v-model="loginInfo.email" placeholder="이메일" color="grey darken-2" :rules="rules.email" autofocus required></v-text-field>
        <v-text-field
          v-model="loginInfo.password"
          :type="'password'"
          placeholder="비밀번호"
          color="grey darken-2"
          :rules="rules.password"
          required
        ></v-text-field>
        <v-btn @click="onSubmit" width="100%" :disabled="!valid" color="primary" depressed :dark="valid">로그인</v-btn>
      </v-form>
      <div class="text-center mt-2">
        <span>
          혹시 배달의민족이 처음이신가요?
        </span>
        <v-btn to="/signup" color="primary" text>회원가입</v-btn>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
import validator from '@/utils/validator'
import { LOGIN, SHOW_SNACKBAR } from '@/store/shared/mutation.types'
import { mapActions, mapMutations } from 'vuex'
import { SNACKBAR_MESSAGES } from '@/utils/constants'

export default {
  name: 'Login',
  methods: {
    ...mapMutations([SHOW_SNACKBAR]),
    ...mapActions([LOGIN]),
    isValid() {
      return this.$refs.loginForm.validate()
    },
    async onSubmit() {
      try {
        await this.login(this.loginInfo)
        await this.$router.replace('/bmti')
      } catch (e) {
        this.showSnackbar(SNACKBAR_MESSAGES.LOGIN.FAIL)
        throw new Error(e)
      }
    }
  },
  data() {
    return {
      loginInfo: {
        email: '',
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
