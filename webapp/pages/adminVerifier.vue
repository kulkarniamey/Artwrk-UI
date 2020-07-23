<template>
  <v-card
    class="mx-auto pt-15 mt-10"
    max-width="1000"
    color="indigo lighten-5 "
    
    
  >

 <p class="display-1 text--primary headline text-center">
        List Of Recruiter to be Verified
      </p>

          <v-list color="">

            <v-list-item
              v-for="(notification, i) in notifications"
              :key="i" :disabled="notifications.length === 0"
              
            >
                 <v-list-item-title>{{ notification.text }} </v-list-item-title>
                 <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false">Approve</v-btn>
          <v-btn color="primary" text @click="removeNotification(i)">Remove</v-btn>
        </v-card-actions>
            </v-list-item>
          </v-list>

           



  
  </v-card>
</template>


<script>
export default {
    data:()=>({

      notifications: [{
      id:1,
      text:"Hey I am First User",
      status: "unread"
    },
    {
      id:2,
      text:"Hey I am Secound User ",
      status:"unread"
    }],

    }),

    methods: {
    removeNotification(index){
      
      this.notifications.splice(index,1);
      
    }
}

}
</script>