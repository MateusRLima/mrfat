<template>
  <div class="barber white--text darken-2" ref="barber">
    <v-container class="barber-container  pa-9">
      <TitlesComponent title="Barbearia" title-color="#F1F1F1" />
      <v-row align="center" class="mt-10">
        <v-col align="center">
          <v-card dark outlined max-width="350">
            <template slot="progress">
              <v-progress-linear color="black" height="10" indeterminate></v-progress-linear>
            </template>
            <v-img contain src="@/assets/MrFat.jpg" class="barber-profile" />
            <v-card-text class="px-10 py-5 pt-7">
              <p class="text-left barber-name">
                Thales Monteiro, "MrFat"
              </p>
              <p class="text-left mb-0">
                "Transforme sua aparência, eleve sua autoestima. Seja o melhor que você pode ser na minha
                cadeira."
              </p>
            </v-card-text>
            
            <v-card-actions class="barber-contact pb-5 pt-0">
              <v-spacer></v-spacer>
              <v-btn icon href="https://api.whatsapp.com/send?phone=5581996796347"
                target="_blank"><v-icon>mdi-whatsapp</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon href="https://www.instagram.com/mr.fatbarbearia/"
                target="_blank"><v-icon>mdi-instagram</v-icon></v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col align="center">
          <div class="barber-cuts">
            <img v-for="(photo, i) in photos" :key="i" :src="photo.src" height="280" width="220" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TitlesComponent from './TitlesComponent.vue';

export default {
  name: "BarberSection",
  data: () => ({
    photos: [
      {
        src: require("@/assets/Corte-1.jpg"),
      },
      {
        src: require("@/assets/Corte-2.jpeg"),
      },
      {
        src: require("@/assets/Corte-3.jpg"),
      },
      {
        src: require("@/assets/Corte-4.jpeg"),
      },
    ]
  }),
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
  background-color: #1E1E1E;
  background-position: center;
  background-size: cover;
  width: 100%;

  .barber-container {
    border-right: #F1F1F1 dotted 1px;
    border-left: #F1F1F1 dotted 1px;
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

  .barber-profile {
    border-radius: 100%;
  }

  .barber-cuts {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    max-width: 560px;
  }

  .v-item-group {
    border-radius: 4px !important;
  }
}
</style>