<template>
  <div class="wrapper">
    <div class="top-content">
      <div class="copy">
        <h1 class="header line">Davey Newhall</h1>
        <p class="bio">Minneapolis, Minnesota based UI/UX designer and full stack developer with a passion for rock climbing, cycling, and the outdoors.</p>
      </div>
      <img class="main-image" src="../../assets/images/portrait.svg" alt="Davey">
    </div>
    <div class="separator">
      <div class="grey" />
      <div class="green" />
    </div>
    <div class="section illustrator">
      <h1 class="title line">Illustrator Projects</h1>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
  $orange: lighten(rgba(#cc9714, 1.0), 20%);
  $grey: lighten(rgba(#000, 1), 30%);
  $green: rgba(76,189,148,1);

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    margin-top: 8%;
    
    .top-content {
      display: flex;
      justify-content: flex-start;
      box-sizing: content-box;
      box-shadow: 0px 0px 50px 1px lighten($grey, 50%);
      width: 80%;
      height: 70%;

      .copy {
        width: 50%;
        padding: 2rem 1rem;
        display: flex;
        align-content: center;
        flex-wrap: wrap;

        .header {
          display: inline-block;
          margin: 0;
          padding: 0 16px;
        }

        .bio {
          padding: 0 16px;
        }
      }
        
      .main-image {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .section {
      display: flex;
      justify-content: flex-start;
      width: 80%;

      .title {
        padding: 0 1rem;
      }
    }

    .separator {
      width: 70%;
      display: flex;
      margin: 5vh 0;

      .grey,
      .green {
        width: 65%;
        height: 24px;
      }

      .grey {
        margin-bottom: 8px;
        z-index: 10;
        background: $grey;
        transform: translateX(10%);
      }

      .green {
        margin-top: 8px;
        background: $green;
        transform: translateX(-10%);
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


