<template>
  <div class="schedule" ref="schedule">
    <v-container class="schedule-container pa-9">
      <TitlesComponent :title="$t('schedule.title')" :title-color="isDark ? '#F1F1F1' : '#1E1E1E'" />
      <p class="text-caption mt-5 mb-0">{{ $t('schedule.arrival_note') }}</p>
      <p class="text-caption mb-5">{{ $t('schedule.changes_note') }}</p>
      <v-row class="schedule-row my-5" align="center">
        <v-col sm="9" class="text-left">
          <p class="text-h6">{{ $t('schedule.days.dom_seg') }}</p>
        </v-col>
        <v-col>
          <p class="schedule-status-closed pa-1">{{ $t('schedule.status.closed') }}</p>
        </v-col>
      </v-row>
      <v-row class="schedule-row my-5" align="center">
        <v-col sm="9" class="text-left" >
          <p class="text-h6">{{ $t('schedule.days.ter_sex') }}</p>
          <p>09h - 12h / 14h - 19h</p>
        </v-col>
        <v-col>
          <p class="schedule-status-open pa-1">{{ $t('schedule.status.open') }}</p>
        </v-col>
      </v-row>
      <v-row class="schedule-row my-5" align="center">
        <v-col sm="9" class="text-left">
          <p class="text-h6">{{ $t('schedule.days.sab') }}</p>
          <p>09h - 17h</p>
        </v-col>
        <v-col>
          <p class="schedule-status-open pa-1">{{ $t('schedule.status.open') }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TitlesComponent from './TitlesComponent.vue';
import { useTheme } from 'vuetify'

export default {
    name: "ScheduleSection",
    components: { TitlesComponent },
    setup() {
      const theme = useTheme()
      return { theme }
    },
    computed: {
      isDark() {
        return this.theme.global.current.value.dark
      }
    }
}
</script>
<style lang="scss" scoped>
.schedule {
  background-color: v-bind('isDark ? "#121212" : "#F1F1F1"');
  color: v-bind('isDark ? "#F1F1F1" : "#1E1E1E"');
  transition: background-color 0.4s ease, color 0.4s ease;

  .schedule-container {
    border-right: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
    border-left: v-bind('isDark ? "rgba(241, 241, 241, 0.2)" : "rgba(30, 30, 30, 0.2)"') dotted 1px;
    text-align: center;

    .schedule-title {
      font-family: 'Rye';
      font-size: 2.25rem;
      padding: 0.5rem;
      border-radius: 4px;
      margin-bottom: 5px;
    }

    .schedule-status-closed {
      color: v-bind('isDark ? "#FF5252" : "#D32F2F"');
      border: v-bind('isDark ? "#FF5252" : "#D32F2F"') solid 1px;
      border-radius: 4px;
      width: 120px;
    }

    .schedule-status-open {
      color: v-bind('isDark ? "#4CAF50" : "#388E3C"');
      border: v-bind('isDark ? "#4CAF50" : "#388E3C"') solid 1px;
      border-radius: 4px;
      width: 120px;
    }

    .schedule-row {
      border-bottom: v-bind('isDark ? "rgba(241, 241, 241, 0.1)" : "rgba(30, 30, 30, 0.1)"') solid 1px;
      transition: all 0.3s ease;
      padding: 0.5rem 0;
      
      &:hover {
        background: v-bind('isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"');
        transform: translateX(5px);
      }
    }
  }
}
</style>
