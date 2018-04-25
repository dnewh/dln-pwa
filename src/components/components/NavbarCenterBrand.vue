<template>
  <div class="nav-container">
      <div class="branding">
          <router-link to="/">
            <img :src="logo" alt="Logo">
          </router-link>
      </div>
      <div class="navigation left">
          <div class="links">
              <router-link class="link draw meet"
                   v-for="link in links"
                   :key="link.title"
                   v-if="link.location === 'left'"
                   :to="link.link">
                   <span>{{ link.title }}</span>
              </router-link>
          </div>
      </div>
      <div class="navigation right">
          <div class="links">
              <router-link class="link draw meet"
                   v-for="link in links"
                   :key="link.title"
                   v-if="link.location === 'right'"
                   :to="link.link">
                   <span>{{ link.title }}</span>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        logo: {
            type: String,
            required: true
        },
        links: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
    $grey: rgba(#000, 0.6);
    $green: rgba(76,189,148,1);
    $lato : 'Lato', Helvetica, Arial, sans-serif;

    .nav-container {
        display: flex;
        height: 10vh;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-family: $lato;
        border-bottom: 1px solid #000;
        transition-duration: 0.3s;
        z-index: 10;

        .branding {
            width: 25vw;
            height: 70%;
            order: 2;

            img {
                height: 100%;
            }
        }

        .navigation {
            display: flex;
            height: 100%;

            .links {
                display: flex;
                height: 100%;

                .link {
                    display: flex;
                    align-items: center;
                    padding: 0 1.5em;
                    margin: 0 0.5em;
                    color: #000;
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                    border: 0;
                    box-sizing: border-box;
                    box-shadow: inset 0 0 0 2px transparent;
                    transition: all 0.15s;

                    &::before,
                    &::after {
                        box-sizing: inherit;
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 100%;
                    }

                    &:hover {
                        background: rgba(#fff, 0.3);
                    }
                }

                .draw {
                    transition: color 0.15s;

                    &::before,
                    &::after {
                        // Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
                        border: 2px solid transparent;
                        width: 0;
                        height: 0;
                    }

                    // This covers the top & right borders (expands right, then down)
                    &::before {
                        top: 0;
                        left: 0;
                    }

                    // bottom & left borders (expands left, then up)
                    &::after {
                        bottom: 0;
                        right: 0;
                    }
                    
                    &:hover {
                        color: $green;
                    }

                    // Hover styles
                    &:hover::before,
                    &:hover::after {
                        width: 100%;
                        height: 100%;
                    }

                    &:hover::before {
                        border-top-color: $green; // Make borders visible
                        border-right-color: $green;
                        transition:
                        width 0.15s ease-out,
                        height 0.15s ease-out 0.15s;
                    }

                    &:hover::after {
                        border-bottom-color: $grey; // Make borders visible
                        border-left-color: $grey;
                        transition: border-color 0s ease-out 0.5s, // Wait for ::before to finish before showing border
                        width 0.15s ease-out 0.5s,
                        height 0.15s ease-out 0.75s;
                    }
                }

                // Inherits from .draw
                .meet {
                
                    &:hover {
                        color: #000;
                        text-decoration-color: $green;
                    }

                    // Start ::after in same position as ::before
                    &::after {
                        top: 0;
                        left: 0;
                    }

                    // Change colors
                    &:hover::before {
                        border-top-color: $green;
                        border-right-color: $green;
                    }

                    &:hover::after {
                        border-bottom-color: $grey;
                        border-left-color: $grey;
                        transition: // Animate height first, then width
                        height 0.15s ease-out,
                        width 0.15s ease-out 0.15s;
                    }
                }

                .router-link-active {
                    color: $green;
                    text-decoration: underline;
                    text-decoration-color: $grey;
                }
            }
        }

        .left {
            order: 1;
        }

        .right {
            order: 3;
        }

        &:hover {
            height: 15vh;

            .navigation {
                height: 60%;
            }
        }
    }

</style>

