<template>
  <div>
      
    <v-card>
      <v-list-item-subtitle>
      
     <div class="subtitle-1 ma-2" >Skills</div>
        
      </v-list-item-subtitle>
      <v-chip v-for="(names,id) in skills" :key="id" class="ma-1" color="blue lighten-4">{{ names }} 

      </v-chip>


        <v-form v-on:submit.prevent="addSkills()">
                 <v-text-field  required v-model="currentSkills" type="text"> </v-text-field>

                <v-btn type="submit" class="mx-2" small fab dark color="indigo" > <v-icon dark>mdi-plus </v-icon> </v-btn>
        </v-form> 
    
    </v-card>
      
  </div>
</template>

<script>
export default {

    data: () => ({
        skills: [
        "Adobe",
        "Web Development",
        "Java",
        "C++",
        "GO",
        "SQL",
        "Full-Stack Development",
        "Vuejs",
        "Linux"
      ],
      currentSkills:[],
    }), 

      methods: {
          addSkills: function()
          {
              if (this.currentSkills === "") return null ;

              else
              {this.skills.push(this.currentSkills)
               this.currentSkills="";}
          
          }
          }
    };

</script>

<style lang="scss" scoped>
</style>