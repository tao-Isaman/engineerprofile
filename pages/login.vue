<template>
  <v-container>
    <v-form v-if="token == ''" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="email"
        type="email"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="password"
        type="password"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
        login
      </v-btn>
    </v-form>
    <div v-else>
      <h2>{{ token }}</h2>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'Name is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [(v) => !!v || 'password is required'],
    token: '',
  }),

  methods: {
    login() {
      this.$store
        .dispatch('login/login', {
          email: this.email,
          password: this.password,
        })
        .then((value) => {
          console.log(value)
          this.token = value.username
          localStorage.setItem('JWT', value.access_token)
        })
    },
  },
}
</script>
