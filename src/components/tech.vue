<script setup>
</script>

<template>
    <div class="container ml-5 mr-5 sm:mx-auto">
        <div class="grid grid-cols-2 place-items-center justify-items-center mt-10">
            <div class="col-span-2 lg:col-span-1 sm:col-span-2 mb-4">
                <h1 class="text-5xl font-bold">Technologies</h1>
            </div>
        </div>
        
        <div id="accordion-collapse" data-accordion="collapse" class="mt-10 ">
            <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-light_color rounded-t-xl focus:ring-4 focus:ring-light_color dark:focus:ring-light_color dark:border-light_color dark:text-gray-400  gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                <span>Frontend Technologies</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-b-0 border-light_color dark:border-light_color dark:bg-light_color">
                <p class="mb-2 text-light_color dark:text-light_color">HTML5, CSS, JavaScript, Vue.js, Vuetify, BootStrap, Flowbite, TailwindCSS</p>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-light_color focus:ring-4 focus:ring-light_color dark:focus:ring-light_color dark:border-light_color dark:text-light_color hover:bg-light_color dark:hover:bg-light_color gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span>Backend Technologies</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-b-0 border-light_color dark:border-light_color">
                <p class="mb-2 text-light_color dark:text-light_color">Python, Flask, C#, .NET, PHP, Java</p>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-light_color focus:ring-4 focus:ring-light_color dark:focus:ring-light_color dark:border-light_color dark:text-light_color hover:bg-light_color dark:hover:bg-light_color gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>Others</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-t-0 border-light_color dark:border-light_color">
                <p class="mb-2 text-light_color dark:text-light_color">MYSQL, Postgres, Postman, Docker, Sonarqube, RabbitMQ, Figma, Pycharm, Visual Studio Code, Visual Studio, CI/CD, JUnit, Selenium, Mockito</p>
                </div>
            </div>
        </div>

        <!-- Divider -->
        <div class="container flex items-center justify-center my-16">
            <!-- <hr class="border-4 border-light_color w-96 " /> -->
        </div>

    </div>
</template>