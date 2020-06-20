<template>
  <div>
    <v-row>
      <v-col class="d-none d-sm-flex" cols="6">
        <h2>Art is an explosion!</h2>
      </v-col>

      <v-col xs="12" md="6">
        <Register v-if="checkState" @optionChanged="changeState"> </Register>
        <Login v-else @optionChanged="changeState"> </Login>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Register from '../components/Register'
import Login from '../components/Login'
export default {
  name: 'test1',
  components: {
    Register,
    Login
  },
  data() {
    return {
      statevar: 'register'
    }
  },
  computed: {
    checkState() {
      if (this.statevar === 'register') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    changeState() {
      if (this.statevar === 'register') {
        this.statevar = 'login'
      } else {
        this.statevar = 'register'
      }
    }
  },
  beforeCreate() {
    console.log('I am b4created')
  },
  created() {
    console.log('I am created')
  },
  beforeMount() {
    console.log('I am bmount')
  },
  mounted() {
    console.log('I am mounted')
  },
  beforeUpdate() {
    console.log('I am bupdate')
  },
  updated() {
    console.log('I am updated')
  },
  beforeDestroy() {
    console.log('I am bdestroy')
  },
  destroyed() {
    console.log('I am destro')
  }
}
</script>

<style lang="scss" scoped></style>
