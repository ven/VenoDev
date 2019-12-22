<template>
  <div class="LandingPage bg-purple-400">

    <div class="hero bg-purple-700 pt-24">
      <div class="container mx-auto justify-center items-center mt-32">
        
        <div class="container text-white text-center">

          <div class="text-5xl font-bold">Hi, I'm <span class="underline hover:text-purple-300">Ven</span>.</div>
          <div class="text-2xl font-normal text-gray-300">Full-stack web &amp; Discord bot developer.</div>

          <div class="flex-auto items-center justify-between flex-wrap mt-4 pb-8">

            <button class="shadow-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-full mr-3">
              <i class="fas fa-envelope mr-2"></i>Contact
            </button>

            <button class="shadow-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-full">
              <i class="fas fa-meteor mr-2"></i>Bots
            </button>

          </div>
        </div>

      </div>
    </div>
    
    <div class="wave-container">
      <svg class="fill-current text-purple-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 70 1440 320">
        <path d="M0,288L48,266.7C96,245,192,203,288,202.7C384,203,480,245,576,266.7C672,288,768,288,864,261.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>

    <div class="hero pb-32 mx-8 my-8 pt-20">
      <div class="container text-black text-left mx-auto font-sans">
        
        <div class="container about text-gray-200 bg-purple-700 rounded-lg p-8 shadow-lg" v-scroll-reveal="{ delay: 150 }">
          <div class="text-4xl font-bold"><i class="fas fa-info-circle mr-3"></i>About Me</div>

          <hr>

          <div class="text-xl font-normal mt-2">I'm a <span class="font-bold hover:text-purple-300">17 year old</span> web developer from the 🇬🇧 <span class="font-bold hover:text-purple-300">United Kingdom</span> who enjoys working with both <i class="fab fa-js mr-2"></i><a class="font-bold underline hover:text-purple-300" href="https://www.ecma-international.org/memento/tc39.html">Javascript</a> &amp; <i class="fab fa-python mr-2"></i><a class="font-bold underline hover:text-purple-300" href="https://python.org/">Python</a>.</div>
        </div>

        <div class="container skills text-gray-200 bg-purple-700 rounded-lg p-8 mt-8 shadow-lg" v-scroll-reveal="{ delay: 150 }">
          <div class="text-4xl font-bold"><i class="fas fa-bookmark mr-3"></i>Skills</div>

          <hr>

          <div class="text-xl font-normal mt-2">
            <ul class="list-disc ml-4">
              <li><i class="fas fa-database mr-2"></i>MySQL, PostgreSQL, SQLite, Redis</li>
              <li><i class="fab fa-vuejs mr-2"></i>Vue.js</li>
              <li><i class="fab fa-node mr-2"></i>Node.js (Express)</li>
              <li><i class="fab fa-github mr-2"></i>Git</li>
              <li><i class="fab fa-discord mr-2"></i>Discord.py &amp; Discord.js</li>
            </ul>
          </div>
        </div>

        <router-link to="projects">
          <div class="container projects text-gray-200 bg-purple-700 rounded-lg p-8 mt-8 shadow-lg text-center hover:bg-purple-600" v-scroll-reveal="{ delay: 150 }">
            <div class="text-4xl font-bold"><i class="fas fa-arrow-right mr-3"></i>View Projects</div>
          </div>
        </router-link>

      </div>
    </div>

    <div class="wave-container">
      <svg class="fill-current text-purple-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path d="M0,224L48,229.3C96,235,192,245,288,256C384,267,480,277,576,261.3C672,245,768,203,864,186.7C960,171,1056,181,1152,208C1248,235,1344,277,1392,298.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    <div class="hero-footer bg-purple-700 p-12 text-white">
      <div class="container flex items-center justify-center mx-auto text-center font-bold">
        <span class="rounded-full bg-purple-800 px-4 py-2 shadow-lg m-1">
          <i class="fas fa-code mr-3"></i>Ven Development &copy; 2020
        </span>

        <a href="mailto:hello@veno.dev" class="rounded-full bg-purple-800 px-4 py-2 shadow-lg m-1 font-bold">
          <i class="fas fa-envelope mr-2"></i>hello@veno.dev
        </a>
      </div>
    </div>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
hr {
    border: 0;
    height: 2px;
    margin-top: 5px;
    margin-bottom: 15px;
    background-color: white;
}
</style>
