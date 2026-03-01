<template>
  <div class="price" ref="price">
    <v-container class="price-container pa-9">
      <TitlesComponent :title="$t('prices.title')" :title-color="isDark ? '#F1F1F1' : '#1E1E1E'" />
      
      <v-row class="mt-10" justify="center">
        <v-col v-for="(item, i) in pricingItems" :key="i" cols="12" md="4" class="d-flex">
          <PriceCard 
            :item="item" 
            :is-dark="isDark" 
            :is-hovered="hoveredIndex === i"
            @hover="val => hoveredIndex = val ? i : null"
          />
        </v-col>
      </v-row>

      <HaircutGallery :photos="photos" />
    </v-container>
  </div>
</template>

<script>
import TitlesComponent from '@/components/TitlesComponent.vue';
import PriceCard from '@/components/PriceCard.vue';
import HaircutGallery from '@/components/HaircutGallery.vue';
import { useTheme } from 'vuetify'
import corte1 from "@/assets/Corte-1.jpg";
import corte2 from "@/assets/Corte-2.jpeg";
import corte3 from "@/assets/Corte-3.jpg";
import corte4 from "@/assets/Corte-4.jpeg";

export default {
  name: "PriceSection",
  components: { TitlesComponent, PriceCard, HaircutGallery },
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
  }
}
</script>

<style lang="scss" scoped>
.price {
  background-color: v-bind('isDark ? "#121212" : "#F1F1F1"');
  color: v-bind('isDark ? "#F1F1F1" : "#1E1E1E"');
  transition: background-color 0.4s ease, color 0.4s ease;

  .price-container {
    text-align: center;
  }
}
</style>
