<template>
  <!--  https://wlada.github.io/vue-carousel-3d/api/-->
  <v-sheet color="transparent">
    <v-sheet class="relative" height="350px">
      <carousel-3d @after-slide-change="onAfterSlideChange" :perspective="0" :height="320" :border="0" class="mt-0">
        <slide :index="0">
          <div v-if="this.targetIndex === 0" class="d-flex justify-center relative mt-5">
            <v-img :src="require('@/assets/elements/4_혼밥.png')" class="absolute solo-dining-baemin" width="100" />
          </div>
          <v-card class="rounded-circle d-flex justify-center align-center mx-auto mt-4 relative" width="250" height="250">
            <v-card class="rounded-circle d-flex justify-center" :elevation="18" width="220" height="220">
              <div class="d-flex justify-center align-center h-100 relative">
                <div class="text-center">
                  <div v-if="this.targetIndex === 0" class="mb-2">
                    <strong>{{ user.name || '배달이' }}</strong
                    >님의 BMTI
                  </div>
                  <h3 class="text-h3 primary-text-color">{{ this.targetIndex === 0 ? '평화주의' : 'BMTI' }}</h3>
                </div>
              </div>
            </v-card>
          </v-card>
        </slide>
        <slide :index="1">
          <div v-if="this.targetIndex === 1" class="d-flex justify-center relative mt-5">
            <v-img :src="require('@/assets/elements/5_룰루랄라.png')" class="absolute lulu-baemin" width="110" />
          </div>
          <v-card class="rounded-circle d-flex justify-center align-center mx-auto mt-4" width="250" height="250">
            <v-card class="rounded-circle mx-auto" width="220" height="220">
              <div class="d-flex justify-center align-center h-100 relative">
                <div class="text-center">
                  <div v-if="this.targetIndex === 1" class="mb-2">
                    <strong>{{ user.name || '배달이' }}</strong
                    >님과 함께 할
                  </div>
                  <h3 class="text-h3 primary-text-color">{{ this.targetIndex === 1 ? '먹메이트' : '먹메이트 찾기' }}</h3>
                </div>
              </div>
            </v-card>
          </v-card>
        </slide>
        <slide :index="2">
          <div v-if="this.targetIndex === 2" class="d-flex justify-center relative mt-5">
            <v-img :src="require('@/assets/elements/새우배달이.png')" class="absolute shrimp-baemin" width="110" />
          </div>
          <v-card class="rounded-circle d-flex justify-center align-center mx-auto mt-4" width="250" height="250">
            <v-card class="rounded-circle mx-auto" width="220" height="220">
              <div class="d-flex justify-center align-center h-100 relative">
                <div class="text-center">
                  <div v-if="this.targetIndex === 2" class="mb-2">
                    <strong>{{ user.name || '배달이' }}</strong
                    >님만을 위한
                  </div>
                  <h3 class="text-h3 primary-text-color">취향저격</h3>
                </div>
              </div>
            </v-card>
          </v-card>
        </slide>
      </carousel-3d>
    </v-sheet>

    <div class="max-width-sm">
      <v-sheet v-if="this.targetIndex === 0" color="white" height="50vh" class="px-6 py-4 relative">
        <h3 class="text-h5 primary-text-color text-center">활동적이고 에너지 넘치는 당신!</h3>
        <p class="text-center font-hanna-air mb-0">어떤 상황에서 그 누구와도 잘 어울려요~</p>
        <div class="w-100 relative">
          <v-card width="80%" flat class="border-dashed rounded-xl mx-auto">
            <v-card-text>
              이것 저것 가리지 않고 잘 먹는 당신, 어떤 메뉴를 골라도 암 오케이~ 싫어하는 것 빼고는 다 잘 먹는 이 시대의 진정한 No.1 먹메이트! 혼자
              먹어도 맛있지만 나눠 먹으면 맛이 두 배가 된다는 사실… 후훗.
            </v-card-text>
          </v-card>
          <div class="d-flex justify-center">
            <div class="mt-3">
              <p class="primary-text-color mb-1 text-center">배민은 아직 날 잘 몰라🧐</p>
              <v-btn to="/bmti/select" x-large color="primary" depressed class="rounded-xl mx-auto">다른 유형 알아보기</v-btn>
            </div>
          </div>
        </div>
      </v-sheet>

      <v-sheet v-if="this.targetIndex === 1" color="white" height="50vh" class="px-6 relative">
        <v-list three-line class="px-0 pt-0">
          <template v-for="(item, index) in chatLists.slice().reverse()">
            <v-divider v-if="index !== 0" :key="`${index}-divider`" :inset="item.inset"></v-divider>
            <router-link to="chat" :key="index" class="text-decoration-none">
              <v-list-item :key="item.title" class="px-0">
                <v-avatar tile class="rounded-lg mb-2">
                  <img :src="item.imageUrl" />
                </v-avatar>
                <v-list-item-content class="pl-3">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle class="">
                    {{ item.subtitle }}
                    <div class="mt-1">
                      독고배달 | VVIP
                      <v-chip class="float-right" color="#2D7673" small dark>{{ item.type }}</v-chip>
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </template>
          <Dialog :close="close" :actions="false">
            <template slot="trigger">
              <v-btn class="fixed bottom-30 right-30" color="primary" fab>
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </template>
            <template slot="title">
              <span class="text-center width-100 mt-4">먹메이트방 만들기</span>
            </template>
            <template slot="text">
              <v-form ref="createChatRoomFrom" v-model="valid" class="px-2" @submit.prevent>
                <v-text-field
                  v-model="chatRoom.title"
                  placeholder="채팅방 이름"
                  color="grey darken-2"
                  :rules="rules.text"
                  autofocus
                  required
                ></v-text-field>
                <v-text-field
                  v-model="chatRoom.subTitle"
                  placeholder="부제 이름"
                  color="grey darken-2"
                  :rules="rules.text"
                  autofocus
                  required
                ></v-text-field>
                <!--                @change="getReviewLectures(session.id, reviewerId)"-->
                <v-select
                  v-model="chatRoom.chatRoomType"
                  :items="chatRoomTypes"
                  label="채팅방 타입"
                  color="cyan"
                  item-color="grey darken-3"
                  outlined
                  dense
                ></v-select>
                <v-btn @click="onSubmit" width="100%" color="primary" :disabled="!valid" depressed :dark="valid">방 만들기</v-btn>
              </v-form>
            </template>
          </Dialog>
        </v-list>
      </v-sheet>

      <v-sheet v-if="this.targetIndex === 2" class="pl-2 pr-0 relative">
        <div class="max-width-sm">
          <v-card flat>
            <v-card-title class="font-hanna py-2">
              먹메이트 인증 맛집
            </v-card-title>
          </v-card>
          <div class="food-image-slider pl-3">
            <carousel-3d :disable3d="true" :perspective="0" :space="120" :border="0" :height="180" class="my-0">
              <slide v-for="(restaurant, i) in restaurants" :index="i" :key="i">
                <div class="rounded">
                  <v-img width="110" height="110" :src="restaurant.imgUrl" />
                  <div class="mt-2 px-1 subtitle-2 font-hanna-air">{{ restaurant.subtitle }}</div>
                </div>
              </slide>
            </carousel-3d>
          </div>

          <v-card flat>
            <v-card-title class="font-hanna py-2">
              이런 메뉴 어때요?
            </v-card-title>
          </v-card>
          <div class="food-image-slider pl-3">
            <carousel-3d :disable3d="true" :perspective="0" :space="120" :border="0" :height="180" class="my-0">
              <slide v-for="(restaurant, i) in restaurants" :index="i" :key="i">
                <div class="rounded">
                  <v-img width="110" height="110" :src="restaurant.imgUrl" />
                  <div class="mt-2 px-1 subtitle-2 font-hanna-air">{{ restaurant.subtitle }}</div>
                </div>
              </slide>
            </carousel-3d>
          </div>
        </div>
      </v-sheet>
    </div>
  </v-sheet>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import validator from '@/utils/validator'
