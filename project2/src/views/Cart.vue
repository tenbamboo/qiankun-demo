<template>
  <div class="mySelectedFoodsContainer">
    <p class="title">My Select Foods</p>
    <div class="selectList">
      <div v-for="item in selectedFoods"
        :key="item.id">{{item.label}}</div>
    </div>
    <a class="btn" @click="back">Back</a>

  </div>
</template>

<script>
// TODO 课后作业 删除购物车中的美食
export default {
  mounted() {},
  computed: {
    selectedFoods() {
      return this.$store.state.cart;
    },
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="scss">
.mySelectedFoodsContainer {
  .selectList {
    div {
      display: inline-block;
      padding: 20px;
      font-size: 30px;
      cursor: pointer;
    }
  }
  .btn {
    padding: 10px 20px;
    color: #fff;
    background-color: #03a9f4;
    cursor: pointer;
  }
}
</style>
