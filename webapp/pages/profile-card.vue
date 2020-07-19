<template>
<v-card  
    class="mx-auto my-12 tile"
    max-width="374" >

     
      <v-card-actions class="pt-10"> <v-btn mx-auto rounded color="indigo accent-4" dark > Connect</v-btn>   
      <v-spacer/>

    <v-btn small v-on:click="editContent" icon >
      
       <profileEdit/>
      
      <i v-show="isEditing" ><v-icon dark>mdi-content-save</v-icon></i>

      
    </v-btn> 

     </v-card-actions>


      <v-list-item-content>
          <v-list-item-title class="font-weight-black pl-5 pt-10">{{ text }}</v-list-item-title>
          <v-list-item-title  class="font-weight-black pl-3 pt-3"><v-icon large> mdi-map-marker</v-icon> {{ address }} </v-list-item-title>
      </v-list-item-content>
      <div>
      
      <div class="display-2 pl-15 pt-5 font-weight-black" >Active Jobs</div>
      <div class="display-2 pt-5 text-center font-weight-black">  {{ActiveJobs}} </div>
        
      </div>
      <v-list-item-title class="font-weight-black pl-5 pt-10">Connections {{ connections }}</v-list-item-title>
      <v-list-item-title class="font-weight-black pl-5 pb-10">Contact <br> Email-{{email}} </v-list-item-title>

      

  

  
 


      

      
    
      
 
    
</v-card>


</template>

<script>
import profileEdit from  '../components/ProfileEdit'
export default {

   components: {
    profileEdit
  },
data: () => ({

  text:"We are network company based in India",
  address:"Banglore India",
  ActiveJobs:"34",
  connections:"1.2k",
  email:"abc@xyz.com",
  isEditing: false,

      
    
    }),

    methods:{
      editContent: function editContent() {
      if (!this.isEditing) {
        this.isEditing = !this.isEditing;
       
      } else {
        this.isEditing = !this.isEditing;
        
      }
    }
    }

}
</script>

<style>

 

</style>