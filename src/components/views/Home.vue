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
    <div class="section photos">
      <div class="container">
        <h1 class="title line">Photos</h1>
        <div class="content">
          <div class="photo"
              v-for="photo in photos"
              :key="photo.id"
              @click="showModal(photo.url_z, photo.title)">
            <img :src="photo.url_q" :alt="photo.title">
          </div>
        </div>
      </div>
    </div>
    <modal v-if="modalOpen" @close="closeModal()">
      <img slot="content" :src="selectedImgUrl" :alt="selectedImgTitle">
    </modal>
  </div>
</template>

<script>
import axios from 'axios';
import Modal from '@/components/components/Modal'

const flickrKey = "1e2d9abab954d38bdfe5922bed843d5e";

export default {
  data() {
    return {
      photos: [],
      modalOpen: false,
      selectedImgUrl: '',
      selectedImgTitle: ''
    }
  },
  mounted() {
    axios
      .get(`https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${flickrKey}&user_id=154011588@N02&format=json&nojsoncallback=1&per_page=8&extras=url_q,url_z`)
      .then(response => this.photos = response.data.photos.photo);
  },
  components: {
    Modal
  },
  methods: {
    showModal: function (url, title) {
      this.modalOpen = true;
      this.selectedImgUrl = url;
      this.selectedImgTitle = title;
    },
    closeModal: function () {
      this.modalOpen = false;
      this.selectedImgUrl = '';
      this.selectedImgTitle = '';
    }
  }
}
</script>

<style lang="scss" scoped>
  $orange: lighten(rgba(#cc9714, 1.0), 20%);
  $grey: lighten(rgba(#000, 1), 30%);
  $green: rgba(76,189,148,1);

  .wrapper {
    width: 100vw;
    // height: 100vh;
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
      width: 80vw;
      height: 70vh;
      min-height: 70vh;

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
      width: 80vw;
      padding-bottom: 2rem;

      .container{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        padding: 0 1rem 2rem;
        margin: 0;

        .title {
          padding: 0 1rem;
        }

        .content {
          display: flex;
          flex-direction: row;
          margin-top: 1.5rem;

          .photo {
            padding: 1.5rem;
            margin: 0 3rem;
            transition-duration: 0.3s;
            display: flex;
            box-sizing: content-box;
            box-shadow: 0px 0px 50px 1px lighten($grey, 50%);
            align-items: flex-start;
            cursor: pointer;

            img {
              object-fit: fill;
            }

            &:first-child {
              margin-left: 0;
            }

            &:nth-child(5n) {
              margin-left: 0;
            }

            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }

    .separator {
      width: 70%;
      display: flex;
      margin: 5vh 0;
      min-height: 32px;

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


