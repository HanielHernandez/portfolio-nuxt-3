import { createI18n } from 'vue-i18n'
import es from '../locales/es.json'
import en from '../locales/en.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const locale ='es'
  const i18n = createI18n({
    legacy: false,
    locale,
    messages: {
      en,
      es
    }
  })

  vueApp.use(i18n)
})