<template>
  <div>
    <v-dialog max-width="600" v-model="dialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          rounded
          color="indigo accent-4 mb-3"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Upload Post
        </v-btn>
      </template>
      <v-card>
        <v-card-title> Post Details </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Description" v-model="desc"> </v-text-field>
            <v-file-input
              prepend-icon="mdi-camera"
              label="File input"
              @change="handleFile"
            ></v-file-input>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false"
                >Close</v-btn
              >
              <v-btn color="blue darken-1" text @click="createPost">Save</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: UploadBtn
}
</script>

<style lang="scss" scoped></style>
