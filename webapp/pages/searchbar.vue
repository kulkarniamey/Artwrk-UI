<template>

<div class="container-fluid" >
      <v-text-field input    color="white" rounded filled class="form-control" @input="isTyping = true" v-model="searchQuery" placeholder="Type your keyword"> </v-text-field>

      <div align="center" v-if="isLoading">
      <span>Searching...</span>
      </div>

    <v-expand-transition>
      <v-list v-if="searchQuery" color="indigo lighten-1">
        <v-list-item
          v-for="(item, i) in searchResult" :key="i">
          <v-list-item-content>
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
    }
  }

}
</script>

<style>

</style>