<template>
  <div>
    <v-dialog v-model="showModal" persistent max-width="960">
      <v-card class="modal-card">
        <v-spacer /><v-spacer />
        <v-btn
          @click="closeModal()"
          color="white darken-1"
          icon
          class="close-btn justify-right"
          ><v-icon>mdi-close</v-icon></v-btn
        >
        <v-img
          class="white--text align-end"
          :src="postImg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          cotain
          width="960px"
          height="480px"
        >
          <div class="image-content">
            <v-card-title>
              {{ postTitle }}
            </v-card-title>

            <v-spacer></v-spacer>

            <v-btn icon class="white--text align-end">
              <v-icon left>mdi-heart</v-icon>
            </v-btn>
          </div>
        </v-img>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['showModal', 'singlePost'],
  methods: {
    closeModal(e) {
      this.$emit('closedModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-img {
  width: 80%;
  height: 90%;
  object-fit: cover;
  margin: 2em auto;
}

.modal-card {
  display: flex;
  flex-direction: column;
}
.close-btn {
  position: absolute;
  right: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.05);
}
.image-content {
  display: flex;
}
</style>
