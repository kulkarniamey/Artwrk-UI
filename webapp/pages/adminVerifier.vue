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
        v-for="(recruiter_list, i) in recruiter_list"
        :key="i"
        :disabled="recruiter_list.length === 0"
      >
        <v-list-item-title
          >{{ recruiter_list.recruiter_id }}
        </v-list-item-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="approveRecruiter(recruiter_list.recruiter_id)"
            >Approve</v-btn
          >
          <v-btn
            color="primary"
            text
            @click="removeRecruiter_list(recruiter_list.recruiter_id)"
            >Remove</v-btn
          >
        </v-card-actions>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  middleware: ['auth'],
  data: () => ({
    recruiter_list: [],
    activity: null
  }),

  async mounted() {
    this.getRecruiterList()
    if (!(this.$auth.user.type === 'admin')) {
      this.$router.push('comingsoon')
    }
  },

  methods: {
    removeRecruiter_list(index) {
      console.log(index)
      this.recruiter_id = index
      this.activity = 'delete'
      console.log(this.activity)
      this.verifyDeleteRecruiter(this.activity, this.recruiter_id)
      this.recruiter_list.splice(index, 1)
    },

    approveRecruiter(index) {
      console.log(index)
      this.recruiter_id = index
      this.activity = 'valid'
      this.verifyDeleteRecruiter(this.activity, this.recruiter_id)
      this.recruiter_list.splice(index, 1)
    },

    async getRecruiterList() {
      const payload = {
        operation: 'get_unverified_recruiter_list',
        id: 'samyak',
        type: 'admin'
      }
      try {
        const response = await this.$axios.put(
          `https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/requests`,
          payload
        )
        if (response) {
          this.recruiter_list = response.data.recruiters
        }
      } catch (err) {
        console.log(err)
      }
    },

    async verifyDeleteRecruiter() {
      const payload = {
        operation: 'verify_delete_recruiter',
        id: 'samyak',
        type: 'admin',
        recruiter_id: this.recruiter_id,
        activity: this.activity
      }

      console.log('Data Submitted payload:', this.payload)

      try {
        const response = await this.$axios.put(
          `https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/requests`,
          payload
        )

        console.log(response)
        if (response.data.statusCode === 200) {
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
