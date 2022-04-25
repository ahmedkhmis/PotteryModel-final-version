<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (route.path == "/welcome") {
          console.log("hello");
        } else if (!user) {
          router.replace("/welcome");
        } else if (
          route.path == "/login" ||
          route.path == "/register" ||
          !user
        ) {
          router.replace("/");
        }
      });
    });
  },
};
</script>

<style lang="scss"></style>
