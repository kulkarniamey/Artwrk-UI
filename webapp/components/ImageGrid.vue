<template>
  <div>
    <v-row>
      <v-col
        sm="12"
        md="3"
        v-for="(x, index) in caturls"
        :key="index"
        align="center"
      >
        <v-lazy
          v-model="isActive[index]"
          :options="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <img :style="colstyle" :src="caturls[index][0]" alt="pussy" />
        </v-lazy>
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
      cols: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      caturls: [],
      colstyle: 'border: 3px solid #fff',
      isActive: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }
  },
  computed: {
    renderImage() {
      return this.cat.url
    }
  },
  methods: {
    getManyPussy() {
      var pussyUrl = ''
      var urlarray = []

      axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then((response) => {
          pussyUrl = response.data[0].url
          urlarray.push(pussyUrl)
        })
      return urlarray
    }
  },
  async created() {
    var i
    for (i in this.cols) {
      var link = await this.getManyPussy()
      this.caturls.push(link)
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 200px;
  width: 200px;
}
</style>
