<template>
  <div class="wrapper">
    <div class="top-content">
      <div class="copy">
        <h1 class="header line">Davey Newhall</h1>
        <p class="bio">Minneapolis, Minnesota based UI/UX designer and full stack developer with a passion for rock climbing, cycling, and the outdoors.</p>
      </div>
      <div class="main-image">

      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
  $orange: lighten(rgba(#cc9714, 1.0), 20%);

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    margin-top: 5vh;
    
    .top-content {
      width: 80%;

      .copy {
        width: 40%;

        .header {
          display: inline-block;
          margin: 0;
          padding: 0 16px;
        }

        .bio {
          padding: 0 16px;
        }
      }
    }

    .line {
      transition: all 0.2s ease-in-out;
      box-shadow: inset 0px -1rem 0px $orange;

      &:hover {
        box-shadow: inset 0px 0 0px $orange;
      }
    }
  }

</style>


