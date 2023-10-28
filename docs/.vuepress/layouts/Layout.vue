<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">
        Licencia MIT | Copyright © 2023-Presente |
        <a href="https://github.com/EduardoProfe666">EduardoProfe666🎩</a>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
:root {
  scroll-behavior: smooth;

  --c-brand: #7139a9;
  --c-brand-light: #8748c6;
}
html.dark {
  scroll-behavior: smooth;

  --c-brand: #7139a9;
  --c-brand-light: #8748c6;
}
</style>
