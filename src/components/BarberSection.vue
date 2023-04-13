<template>
  <div class="barber white--text darken-2" ref="barber">
    <v-container class="barber-container">
      <h2 class="mb-10 barber-title">Barbeiro</h2>
      <div class="barber-section">
        <v-card dark outlined class="mb-5" max-width="350">
          <template slot="progress">
            <v-progress-linear color="black" height="10" indeterminate></v-progress-linear>
          </template>
          <v-img contain src="@/assets/MrFat-3.jpg" class="barber-profile" />
          <v-card-text class="text-center">
            <p class="title white--text">
              Thales Monteiro, "MrFat"
            </p>
            <p class="">
              - "Transforme sua aparência, eleve sua autoestima. Seja o melhor que você pode ser na minha
              cadeira."
            </p>
          </v-card-text>
          <v-card-actions class="barber-contact pb-5">
            <v-spacer></v-spacer>
            <v-btn small light class="white" href="https://api.whatsapp.com/send?phone=5581996796347"
              target="_blank"><v-icon color="black" small>mdi-whatsapp</v-icon>(81) 9 9679-6347</v-btn>
            <v-spacer></v-spacer>
            <v-btn small light class="white" href="https://www.instagram.com/mr.fatbarbearia/" target="_blank"><v-icon
                color="black" small>mdi-instagram</v-icon>@mr.fatbarbearia</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'BarberSection',

  methods: {
    scrollToBarber() {
      this.$refs["barber"].scrollIntoView({ behavior: "smooth" })
    },
    scrollToPrice() {
      this.$refs["price"].scrollIntoView({ behavior: "smooth" })
    },
    scrollToSchedule() {
      this.$refs["schedule"].scrollIntoView({ behavior: "smooth" })
    },
  }
}
</script>

<style lang="scss">
.barber {
  background-image: url("@/assets/MrFat-Ferramentas.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;

  .barber-container{
    border-right: #F1F1F1 dotted 1px;
    border-left: #F1F1F1 dotted 1px;
    text-align: center;
  }

  .barber-title{
    background-color: #F1F1F1;
    color: #1E1E1E;
    padding: 0.5rem;
    border-radius: 4px;
  }

  .barber-section {
    display: flex;
    justify-content: center;
  }

  .barber-profile {
    border-radius: 100%;
  }
}
</style>