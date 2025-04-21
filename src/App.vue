<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Programs />
    <Faculty />
    <Contact />
    <Footer></Footer>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Programs from "./components/Programs.vue";
import Faculty from "./components/Faculty.vue";
import Contact from "./components/contact.vue";
import Footer from "./components/Footer.vue";
</script>
