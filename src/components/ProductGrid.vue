<template>
  <section>
    <h2>Products List</h2>
    <div class="col-md-12">
      <div class="mb-3">
        <button class="btn btn-primary">
          <i class="fa-solid fa-plus"></i>ADD
        </button>
      </div>
      <table
        border="1"
        width="100%"
        class="datatable table table-bordered table-hover"
      >
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Image</th>
          <th>CreatedAt</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <template v-for="(product, id) in products" :key="id">
            <tr>
              <td>{{ ++id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td v-if="product.status" class="">
                <span class="btn btn-success">Active</span>
              </td>
              <td v-else>
                <span class="btn btn-danger">InActive</span>
              </td>
              <td width="200">
                <img
                  src="https://images.unsplash.com/photo-1638913970895-d3df59be1466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
                  style="width: 103%; height: 20%"
                />
              </td>
              <td>
                {{ product.createdAt }}
              </td>
              <td>
                <el-button
                  size="small"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="handleEdit($event, product)"
                  ><i class="fa-solid fa-eye"></i></el-button
                ><el-button
                  size="small"
                  type="danger"
                  @click="handleDelete($event,product)"
                  ><i class="fa-solid fa-delete-left"></i
                ></el-button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProduct() {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhdXRhbWEucGF0ZWxAcmFkaXh3ZWIuY29tIiwicGFzc3dvcmQiOiJBZG1pbkAxMjMiLCJpYXQiOjE2NTE1ODEwNTYsImV4cCI6MTY1MTY2NzQ1NiwiaXNzIjoibG9jYWxob3N0In0.7Lh_vWM40ymFrMpaMgWv-FqOWfGvfJddYfZr6xseacw';
      try {
        const url = 'http://192.168.102.92:3003/admin/product';
        console.log(url, token);
        const response = await axios.get(url, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Private-Network': true,
            Authorization: 'Bearer ' + token,
          },
        });
        const results = response.data;
        console.log('results:::', results.data);
        this.products = results.data.map((product) => ({
          id: product._id,
          name: product.name,
          description: product.description,
          status: product.status,
          categoryId: product.categoryId,
          image: product.image,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        }));
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>
