<template>
  <div>
    <h2>ご相談内容をご記入ください</h2>
    <p>ご相談内容</p>
    <textarea cols="80" rows="20" v-model="consultation"></textarea>
    <br>
    <br>
    <router-link to="/questionnaire" tag="button">前へ戻る</router-link>
    <button>次へ進む</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      consultation:"",
    }
  },
}
</script>

<style scoped>
button{
  margin-right: 50px;
}

</style>
