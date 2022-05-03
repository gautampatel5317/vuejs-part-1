<template>
  <section>
    <h2>{{ topicTitle ? topicTitle : "Title Here...." }}</h2>
    <p v-if="text">{{ text ? text : "Default Text" }}</p>
  </section>
</template>

<script>
export default {
  props: ['topicTitle', 'text'],
};
</script>
