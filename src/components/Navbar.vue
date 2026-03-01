<template>
  <v-app-bar
    class="navbar"
    flat
    fixed
    height="70"
  >
    <v-container class="d-flex align-center py-0">
      <v-img
        :src="logoSrc"
        max-height="50"
        max-width="150"
        contain
        position="left"
        alt="Mr. Fat Logo"
        class="navbar-logo mr-4"
      />
      <v-spacer></v-spacer>
      <v-tabs
        v-model="tab"
        class="nav-tabs"
        hide-slider
      >
        <v-tab value="barber" @click="$emit('scroll-to', 'barber')">{{ $t('nav.barbershop') }}</v-tab>
        <v-tab value="price" @click="$emit('scroll-to', 'price')">{{ $t('nav.prices') }}</v-tab>
        <v-tab value="schedule" @click="$emit('scroll-to', 'schedule')">{{ $t('nav.hours') }}</v-tab>
      </v-tabs>

     
      
      <div class="social-icons ml-4">
        <v-btn
          icon="mdi-whatsapp"
          variant="text"
          href="https://api.whatsapp.com/send?phone=5581996796347"
          target="_blank"
          class="social-btn"
          aria-label="WhatsApp"
          rel="noreferrer noopener"
        ></v-btn>
        <v-btn
          icon="mdi-instagram"
          variant="text"
          href="https://www.instagram.com/mr.fatbarbearia/"
          target="_blank"
          class="social-btn"
          aria-label="Instagram"
          rel="noreferrer noopener"
        ></v-btn>
        <v-btn
          icon="mdi-google-maps"
          variant="text"
          href="https://www.google.com/maps/place/Mr.+Fat+Barbearia/@-8.1739149,-34.9230195,17z/data=!3m1!4b1!4m6!3m5!1s0x7aae1be8703ed25:0x56e33bc3b3a0fa38!8m2!3d-8.1739202!4d-34.9181486!16s%2Fg%2F11kj8wmrn8"
          target="_blank"
          class="social-btn"
          aria-label="Google Maps"
        ></v-btn>
      </div>

      <div class="icon-attribution hidden-sm-and-down">
      </div>
      <v-btn
        :icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        variant="text"
        class="theme-toggle ml-2"
        :aria-label="isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'"
        @click="toggleTheme"
      ></v-btn>

      <v-spacer class="hidden-xs-only"></v-spacer>

       <v-menu
        v-model="langMenu"
        location="bottom end"
        offset="10"
        transition="scale-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            icon
            size="small"
            class="lang-fab ml-4"
            elevation="2"
            aria-label="Selecionar idioma"
          >
            <v-avatar size="32">
              <v-img :src="currentLanguage.flag" alt="Idioma atual" />
            </v-avatar>
          </v-btn>
        </template>

        <v-list class="lang-menu-list py-2" bg-color="transparent" elevation="0">
          <v-list-item v-for="lang in otherLanguages" :key="lang.code" class="pa-0 mb-2 justify-end">
            <v-btn
              icon
              size="small"
              class="lang-sub-fab"
              @click="changeLocale(lang.code)"
              elevation="2"
            >
              <v-avatar size="24">
                <v-img :src="lang.flag" :alt="lang.name" />
              </v-avatar>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import i18n from '@/plugins/i18n'
import logoDark from "@/assets/Logo Tema Escuro.png"
import logoLight from "@/assets/Logo Tema Claro.png"
import flagBr from "@/assets/brazil.png"
import flagEn from "@/assets/united-states.png"
import flagEs from "@/assets/spain.png"

export default {
  name: 'AppNavbar',
  data() {
    return {
      tab: null
    }
  },
  setup() {
    const theme = useTheme()
    const langMenu = ref(false)

    return {
      theme,
      langMenu,
      languages: [
        { code: 'pt-br', name: 'Português', flag: flagBr },
        { code: 'en', name: 'English', flag: flagEn },
        { code: 'es', name: 'Español', flag: flagEs }
      ],
      changeLocale: (code) => {
        i18n.global.locale.value = code
        langMenu.value = false
      },
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      }
    }
  },
  computed: {
    isDark() {
      return this.theme.global.current.value.dark
    },
    logoSrc() {
      return this.isDark ? logoDark : logoLight
    },
    currentLanguage() {
      return this.languages.find(l => l.code === i18n.global.locale.value) || this.languages[0]
    },
    otherLanguages() {
      return this.languages.filter(l => l.code !== i18n.global.locale.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background: v-bind('isDark ? "rgba(30, 30, 30, 0.75)" : "rgba(241, 241, 241, 0.75)"') !important;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid v-bind('isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"') !important;
  transition: all 0.3s ease;
}

.nav-tabs {
  :deep(.v-btn) {
    text-transform: none;
    font-weight: 500;
    letter-spacing: 0.5px;
    font-size: 0.95rem;
    color: v-bind('isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(30, 30, 30, 0.7)"');
    transition: color 0.3s ease;
    
    &.v-tab--selected {
      color: v-bind('isDark ? "#F1F1F1" : "#1E1E1E"') !important;
      font-weight: 700;
    }

    &:hover {
      color: v-bind('isDark ? "#F1F1F1" : "#1E1E1E"');
    }
  }
}

.social-btn, .theme-toggle {
  color: v-bind('isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(30, 30, 30, 0.7)"');
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: v-bind('isDark ? "#F1F1F1" : "#1E1E1E"');
    transform: translateY(-2px);
  }
}

.lang-fab {
  background: v-bind('isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"') !important;
  border: 1px solid v-bind('isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"') !important;
  color: v-bind('isDark ? "#F1F1F1" : "#1E1E1E"') !important;
  
  &:hover {
    transform: scale(1.05);
  }
}

.lang-sub-fab {
  background: v-bind('isDark ? "rgba(45, 45, 45, 0.9)" : "rgba(255, 255, 255, 0.9)"') !important;
  border: 1px solid v-bind('isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"') !important;
  
  &:hover {
    transform: scale(1.1);
  }
}

.lang-menu-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.icon-attribution {
  font-size: 10px;
  position: absolute;
  bottom: 2px;
  right: 10px;
  opacity: 0.5;
  
  .attribution-link {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 600px) {
  .nav-tabs {
    :deep(.v-btn) {
      padding: 0 8px;
    }
  }
  
  .lang-fab {
    width: 40px !important;
    height: 40px !important;
    margin-left: 8px !important;
  }
  
  .lang-sub-fab {
    width: 32px !important;
    height: 32px !important;
  }
}
</style>
