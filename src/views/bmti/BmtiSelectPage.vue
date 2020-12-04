<template>
  <v-sheet color="primary" class="px-6 py-12 relative">
    <img :src="require('@/assets/elements/냥이_손3.png')" width="120" class="absolute cat-hand-image" />
    <div class="max-width-sm">
      <v-sheet color="transparent" dark>
        <h1 class="text-h2 relative">
          BM <br />
          MBTI 엿보기
          <v-img :src="require('@/assets/elements/x.png')" width="100" class="absolute bottom-0" />
        </h1>
        <h5 class="text-h5 mt-4">
          나를 알고 너를 알면 <br />
          우린 환상의 먹메이트!
        </h5>
      </v-sheet>
      <v-sheet color="transparent">
        <v-card color="white" class="rounded-xl pa-6 mt-6">
          <h6 class="text-h6 font-hanna-air text-grey">아는만큼 먹는다</h6>
          <h3 class="text-h3">미슐랭이세요</h3>
          <h6 class="text-h6 font-hanna-air text-grey mt-3">
            뭐든 분석부터 하고보는 당신, <br />
            깐깐한 게 아니라 꼼.꼼.한 거라구~
          </h6>
          <v-card flat class="border-dashed rounded-xl mx-auto mt-2">
            <v-card-text>
              리뷰 정독은 필수, 냉철한 후기는 선택. 맛있는 식사에 대한 정의가 남다른 당신은 누구에게나 인정받는 ‘믿먹’ 리스트를 가진 찐 먹메이트! 내
              뒤로 다들 줄 서~
            </v-card-text>
          </v-card>
          <div class="d-flex mt-4">
            <v-card class="mx-0" flat>
              <v-card-title class="font-hanna py-2">
                선호 음식
              </v-card-title>
              <v-card-text class="pb-0 d-flex">
                <div class="px-0">
                  <div>
                    <img class="mx-auto" width="80" :src="require('@/assets/elements/type_a_food_1.png')" />
                    <p class="text-center">오일파스타</p>
                  </div>
                </div>
                <div class="px-0">
                  <div>
                    <img width="80" :src="require('@/assets/elements/type_a_food_2.png')" />
                    <p class="text-center">콘샐러드</p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
            <v-card class="text-left" flat>
              <v-card-title class="font-hanna py-2 px-0 text-left">
                궁합 굿
              </v-card-title>
              <v-card-text class="pb-0 pl-0 d-flex">
                <div class="px-0">
                  <div>
                    <img class="mx-auto" width="80" :src="require('@/assets/elements/type_a_food_3.png')" />
                    <p class="text-center">평화주의자</p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
          <div class="d-flex justify-center">
            <!--            <v-btn @click="onUpdateType(TYPES.ENFJ)" class="mx-auto" large color="#2D7673" rounded dark>잇츠 미!</v-btn>-->
            <v-btn to="/bmti" class="mx-auto" large color="#2D7673" rounded dark>잇츠 미!</v-btn>
          </div>
        </v-card>
      </v-sheet>
    </div>
  </v-sheet>
</template>

<script>
import { BTMI_UPDATE } from '@/store/shared/action.types'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { SHOW_SNACKBAR } from '@/store/shared/mutation.types'
import { SNACKBAR_MESSAGES } from '@/utils/constants'

export default {
  name: 'BmtiSelectPage',
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapMutations([SHOW_SNACKBAR]),
    ...mapActions([BTMI_UPDATE]),
    async onUpdateType(userType) {
      try {
        await this.btmiUpdate({ id: this.user.id, userType })
        this.showSnackbar(SNACKBAR_MESSAGES.COMMON.SUCCESS)
        this.$router.replace('/bmti')
      } catch (e) {
        this.showSnackbar(SNACKBAR_MESSAGES.COMMON.FAIL)
        throw new Error(e)
      }
    }
  },
  data() {
    return {
      slides: 7,
      TYPES: {
        ENFJ: 'ENFJ'
      }
    }
  }
}
</script>

<style scoped>
.shrimp-baedal-image {
  top: 20px;
  right: -60px;
}

.cat-hand-image {
  right: 0px;
  top: 0px;
  /*transform: rotate(-20deg);*/
}

.border-dashed {
  border: 1px dashed gray;
}
</style>
