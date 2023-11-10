<template>
  <v-app>
    <v-main>
      <header-section />
      <v-app-bar dense fixed dark flat outlined>
        <v-spacer></v-spacer>
        <v-tabs dark fixed-tabs show-arrows>
          <v-tab @click="scrollToBarber">Barbearia</v-tab>
          <v-tab @click="scrollToPrice">Preços</v-tab>
          <v-tab @click="scrollToSchedule">Horários</v-tab>
          <v-btn class="mx-2"  icon href="https://api.whatsapp.com/send?phone=5581996796347"
          target="_blank"><v-icon >mdi-whatsapp</v-icon></v-btn>
          <v-btn class="mr-2"  icon href="https://www.instagram.com/mr.fatbarbearia/"
          target="_blank"><v-icon >mdi-instagram</v-icon></v-btn>
          <v-btn  icon href="https://www.google.com/maps/place/Mr.+Fat+Barbearia/@-8.1739149,-34.9230195,17z/data=!3m1!4b1!4m6!3m5!1s0x7aae1be8703ed25:0x56e33bc3b3a0fa38!8m2!3d-8.1739202!4d-34.9181486!16s%2Fg%2F11kj8wmrn8"
          target="_blank"><v-icon >mdi-google-maps</v-icon></v-btn>
        </v-tabs>
        <v-spacer></v-spacer>
      </v-app-bar>
      <section ref="barber">
        <barber-section />
      </section>
      <section ref="price">
        <price-section />
      </section>
      <section ref="schedule">
        <schedule-section />
      </section>
      <footer-section />
    </v-main>
  </v-app>
</template>

<script>
import BarberSection from "@/components/BarberSection.vue"
import PriceSection from "@/components/PriceSection.vue"
import ScheduleSection from "@/components/ScheduleSection.vue"
import HeaderSection from "@/components/HeaderSection.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
  name: 'App',

  components: {
    "barber-section": BarberSection,
    "price-section": PriceSection,
    "schedule-section": ScheduleSection,
    "header-section": HeaderSection,
    "footer-section": FooterSection,
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
