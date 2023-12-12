<script setup>
    import project_card from "./project_card.vue";
</script>

<template>
    

    
    <!-- Projects -->
    <div class="container ml-5 mr-5 sm:mx-auto">
        <div class="container flex items-center justify-center my-16">
            <hr class="border-4 border-light_color w-96 " />
        </div>

        <div class="grid grid-cols-2 place-items-center justify-items-center mt-10">
            <div class="col-span-2 lg:col-span-1 sm:col-span-2 mb-4">
                <h1 class="text-5xl font-bold">My Projects</h1>
            </div>
        </div>

        <project_card :project_info="project_info"/>

        <!-- Divider -->
    <div class="container flex items-center justify-center my-16">
        <hr class="border-4 border-light_color w-96 " />
    </div>
    </div>

</template>

<script>
export default {
    name: 'projects',
    data() {
        return {
            project_info: [
                {
                    img: "../assets/",
                    title: "Web Application Development (IT1507)",
                    desc: "A simple travel website",
                    link: "https://github.com/balveen01/WAD-IT1507",
                    skills: "HTML, CSS, JavaScript",
                    year: "Apr 2018 - Aug 2018"
                },
                {
                    img: "../assets/",
                    title: "Object Oriented Programming (ITP182)",
                    desc: "Singapore Transportation Systems is website that helps user to plan their trip early with the knowledge of the Mass Rapid Transportation (MRT) and bus timing. They are also able to use our features for taxi and bicycles.",
                    link: "https://github.com/balveen01/OOP-ITP182",
                    skills: "Python, Flask HTML, CSS",
                    year: "Oct 2018 - Feb 2019"
                },
                {
                    img: "../assets/",
                    title: "Enterprise Business (ITP281)",
                    desc: "Partiety is a website selling party items to customer and give recommendation to customer on products knowing their theme of party and the budget they have.",
                    link: "https://github.com/balveen01/Ebiz-ITP281",
                    skills: "C#, ASP.NET HTML, CSS",
                    year: "Apr 2019 - Aug 2019"
                },
                {
                    img: "../assets/",
                    title: "Enterprise Application Development (ITP282)",
                    desc: "The idea is the create a business to business web application. Triangle is the company and Doosan is the supplier. Triangle: Triangle sells computer and related appliances to their customers. Once their stocks run low, they order from Doosan, their supplier. Doosan: Doosan sells computer to other companies, one of them being Triangle.",
                    link: "https://github.com/balveen01/EADP-ITP282",
                    skills: "C#, ASP.NET, using web services, SQL",
                    year: "Oct 2019 - Feb 2020"
                },
                {
                    img: "../assets/",
                    title: "Web Application Development II (IS216)",
                    desc: "This web application 'One Stop Planner' seeks to address the concerns an everyday commuter might have; route planning, journey time etc. In this project, we aim to build a web-based one-stop portal for Singaporeans that travel via public transportation or their personal cars.",
                    link: "https://github.com/balveen01/WAD",
                    skills: "HTML. CSS. Bootstrap. PHP, Javascript, Vue.js, Firebase",
                    year: "Aug 2022 - Nov 2022"
                },
                {
                    img: "../assets/",
                    title: "Personal Portfolio (Version 1)",
                    desc: "My personal portfolio website, the first version",
                    link: "https://github.com/balveen01/balveen_v1",
                    skills: "HTML, CSS, BootStrap",
                    year: "Aug 2022 - Nov 2022"
                },
                {
                    img: "../assets/",
                    title: "Enterprise Solution Development (IS213)",
                    desc: "Haven is an one-stop property bidding platform for users to view property listings, book appointment to view listings and bid for properties.",
                    link: "https://github.com/xinyitann/ESD",
                    skills: "Python, Flask, RestPlus API, RabbitMQ, Vue, Javascript, SQL, Docker, HTML, CSS, Bootstrap, Postman",
                    year: "Jan 2023 - Apr 2023"
                },                
                {
                    img: "../assets/",
                    title: "Software Project Management (IS212)",
                    desc: "A web-based application that serve as a platform to facilitate job postings within a company and ease of applications for employees according to skills matching and their career aspirations.",
                    link: "https://github.com/faithangg/is212-project",
                    skills: "Python, Flask, Vue, Javascript, SQL, HTML, CSS, Vuetify, Postman",
                    year: "Aug 2023 - Nov 2023"
                },
                {
                    img: "../assets/",
                    title: "Personal Portfolio (Version 2)",
                    desc: "My personal portfolio website, the current version",
                    link: "https://github.com/balveen01/balveen01",
                    skills: "HTML, CSS, Vue, Javascript, TailwindCSS, Flowbite",
                    year: "Dec 2023 - Dec 2023"
                }
            ]
            
        };
    },
    mounted() {
        console.log(project_info);
    }
}
</script>