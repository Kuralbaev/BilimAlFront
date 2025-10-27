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
        <p class="text-gray-500 mb-4">
          Современная информационно-познавательная платформа на стыке
          образования и инноваций. Наша цель – представить читателям самые
          актуальные новости и тренды в сфере образования Казахстана и мира, а
          также познакомить с новыми идеями и технологическими достижениями.
        </p>
        <p class="text-gray-500 mb-4">
          Мы освещаем изменения в системе образования, искусственный интеллект,
          цифровое обучение, новые методики и исследования. Наша задача – не
          просто делиться полезной информацией, но и создавать контент, который
          вдохновляет, заставляет задуматься и побуждает к обсуждению.
        </p>
        <p class="text-gray-500 mb-4">
          <span class="font-bold">BilimAI</span>
          – это пространство знаний и инноваций, устремлённое в будущее. Наш
          главный приоритет – качество и достоверность информации. Через каждую
          статью мы стремимся внести вклад в развитие образовательных процессов,
          распространение современных подходов к обучению и укрепление
          интеллектуального потенциала общества.
        </p>
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
</script>
