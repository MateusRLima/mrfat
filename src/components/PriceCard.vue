<template>
  <v-card
    class="price-card flex-grow-1 d-flex flex-column"
    :elevation="isHovered ? 12 : 2"
    @mouseenter="$emit('hover', true)"
    @mouseleave="$emit('hover', false)"
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
        :href="whatsappLink"
        target="_blank"
        rel="noreferrer"
        :aria-label="'Agendar ' + item.name + ' via WhatsApp'"
      >
        <v-icon start class="mr-2">mdi-whatsapp</v-icon>
        {{ $t('prices.whatsapp_btn') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PriceCard",
  props: {
    item: { type: Object, required: true },
    isDark: { type: Boolean, required: true },
    isHovered: { type: Boolean, default: false }
  },
  computed: {
    whatsappLink() {
      const phone = "5581996796347"
      const text = encodeURIComponent(this.item.whatsappMsg)
      return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
