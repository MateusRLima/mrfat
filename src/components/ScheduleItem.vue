<template>
  <v-row class="schedule-row my-5" align="center">
    <v-col sm="9" class="text-left">
      <div class="d-flex align-center mb-1">
        <p class="text-h5 font-weight-bold ma-0">{{ value }}</p>
        <v-chip v-if="note" size="x-small" color="primary" variant="tonal" class="ml-3 font-weight-bold">
          {{ note }}
        </v-chip>
      </div>
      <p class="text-subtitle-1 opacity-80">{{ label }}</p>
    </v-col>
    <v-col>
      <p v-if="statusLabel" :class="statusClass">{{ statusLabel }}</p>
      <v-icon v-else color="error" size="large">mdi-close-circle-outline</v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ScheduleItem",
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    status: { type: String, default: "" }, // "open", "closed", or empty for icon
    statusLabel: { type: String, default: "" },
    note: { type: String, default: "" },
    isDark: { type: Boolean, required: true }
  },
  computed: {
    statusClass() {
      return this.status === 'open' ? 'schedule-status-open pa-1' : 'schedule-status-closed pa-1';
    }
  }
}
</script>

<style lang="scss" scoped>
.schedule-status-closed {
  color: v-bind('isDark ? "#FF5252" : "#D32F2F"');
  border: v-bind('isDark ? "#FF5252" : "#D32F2F"') solid 1px;
  border-radius: 4px;
  width: 120px;
  text-align: center;
}

.schedule-status-open {
  color: v-bind('isDark ? "#4CAF50" : "#388E3C"');
  border: v-bind('isDark ? "#4CAF50" : "#388E3C"') solid 1px;
  border-radius: 4px;
  width: 120px;
  text-align: center;
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
</style>
