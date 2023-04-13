<template>
  <div>
    <v-container class="my-5 presentation">
      <v-row align="center">
        <v-col sm="2">
          <v-img src="@/assets/logo-1.png" height="175" width="175" contain class="ml-10" />
        </v-col>
        <v-col>
          <h1 class="title">
            Bem-vindo à MrFat, a barbearia onde a excelência em serviços e o estilo se encontram para
            criar uma experiência única e inesquecível para você.
          </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "IntroductionSection",

  data: () => ({
    photos: [
      {
        src: require("@/assets/MrFat-3.jpg"),
      },
      {
        src: require("@/assets/MrFat-1.jpg"),
      },
      {
        src: require("@/assets/MrFat-2.jpg"),
      },
    ]
  }),

}
</script>
<style lang="scss">
@media screen and (max-width: 1264px) {
  .presentation {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .title {
      font-size: large;
      margin: 25px 0px;
    }
  }
}

@media screen and (min-width: 1264px) {
  .presentation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .title {
      font-size: large;
    }
  }
}
</style>