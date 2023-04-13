<template>
  <div class="price" ref="price">
    <v-container class="price-container pa-9">
      <h2 class="mb-10 price-title">Preços</h2>
      <v-row class="price-row">
        <v-col sm="9" align="left">
          <p class="title">Cabelo</p>
          <p>Nós fornecemos uma consulta antes do corte para entender suas necessidades e preferências e garantir que você
            saia da
            barbearia com um visual que combine com o seu estilo.</p>
        </v-col>
        <v-col class="title" align="left">
          <p>R$ 30</p>
          <p class="caption">15-20 min</p>
        </v-col>
      </v-row>
      <v-row class="price-row">
        <v-col sm="9" align="left">
          <p class="title">Barba</p>
          <p>Oferecemos uma variedade de opções de estilo de barba e utilizamos produtos de qualidade para garantir
            que sua pele fique hidratada e livre de irritações.</p>
        </v-col>
        <v-col class="title" align="left">
          <p>R$ 20</p>
          <p class="caption">10-15 min</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="9" align="left">
          <p class="title">Cabelo e Barba</p>
          <p>O serviço completo da barbearia, o melhor que você já tem do corte de cabelo junto com o corte de barba,
            por um preço muito acessível.</p>
        </v-col>
        <v-col class="title" align="left">
          <p>R$ 45</p>
          <p class="caption">20-30 min</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "PriceSection"
}
</script>
<style lang="scss">
.price {
  background-color: #1E1E1E;
  color: #F1F1F1;

  .price-container {
    border-right: #F1F1F1 dotted 1px;
    border-left: #F1F1F1 dotted 1px;
    text-align: center;

    .price-title {
      background-color: #F1F1F1;
      color: #1E1E1E;
      padding: 0.5rem;
      border-radius: 4px;
    }
    .price-row{
      border-bottom: #F1F1F1 dotted 1px;
    }
  }

}
</style>