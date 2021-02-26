import firebase from 'firebase'
export default {
  actions: {
    login(ctx: any, user: User) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const auth = userCredential.user
          console.log(auth)
          // ...
        })
        .catch((error) => {
          console.log(error.code, error.message)
          // ..
        })
    },
  },
}

type User = {
  email: string
  password: string
}
