<template>
<v-row justify='center'>

        <v-col cols="6" sm="6" md="6" >
        <v-autocomplete
            placeholder="Search "
            filled
            rounded
            dense
            :items='states'
            cache-items
            
          >
          
        </v-autocomplete>
        
  <v-col cols="4" sm="6">
          <v-select
            v-model="value"
            :items="items"
            
            chips
            label="Advance Search"
            multiple
            small
            clearable
          ></v-select>
        </v-col>

        </v-col>
</v-row>
</template>

<script>
export default {
    data () {
      return {
        items: ['artist', 'recruiter' ],
      value: ['artist', 'recruiter' ],
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
      }
    },
    
   
  }
</script>

<style>

</style>