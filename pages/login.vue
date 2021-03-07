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

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
        login
      </v-btn>
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
    async login() {
      try {
        await this.$fire.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((value) => {
            this.writeToFirestore(value)
            console.log(value)
          })
      } catch (e) {
        alert(e)
      }
    },
    async writeToFirestore(id) {
      const messageRef = this.$fire.firestore.collection('User').doc('Session')
      try {
        await messageRef.set({
          Session: 'Nuxt-Fire with Firestore rocks!',
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },
  },
}
</script>
