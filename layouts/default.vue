<template>
  <v-app light>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn text> หน้าแรก </v-btn>
      <v-btn text> ทดลองสอบ </v-btn>
      <v-btn text> ลงทะเบียน </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'ทำข้อสอบวิศวกรรมออนไลน์',
    }
  },
}
</script>
