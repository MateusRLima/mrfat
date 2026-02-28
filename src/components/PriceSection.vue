<template>
  <div class="price" ref="price">
    <v-container class="price-container pa-9">
      <TitlesComponent :title="$t('prices.title')" :title-color="isDark ? '#F1F1F1' : '#1E1E1E'" />
      
      <!-- Haircut Photos Row -->
  
      
      <v-row class="mt-10" justify="center">
        <v-col v-for="(item, i) in pricingItems" :key="i" cols="12" md="4" class="d-flex">
          <v-card
            class="price-card flex-grow-1 d-flex flex-column"
            :elevation="hoveredIndex === i ? 12 : 2"
            @mouseenter="hoveredIndex = i"
            @mouseleave="hoveredIndex = null"
          >
            <div class="card-header pt-6 pb-2 px-4 text-center">
              <h3 class="service-name mb-2">{{ item.name }}</h3>
              <div class="price-display d-flex align-center justify-center">
                <span class="currency mr-1">R$</span>
                <span class="amount">{{ item.price }}</span>
              </div>
              <p class="duration text-caption mt-1">{{ item.duration }}</p>
            </div>

            <v-divider :class="isDark ? 'border-opacity-25' : 'border-opacity-10'"></v-divider>

            <v-card-text class="flex-grow-1 pt-6 px-6">
              <ul class="feature-list">
                <li v-for="(feature, j) in item.features" :key="j" class="d-flex align-center mb-3">
                  <v-icon size="small" color="primary" class="mr-2">mdi-check-circle-outline</v-icon>
                  <span class="feature-text">{{ feature }}</span>
                </li>
              </ul>
            </v-card-text>

            <v-card-actions class="pa-6 pt-0">
              <v-btn
                block
                variant="flat"
                color="primary"
                class="schedule-btn py-6"
                :href="getWhatsappLink(item)"
                target="_blank"
                rel="noreferrer"
              >
                <v-icon start class="mr-2">mdi-whatsapp</v-icon>
                {{ $t('prices.whatsapp_btn') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-8 mb-4 photo-row" justify="center" no-gutters>
        <v-col v-for="(photo, i) in photos" :key="i" cols="6" sm="3" class="pa-2">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              class="photo-card"
            >
              <v-img :src="photo.src" cover aspect-ratio="1" class="haircut-img" />
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TitlesComponent from './TitlesComponent.vue';
import { useTheme } from 'vuetify'
import corte1 from "@/assets/Corte-1.jpg";
import corte2 from "@/assets/Corte-2.jpeg";
import corte3 from "@/assets/Corte-3.jpg";
import corte4 from "@/assets/Corte-4.jpeg";

export default {
  name: "PriceSection",
  components: { TitlesComponent },
  data: () => ({
    hoveredIndex: null,
    photos: [
      { src: corte1 },
      { src: corte2 },
      { src: corte3 },
      { src: corte4 },
    ]
  }),
  setup() {
    const theme = useTheme()
    return { theme }
  },
  computed: {
    isDark() {
      return this.theme.global.current.value.dark
    },
    pricingItems() {
      return [
        {
          name: this.$t('prices.cabelo'),
          price: "35",
          duration: "15-20 min",
          features: [
            this.$t('prices.features.visagismo'),
            this.$t('prices.features.corte_perso'),
            this.$t('prices.features.acabamento'),
          ],
          whatsappMsg: this.$t('prices.whatsapp_msgs.cabelo')
        },
        {
          name: this.$t('prices.barba'),
          price: "20",
          duration: "10-15 min",
          features: [
            this.$t('prices.features.desenho'),
            this.$t('prices.features.pos_barba'),
            this.$t('prices.features.hidratacao')
          ],
          whatsappMsg: this.$t('prices.whatsapp_msgs.barba')
        },
        {
          name: this.$t('prices.cabelo_barba'),
          price: "50",
          duration: "30-45 min",
          features: [
            this.$t('prices.features.combo'),
            this.$t('prices.features.corte_completo'),
            this.$t('prices.features.barba_completa'),
            this.$t('prices.features.experiencia')
          ],
          whatsappMsg: this.$t('prices.whatsapp_msgs.cabelo_barba')
        }
      ]
    }
  },
  methods: {
    getWhatsappLink(item) {
      const phone = "5581996796347"
      const text = encodeURIComponent(item.whatsappMsg)
      return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`
    }
  }
}
</script>

<style lang="scss" scoped>
.price {
  background-color: v-bind('isDark ? "#121212" : "#F1F1F1"');
  color: v-bind('isDark ? "#F1F1F1" : "#1E1E1E"');
  transition: background-color 0.4s ease, color 0.4s ease;

  .price-container {
    border-right: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
    border-left: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
    text-align: center;
  }

  .photo-row {
    margin: 0 auto;
  }

  .photo-card {
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  .haircut-img {
    transition: filter 0.3s ease;
  }

  .price-card {
    background: v-bind('isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)"');
    border: v-bind('isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)"');
    border-radius: 16px;
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    overflow: hidden;

    &:hover {
      transform: translateY(-8px);
      background: v-bind('isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.04)"');
    }

    .service-name {
      font-family: 'Rye';
      font-size: 1.5rem;
      letter-spacing: 1px;
    }

    .price-display {
      .currency {
        font-size: 1rem;
        font-weight: 600;
        align-self: flex-start;
        margin-top: 8px;
      }
      .amount {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1;
      }
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
      
      .feature-text {
        font-size: 0.95rem;
        opacity: 0.9;
      }
    }

    .schedule-btn {
      text-transform: none;
      font-weight: 700;
      letter-spacing: 0.5px;
      border-radius: 12px;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:hover {
        filter: brightness(1.1);
        transform: scale(1.02);
      }
    }
  }
}
</style>
