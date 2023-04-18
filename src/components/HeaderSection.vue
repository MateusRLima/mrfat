<template>
  <div class="header py-10">
    <v-container class="text-center">
      <v-row align="center">
        <v-col align="center">
          <v-img src="@/assets/logo-2.png" contain height="100" class="mb-5"/>
          <h1 class="header-title pb-5">
            Mr.Fat Barbearia
          </h1>
          <p class="header-subtitle">
            Bem-vindo à MrFat, a barbearia onde a excelência em serviços e o estilo se encontram <br/> para
            criar uma experiência única e inesquecível para você.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "HeaderSection",

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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');

.header {
  background-image: url("@/assets/Banner.jpg");
  background-size: cover;

  .header-title {
    font-family: 'Rye';
    font-size: 4rem
  }
  .header-subtitle{
    font-size: 1.1rem
  }
}
</style>