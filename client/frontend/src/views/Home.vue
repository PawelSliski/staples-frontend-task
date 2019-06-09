<template>
  <b-container>
    <b-row>
      <b-col cols="8" offset="4">
        <b-form-input
          @update="fetchDataByQuery(searchText)"
          v-model="searchText"
          id="search"
          class="my-2"
          size="sm"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        @click="showDetail(product.id)"
        cols="4"
        class="mb-2"
        v-for="product in products"
        v-bind:key="product.id">
        <Item :product="product"/>
        <Modal :product="product"/>
      </b-col>
    </b-row>
    <b-row>
      <b-button @click="fetchData(pageCounter = 1)">First</b-button>
      <b-button @click="switchPage(false)">Back</b-button>
      &nbsp;|{{ this.pageCounter }}|&nbsp;
      <b-button @click="switchPage(true)">Next</b-button>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Item from "@/components/Item.vue";
import Modal from "@/components/Modal.vue"
import axios from "axios";

export default {
  name: "home",
  data: function() {
    return {
      products: [],
      pageCounter: 1,
      searchText: String
    };
  },
  components: {
    Item,
    Modal
  },
  created: function() {
    this.searchText = "";
    this.fetchData(this.pageCounter);
  },
  methods: {
    showDetail: function(id) {
      this.$bvModal.show("detail" + id);
    },
    fetchData: function(page) {
      axios({
        method: "GET",
        url: "http://localhost:3005/products?_limit=9&_page=" + page.toString()
      }).then(response => {
        this.products = response.data;
      });
    },
    fetchDataByQuery: function(query) {
      if (query !== "") {
        axios({
          method: "GET",
          url: "http://localhost:3005/products?q=" + query.toString()
        }).then(response => {
          this.products = response.data;
        });
      } else {
        this.fetchData(this.pageCounter);
      }
    },
    switchPage(next) {
      if (next) {
        this.pageCounter++;
      } else {
        if (this.pageCounter > 1) {
          --this.pageCounter;
        }
      }
      this.fetchData(this.pageCounter);
    }
  }
};
</script>

<style scoped lang="scss">
#search {
  border-radius: 50px;
  &:focus {
    border: 1px solid #42b983;
    padding-left: 10px;
    box-shadow: none;
    outline: none;
  }
}
</style>
