<template>
  <nav class="fixed z-10 w-fit m-auto left-0 right-0 top-0">
    <ul class=" p-2 tc-basic flex w-full m-auto">
      <li v-for="page in pages" :key="page.name" class="flex items-center" >
        <NuxtLink class="px-3 hover:text-blue-800" :to="page.link">{{ page.name }}</NuxtLink></li>
      <li class="flex items-center"><claroscuro/></li>
    </ul>
  </nav>
</template>

<script>
import claroscuro from "./claroscuro.vue";
export default {
  components: { claroscuro },
  data(){
    return {
      pages: [
        { name: "Experiencia", link: "#experiencia" },
        { name: "Habilidades", link: "#habilidades" },
        { name: "Proyectos", link: "#proyectos" },
        { name: "Sobre mi", link: "#sobremi" },
        { name: "Contacto", link: "mailto:emilioferba@hotmail.com"}
        ]
    }
  }
}
</script>

<style scoped>
nav {
  animation: nav-shadow 1s linear both;
  animation-timeline: scroll();
  animation-range: 0 100px;
}


@keyframes nav-shadow {
  0% {
    background-color: rgba(255, 255, 255, 0);
    box-shadow: none;
    backdrop-filter: none;
  }
  100% {
    background-color: ligth-dark(rgba(42, 51, 65, 0.8), rgba(175, 175, 175, 0.8));
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(8px);
    border-radius: 10px;
  }
}
</style>