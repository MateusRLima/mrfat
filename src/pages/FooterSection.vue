<template>
  <div class="footer py-10">
    <v-container class="px-9">
      <v-row>
        <v-col sm="6" md="3">
          <h4 class="mb-4">{{ $t('footer.contacts') }}</h4>
          <div class="d-flex flex-column align-start">
            <v-btn size="small" variant="text" class="px-4 mb-3" rel="noreferrer noopener" target="_blank"
              href="https://api.whatsapp.com/send?phone=5581996796347"
              aria-label="Contato via WhatsApp"
            >
              <v-icon size="small" class="mr-2">mdi-whatsapp</v-icon> (81) 9 9679-6347
            </v-btn>
            <v-btn size="small" variant="text" class="px-4" rel="noreferrer noopener" target="_blank"
              href="https://www.instagram.com/mr.fatbarbearia/"
              aria-label="Siga-nos no Instagram"
            >
              <v-icon size="small" class="mr-2">mdi-instagram</v-icon> @mr.fatbarbearia
            </v-btn>
          </div>
        </v-col>
        <v-col sm="6" md="9">
          <h4 class="mb-4">{{ $t('footer.address') }}</h4>
          <v-btn variant="text" class="pa-4 address-btn" rel="noreferrer noopener" target="_blank"
            href="https://www.google.com/maps/place/Mr.+Fat+Barbearia/@-8.1739149,-34.9230195,17z/data=!3m1!4b1!4m6!3m5!1s0x7aae1be8703ed25:0x56e33bc3b3a0fa38!8m2!3d-8.1739202!4d-34.9181486!16s%2Fg%2F11kj8wmrn8"
            aria-label="Ver localização no Google Maps"
            height="auto"
            min-height="64"
          >
            <div class="d-flex align-center text-left py-1">
              <v-icon size="small" class="mr-3">mdi-google-maps</v-icon>
              <div class="ma-0 pa-0" style="line-height: 1.4; font-size: 0.85rem;">
                Av. Ayrton Senna da Silva, 280 - Piedade,<br />
                Jaboatão dos Guararapes - PE, 54420-700
              </div>
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { useTheme } from 'vuetify'

export default {
  name: "FooterSection",
  setup() {
    const theme = useTheme()
    return { theme }
  },
  computed: {
    isDark() {
      return this.theme.global.current.value.dark
    }
  }
}
</script>
<style lang="scss">
.footer {
  border-top: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
  color: v-bind('isDark ? "#F1F1F1" : "#1E1E1E"');
  background-color: v-bind('isDark ? "#121212" : "#F1F1F1"');
  transition: background-color 0.4s ease, color 0.4s ease;
  .address-btn {
    font-size: small;
  }
  .link {
    color: inherit;
  }
}
</style>