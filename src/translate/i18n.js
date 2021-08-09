import i18n from 'i18next'
import LanguageDetectors from 'i18next-browser-languagedetector'

import { messages } from '.'

i18n
    .use(LanguageDetectors)
    .init({
        debug: false,
        defaultNS: ['translations'],
        fallback: 'pt',
        ns: ['translations'],
        resources: messages
    })

export { i18n }