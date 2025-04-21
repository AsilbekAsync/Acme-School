<template>
  <section id="contact" class="py-24 bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p
          class="mt-2 text-lg font-bold tracking-tight text-indigo-600 uppercase"
        >
          Biz bilan bog'laning
        </p>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Sizning Fikringiz Muhim
        </p>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Biz bilan bog'laning va sizga qanday yordam bera olishimizni bilib
          oling.
        </p>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <!-- Form Section -->
        <div>
          <div
            class="rounded border bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div class="flex flex-col space-y-4 p-8">
              <h3
                class="text-2xl font-semibold leading-none tracking-tight text-gray-900"
              >
                Bizga xabar yuboring
              </h3>
              <p class="text-sm text-gray-600">
                Barcha bo`shliqlarni to`ldiring va jo`natish tugmasini bosing
              </p>
            </div>
            <div class="p-8 pt-0">
              <form class="space-y-6" @submit.prevent="submit">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div class="space-y-2">
                    <label
                      for="first-name"
                      class="text-sm font-medium text-gray-900"
                      >Familyangiz</label
                    >
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      class="w-full px-4 py-2 outline outline-gray-300 outline-1 rounded focus:border-none focus:outline focus:outline-indigo-500 focus:outline-2"
                      placeholder="Aliyev"
                      autocomplete="off"
                      v-model="form.first"
                    />
                  </div>
                  <div class="space-y-2">
                    <label
                      for="last-name"
                      class="text-sm font-medium text-gray-900"
                      >Ismingiz</label
                    >
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      class="w-full px-4 py-2 outline outline-gray-300 outline-1 rounded focus:border-none focus:outline focus:outline-indigo-500 focus:outline-2"
                      placeholder="Vali"
                      autocomplete="off"
                      v-model="form.last"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="email" class="text-sm font-medium text-gray-900"
                    >Elektron pochtangiz</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full px-4 py-2 outline outline-gray-300 outline-1 rounded focus:border-none focus:outline focus:outline-indigo-500 focus:outline-2"
                    placeholder="aliyev.vali@gmail.com"
                    autocomplete="off"
                    v-model="form.email"
                  />
                </div>

                <div class="space-y-2">
                  <label for="phone" class="text-sm font-medium text-gray-900"
                    >Telefon raqamingiz</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="w-full px-4 py-2 outline outline-gray-300 outline-1 rounded focus:border-none focus:outline focus:outline-indigo-500 focus:outline-2"
                    placeholder="+998 88 123 45 67"
                    autocomplete="off"
                    v-model="form.phone"
                  />
                </div>

                <div class="space-y-2">
                  <label for="message" class="text-sm font-medium text-gray-900"
                    >Xabar matni</label
                  >
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="w-full px-4 py-2 outline outline-gray-300 outline-1 rounded focus:border-none focus:outline focus:outline-indigo-500 focus:outline-2"
                    placeholder="Menda bir savol bor edi..."
                    autocomplete="off"
                    v-model="form.message"
                  ></textarea>
                </div>

                <button
                  v-ripple
                  type="submit"
                  class="w-full px-6 py-2 text-white font-medium text-sm rounded bg-gradient-to-l from-indigo-600 to-sky-500 focus:outline-none transition duration-300 ease-in-out"
                >
                  Jo`natish
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="space-y-8 bg-white rounded-xl shadow-lg">
          <div class="p-8">
            <h3 class="text-xl font-semibold mb-6 text-gray-900">
              Bog'lanish uchun ma'lumot
            </h3>
            <ul class="space-y-6">
              <li class="flex items-start">
                <i
                  class="fas fa-map-marker-alt text-indigo-600 text-2xl mr-4"
                ></i>
                <div>
                  <p class="text-gray-900 font-medium">Manzil</p>
                  <p class="text-gray-600">
                    Qashqadaryo viloyati, Qarshi shahri, Aliyev Vali ko`chasi,
                    5a-uy`
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-phone-alt text-indigo-600 text-2xl mr-4"></i>
                <div>
                  <p class="text-gray-900 font-medium">Telefon raqam</p>
                  <a class="text-gray-600" href="tel:+998881232881"
                    >+998 88 123-28-81</a
                  >
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-envelope text-indigo-600 text-2xl mr-4"></i>
                <div>
                  <p class="text-gray-900 font-medium">Elektron pochta</p>
                  <p class="text-gray-600">info@acmeschool.edu</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-clock text-indigo-600 text-2xl mr-4"></i>
                <div>
                  <p class="text-gray-900 font-medium">Ish vaqti</p>
                  <p class="text-gray-600">
                    Dushanba-Juma: 8:00 dan 16:30 gacha
                  </p>
                  <p class="text-gray-600">Shanba: 9:00 dan 12:00 gacha</p>
                  <p class="text-gray-600">Yakshanba: yopiq</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  first: "",
  last: "",
  email: "",
  phone: "+998",
  message: "",
});

const submit = () => {};
</script>
