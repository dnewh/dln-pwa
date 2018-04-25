<template>
  <div id="app">
    <navbar logo="../static/Logo.svg"
            :links="links"></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/components/NavbarCenterBrand';

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
</style>
