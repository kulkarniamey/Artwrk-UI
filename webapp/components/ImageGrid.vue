<template>
  <div>
    <div class="image-grid">
      <template v-for="(x, index) in images">
        <nuxt-link :to="`/posts/` + x.postid" :key="index">
          <v-img
            :src="x.url"
            :key="index"
            alt="post"
            class="single-image"
            lazy-src="/loadersvg.svg"
            @click="showDetail($event, x)"
          />
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
import axios, * as others from 'axios'

const API_KEY = 'c397975f-36f1-49d9-9299-530a628c8663'
export default {
  name: 'ImageGrid',

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
  props: {
    postData: { type: Array, required: true }
  },
  watch: {
    postData() {
      this.images = this.postData
    }
  },
  computed: {
    renderImage() {
      return this.imageurls.filter((p) => p.isActive).length
    }
  },
  methods: {
    getManyPussy() {
      var totalCount = 20
      var i = 0
      for (i = 0; i < totalCount; i++) {
        const url = { url: '/coolpost.png' }

        this.imageurls.push(url)
      }

      return this.imageurls
    },
    showDetail(e, data) {
      this.selectedPost = data
      this.dialog = true
    },
    clearModalValues() {
      this.dialog = false
      this.title = ''
      this.imgval = ''
    }
  },
  mounted() {
    this.images = this.postData
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
