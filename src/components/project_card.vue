<script setup>
</script>

<template>
<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10 gap-3 place-items-center justify-items-center" >
    <div v-for="project in project_info" :key="project.title" class="col-span-1 h-full place-items-center justify-items-center w-full sm:max-w-sm">
        <div class="sm:max-w-sm bg-light_color border-light_color rounded-lg shadow dark:bg-light_color dark:border-light_color h-full w-full">
            <!-- <img class="rounded-t-lg h-48" :src="project.img" alt="" id="proj_img" /> -->
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-dark_color dark:dark_color" id="proj_title">{{ project.title }}</h5>
                <p class="mb-3 font-normal text-dark_color" id="proj_desc"><span class="font-bold">Description: </span>{{ project.desc }}</p>
                <p class="mb-3 font-normal text-dark_color" id="proj_skill"><span class="font-bold">Skills: </span>{{ project.skills }}</p>
                <p class="mb-3 font-normal text-dark_color" id="proj_year">{{ project.year }}</p>
                <a :href="project.link" class="inline-flex items-center px-3 py-2 text-xl text-center text-dark_color " id="proj_link">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'projects',
    props: {
        project_info: [],
    }
}
</script>