<template>
  <div class="header pt-16 pb-10">
    <v-container class="text-center pt-10 header-container">
      <v-row align="center">
        <v-col align="center" class="px-0">
          <div class="header-text mx-auto">
            <h1 class="header-title mb-5">
              {{ $t('header.title') }}
            </h1>
            <p class="header-subtitle">
              {{ $t('header.subtitle') }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  name: "HeaderSection",
  setup() {
    const theme = useTheme()
    return {
      theme
    }
  },
  computed: {
    isDark() {
      return this.theme.global.current.value.dark
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');

.header {
  background-color: v-bind('isDark ? "#121212" : "#F1F1F1"');
  color: v-bind('isDark ? "#F1F1F1" : "#1E1E1E"');
  transition: background-color 0.4s ease, color 0.4s ease;

  .header-container {
    border-right: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
    border-left: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
  }

  .header-text {
    width: 70%;
    min-width: 300px;
    
    .header-title {
      font-family: 'Rye';
      font-size: 3.5rem;
      text-align: center;
    }
    
    .header-subtitle {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
}
</style>