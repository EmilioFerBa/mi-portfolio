<template>
    <section id="presentacion" class="mt-30 flex flex-col justify-center items-center gap-5 ">
      <NuxtImg src="/images/images.png" alt="Banner about" class="w-1/5"/>
      <h2>👋 Bienvenido, soy <span class='tc-name'>Emilio</span></h2>
      <p class="text-center text-xl w-3/5">
       <strong>+5 años de experiencia.</strong>
       <strong class="tc-t1"> Desarrollador web full-stack.</strong>
       <strong class="tc-t2"> De Salamanca, España. </strong>
       <strong class="tc-t3"> De graduado en Física a desarrollar aplicaciones.</strong></p>
    </section>
    <section class="flex flex-row gap-15">
        <a href="mailto:emilioferba@hotmail.com" class="text-xl bc-button p-2 rounded-lg flex flex-row items-center text-black ">
            📧Contáctame
        </a>
        <a href="https://www.linkedin.com/in/emilio-fern%C3%A1ndez-basanta-608022189/" target="_blanck" class="text-xl bc-button p-2 rounded-lg flex flex-row items-center text-black "> 
            <NuxtImg src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" class="w-6"/>
            LinkedIn
        </a>
    </section>
</template>

<style scoped>
h2{
  font-size: 2rem;
  font-weight: 600;
}

.tc-name{
    color: light-dark(#3b82f6, #fa8d8d);
}
.tc-t1{
    color: light-dark(#eab308, #f8e65b);
}
.tc-t2{
    color: light-dark(#ef4444, #fa8d8d);
}
.tc-t3{
    color: light-dark(#3b82f6, #91c0fa);
}
.bc-button{
    background-color: light-dark(#f59e0b, #fae8a1);
}

.bc-button:hover{
    background-color: #ccb96f;
}
</style>