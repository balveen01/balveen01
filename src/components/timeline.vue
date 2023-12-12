<script setup>
import accenture from "../assets/accenture_logo.png";
import smu from "../assets/smu_logo.png";
import sap from "../assets/sap_logo.png";
import hska from "../assets/hska_logo.png";
import eyte from "../assets/eyte_logo.png";
import nyp from "../assets/nyp_logo.png";
</script>

<template>
    <div class="container ml-5 mr-5 sm:mx-auto">
        <div class="grid grid-cols-2 place-items-center justify-items-center mt-10">
            <div class="col-span-2 lg:col-span-1 sm:col-span-2 mb-4">
                <h1 class="text-5xl font-bold">Timeline</h1>
            </div>
        </div>

        <div class="relative text-dark_color antialiased text-sm font-semibold">

            <!-- Vertical bar running through middle -->
            <div class="hidden sm:block w-1 bg-light_color absolute h-full left-1/2 transform -translate-x-1/2"></div>

            <!-- Left section, accenture-->
            <div class="mt-6 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pr-8">
                            <div class="p-4 bg-light_color rounded shadow">
                                <p class="text-3xl font-bold tracking-tight text-center">May 2023 - Aug 2023</p>
                                <p class="text-2xl font-bold tracking-tight text-center">Full Stack Developer @ Accenture</p>
                                <ul class="list-disc ml-4">
                                    <li>Documented precise bug report with reproduction steps for fixing problems reported by clients during UAT </li>
                                    <li>Communicated with backend developers on daily basis to maintain focus of code coverage for 11 modules </li>
                                    <li>Maintained code coverage of 90% by writing test using junit and Mockito </li>
                                    <li>Improve responsiveness of the UI design all application, collaborate with the frontend developers to increase responsiveness and display rules </li>
                                    <li>Collaborated with development team to identify and flag front end bugs using HTML, CSS, React, ensuring a seamless user experience</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-full bg-light_color border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img :src="accenture" alt="accenture" />
                    </div>
                </div>
            </div>

            <!-- Right section, smu -->
            <div class="mt-6 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-end w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pl-8">
                            <div class="p-4 bg-light_color rounded shadow">
                                <p class="text-3xl font-bold tracking-tight text-center">Aug 2021 - May 2025</p>
                                <p class="text-2xl font-bold tracking-tight text-center">Bachelor of Science in Information Systems, majoring in Digitalization Cloud Solutions and Artificial Intelligence @ SMU</p>
                                <ul class="list-disc ml-4">
                                    <li>Vice-President of SMU Sikh Society 2023 </li>
                                    <li>Participated in Global Summer Program 2022</li>
                                    <li>Volunteered as a programming tutor </li>
                                    <li>Volunteered at Campus Impact@Study Buddy</li>
                                    <li>Ellipsis Tech Series Hackathon: Top 30 (AY2023)</li>
                                    <li>Ellipsis Code# 2023: Top 50</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-full bg-light_color border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img :src="smu" alt="smu" class="h-7"/>
                    </div>
                </div>
            </div>

            <!-- Left section, sap -->
            <div class="mt-6 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pr-8">
                            <div class="p-4 bg-light_color rounded shadow">
                                <p class="text-3xl font-bold tracking-tight text-center">Sep 2020 - Jun 2021</p>
                                <p class="text-2xl font-bold tracking-tight text-center">Intern Developer @ SAP</p>
                                <ul class="list-disc ml-4">
                                    <li>Developed APIs utilizing Flask-RESTPlus APIs and Python scripts to be used to download logs from MinIO for tracking finished jobs and calculate the time taken to complete the jobs to keep track  </li>
                                    <li>Programmed an integration test for the existing scripts with the use of Pytest, help to evaluate the compliance with specified functional requirements before code merger</li>
                                    <li>Analyzed run time performance using Locust to check the number of users the program can handle and calculate how long it takes to complete the process to help the team shorten the time to access existing APIs  </li>
                                    <li>Fixed Code Smells from SonarQube by removing duplicate codes, dead code and comments to clean codes improving the quality of the codes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-full bg-light_color border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img :src="sap" alt="sap"/>
                    </div>
                </div>
            </div>

            <!-- Right section, hska -->
            <div class="mt-6 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-end w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pl-8">
                            <div class="p-4 bg-light_color rounded shadow">
                                <p class="text-3xl font-bold tracking-tight text-center">Mar 2020 - Mar 2020</p>
                                <p class="text-2xl font-bold tracking-tight text-center">HSKA UNIVESITY (KARSULRE, GERMANY)</p>
                                <ul class="list-disc ml-4">
                                    <li>Selected for an overseas internship, however, during the first week of the internship, was called back by the Ministry of Health due to an increase in COVID-19 cases in Germany and Singapore</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-full bg-light_color border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img :src="hska" alt="hska"/>
                    </div>
                </div>
            </div>

            <!-- Left section, eyte -->
            <div class="mt-6 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pr-8">
                            <div class="p-4 bg-light_color rounded shadow">
                                <p class="text-3xl font-bold tracking-tight text-center">Mar 2019 - Apr 2019</p>
                                <p class="text-2xl font-bold tracking-tight text-center">Web Designer @ Eyte Technologies</p>
                                <ul class="list-disc ml-4">
                                    <li>Designed single-handedly the company website using HTML and Weebly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-full bg-light_color border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img :src="eyte" alt="eyte"/>
                    </div>
                </div>
            </div>

            <!-- Right section, nyp -->
            <div class="mt-6 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-end w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pl-8">
                            <div class="p-4 bg-light_color rounded shadow">
                                <p class="text-3xl font-bold tracking-tight text-center">Apr 2018 - Mar 2021</p>
                                <p class="text-2xl font-bold tracking-tight text-center">Diploma with Merit in Business Informatics @ NYP</p>
                                <ul class="list-disc ml-4">
                                    <li>Edusave Certificate of Academic Achievement 2019, 2020</li>
                                    <li>Director List recipient for multiple semesters</li>
                                    <li>Edusave Merit Bursary 2020</li>
                                    <li>i.Code.i.Tell 2019</li>
                                    <li>Certified Cyber Ethical Hacker</li>
                                    <li>Partake in HsKA summer school programme (local and overseas run)</li>
                                    <li>Presented in outstanding presentation for multiple programming projects</li>
                                    <li>Facilitated peer-tutoring for computing mathematics and programming in semester 1</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-full bg-light_color border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img :src="nyp" alt="nyp"/>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script></script>

