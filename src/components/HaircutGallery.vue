<template>
  <v-row class="mt-8 mb-4 photo-row" justify="center" no-gutters>
    <v-col v-for="(photo, i) in photos" :key="i" cols="6" sm="3" class="pa-2">
      <v-hover v-slot="{ isHovering, props }">
        <v-card
          v-bind="props"
          :elevation="isHovering ? 8 : 2"
          class="photo-card"
        >
          <v-img :src="photo.src" cover aspect-ratio="1" class="haircut-img" :alt="'Exemplo de corte de cabelo ' + (i + 1)" />
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HaircutGallery",
  props: {
    photos: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
