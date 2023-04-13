<template>
  <v-app>
    <v-main>
      <div class="banner">
        <v-container>
          <span class="banner-title pa-2">
            Mr.Fat Barbearia
          </span>
        </v-container>
      </div>
      <v-toolbar dense dark flat>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn small text class="mr-6" @click="scrollToBarber">Barbeiro</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
          <v-btn small text class="mr-6" @click="scrollToPrice">Preços</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
          <v-btn small text @click="scrollToSchedule">Horário</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      </v-toolbar>
      <section>
        <introduction-section />
      </section>
      <section ref="barber">
        <barber-section />
      </section>
      <section ref="price">
        <price-section />
      </section>
      <section ref="schedule">
        <schedule-section />
      </section>
      <v-toolbar dark dense flat>
        <v-spacer></v-spacer>
        <v-toolbar-items>
         <span class="mt-3">Contato: (81) 9 9679-6347</span> 
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <span class="mt-3">@mr.fatbarbearia</span>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-main>
  </v-app>
</template>

<script>
import BarberSection from "@/components/BarberSection.vue"
import PriceSection from "@/components/PriceSection.vue"
import ScheduleSection from "@/components/ScheduleSection.vue"
import IntroductionSection from "@/components/IntroductionSection.vue"

export default {
  name: 'App',

  data: () => ({
    photos: [
      {
        src: require("@/assets/MrFat-3.jpg"),
      },
      {
        src: require("@/assets/MrFat-1.jpg"),
      },
      {
        src: require("@/assets/MrFat-2.jpg"),
      },
    ]
  }),

  components: {
    "barber-section": BarberSection,
    "price-section": PriceSection,
    "schedule-section": ScheduleSection,
    "introduction-section": IntroductionSection,
  },

  methods: {
    scrollToBarber() {
      this.$refs["barber"].scrollIntoView({ behavior: "smooth" })
    },
    scrollToPrice() {
      this.$refs["price"].scrollIntoView({ behavior: "smooth" })
    },
    scrollToSchedule() {
      this.$refs["schedule"].scrollIntoView({ behavior: "smooth" })
    },
  },
};
</script>

<style lang="scss">
.banner {
  background-image: url("@/assets/MrFat-Header.jpg");
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;

  .banner-title {
    border: 1px dotted black;
    border-radius: 4px;
    font-size: 3rem;
    font-weight: 500;
  }
}
</style>
