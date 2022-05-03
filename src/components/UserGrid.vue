<template>
  <div class="col-md-12">
    <div class="mb-3">
      <button class="btn btn-primary">
        <i class="fa-solid fa-plus"></i>ADD
      </button>
    </div>
    <table
      border="1"
      width="100%"
      class="table table-border"
    >
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Company</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <template v-for="(user, id) in userdata" :key="id">
          <tr>
            <td>{{ ++id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.company }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.website }}</td>
            <td>
              <el-button
                size="small"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="handleEdit($event, user)"
                ><i class="fa-solid fa-eye"></i></el-button
              ><el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                ><i class="fa-solid fa-delete-left"></i
              ></el-button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <!--- Modal Box !-->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              User Information!
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <label class="col-md-2">ID</label>
              {{ selectedUser.id }}
            </div>
            <hr />
            <div class="col-md-12">
              <label class="col-md-2">User Name</label>
              {{ selectedUser.name }}
            </div>
            <hr />
            <div class="col-md-12">
              <label class="col-md-2">Company</label>
              {{ selectedUser.company }}
            </div>
            <hr />
            <div class="col-md-12">
              <label class="col-md-2">Email</label>
              {{ selectedUser.email }}
            </div>
            <hr />
            <div class="col-md-12">
              <label class="col-md-2">Phone</label>
              {{ selectedUser.phone }}
            </div>
            <hr />
            <div class="col-md-12">
              <label class="col-md-2">Website</label>
              {{ selectedUser.website }}
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['users', 'userlist'],
  data() {
    return {
      userdata: [],
      selectedUser: '',
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await axios.get(url);
        const results = response.data;
        this.userdata = results.map((user) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
          company: user.company.name,
        }));
      } catch (err) {
        console.log(err);
      }
    },
    handleEdit: function (event, user) {
      this.selectedUser = user;
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
