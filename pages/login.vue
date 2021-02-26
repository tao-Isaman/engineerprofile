<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
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

      <v-btn :disabled="!valid" color="success" class="mr-4"> login </v-btn>
    </v-form>
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
  }),

  methods: {
    // async signInUser() {
    //   try {
    //     await this.$fire.auth.signInWithEmailAndPassword(
    //       this.email,
    //       this.password
    //     )
    //   } catch (e) {
    //     alert(e)
    //   }
    // },
  },
}
</script>
