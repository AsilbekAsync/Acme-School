<template>
  <section id="programs" class="bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600 uppercase">
          Akademik Muvaffaqiyat
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Ta'lim Dasturlarimiz
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Biz talabalarning noyob iste'dodlarini rivojlantirish va kelajakdagi
          muvaffaqiyatlari uchun tayyorlash uchun mo'ljallangan keng ko'lamli
          dasturlarni taklif etamiz.
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 md:grid-cols-2 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="program in programs"
          :key="program.name"
          class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between group"
        >
          <div class="flex flex-col space-y-1.5 p-6">
            <div
              class="mb-4 w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center"
            >
              <i :class="program.icon" class="text-indigo-500"></i>
            </div>
            <div class="text-2xl font-semibold leading-none tracking-tight">
              {{ program.name }}
            </div>
            <div class="text-muted-foreground text-base">
              {{ program.description }}
            </div>
          </div>
          <div class="flex items-center p-6 pt-0">
            <button
              v-ripple="{ color: 'rgba(0,0,0, 0.5)' }"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-full outline outline-gray-200 py-2 outline-[1px] hover:bg-gray-100"
            >
              Batafsil
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      programs: [
        {
          name: "Erkin San'atlar",
          description:
            "Gumoniyotlar, ijtimoiy fanlar, tabiiy fanlar va san'atga bag'ishlangan kompleks dastur.",
          icon: "fa fa-book-open",
        },
        {
          name: "STEM Ta'limi",
          description:
            "Fan, texnologiya, muhandislik va matematikaga bag'ishlangan qattiq o'quv dasturi va amaliy loyihalar.",
          icon: "fa fa-flask",
        },
        {
          name: "Kompyuter Fanlari",
          description:
            "Dasturlash, algoritmlar, ma'lumotlar tuzilmalari va dasturiy ta'minot ishlab chiqish metodologiyalarini o'rganing.",
          icon: "fa fa-code",
        },
        {
          name: "Chuqur San'atlar",
          description:
            "Vizuallar san'at, musiqa, teatr va raqamli media ishlab chiqarish orqali ijodiy iste'dodni namoyon etish.",
          icon: "fa fa-paint-brush",
        },
        {
          name: "Musiqa va Sahna",
          description:
            "Nazariyalar, kompozitsiyalar va ijro imkoniyatlari orqali musiqiy iste'dodni rivojlantirish.",
          icon: "fa fa-music",
        },
        {
          name: "Ijtimoiy Fanlar",
          description:
            "Psixologiya, sotsiologiya, iqtisodshunoslik va siyosatshunoslikni o'rganish, tadqiqot imkoniyatlari bilan.",
          icon: "fa fa-users",
        },
      ],
    };
  },
};
</script>
