<template>
  <div class="schedule" ref="schedule">
    <v-container class="schedule-container pa-9">
      <TitlesComponent title="Horários" title-color="#1E1E1E" />
      <p class="caption mt-5 mb-0">*Atendimento por ordem de chegada</p>
      <p class="caption mb-5">*Sujeito a mudanças em função de feriados e eventos externos</p>
      <v-row class="schedule-row my-5" align="center">
        <v-col sm="9" align="left">
          <p class="title">Domingo / Segunda</p>
        </v-col>
        <v-col>
          <p class="schedule-status-closed pa-1">Fechado</p>
        </v-col>
      </v-row>
      <v-row class="schedule-row my-5" align="center">
        <v-col sm="9" align="left" >
          <p class="title">Terça / Quarta / Quinta / Sexta</p>
          <p>09h - 12h / 14h - 19h</p>
        </v-col>
        <v-col>
          <p class="schedule-status-open pa-1">Aberto</p>
        </v-col>
      </v-row>
      <v-row class="schedule-row my-5" align="center">
        <v-col sm="9" align="left">
          <p class="title">Sábado</p>
          <p>09h - 17h</p>
        </v-col>
        <v-col>
          <p class="schedule-status-open pa-1">Aberto</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TitlesComponent from './TitlesComponent.vue';

export default {
    name: "ScheduleSection",
    components: { TitlesComponent }
}
</script>
<style lang="scss" scoped>
.schedule {
  background-color: #F1F1F1;
  .schedule-container {
    border-right: #1E1E1E dotted 1px;
    border-left: #1E1E1E dotted 1px;
    text-align: center;

    .schedule-title {
      font-family: 'Rye';
      font-size: 2.25rem;
      color: #1E1E1E;
      padding: 0.5rem;
      border-radius: 4px;
      margin-bottom: 5px;
    }

    .schedule-status-closed {
      color: red;
      border: red solid 1px;
      border-radius: 4px;
      width: 120px;
    }

    .schedule-status-open {
      color: green;
      border: green solid 1px;
      border-radius: 4px;
      width: 120px;
    }

    .schedule-row{
      border-bottom: #1E1E1E dotted 1px;
    }
  }
}
</style>