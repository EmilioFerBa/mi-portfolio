<template>
    <div>
        <h1 class="text-3xl items-center text-center tc-basic mb-5">👥 Soft Skills</h1>
        <div class="flex flex-row flex-wrap gap-4 mt-6 mb-6 tc-basic-reverse font-bold">
            <div v-for="habilidad in habilidades" :key="habilidad" class="p-4 border skill-content rounded-lg text-center">
                {{ habilidad }}
            </div>
        </div>
        <h1 class="text-3xl items-center text-center tc-basic">⚙ Hard Skills</h1>
        <div class="flex flex-row flex-wrap gap-4 mt-6">
            <div v-for="lenguaje in lenguajes" :key="lenguaje" class="p-4 rounded-lg text-center flex-grow w-30">
                <img :src="'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/' + lenguaje" />

            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const lenguajes = [
            'javascript/javascript-original.svg',
            "vuejs/vuejs-original.svg",
            "nuxt/nuxt-original-wordmark.svg",
            "python/python-original.svg",
            "flask/flask-original-wordmark.svg",
            "html5/html5-original.svg",
            "css3/css3-original-wordmark.svg",
            "tailwindcss/tailwindcss-original-wordmark.svg",
            "mysql/mysql-original.svg",
            "sqlalchemy/sqlalchemy-original.svg",
            "git/git-original-wordmark.svg",
            "docker/docker-original.svg",
            "linux/linux-original.svg",
            "amazonwebservices/amazonwebservices-original-wordmark.svg"
        ];
        const habilidades = [
            "Trabajo en equipo", "Comunicación efectiva", "Resolución de problemas",
            "Adaptabilidad", "Liderazgo", "Pensamiento crítico",
            "Creatividad", "Empatía", "Responsabilidad", "Proactividad"
        ];
        return { lenguajes, habilidades };
    },
}
</script>

<style scoped>
.skill-content{
    background-color: light-dark(#6a7282, white);
}
</style>