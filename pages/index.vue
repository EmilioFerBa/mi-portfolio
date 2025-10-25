<template>
  <div class="flex flex-col justify-center items-center gap-10 pb-10">
    <Presentacion id="presentacion"></Presentacion>
    <Experiencia id="experiencia"></Experiencia>
    <Habilidades id="habilidades"></Habilidades>
    <Proyectos id="proyectos"></Proyectos>
    <SobreMi id="sobremi"></SobreMi>
  </div>
</template>

<script setup>
import Experiencia from "~/components/Experiencia.vue";
import Presentacion from "~/components/Presentacion.vue";
import Habilidades from "~/components/Habilidades.vue";
import Proyectos from "~/components/Proyectos.vue";
import SobreMi from "~/components/SobreMi.vue";
</script>

<style scoped>
div{
  width: 60dvw;
  margin: auto;
}



</style> 