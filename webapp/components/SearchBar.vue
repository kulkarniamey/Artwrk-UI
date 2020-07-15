<template>

<div class="container-fluid" >
      <v-text-field prepend-inner-icon="mdi-magnify" outlined  input   clearable  class="form-control" @input="isTyping = true" v-model="searchQuery" placeholder="Search ArtWrk"> </v-text-field>
      

      <div align="center" v-if="isLoading">
      <span>Searching...</span>
      </div>


    <v-select
          
          :items="searchResult"
          
        

          
          persistent-hint
        ></v-select>


    <v-expand-transition>
      <v-list v-if="searchQuery">
        <v-list-item 
          v-for="(item, i) in searchResult" :key="i">
          <v-list-item-content @click="user(item.login)">
            {{item.login}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expand-transition>

  </div>

</template>

<script>

import _ from 'lodash'
import axios from 'axios'

export default {
    name:"SearchBar",
     data: () => ({
            searchQuery: "",
            isTyping: false,
            searchResult: [],
            isLoading: false,
            
    }),


    watch: {
    searchQuery: _.debounce(function() {
      this.isTyping = false;
    }, 1000),

    isTyping: function(value) {
      if(this.searchQuery === ''){return null}
      else{
      if (!value) {
        this.searchUser(this.searchQuery);
      }
      }
    }
  },

   methods: {
    searchUser: function(searchQuery) {
    	this.isLoading = true;
      axios.get('https://api.github.com/search/users?q=' + searchQuery)
        .then(response => {
        	this.isLoading = false;
          this.searchResult = response.data.items;
          this.isLoading = false;
          
          

        });
    },


    user:function(value){
      console.log(value)
      
     this.$router.push("user/" + value);
    
    }
  }

}
</script>

<style scoped >


</style>