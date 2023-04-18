<template>
  <div>
    <h2 class="title-line" :style="{ color: titleColor }">{{ title }}</h2>
  </div>
</template>
<script>
export default {
  nome: "TitleComponent",

  props: {
    title: {
      type: String,
    },
    titleColor: {
      type: String,
      default: "#1E1E1E",
    }
  }

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');

.title-line {
  font-family: 'Rye';
  font-size: 2.25rem;
}
</style>