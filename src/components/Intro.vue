<script setup>
</script>

<template>
    <!-- introduction part -->
    <div class="grid grid-cols-4 place-items-center justify-items-start mt-5">
        <div class="col-start-2 col-span-1">
            <img class="rounded-full w-64 h-64" src="../assets/my pic.jpg" alt="image description">
        </div>
        <div class="col-span-2 justify-items-start">
            <h1 class="text-4xl font-bold">Hello there! I'm Balveen Kaur</h1>
            <p class="text-3xl"><span id="typedMessage" class="typed">{{ typed }}</span></p>
            <p class="text-1xl">Year 3 Information Systems Undergraduate @ Singapore Management University</p>
        </div>
    </div>

    <!-- about me part -->
</template>

<script>
export default {
    name: '',
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
