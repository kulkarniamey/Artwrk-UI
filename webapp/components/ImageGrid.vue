<template>
  <div>
    <div class="image-grid">
      <template v-for="(x, index) in images">
        <div :key="index">
          <v-hover v-slot:default="{ hover }">
            <nuxt-link :to="`/posts/` + x.post_id">
              <v-img
                :key="index"
                :src="x.url"
                alt="post"
                class="single-image"
                lazy-src="/loadersvg.svg"
                @click="showDetail($event, x)"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out hover-card v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <span class="headd">{{ x.title }}</span>
                    <v-btn class="more" dark icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                    <v-rating
                      v-model="rating"
                      background-color="white"
                      color="yellow accent-4"
                      dense
                      half-increments
                      hover
                      size="24"
                    ></v-rating>
                    <div class="cta">
                      <v-btn
                        icon
                        @click="upvotePost"
                        class="white--text align-end "
                      >
                        <v-icon :color="liked" left>mdi-heart</v-icon>
                      </v-btn>
                      <span class="votes">{{ x.vote_count }}</span>
                    </div>
                  </div>
                </v-expand-transition>
              </v-img>
            </nuxt-link>
          </v-hover>
          <div></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGrid',

  props: {
    postData: { type: Array, required: true }
  },
  data() {
    return {
      imageurls: [],
      colstyle: 'padding:0em; margin:1em',
      dialog: false,
      selectedPost: undefined,
      imgval: '',
      images: this.postData
    }
  },
  computed: {
    renderImage() {
      return this.imageurls.filter((p) => p.isActive).length
    }
  },
  watch: {
    postData() {
      this.images = this.postData
    }
  },
  mounted() {
    this.images = this.postData
  },
  methods: {
    showDetail(e, data) {
      this.selectedPost = data
      this.dialog = true
    },
    clearModalValues() {
      this.dialog = false
      this.title = ''
      this.imgval = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.single-image {
  max-width: 404px;
  min-width: 145px;
  max-height: 200px;
  min-height: 100px;
}
.hover-card {
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  text-decoration: none !important;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
}
.cta {
  position: absolute;
  left: 12px;
  bottom: 0;
}
.headd {
  position: absolute;
  top: 0;
  left: 8px;
  font-size: 24px;
  font-weight: 700;
}
a {
  text-decoration: none;
}
.votes {
  font-size: 24px;
}
.more {
  position: absolute;
  top: 10px;
  right: 8px;
}
@media screen and (max-width: 760px) {
  .image-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .single-image {
    max-width: 404px;
    min-width: 145px;
    max-height: 200px;
    min-height: 100px;
  }
}
// .overlay {
//   opacity: 0;
// }
// .grid-square:hover .overlay {
//   opacity: 1;
//   transition: 0.5s;
// }
</style>
