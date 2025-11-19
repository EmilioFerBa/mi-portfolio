<template>
    <div>
        <h1 class="text-3xl items-center text-center dark:text-white">💼Experiencia laboral</h1>
        <section class="timeline text-red-500 dark:text-yellow-300 ">
            <div v-for="exp in experiencia" :key="exp.titulo" class="timeline-item">
                <div class="timeline-content">
                <div class="timeline-point"></div>
                <h3>{{ exp.titulo }}</h3>
                <span>{{ exp.periodo}}</span>
                <p>{{ exp.descripcion }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            experiencia: [
                {
                    titulo: "👥 Líder de equipo y Desarrollador Full-Stack - Madison MR",
                    periodo: "2021 - Presente",
                    descripcion: "Actualmente lidero un equipo de desarrolladores y gestiono proyectos usando Vue, Python y MySQL entre otras tecnolgías."
                },
                {
                    titulo: "💻 + ⚙️ Desarrollador Web Full-Stack - Madison MR",
                    periodo: "2019 - 2021",
                    descripcion: "Trabajé como desarrollador en distintos proyectos usando Vue y Python con MySQL."
                },
                {
                    titulo: "⚛️ Graduado en Física",
                    periodo: "2012 - 2019",
                    descripcion: "Aprendí análisis de datos, lógica y resolución de problemas complejos."
                }
            ]
        };
    },
}
</script>

<style scoped>

.timeline {
  position: relative;
  margin: 50px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: #ccc; /* línea vertical */
}

.timeline-item {
  position: relative;
  padding-bottom: 50px;
}

.timeline-point {
  position: absolute;
  left: 14px; /* centro sobre la línea */
  width: 16px;
  height: 16px;
  background-color: #4f46e5; /* color del punto */
  border-radius: 50%;
  top: 8px;
}

.timeline-content {
  padding-left: 40px;
}

.timeline-content h3 {
  margin: 0;
  font-size: 1.2rem;
}

.timeline-content span {
  font-size: 0.9rem;
  color: light-dark(black, #ffffff);
}

.timeline-content p {
  margin-top: 5px;
  color: light-dark(black, #ffffff);
}
</style>