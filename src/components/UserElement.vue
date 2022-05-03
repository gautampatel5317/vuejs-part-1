<template>
  <div>
    <table border="2" width="100%" class="table table-border table-dark">
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Website</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ id }}</td>
          <td>{{ name }}</td>
          <td>{{ email }}</td>
          <td>{{ phone }}</td>
          <td>{{ website }}</td>
          <td><button class="btn btn-primary"></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ['id', 'name', 'email', 'phone', 'website'],
};
</script>
