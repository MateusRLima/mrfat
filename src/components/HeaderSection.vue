<template>
  <div class="header py-10">
    <v-container class="text-center">
      <v-row align="center">
        <v-col align="center" class="px-0">
          <v-img src="@/assets/logo-2.png" contain height="200" class="mb-5" />
          <div class="header-text">
            <h1 class="header-title mb-5">
              Mr.Fat Barbearia
            </h1>
            <p class="header-subtitle">
              Bem-vindo à MrFat, a barbearia onde a excelência em serviços e o estilo se encontram para
              criar uma experiência única e inesquecível para você.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "HeaderSection",
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');

.header {
  background-image: url("@/assets/Banner.jpg");
  background-size: cover;

  .header-text {
    width: 50%;
    min-width: 300px;
    .header-title {
      font-family: 'Rye';
      font-size: 3.5rem;
      text-align: center
    }
    .header-subtitle {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }

}
</style>