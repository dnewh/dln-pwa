<template>
  <transition name="modal">
      <div class="modal-mask" @click='close()'>
          <div class="modal-wrapper">
              <div class="modal-container">
                  <slot name="content">
                      
                  </slot>
              </div>
          </div>
      </div>
  </transition>
</template>

<script>
export default {
    methods: {
        close: function() {
            this.$parent.closeModal();
        }
    }
}
</script>

<style lang="scss" scoped>

    .modal-mask {
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 1s ease;

        .modal-wrapper {
            z-index: 210;
            display: flex;
            vertical-align: middle;

            .modal-container {
                margin: 0px auto;
                padding: 20px 30px;
                background-color: #fff;
                border-radius: 2px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
                transition: all 1s ease;
            }
        }

    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>


