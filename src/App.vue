<template>
  <div id="app">
    <navbar logo="../static/Logo.svg"
            :links="links"></navbar>
    <div class="progress-container">
      <div class="progress-bar" id="progressBar"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/components/NavbarCenterBrand';

window.onscroll = function() {fillScroll()};

function fillScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.height = scrolled + "%";
}

export default {
  name: 'App',
  data () {
    return {
      links: [
        {
          title: "Code",
          link: "/code",
          location: "left"
        },
        {
          title: "Illustrator",
          link: "/illustrator",
          location: "left"
        },
        {
          title: "Photos",
          link: "/photos",
          location: "right"
        },
        {
          title: "About",
          link: "/about",
          location: "right"
        }
      ]
    }
  },
  components: {
    'navbar': Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato|Permanent+Marker');

$lato : 'Lato', Helvetica, Arial, sans-serif;
$pm : 'Permanent Marker', serif;
$grey: rgba(#000, 0.8);
$green: rgba(76,189,148,1);

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

p {
  cursor: default;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $pm;
  cursor: default;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $grey;
  height: 100%;
}

.progress-container {
  position: fixed;
  top: 10vh;
  right: 0;
  z-index: 5;
  width: 8px;
  height: 90vh;

  .progress-bar {
    width: 100%;
    height: 0;
    background: $green;
  }
}

::-webkit-scrollbar-track
{
	// -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: transparent;
}

::-webkit-scrollbar
{
	width: 0px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb
{
	background-color: transparent;
}
</style>
