<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon dark>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Company Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field v-model="profile.text" label="Description of Company" required></v-text-field>
              </v-col>
              
              
              <v-col cols="12">
                <v-text-field v-model="profile.address" label="Location " required></v-text-field>
              </v-col>

               <v-col cols="12">
                <v-text-field v-model="profile.email" label="Email " required></v-text-field>
              </v-col>
          
      
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    props:{
      profileData:{type: Object, required: true},
      eventBus:{type:Object, required:true }
    },
    data: () => ({
      dialog: false,
      profile: {}
    }),
  mounted(){
    this.profile = this.profileData;
  },
  methods:{
    onSave(){
      this.eventBus.$emit('save-profile',this.profile)
    }
  }
}
</script>