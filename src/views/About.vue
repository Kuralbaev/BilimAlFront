<template>
  <div class="container mx-auto md:pt-10 p-5 md:p-0">
    <h1 class="text-2xl font-bold mb-4">О нас</h1>
    <div class="grid md:grid-cols-2 gap-4">
      <div class="col-span-1">
        <img
          src="../assets/images/map.png"
          alt="about"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="col-span-1">
        <h2 class="text-xl font-bold mb-4">BilimAI</h2>
        <template v-if="locale === 'ru'">
          <p class="text-gray-500 mb-4">
            Современная информационно-познавательная платформа на стыке
            образования и инноваций. Наша цель – представить читателям самые
            актуальные новости и тренды в сфере образования Казахстана и мира, а
            также познакомить с новыми идеями и технологическими достижениями.
          </p>
          <p class="text-gray-500 mb-4">
            Мы освещаем изменения в системе образования, искусственный
            интеллект, цифровое обучение, новые методики и исследования. Наша
            задача – не просто делиться полезной информацией, но и создавать
            контент, который вдохновляет, заставляет задуматься и побуждает к
            обсуждению.
          </p>
          <p class="text-gray-500 mb-4">
            <span class="font-bold">BilimAI</span>
            – это пространство знаний и инноваций, устремлённое в будущее. Наш
            главный приоритет – качество и достоверность информации. Через
            каждую статью мы стремимся внести вклад в развитие образовательных
            процессов, распространение современных подходов к обучению и
            укрепление интеллектуального потенциала общества.
          </p>
        </template>
        <template v-else>
          <p class="text-gray-500 mb-4">
            BilimAI – білім мен инновация тоғысқан заманауи ақпараттық-танымдық
            алаң. Біздің мақсатымыз – Қазақстандағы және әлемдегі білім
            саласындағы ең өзекті жаңалықтар мен трендтерді оқырманға ұсыну,
            жаңа идеялар мен технологиялық жетістіктерді таныстыру.
          </p>
          <p class="text-gray-500 mb-4">
            Біз білім беру жүйесіндегі өзгерістерге, жасанды интеллект, цифрлық
            оқыту, жаңа әдістемелер мен зерттеулерге назар аударамыз. Оқырманға
            пайдалы ақпарат беріп қана қоймай, ой салатын, талқылауға түрткі
            болатын контент жасауды көздейміз.
          </p>
          <p class="text-gray-500 mb-4">
            <span class="font-bold">BilimAI</span>
            – болашаққа бағытталған білім мен инновация кеңістігі. Біз үшін
            басты құндылық – сапалы ақпарат пен сенімді дереккөздер. Әр
            мақаламыз арқылы білім беру үдерісін дамытуға, оқытудың жаңа
            тәсілдерін таратуға және қоғамдағы зияткерлік әлеуетті арттыруға
            үлес қосу – басты миссиямыз.
          </p>
        </template>
        <a-divider />

        <ul class="mb-4">
          <a
            href="tel:+77082390623"
            target="_blank"
            class="hover:text-[#00B5EE] transition-colors"
          >
            <li class="flex items-center gap-2 mb-2">
              <PhoneOutlined />
              +7 (708) 239-06-23
            </li>
          </a>
          <a
            href="mailto:info@example.com"
            target="_blank"
            class="hover:text-[#00B5EE] transition-colors"
          >
            <li class="flex items-center gap-2 mb-2">
              <EnvironmentOutlined />
              Алматы қаласы, Жамбыл көшесі 111, 2-қабат, 16-офис
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons-vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>
