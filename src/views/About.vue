<template>
  <div class="container mx-auto pt-10">
    <h1 class="text-2xl font-bold mb-4">О нас</h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1">
        <img
          src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg"
          alt="about"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="col-span-1">
        <h2 class="text-xl font-bold mb-4">Наша история</h2>
        <p class="text-gray-500 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        </p>
        <a-divider />

        <ul class="mb-4">
          <a
            href="tel:+79999999999"
            target="_blank"
            class="hover:text-[#00B5EE] transition-colors"
          >
            <li class="flex items-center gap-2 mb-2">
              <PhoneOutlined />
              +7 (999) 999-99-99
            </li>
          </a>
          <a
            href="mailto:info@example.com"
            target="_blank"
            class="hover:text-[#00B5EE] transition-colors"
          >
            <li class="flex items-center gap-2 mb-2">
              <MailOutlined />
              info@example.com
            </li>
          </a>
        </ul>
      </div>
    </div>
    <a-divider />
    <img
      src="../assets/images/map.png"
      alt=""
      class="w-full h-[400px] object-cover"
    />
  </div>
</template>

<script setup lang="ts">
import { MailOutlined, PhoneOutlined } from '@ant-design/icons-vue'
</script>
