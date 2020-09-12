<template>
  <div class="button-cont">
    <v-btn text class="font-weight-bold mb-3"> Projects </v-btn>

    <v-menu bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          rounded
          color="indigo accent-4 mb-3"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Portfolio
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-dialog max-width="600" persistent v-model="dialogOne">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">Resume</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline"
                >Resume <v-spacer /><v-btn @click="showModal('Resume')" icon>
                  <i><v-icon dark>mdi-folder-upload</v-icon></i>
                </v-btn></v-card-title
              >
              <template v-if="profile.resume === null">
                <v-card-text
                  >You have not uploaded your Resume yet!</v-card-text
                >
                <v-img
                  src="/information_flow.png"
                  aspect-ratio="1.7"
                  contain
                ></v-img
              ></template>
              <template v-else>
                <a class="link " :href="profile.resume"
                  ><v-btn text> Download Resume</v-btn></a
                >
              </template>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogOne = false"
                  >Close</v-btn
                >
                <v-btn color="blue darken-1" text @click="dialogOne = false"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item>
        <v-list-item>
          <v-dialog max-width="600" persistent v-model="dialogTwo">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">Certificates</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline"
                >Certificates <v-spacer /><v-btn
                  @click="showModal('Certificate')"
                  icon
                >
                  <i><v-icon dark>mdi-folder-upload</v-icon></i>
                </v-btn></v-card-title
              >
              <template v-if="profile.certificates === null">
                <v-card-text
                  >You have not uploaded any Certificates yet!</v-card-text
                >
                <v-img
                  src="/data_processing.png"
                  aspect-ratio="1.7"
                  contain
                ></v-img>
              </template>
              <template v-else>
                <v-list shaped>
                  <v-list-item
                    v-for="(certificate, i) in profile.certificates"
                    :key="i"
                  >
                    {{ Object.keys(certificate)[0] }}

                    <v-spacer />

                    <a class="link " :href="Object.values(certificate)[0]"
                      ><v-btn text> Download Certificate</v-btn></a
                    >
                  </v-list-item>
                </v-list>
              </template>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogTwo = false"
                  >Close</v-btn
                >
                <v-btn color="blue darken-1" text @click="dialogTwo = false"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item>
        <v-list-item>
          <v-dialog max-width="600" persistent v-model="dialogThree">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">Awards & Recognition</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline"
                >Awards & Recognition <v-spacer /><v-btn
                  icon
                  @click="showModal('Certificate')"
                >
                  <i><v-icon dark>mdi-folder-upload</v-icon></i>
                </v-btn></v-card-title
              >

              <v-card-text
                >You have not uploaded any Recognitions yet!</v-card-text
              >
              <v-img src="/chart.png" aspect-ratio="1.7" contain></v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogThree = false"
                  >Close</v-btn
                >
                <v-btn color="blue darken-1" text @click="dialogThree = false"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog max-width="600" v-model="showUploadModal" persistent>
      <v-card class="pa-6">
        <v-card-title v-if="document === 'Certificate'">
          Details
        </v-card-title>
        <v-card-text>
          <v-form class="px-3 ma-6">
            <v-text-field
              v-if="document === 'Certificate'"
              label="Description"
              v-model="desc"
            >
            </v-text-field>
            <v-file-input
              prepend-icon="mdi-file-document"
              label="File input"
              @change="handleFile"
            ></v-file-input>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="showUploadModal = false"
                >Close</v-btn
              >
              <v-btn color="blue darken-1" text @click="uploadContent"
                >Upload {{ document }}</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'PortfolioButton',
  data() {
    return {
      dialogOne: false,
      dialogTwo: false,
      dialogThree: false,
      document: undefined,
      showUploadModal: false,
      desc: '',
      fileData: undefined
    }
  },
  props: { profile: { type: Object, required: true } },
  methods: {
    async uploadContent() {
      const state = this.$auth.getToken('local')
      const token = state.replace('Bearer ', '')
      let formData = new FormData()
      formData.append('file', this.fileData)
      const fname = this.fileData.name
      const id = this.$auth.user.user_id
      const uploadType = this.document.toLowerCase()
      const description = uploadType === 'certificate' ? this.desc : undefined
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorizationToken: token,
          metadata: JSON.stringify({
            user_id: id,
            upload_type: `${uploadType}`,
            filename: fname,
            description: description
          })
        }
      }
      try {
        const response = await this.$axios.put(
          `uploadcontent`,
          formData,
          config
        )

        console.log(response)
        this.fileData = null
        this.showUploadModal = false
      } catch (err) {
        console.log(err)
      }
    },
    handleFile(file) {
      this.fileData = file
    },
    showModal(docType) {
      this.showUploadModal = true
      this.document = docType
    }
  }
}
</script>

<style lang="css" scoped>
.link {
  text-decoration: none;
}
.button-cont {
  min-width: 360px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
