<template>
    <div class="ProjectsPage">
        <div class="hero bg-purple-700 pt-24 pb-24">
            <div class="container mx-auto">
                <div class="text-white text-5xl font-bold"><i class="fas fa-leaf mr-3"></i>Projects</div>
                <div class="text-gray-300 text-2xl font-medium">A collection of active projects.</div>

                <hr class="my-8">
                
                <section class="text-white">
                    <div class="flex flex-wrap -mb-4">
                        <div class="info container w-1/3 bg-purple-800 p-16 rounded-lg shadow-lg mb-8 mr-4">
                            <div class="font-bold text-2xl"><i class="fab fa-discord mr-3"></i>Centro</div>
                        </div>

                        <div class="info container w-1/3 bg-purple-800 p-16 rounded-lg shadow-lg mb-8 mr-4">
                            <div class="font-bold text-2xl"><i class="fab fa-discord mr-3"></i>Apex Tracker</div>
                        </div>

                        <div class="info container w-1/3 bg-purple-800 p-16 rounded-lg shadow-lg mb-8 mr-4">
                            <div class="font-bold text-2xl"><i class="fas fa-globe-europe mr-3"></i>Risky World</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
hr {
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));
}
</style>