import antd from 'ant-design-vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/styles/index.scss'
import './assets/styles/tailwind.css'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const i18n = createI18n({
  locale: 'ru',
  messages: {
    ru: {
      main: 'Главный',
      news: 'Новости',
      youtube: 'YouTube',
      about: 'О нас',
      copyright: '© 2025. Все права защищены.',
      viewAll: 'Посмотреть все',
      latestNews: 'Последние новости',
      feedback: 'Обратная связь',
      feedbackDescription:
        'Если у вас есть вопросы, предложения или вы хотите связаться с нами, пожалуйста, заполните форму. Мы постараемся ответить вам в кратчайшие сроки.',
      name: 'Имя',
      phone: 'Телефон',
      blog: 'Блог педагогов',
      message: 'Сообщение',
      send: 'Отправить',
      otherNews: 'Другие новости',
      team: 'Редакционный совет',
      otherBlogs: 'Другие блоги',
      otherTeams: 'Другие команды',
    },
    kk: {
      main: 'Басты',
      news: 'Жаңалықтар',
      youtube: 'YouTube',
      about: 'Біз туралы',
      copyright: '© 2025. Құқықтарыңыз қорғалған.',
      viewAll: 'Көріп шығу',
      latestNews: 'Соңғы жаңалықтар',
      feedback: 'Кері байланыс',
      feedbackDescription:
        'Егер сізде ұсыныстар мен сұрақтар болса, өтініш формасын толтырыңыз. Біз сізге ең қысқа уақытта жауап береміз.',
      name: 'Атаңыз',
      phone: 'Телефон',
      blog: 'Ұстаздар блогы',
      message: 'Хабарлама',
      send: 'Жіберу',
      otherNews: 'Басқа жаңалықтар',
      team: 'Редакциялық кеңес',
      otherBlogs: 'Басқа блогтар',
      otherTeams: 'Басқа ұжымдар',
    },
  },
})

app.use(router)
app.use(pinia)
app.use(antd)
app.use(i18n)
app.mount('#app')
