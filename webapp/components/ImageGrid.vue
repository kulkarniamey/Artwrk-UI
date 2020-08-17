<template>
  <div>
    <v-row class="" no-gutters>
      <v-col
        lg="3"
        md="4"
        sm="6"
        cols="12"
        v-for="(x, index) in imageurls"
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
              <img
                :src="x.url"
                :key="index"
                alt="pussy"
                class="img-class"
                @click="showDetail($event, 'Cool Post', x.url)"
              />
            </v-card>
          </v-lazy>
        </div>
      </v-col>
    </v-row>
    <Modal
      :showModal="dialog"
      :postTitle="title"
      :postImg="imgval"
      @closedModal="clearModalValues()"
    />
  </div>
</template>

<script>
import axios, * as others from 'axios'
import Modal from './Modal'
const API_KEY = 'c397975f-36f1-49d9-9299-530a628c8663'
export default {
  name: 'imageGrid',
  components: { Modal },
  data() {
    return {
      imageurls: [],
      colstyle: 'padding:0em; margin:1em',
      dialog: false,
      title: '',
      imgval: '',
    }
  },
  computed: {
    renderImage() {
      return this.imageurls.filter((p) => p.isActive).length
    },
  },
  methods: {
    getManyPussy() {
      var totalCount = 40
      var i = 0
      for (i = 0; i < totalCount; i++) {
        const url = { url: '/coolpost.png' }

        this.imageurls.push(url)
        console.log(this.imageurls)
      }

      return this.imageurls
    },
    showDetail(e, dTitle, dImg) {
      this.title = dTitle
      this.imgval = dImg
      this.dialog = true
    },
    clearModalValues() {
      this.dialog = false
      this.title = ''
      this.imgval = ''
    },
  },
  created() {
    this.getManyPussy()
  },
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
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  opacity: 1;
}
.grid-card {
  margin: 0.5em;
  border-radius: 0;
}

// .overlay {
//   opacity: 0;
// }
// .grid-square:hover .overlay {
//   opacity: 1;
//   transition: 0.5s;
// }
</style>
