<template>
  <div>
    <v-dialog v-model="showModal" persistent max-width="620px">
      <v-card class="modal-card">
        <v-img class="modal-img" :src="postImg"></v-img>

        <v-card-title>
          {{ postTitle }}
        </v-card-title>
        <v-btn @click="closeModal()">Close</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['showModal', 'postTitle', 'postImg'],
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

// .modal-card {
//   width: 80%;
//   height: 90%;
// }
</style>
