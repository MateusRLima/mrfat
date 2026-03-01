<template>
  <v-app>
    <Navbar @scroll-to="scrollToSection" />
    <v-main class="main-container">
      <header-section />
      <section ref="barber" class="section-scroll reveal">
        <barber-section />
      </section>
      <section ref="price" class="section-scroll reveal">
        <price-section />
      </section>
      <section ref="schedule" class="section-scroll reveal">
        <schedule-section />
      </section>
      <footer-section />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import BarberSection from "@/pages/BarberSection.vue"
import PriceSection from "@/pages/PriceSection.vue"
import ScheduleSection from "@/pages/ScheduleSection.vue"
import HeaderSection from "@/pages/HeaderSection.vue"
import FooterSection from "@/pages/FooterSection.vue"

export default {
  name: 'App',

  components: {
    Navbar,
    "barber-section": BarberSection,
    "price-section": PriceSection,
    "schedule-section": ScheduleSection,
    "header-section": HeaderSection,
    "footer-section": FooterSection,
  },

  methods: {
    scrollToSection(section) {
      this.$refs[section].scrollIntoView({ behavior: "smooth" })
    },
  },

  mounted() {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }
};
</script>

<style lang="scss">
.section-scroll {
  scroll-margin-top: 80px;
}

.v-container {
  max-width: 1200px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

.main-container {
  border-right: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
  border-left: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  
  &.active {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
