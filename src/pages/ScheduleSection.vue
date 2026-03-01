<template>
  <div class="schedule" ref="schedule">
    <v-container class="schedule-container pa-9">
      <TitlesComponent :title="$t('schedule.title')" :title-color="isDark ? '#F1F1F1' : '#1E1E1E'" />
      <p class="text-caption mt-5 mb-0">{{ $t('schedule.arrival_note') }}</p>
      <p class="text-caption mb-5">{{ $t('schedule.changes_note') }}</p>
      
      <ScheduleItem 
        :label="$t('schedule.days.dom_seg')" 
        :value="$t('schedule.status.closed')" 
        :is-dark="isDark"
      />
      
      <ScheduleItem 
        label="Terça a Sexta" 
        value="09h - 12h / 14h - 19h" 
        status="open"
        :status-label="$t('schedule.status.open')"
        :is-dark="isDark"
      />

      <ScheduleItem 
        label="Sábados" 
        value="09h - 17h" 
        status="open"
        :status-label="$t('schedule.status.open')"
        :note="$t('schedule.no_lunch_break')"
        :is-dark="isDark"
      />
    </v-container>
  </div>
</template>

<script>
import TitlesComponent from '@/components/TitlesComponent.vue';
import ScheduleItem from '@/components/ScheduleItem.vue';
import { useTheme } from 'vuetify'

export default {
    name: "ScheduleSection",
    components: { TitlesComponent, ScheduleItem },
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
    text-align: center;
  }
}
</style>
