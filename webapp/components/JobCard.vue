<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="job in jobs" :key="job.name">
        <v-lazy
          v-model="job.isActive"
          :options="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <v-card class="text-sm-center ma-2">
            <v-responsive class="pt-3 justify-center">
              <v-avatar color="deep-purple" size="100">
                <v-icon size="80" color="white" v-text="job.avatar"></v-icon>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <v-card-title class="justify-center headline">{{
                job.name
              }}</v-card-title>
              <div class="grey--text">{{ job.info }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="deep-purple white--text">
                Apply for job
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-lazy>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          name: 'LogicBlend',
          avatar: 'mdi-account',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'SpecDrive',
          avatar: 'mdi-account-supervisor',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'CloakSeven',
          avatar: 'mdi-account-group',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'Work&Aty',
          avatar: 'mdi-account-circle',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'Logic&Effiny',
          avatar: 'mdi-briefcase-account',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'Clad&Brin',
          avatar: 'mdi-clipboard-account',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },

        //**  Extraas (to be deleted) **//
        {
          name: 'LogicBlend',
          avatar: 'mdi-account',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'SpecDrive',
          avatar: 'mdi-account-supervisor',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'CloakSeven',
          avatar: 'mdi-account-group',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'Work&Aty',
          avatar: 'mdi-account-circle',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        }

        //**  Extraas (to be deleted) **//
      ]
    }
  },
  computed: {
    renderCard() {
      return this.jobs.filter((p) => p.isActive).length
    }
  }
}
</script>

<style lang="scss" scoped></style>
