<template>
    <v-card>
        <v-card-title>
          <span class="headline">Sign Up!</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
          <p class="text-lg-right">Already an User?<v-btn @click="changeOption" text color="orange darken-1"> Log in </v-btn> </p>
        </v-card-text>
        <v-card-actions>
          <!-- <v-spacer></v-spacer> -->
          <v-btn color="orange darken-1" text @click="dialog = false" class="mx-auto">Sign Up</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        methods: {
            changeOption(){
                this.$emit('optionChanged');
            }
            
        },
    }
</script>

<style lang="scss" scoped>

</style>