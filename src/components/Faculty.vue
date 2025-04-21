<template>
  <section id="faculty" class="py-24 bg-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600 uppercase">
          Mutaxassis O'qituvchilar
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Bizning O'qituvchilarimizni Tanishing
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Bizning fidoyilarga oid o'qituvchilarimiz va xodimlarimiz har kuni
          darsda ehtiros, tajriba va innovatsiyalarni olib kelishadi.
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4"
      >
        <div
          v-for="(faculty, index) in facultyMembers"
          :key="index"
          class="rounded-lg text-card-foreground bg-white shadow-sm hover:shadow-md transition-shadow hover:bg-gray-50"
        >
          <div class="p-0">
            <div class="sm:aspect-square overflow-hidden rounded-t-lg">
              <img
                class="mx-auto w-64 h-64 rounded-full sm:rounded-t-lg sm:rounded-b-none object-cover sm:w-full sm:h-full transition-all duration-500 delay-200 group-hover:brightness-90 cursor-pointer group-hover:rounded-full"
                :src="faculty.image"
                :alt="faculty.name"
                draggable="false"
              />
            </div>
            <div class="p-6">
              <h3
                class="text-lg font-semibold leading-8 tracking-tight text-gray-900"
              >
                {{ faculty.name }}
              </h3>
              <p class="text-base leading-7 text-indigo-600">
                {{ faculty.title }}
              </p>
              <p class="mt-2 text-sm leading-6 text-gray-600">
                {{ faculty.description }}
              </p>
              <ul role="list" class="mt-6 flex gap-x-6">
                <li v-if="faculty.twitter">
                  <a
                    :href="faculty.twitter"
                    class="text-gray-400 hover:text-indigo-500"
                  >
                    <span class="sr-only">Twitter</span>
                    <i class="fab fa-twitter h-5 w-5"></i>
                  </a>
                </li>
                <li v-if="faculty.linkedin">
                  <a
                    :href="faculty.linkedin"
                    class="text-gray-400 hover:text-indigo-500"
                  >
                    <span class="sr-only">LinkedIn</span>
                    <i class="fab fa-linkedin h-5 w-5"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const facultyMembers = ref([
  {
    name: "Dr. Sarah Johnson",
    title: "Direktor",
    description:
      "Ta'lim liderligida Ph.D. darajasiga ega bo'lgan va 20 yildan ortiq ta'lim boshqaruvidagi tajribaga ega.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Prof. Michael Chen",
    title: "Fanlar bo'limi rahbari",
    description:
      "Fizika va atrof-muhit fanlar bo'yicha mutaxassis va mukofotlangan o'qituvchi.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Gumanitar fanlar rahbari",
    description:
      "Adabiyot va tarix mutaxassisi bo'lgan nashrdan o'tgan muallim.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/3.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Prof. David Wilson",
    title: "Matematika mutaxassisi",
    description:
      "Murakkab tushunchalarni tushunarli qilishga qiziquvchi matematika musobaqasini tayyorlovchi.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/4.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Dr. Amina Bekmurodova",
    title: "Biologiya bo'limi rahbari",
    description:
      "Molekulyar biologiya bo'yicha mutaxassis va ilmiy maqolalar muallifi.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Prof. John Smith",
    title: "Texnologiyalar rahbari",
    description:
      "Axborot texnologiyalari va sun'iy intellekt sohasida 15 yillik tajribaga ega.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Dr. Nargiza Tursunova",
    title: "Pedagogika mutaxassisi",
    description:
      "Innovatsion o'qitish metodlari bo'yicha tadqiqotchi va amaliyotchi.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/13.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Prof. Alexei Ivanov",
    title: "Kimyo bo'yicha rahbar",
    description:
      "Kimyoviy muhandislik bo'yicha xalqaro konferensiyalarda qatnashgan olim.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/14.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Dr. Layla Karimova",
    title: "Psixologiya bo'yicha mutaxassis",
    description:
      "O'quvchilarning ijtimoiy-emotsional rivojlanishini qo'llab-quvvatlovchi psixolog.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/15.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Prof. Marcus Lee",
    title: "Ingliz tili bo'yicha ekspert",
    description:
      "ESL va til o'qitish bo'yicha sertifikatlangan va tajribali professor.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/16.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Dr. Zahra Qodirova",
    title: "Tarix fanlari bo'yicha mutaxassis",
    description:
      "Markaziy Osiyo tarixiga ixtisoslashgan va ko'plab o'quv dasturlarini ishlab chiqqan.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/22.webp",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Prof. Ethan Wright",
    title: "Jismoniy tarbiya bo'yicha trener",
    description:
      "Sport psixologiyasi va jismoniy tarbiya strategiyalari bo'yicha mutaxassis.",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/23.webp",
    twitter: "#",
    linkedin: "#",
  },
]);
</script>
