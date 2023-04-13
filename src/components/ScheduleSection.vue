<template>
  <div class="schedule" ref="schedule">
    <v-container class="schedule-container pa-9">
      <h2 class="schedule-title">Horário</h2>
      <p class="caption mb-10">Funcionamento por ordem de chegada</p>
      <v-row class="schedule-row mb-5" align="center">
        <v-col sm="9" align="left">
          <p class="title">Domingo / Segunda</p>
        </v-col>
        <v-col>
          <p class="schedule-status-closed pa-1">Fechado</p>
        </v-col>
      </v-row>
      <v-row class="schedule-row mb-5" align="center">
        <v-col sm="9" align="left" >
          <p class="title">Terça / Quarta / Quinta / Sexta</p>
          <p>09h - 12h / 14h - 19h</p>
        </v-col>
        <v-col>
          <p class="schedule-status-open pa-1">Aberto</p>
        </v-col>
      </v-row>
      <v-row class="schedule-row mb-5" align="center">
        <v-col sm="9" align="left">
          <p class="title">Sábado</p>
          <p>09h - 17h</p>
        </v-col>
        <v-col>
          <p class="schedule-status-open pa-1">Aberto</p>
        </v-col>
      </v-row>
      <p class="caption my-5">Sujeito a mudanças por conta de feriados e eventos externos</p>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ScheduleSection",
}
</script>
<style lang="scss">
.schedule {
  .schedule-container {
    border-right: #1E1E1E dotted 1px;
    border-left: #1E1E1E dotted 1px;
    text-align: center;

    .schedule-title {
      background-color: #1E1E1E;
      color: #F1F1F1;
      padding: 0.5rem;
      border-radius: 4px;
      margin-bottom: 5px;
    }

    .schedule-status-closed {
      color: darkred;
      border: darkred solid 1px;
      border-radius: 4px;
      width: 120px;
    }

    .schedule-status-open {
      color: darkgreen;
      border: darkgreen solid 1px;
      border-radius: 4px;
      width: 120px;
    }

    .schedule-row{
      border-bottom: #1E1E1E dotted 1px;
    }
  }
}
</style>