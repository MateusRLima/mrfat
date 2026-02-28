// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          background: '#F1F1F1',
          surface: '#FFFFFF',
          primary: '#1E1E1E',
        },
      },
      dark: {
        colors: {
          background: '#121212',
          surface: '#1E1E1E',
          primary: '#F1F1F1',
        },
      },
    },
  },
})