import { SHOW_SNACKBAR } from '@/store/shared/mutation.types'
import { SNACKBAR_MESSAGES } from '@/utils/constants'
import { CREATE_CHAT_ROOM } from '@/store/shared/action.types'
import dialog from '@/mixins/dialog'
import Dialog from '@/components/dialogs/Dialog'

export default {
  name: 'BmtiMainPage',
  components: {
    Dialog,
    Carousel3d,
    Slide
  },
  mixins: [dialog],
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapMutations([SHOW_SNACKBAR]),
    ...mapActions([CREATE_CHAT_ROOM]),
    onAfterSlideChange(index) {
      this.targetIndex = index
    },
    async onSubmit() {
      try {
        this.chatLists.push({
          imageUrl: require('@/assets/elements/food1.png'),
          title: this.chatRoom.title,
          subtitle: this.chatRoom.subTitle,
          creator: {
            nickname: '감독고배달',
            degree: '귀한분'
          },
          type: this.chatRoom.chatRoomType
        })
        this.closeDialog()
        // await this.createChatRoom({ ...this.chatRoom })
        this.showSnackbar(SNACKBAR_MESSAGES.COMMON.SUCCESS)
      } catch (e) {
        this.showSnackbar(SNACKBAR_MESSAGES.COMMON.FAIL)
      }
    }
  },
  data() {
    return {
      chatRoom: {
        chatRoomType: '',
        imageUrl: '',
        subTitle: '',
        title: ''
      },
      chatRoomTypes: ['주문', '방문', '리뷰'],
      valid: false,
      rules: {
        ...validator
      },
      targetIndex: 0,
      slides: 7,
      menus: [
        {
          imgUrl: require('@/assets/elements/냉면.png'),
          subtitle: '함흥 냉면'
        },
        {
          imgUrl: require('@/assets/elements/샐러드.png'),
          subtitle: '콥샐러드'
        },
        {
          imgUrl: require('@/assets/elements/자장면.png'),
          subtitle: '자장면'
        }
      ],
      restaurants: [
        {
          imgUrl: require('@/assets/elements/food4.png'),
          subtitle: '가장 맛있는 샐러드'
        },
        {
          imgUrl: require('@/assets/elements/food5.png'),
          subtitle: '가장 맛있는 치킨'
        },
        {
          imgUrl: require('@/assets/elements/food6.png'),
          subtitle: '가장 맛있는 한식'
        },
        {
          imgUrl: require('@/assets/elements/food4.png'),
          subtitle: '가장 맛있는 샐러드'
        },
        {
          imgUrl: require('@/assets/elements/food5.png'),
          subtitle: '가장 맛있는 치킨'
        },
        {
          imgUrl: require('@/assets/elements/food6.png'),
          subtitle: '가장 맛있는 한식'
        }
      ],
      chatLists: [
        {
          imageUrl: require('@/assets/elements/food1.png'),
          title: '신상 맛집 뚫으러 갑니다~~!',
          subtitle: '군자역에 곱창집 새로 생겼어요!',
          creator: {
            nickname: '감독고배달',
            degree: '귀한분'
          },
          type: '방문'
        },
        {
          imageUrl: require('@/assets/elements/food2.png'),
          title: '닭강정 나눠서 구매하실 분!',
          subtitle: '여러 가지 맛 나눠 먹어요',
          creator: {
            nickname: '감독고배달',
            degree: '귀한분'
          },
          type: '포장'
        }
      ]
    }
  }
}
</script>

<style>
.food-image-slider .carousel-3d-container {
  background-color: white !important;
}

.carousel-3d-slide {
  background-color: transparent !important;
}
.solo-dining-baemin {
  top: 0;
  z-index: 999;
}

.carousel-3d-container {
  background-color: #2ac1bc;
}

.lulu-baemin {
  z-index: 999;
  top: 0;
}

.border-dashed {
  border: 1px dashed gray;
}

.shrimp-baemin {
  z-index: 999;
  transform: rotate(-45deg);
}
</style>
