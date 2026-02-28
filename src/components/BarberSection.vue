<template>
  <div class="barber" ref="barber">
    <v-container class="barber-container pa-9">
      <TitlesComponent :title="$t('barber.title')" :title-color="isDark ? '#F1F1F1' : '#1E1E1E'" />
      <v-row align="center" class="mt-10" justify="center">
        <v-col cols="12">
          <v-card :theme="isDark ? 'dark' : 'light'" variant="outlined" class="barber-card-full">
            <v-row no-gutters align="center">
              <v-col cols="12" md="4" align="center">
                <v-img contain :src="profileImg" class="barber-profile" />
              </v-col>
              <v-col cols="12" md="8">
                <v-card-text class="px-10 py-5 pt-10">
                  <p class="text-left barber-name mb-4">
                    Thales Monteiro, "MrFat"
                  </p>
                  <p class="text-left mb-6 text-h6 font-italic">
                    "{{ $t('barber.quote') }}"
                  </p>

                  <div class="barber-bio mt-6 text-left">
                    <div class="d-flex align-center mb-3">
                      <v-icon icon="mdi-account-star" color="primary" class="mr-3"></v-icon>
                      <span class="text-subtitle-1">{{ $t('barber.age') }}</span>
                    </div>
                    <div class="d-flex align-center mb-3">
                      <v-icon icon="mdi-content-cut" color="primary" class="mr-3"></v-icon>
                      <span class="text-subtitle-1">{{ $t('barber.experience') }}</span>
                    </div>
                    <div class="d-flex align-center mb-3">
                      <v-icon icon="mdi-certificate" color="primary" class="mr-3"></v-icon>
                      <span class="text-subtitle-1">{{ $t('barber.education') }}</span>
                    </div>
                  </div>
                  
                  <div class="d-flex align-center mt-4">
                    <v-btn icon="mdi-whatsapp" color="primary" variant="tonal" href="https://api.whatsapp.com/send?phone=5581996796347"
                      target="_blank" class="mr-4"></v-btn>
                    <v-btn icon="mdi-instagram" color="primary" variant="tonal" href="https://www.instagram.com/mr.fatbarbearia/"
                      target="_blank"></v-btn>
                    <v-spacer></v-spacer>
                  </div>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Google Maps Embed Section -->
      <v-row class="mt-12" justify="center">
        <v-col cols="12">
          <div class="maps-container">
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2846732834314!2d-34.9181296!3d-8.1740497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1be8703ed25%3A0x56e33bc3b3a0fa38!2sMr.%20Fat%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1772293637378!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="450" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  class="maps-iframe border-right"
                ></iframe>
              </v-col>
              <v-col cols="12" md="6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!4v1772293816599!6m8!1m7!1sCAoSHENJQUJJaEROYXJqQWpYUF9oLWFlS0hoRkFndGg.!2m2!1d-8.174046508906994!2d-34.91816099193031!3f193.47243455327234!4f0.7927013986110865!5f0.7820865974627469" 
                  width="100%" 
                  height="450" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  class="maps-iframe"
                ></iframe>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TitlesComponent from './TitlesComponent.vue';
import profileImg from "@/assets/MrFat.jpg";
import { useTheme } from 'vuetify'

export default {
  name: "BarberSection",
  data: () => ({
  }),
  setup() {
    const theme = useTheme()
    return {
      profileImg,
      theme
    }
  },
  computed: {
    isDark() {
      return this.theme.global.current.value.dark
    }
  },
  methods: {
    scrollToBarber() {
      this.$refs["barber"].scrollIntoView({ behavior: "smooth" });
    },
    scrollToPrice() {
      this.$refs["price"].scrollIntoView({ behavior: "smooth" });
    },
    scrollToSchedule() {
      this.$refs["schedule"].scrollIntoView({ behavior: "smooth" });
    },
  },
  components: { TitlesComponent }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');

.barber {
  background-color: v-bind('isDark ? "#121212" : "#F1F1F1"');
  color: v-bind('isDark ? "#F1F1F1" : "#1E1E1E"');
  background-position: center;
  background-size: cover;
  width: 100%;
  transition: background-color 0.4s ease, color 0.4s ease;

  .barber-container {
    border-right: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
    border-left: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
    text-align: center;
  }

  .barber-title {
    font-family: 'Rye';
    font-size: 2.25rem;
    color: #F1F1F1;
    padding: 0.5rem;
    border-radius: 4px;
  }

  .barber-name {
    font-family: 'Rye';
    font-size: 1.2rem;
  }

  .barber-card-full {
    background: v-bind('isDark ? "rgba(45, 45, 45, 0.4)" : "rgba(255, 255, 255, 0.4)"') !important;
    backdrop-filter: blur(10px);
    border: 1px solid v-bind('isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"') !important;
    border-radius: 20px !important;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    
    &:hover {
      transform: translateY(-8px);
      border-color: v-bind('isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.2)"') !important;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3) !important;

      .barber-profile {
        transform: scale(1.05);
      }
    }
  }

  .barber-profile {
    border-radius: 20px;
    margin: 2rem;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    max-width: 280px;
  }

  .maps-container {
    border-radius: 20px;
    overflow: hidden;
    border: 3px solid v-bind('isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"');
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    .maps-iframe {
      display: block;
      transition: filter 0.4s ease;

      &.border-right {
        border-right: 1px solid v-bind('isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"') !important;
      }
    }
  }

  .v-item-group {
    border-radius: 4px !important;
  }
}
</style>