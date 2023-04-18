<template>
  <div class="footer py-10">
    <v-container class="px-9">
      <v-row>
        <v-col sm="3">
          <h3>Contatos: </h3>
          <v-btn small text dark class="py-2" rel="noreferrer" target="_blank"
            href="https://api.whatsapp.com/send?phone=5581996796347">
            - (81) 9 9679-6347
          </v-btn>
          <v-btn small text dark class="py-2" rel="noreferrer" target="_blank"
            href="https://www.instagram.com/mr.fatbarbearia/">
            - @mr.fatbarbearia
          </v-btn>
        </v-col>
        <v-col>
          <h3>Endereço:</h3>
          <v-btn small text dark class="py-5" rel="noreferrer" target="_blank"
            href="https://www.google.com/maps/place/Mr.+Fat+Barbearia/@-8.1739149,-34.9230195,17z/data=!3m1!4b1!4m6!3m5!1s0x7aae1be8703ed25:0x56e33bc3b3a0fa38!8m2!3d-8.1739202!4d-34.9181486!16s%2Fg%2F11kj8wmrn8">- Av.
            Ayrton Senna da Silva, 280 - Piedade, <br /> Jaboatão dos Guararapes - PE, 54420-700
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {

  name: "FooterSection",

}
</script>
<style lang="scss">
.footer {
  border-top: #F1F1F1 dotted 1px;
  color: #F1F1F1;
  background-color: #1E1E1E;

  .link {
    color: #F1F1F1
  }
}</style>