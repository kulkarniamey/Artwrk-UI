<template>

<div class="container-fluid" >

  

      <v-text-field prepend-inner-icon="mdi-magnify"  autofocus solo-inverted outlined  input  rounded  clearable   @input="isTyping = true" v-model="searchQuery" placeholder="Search ArtWrk"> </v-text-field>
      

      <div align="center" v-if="isLoading">
      <span>Searching...</span>
      </div>


                            <!-- <v-select
                                  v-if="searchQuery"
                                  disable-lookup
                                  :items="mappedName"
                                  
                                

                                  
                                  persistent-hint
                                ></v-select> -->


                        <!-- <v-combobox prepend-inner-icon="mdi-magnify"   solo outlined  input   clearable  class="form-control" @input="isTyping = true" v-model="searchQuery" 

                                  
                                  :items="mappedName"

                                
                                
                                ></v-combobox>
                                -->



      
      <v-list v-if="searchQuery">
        <v-list-item  
          v-for="(item, i) in searchResult" :key="i" @click="() => {}">
          <v-list-item-content @click="user(item.login)" >
            {{item.login}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
     


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
            mappedName:[],
            
            
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
          this.giveNames();
          
          

        });
    },
    giveNames(){
      const mappedName = this.searchResult.map((result) =>{
        return result.login
      });
      this.mappedName = mappedName;
      console.log(mappedName);
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