<template>
  <section>
    <h2>User List</h2>
    <user-grid :users="users" :userlist="userlist"></user-grid>
  </section>
</template>
<script>
export default {
  props: ['users','userlist'],
};
</script>
