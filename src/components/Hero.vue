<template>
  <div id="home" class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100 to-white h-[calc(100vh - 25px)] block">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Fikrlashni Rivojlantirish, Kelajakni Shakllantirish</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Acme Maktabida biz talabalarga o'z salohiyatlarini kashf etishlari va o'zlarining muvaffaqiyatga erishishlari uchun zarur bo'lgan ko'nikmalarni rivojlantirishlari uchun tarbiyalovchi muhit
          taqdim etamiz.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button
            v-ripple
            @click="
              scrollToSection('#about');
              emit();
            "
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium px-6 bg-indigo-500 text-white py-2.5 rounded-md focus:outline-none hover:bg-indigo-700 transiti duration-300"
          >
            Batafsil o'qish
          </button>
          <button
            @click="
              scrollToSection('#contact');
              emit();
            "
            v-ripple="{ color: 'rgba(0,0,0, 0.5)' }"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium px-6 bg-white text-black py-2.5 rounded-md outline outline-1 outline-gray-200"
          >
            Hozir bog'lanish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bus from "../bus";

const scrollToSection = (href) => {
  const target = document.querySelector(href);
  localStorage.setItem("lastSection", href);
  if (target) {
    setTimeout(() => {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }, 500);
  }
};

const emit = () => {
  bus.emit("update");
};
</script>
