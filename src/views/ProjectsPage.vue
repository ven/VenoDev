<template>
    <div class="ProjectsPage">
        <div class="hero h-screen bg-purple-700 pt-24 pb-12">
            <div class="container mx-auto p-6">
                <div class="text-white text-5xl font-bold"><i class="fas fa-leaf mr-3"></i>Projects</div>
                <div class="text-gray-300 text-2xl font-medium">A collection of active projects.</div>

                <hr class="my-8">
                
                <section class="text-white text-center">
                    <carousel :loop="true" :autoplay="true" :perPage="2" paginationActiveColor="#5D028B" paginationColor="#FFFFFF">
                        <slide v-for="project in projects" v-bind:key="project.id">
                            <div class="container px-2">
                                <a :href="project.url">
                                    <div class="info container bg-purple-800 py-16 px-4 rounded-lg shadow-lg mb-8 text-wrap hover:bg-purple-900">
                                        <div class="font-bold text-2xl"><BaseIcon :name="project.icon" />{{ project.name }}</div>
                                        <div class="font-medium text-gray-300 text-lg">{{ project.description }}</div>
                                    </div>
                                </a>
                            </div>
                        </slide>
                    </carousel>
                    
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon';

export default {
    name: 'ProjectsPage',
    components: {
        BaseIcon
    },
    data: function () {
        return {
            projects: [
                {
                    id: 1,
                    name: 'discord.bio',
                    description: 'The simple way to extend your Discord profile.',
                    url: 'https://discord.bio/',
                    icon: 'fas fa-pen-fancy',
                },
                {
                    id: 2,
                    name: 'Centro',
                    description: 'A Discord administration & utility bot.',
                    url: 'https://top.gg/bot/579011189170896932/',
                    icon: 'fab fa-discord',
                },
                {
                    id: 3,
                    name: 'Apex Tracker',
                    description: 'A Discord bot for Apex Legends metrics & information.',
                    url: 'https://top.gg/bot/549006831847079958',
                    icon: 'fab fa-discord',
                },
                {
                    id: 4,
                    name: 'Risky World',
                    description: 'A statistics website for Risky Strats.',
                    url: 'https://risky.world/',
                    icon: 'fas fa-globe-americas',
                },
                {
                    id: 5,
                    name: 'Huecord',
                    description: 'A lightweight Discord bot for interacting with Philips Hue lights.',
                    url: 'https://github.com/venoras/Huecord/',
                    icon: 'fas fa-lightbulb',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
hr {
    border: 0;
    height: 2px;
    background-color: white;
}
</style>