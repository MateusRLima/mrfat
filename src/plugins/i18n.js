import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ptBr from '../locales/pt-br.json'
import es from '../locales/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'pt-br',
  fallbackLocale: 'en',
  messages: {
    'en': en,
    'pt-br': ptBr,
    'es': es
  }
})

export default i18n
