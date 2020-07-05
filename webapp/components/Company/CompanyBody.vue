<template>
  <v-container fluid>
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                  <img
                    v-if="message.avatar"
                    alt="Avatar"
                    :src="message.avatar"
                  />
                  <v-icon
                    v-else
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only" sm="5" md="3">
                <strong v-html="message.name"></strong>
                <span v-if="message.total" class="grey--text">
                  &nbsp;({{ message.total }})
                </span>
              </v-col>

              <v-col class="text-no-wrap" cols="5" sm="3">
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>

              <v-col
                v-if="message.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="message.description"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CompanyBody',
  data: () => ({
    messages: [
      {
        avatar:
          'https://cdn3.iconfinder.com/data/icons/diversity-avatars-vol-2/64/steve-jobs-apple-computers-mac-512.png',
        name: 'Steve Jobs',
        title: 'CEO',
        excerpt: 'Thank you for joining our community...',
        description: 'Hi Im Steve! CEO of Appuul Inc. Nice to meet you! '
      },
      {
        avatar:
          'https://1401700980.rsc.cdn77.org/data/images/full/96588/tim-cook-avatar.jpg',
        name: 'Tim Cook',
        title: 'CEO',
        excerpt: 'Thank you for joining our community...',
        description: 'Hi Im Tim! CEO of Appuul Inc. Nice to meet you! '
      },
      {
        avatar:
          'https://images.macrumors.com/t/7m_uuse1SUD9XcwDWGk4Tk0uQkA=/1600x1200/smart/article-new/2017/10/katherine-adams.jpg',
        name: 'Katherine Adams',
        title: 'Senior VP',
        excerpt: 'Thank you for joining our community...',
        description:
          'Hi Im Katherine! Vice President of Appuul Inc. Nice to meet you! '
      }
      /*
      {
        color: 'red',
        icon: 'people',
        name: 'Social',
        new: 1,
        total: 3,
        title: 'Twitter',
        description: 'Hi Im Steve! CEO of Appuul Inc. Nice to meet you! '
      },
      {
        color: 'teal',
        icon: 'local_offer',
        name: 'Promos',
        new: 2,
        total: 4,
        title: 'Shop your way',
        exceprt: 'New deals available, Join Today',
        description: 'Hi Im Steve! CEO of Appuul Inc. Nice to meet you!'
      } */
    ]
  })
}
</script>

<style lang="scss" scoped></style>
