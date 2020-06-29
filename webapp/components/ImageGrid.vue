<template>
  <div>
    <v-row class="fill-height overflow-y-auto" no-gutters>
      <v-col
        lg="3"
        md="4"
        sm="6"
        cols="12"
        v-for="(x, index) in caturls"
        :key="index"
        align="center"
        no-gutters
        ><div class="grid-square">
          <v-lazy
            v-model="x.isActive"
            :options="{ threshold: 0.5 }"
            transition="fade-transition"
            class="fill-height"
          >
            <img
              :style="colstyle"
              :src="x[0].url"
              :key="index"
              alt="pussy"
              class="img-class"
            />
          </v-lazy>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios, * as others from 'axios'
const API_KEY = 'c397975f-36f1-49d9-9299-530a628c8663'
export default {
  name: 'imageGrid',

  data() {
    return {
      caturls: [],
      colstyle: 'border: 3px solid #fff'
    }
  },
  computed: {
    renderImage() {
      // return this.cat.url
      return this.caturls.filter((p) => p.isActive).length
    }
  },
  methods: {
    getManyPussy() {
      // var pussyUrl = ''
      // var urlarray = []
      var totalCount = 10
      var i = 0
      for (i = 0; i < totalCount; i++) {
        axios
          .get('https://api.thecatapi.com/v1/images/search')
          .then((response) => {
            var catPic = response.data
            // urlarray.push(pussyUrl)
            this.caturls.push(catPic)
            console.log(response)
          })
      }
      // return pussyUrl
      return this.caturls
    }
  },
  created() {
    // var i
    // for (i in this.cols) {
    //   var link = await this.getManyPussy()
    //   this.caturls.push(link)
    this.getManyPussy()
  }
}
</script>

<style lang="scss" scoped>
.grid-square {
  width: 100%;
  height: 100%;
  padding: 3rem;
  background: #121212;
  margin: 0;
  // border: 3px solid #fff;
}
.img-class {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}
</style>
