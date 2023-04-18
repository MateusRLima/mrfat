<template>
  <v-app>
    <v-main>
      <header-section />
      <v-toolbar dense dark flat>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn small text @click="scrollToBarber">O Barbeiro</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
          <v-btn small text @click="scrollToPrice">Preços</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
          <v-btn small text @click="scrollToSchedule">Horário</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      </v-toolbar>
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
