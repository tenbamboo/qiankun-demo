<template>
  <div class="addFoodContainer">
    <p class="title">Add Foods</p>
    <form>
      <div>
        <label>Food Id:</label>
        <input type="text"
          v-model="food.id" />
      </div>
      <div>
        <label>Food Lable:</label>
        <input type="text"
          v-model="food.label" />
      </div>
      <div>
        <label>Food Price:</label>
        <input type="text"
          v-model="food.price" />
      </div>
    </form>
    <div class="btnGroup">
      <a @click="addFood"
        class="btn">Add</a>
    </div>
  </div>
</template>

<script>
// TODO 课后作业 添加美食时重复数据的处理

export default {
  data() {
    return {
      food: {
        id: '',
        label: '',
        price: '',
      },
    };
  },
  mounted() {},
  methods: {
    addFood() {
      this.validate()
        .then(() => {
          this.$store.commit('ADD_FOOD', this.food);
          this.$router.back();
        })
        .catch((e) => alert(e));
    },
    validate() {
      // TODO 讲解Promise的实用场景
      return new Promise((resolve, reject) => {
        if (!this.food.id) {
          reject(new Error('food Id is not empty'));
        } else if (!this.food.label) {
          reject(new Error('food label is not empty'));
        } else if (!this.food.price) {
          reject(new Error('food price is not empty'));
        } else if (!/^\d+(\.\d+)?$/.test(this.food.price)) {
          reject(new Error('food price is not number'));
        }
        resolve();
      });
    },
  },
};
</script>

<style scoped lang="scss">
.addFoodContainer {
  .title {
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
  }
  form {
    & > div {
      padding: 10px;
      label {
        padding-right: 10px;
      }
    }
  }
  .btnGroup {
    padding: 10px;
    .btn {
      padding: 10px 20px;
      color: #fff;
      background-color: #03a9f4;
      margin: 10px;
      cursor: pointer;
    }
  }
}
</style>
