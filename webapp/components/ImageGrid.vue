<template>
  <div>
    <v-row class="" no-gutters>
      <v-col
        lg="3"
        md="4"
        sm="6"
        cols="12"
        v-for="(x, index) in images"
        :key="index"
        align="center"
        no-gutters
        ><div class="grid-square">
          <v-lazy
            v-model="x.isActive"
            :options="{ threshold: 0.5 }"
            transition="fade-transition"
            class=""
          >
            <v-card outlined class="grid-card">
              <v-img
                :src="x.url"
                :key="index"
                alt="post"
                class="img-class"
                contain
                @click="showDetail($event, x)"
              />
            </v-card>
          </v-lazy>
        </div>
      </v-col>
    </v-row>
    <Modal
      v-if="selectedPost"
      :showModal="dialog"
      :postData="selectedPost"
      @closedModal="clearModalValues()"
    />
  </div>
</template>

<script>
import axios, * as others from 'axios'
import Modal from './Modal'
const API_KEY = 'c397975f-36f1-49d9-9299-530a628c8663'
export default {
  name: 'ImageGrid',
  components: { Modal },
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
.grid-square {
  width: 100%;
  height: 100%;
  padding: 0;
  background: transparent;
  margin: 0;
}
.grid-square:hover {
  cursor: pointer;
}
.img-class {
  object-fit: cover;
  object-position: center;
}
.grid-card {
  margin: 0.5em;
  border-radius: 0;
  object-fit: contain;
}

// .overlay {
//   opacity: 0;
// }
// .grid-square:hover .overlay {
//   opacity: 1;
//   transition: 0.5s;
// }
</style>
