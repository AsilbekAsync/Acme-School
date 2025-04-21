<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <a href="#" class="flex items-center space-x-2">
          <span class="sr-only">Acme Maktabi</span>
          <span class="text-xl font-semibold text-indigo-500"
            >Acme Maktabi</span
          >
        </a>
      </div>

      <div class="hidden lg:flex space-x-8">
        <a
          v-for="page in pages"
          :href="page.href"
          v-ripple="{ color: 'rgba(0,0,0, 0.5)' }"
          @click.prevent="scroll(page.href)"
          class="text-sm font-medium p-2 px-3 rounded transition-colors duration-300"
          :class="
            current === page.href
              ? 'text-indigo-500 bg-indigo-100'
              : 'text-gray-700 hover:bg-gray-200'
          "
        >
          {{ page.name }}
        </a>
      </div>

      <!-- <div class="hidden lg:block">
        <button
          v-ripple="{ color: 'rgba(0,0,0, 0.5)' }"
          class="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-500 transition-colors text-sm font-medium"
        >
          Hozir ariza berish
        </button>
      </div> -->

      <div class="lg:hidden">
        <button
          @click="open = !open"
          type="button"
          class="text-gray-700 hover:text-gray-900"
        >
          <span class="sr-only">Asosiy menyuni ochish</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>

    <div
      class="lg:hidden fixed inset-0 bg-black/50 z-40"
      :class="open ? '' : 'hidden'"
      @click="open = false"
    ></div>
    <div
      class="lg:hidden fixed inset-y-0 bg-white shadow-lg w-[300px] z-50 transition-all duration-300"
      :class="open ? 'right-0' : '-right-[400px]'"
    >
      <div class="flex items-center justify-between p-4">
        <a href="#" class="flex items-center space-x-2">
          <span class="sr-only">Acme Maktabi</span>
          <span class="text-xl font-semibold text-indigo-500"
            >Acme Maktabi</span
          >
        </a>
        <button class="text-gray-700" @click="open = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div class="space-y-1 py-2 px-2">
        <a
          v-for="page in pages"
          @click.prevent="scroll(page.href)"
          :href="page.href"
          v-ripple="{ color: 'rgba(0,0,0, 0.5)' }"
          class="block text-base font-medium rounded-md px-4 py-2 transition-colors duration-300"
          :class="
            current === page.href
              ? 'text-indigo-500 bg-indigo-100'
              : 'text-gray-700 hover:bg-gray-200'
          "
        >
          {{ page.name }}
        </a>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import emitter from "../bus";

const pages = ref([
  { name: "Bosh sahifa", href: "#home" },
  { name: "Biz haqimizda", href: "#about" },
  { name: "Dasturlar", href: "#programs" },
  { name: "O'qituvchilar", href: "#faculty" },
  { name: "Aloqa", href: "#contact" },
]);

const current = ref("#home");
const open = ref(false);

const scroll = (href) => {
  setTimeout(() => {
    const section = document.getElementById(href.replace("#", ""));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      localStorage.setItem("lastSection", href);
      current.value = href;
    }
  }, 500);
};

onMounted(() => {
  const lastSection = localStorage.getItem("lastSection");
  if (lastSection) {
    current.value = lastSection;
    scroll(lastSection);
  }

  const updateMessage = () => {
    current.value = localStorage.getItem("lastSection");
  };

  emitter.on("update", updateMessage);

  onBeforeUnmount(() => {
    emitter.off("update", updateMessage);
  });
});
</script>
