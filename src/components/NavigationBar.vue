<template>
    <div class="NavigationBar">
        <nav class="flex items-center justify-between flex-wrap bg-purple-800 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg class="stroke-current text-purple-500 mr-4" width="20px" height="12px" viewBox="0 0 20 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Icons" stroke="none" stroke-width="3" fill="none" fill-rule="evenodd">
                        <g id="Outlined" transform="translate(-476.000000, -248.000000)">
                            <g id="Action" transform="translate(100.000000, 100.000000)">
                                <g id="Outlined-/-Action-/-outline-code" transform="translate(374.000000, 142.000000)">
                                    <g>
                                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                        <path d="M9.4,16.6 L4.8,12 L9.4,7.4 L8,6 L2,12 L8,18 L9.4,16.6 Z M14.6,16.6 L19.2,12 L14.6,7.4 L16,6 L22,12 L16,18 L14.6,16.6 Z" fill="#FFFFFF"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <span class="font-semibold text-xl tracking-tight">veno.dev</span>
            </div>
            
            <div @click="toggle" class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div :class="open ? 'block': 'hidden'" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow text-white">
                    <router-link to="/">
                        <a class="block mt-4 lg:inline-block lg:mt-0 hover:text-indigo-300 mr-4">
                            <i class="fas fa-home mr-2"></i>Landing
                        </a>
                    </router-link>

                    <router-link to="projects">
                        <a class="block mt-4 lg:inline-block lg:mt-0 hover:text-indigo-300 mr-4">
                            <i class="fas fa-folder-open mr-2"></i>Projects
                        </a>
                    </router-link>
                    
                    <!-- Divider -->

                    </div>
                    <div>

                    <a href="https://twitter.com/venolol/" class="add-spin inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 shadow-lg mr-3"><span class="fab fa-twitter mr-2"></span>Twitter</a>
                    <a href="https://github.com/venoras/" class="add-spin inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 shadow-lg"><span class="fab fa-github mr-2"></span>GitHub</a>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data: function() {
        return {
            open: false,
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
  }
}
</script>

<style lang="scss" scoped>
.add-spin {
  animation: spin 2s ease;
  /*Set our animation play state to paused initially */
  animation-play-state: paused; 
}

.add-spin:hover {
  /* Toggle our animation play state to running when we are hovering over our sticker */
  animation-play-state: running;
}

@keyframes spin {
    0% {transform: rotate(0deg); }
    50% {transform: rotate(-5deg); }
    75% {transform: rotate(5deg); }
    100% {transform: rotate(0deg); }
}
</style>