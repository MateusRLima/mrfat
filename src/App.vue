<template>
  <v-app>
    <v-main>
      <header-section />
      <v-app-bar dense fixed dark flat outlined>
        <v-spacer></v-spacer>
        <v-btn small text @click="scrollToBarber">O Barbeiro</v-btn>
        <v-btn small text @click="scrollToPrice">Preços</v-btn>
        <v-btn small text @click="scrollToSchedule">Horário</v-btn>
        <v-btn class="mr-2" small icon href="https://api.whatsapp.com/send?phone=5581996796347"
        target="_blank"><v-icon small>mdi-whatsapp</v-icon></v-btn>
        <v-btn small icon href="https://www.instagram.com/mr.fatbarbearia/"
        target="_blank"><v-icon small>mdi-instagram</v-icon></v-btn>
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
