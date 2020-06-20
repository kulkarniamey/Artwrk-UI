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
  }
}
</script>

<style lang="scss" scoped></style>
