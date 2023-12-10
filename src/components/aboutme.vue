<script setup>
</script>

<template>
    <!-- introduction part -->
    <div class="container ml-5 mr-5 sm:mx-auto">
    <div class="grid grid-cols-2 place-items-center justify-items-center mt-5">
        <div class="col-span-2 lg:col-span-1 sm:col-span-2">
            <img class="rounded-full w-64 h-64 sm:justify-items-center" src="../assets/my pic.jpg" alt="image description">
        </div>
        <div class="col-span-2 justify-items-start lg:col-span-1 sm:col-span-2">
            <h1 class="text-4xl font-bold">Hello there! I'm Balveen Kaur</h1>
            <!-- <p class="text-3xl"><span id="typedMessage" class="typed">{{ typed }}</span></p> -->
            <p class="text-1xl">Year 3 Information Systems Undergraduate @ Singapore Management University</p>
        </div>
    </div>

    <div class="container flex items-center justify-center my-16">
        <hr class="border-4 border-light_color w-96 " />
    </div>
    

    <!-- about me part -->
    <div class="grid grid-cols-2 place-items-center justify-items-center mt-10">
        <div class="col-span-2 lg:col-span-1 sm:col-span-2 mb-4">
            <h1 class="text-5xl font-bold">About Me</h1>
        </div>
        <div class="col-span-2 justify-items-start lg:col-span-1 sm:col-span-2">
            <p class="text-1xl">I am a Year 3 Information Systems undergraduate majoring in <span class="font-bold">Digitalization Cloud Solutions</span> and <span class="font-bold">Artificial Intelligence</span> at <span class="font-bold">Singapore Management University(SMU)</span>. 
                I am an <span class="font-bold">self-motivated</span> and a <span class="font-bold">determined</span> individual who likes to pick up new skills to upgrade myself during my free time.
                My career goal is to obtain a <span class="font-bold">Software Developer</span> position in one of the esteemed organizations in the industry and utilize my skills and experience in the <span class="font-bold">Business</span> and <span class="font-bold">IT</span> field.</p>
        </div>
    </div>

        <!-- Divider -->
    <div class="container flex items-center justify-center my-16">
        <hr class="border-4 border-light_color w-96 " />
    </div>
</div>
</template>

<script>
export default {
    name: 'aboutme',
    data() {
        return {
            typed: ''
        };
    },
    mounted() {
        this.typed = new Typed('#typedMessage', {
            strings: ['Nice to meet you', 'I am a Software Developer'],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        });
    }
}
</script>
