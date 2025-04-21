<template>
  <footer class="bg-gray-900 text-white">
    <div class="mx-auto max-w-7xl px-6 py-6 md:py-16 lg:px-8">
      <div class="xl:grid xl:gap-8">
        <div class="space-y-2">
          <div class="flex items-center">
            <span class="text-xl font-bold text-indigo-500">Acme Maktabi</span>
          </div>
          <p class="text-sm leading-6 text-gray-300">
            1985 yildan beri fikrlarni rivojlantirish va kelajakni
            shakllantirish. Acme Maktabi transformativ ta'lim tajribasini
            ta'minlashga bag'ishlangan.
          </p>
          <p class="text-sm leading-6 text-gray-300">
            Biz, o'quvchilarimizga yuqori darajadagi ta'lim berishga intilamiz.
            O'qituvchilarimiz o'z ishlarida professional va samimiy bo'lib, har
            bir talabaning individual ehtiyojlarini inobatga olishadi.
          </p>
          <div class="flex space-x-6 mt-4">
            <a
              v-for="(icon, index) in socialIcons"
              :key="index"
              :href="icon.link"
              class="text-gray-400 hover:text-white transition duration-300"
              aria-label="Icon"
            >
              <i :class="icon.class"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-16 border-t border-gray-700 pt-8 sm:mt-20">
        <p class="text-xs leading-5 text-gray-400">
          © 2025 Acme Maktabi. Barcha huquqlar himoyalangan.
        </p>
      </div>
      <p>
        Dasturchi:
        <a
          target="_blank"
          class="text-indigo-400 font-bold"
          href="https://t.me/Async_Boy"
        >
          Kamoliddinov Asilbek
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup>
const socialIcons = [
  { class: "fab fa-facebook-f", link: "#" },
  { class: "fab fa-instagram", link: "#" },
  { class: "fab fa-twitter", link: "#" },
  { class: "fab fa-youtube", link: "#" },
  { class: "fab fa-telegram", link: "#" },
];
</script>
