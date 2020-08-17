<template>
  <div>
    <v-card flat>
      <v-chip
        v-for="(names, id) in skills"
        :key="id"
        class="ma-1"
        color="blue lighten-4"
        >{{ names }}
      </v-chip>

      <v-form v-if="isEdit" v-on:submit.prevent="addSkills()">
        <v-text-field required v-model="currentSkills" type="text">
        </v-text-field>

        <v-btn
          v-if="isEdit"
          type="submit"
          class="mx-2"
          small
          fab
          dark
          color="indigo"
        >
          <v-icon dark>mdi-plus </v-icon>
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Skillset',
  data: () => ({
    skills: [],
    currentSkills: [],
    placeholder: [
      'Adobe',
      'Web Development',
      'Java',
      'C++',
      'GO',
      'SQL',
      'Full-Stack Development',
      'Vuejs',
      'Linux'
    ]
  }),
  props: {
    skillData: { type: Array },
    isEdit: { type: Boolean, default: false },
  },
  methods: {
    addSkills: function() {
      if (this.currentSkills === '') return null
      else {
        this.skills.push(this.currentSkills)
        this.currentSkills = []
      }
    }
  },
  mounted() {
    this.skills = this.skillData
  },
  created() {
      this.$nuxt.$on('save-profile',(newProfile) => {
this.profile = newProfile
    })

  }
}
</script>

<style lang="scss" scoped></style>
