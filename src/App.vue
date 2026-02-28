<template>
  <v-app>
    <Navbar @scroll-to="scrollToSection" />
    <v-main>
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
import BarberSection from "@/components/BarberSection.vue"
import PriceSection from "@/components/PriceSection.vue"
import ScheduleSection from "@/components/ScheduleSection.vue"
import HeaderSection from "@/components/HeaderSection.vue"
import FooterSection from "@/components/FooterSection.vue"

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
