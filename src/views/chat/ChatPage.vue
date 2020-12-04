<template>
  <v-sheet color="#F2F2F2" flat height="100vh" class="relative" tile>
    <v-toolbar color="primary" class="w-100" flat>
      <v-btn @click="$router.replace('/bmti')" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="w-100">
        <div class="w-100 text-center pr-12">
          먹메이트들과 수다방
        </div>
      </v-toolbar-title>
    </v-toolbar>
    <section class="msger overflow-y-auto px-4">
      <main class="msger-chat d-flex flex-column-reverse">
        <!--        <div class="msg left-msg my-2">-->
        <!--          <div class="d-flex flex-column">-->
        <!--            <div class="w-100">-->
        <!--              <v-card width="70%" flat color="white" class="rounded-r-xl rounded-tl-xl py-3 px-4 float-left">-->
        <!--                아직 자리 남아있습니다ㅎㅎ 퇴근시간이 7시라서 그 때 마감하려구요!-->
        <!--              </v-card>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <div v-for="(message, index) in messages" :key="index" class="msg right-msg my-2">
          <div class="d-flex flex-column">
            <div class="w-100">
              <v-card width="100%" flat color="#6FEAE5" class="rounded-l-xl rounded-br-xl py-3 px-4 float-right">
                {{ message }}
              </v-card>
            </div>
          </div>
        </div>
      </main>

      <form class="d-flex">
        <v-text-field v-model="myMessage" color="primary" class="rounded-xl pr-2" outlined />
        <v-btn @click="addMessage" fab dark small depressed color="primary" class="rounded-xl mt-2">
          <v-icon dark>
            mdi-arrow-up
          </v-icon>
        </v-btn>
      </form>
    </section>
  </v-sheet>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { HIDE_PRIMARY_BACKGROUND, SHOW_SNACKBAR } from '@/store/shared/mutation.types'
import { FETCH_CHAT_MESSAGES } from '@/store/shared/action.types'

export default {
  name: 'ChatPage',
  methods: {
    ...mapMutations([HIDE_PRIMARY_BACKGROUND, SHOW_SNACKBAR]),
    ...mapActions([FETCH_CHAT_MESSAGES]),
    addMessage() {
      this.messages.unshift(this.myMessage)
      this.myMessage = ''
    }
  },
  data() {
    return {
      myMessage: '',
      messages: []
    }
  }
}
</script>

<style scoped>
.msger {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 56px);
}

.msger-chat {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}
.msger-chat::-webkit-scrollbar {
  width: 6px;
}
.msger-chat::-webkit-scrollbar-track {
  background: #ddd;
}
.msger-chat::-webkit-scrollbar-thumb {
  background: #bdbdbd;
}
.msg {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.msg:last-of-type {
  margin: 0;
}

.right-msg {
  flex-direction: row-reverse;
}
</style>
