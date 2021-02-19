<template>
  <div>
    <h2>以下にお答えください</h2>
    <p>現在、生命保険に加入されていますか？</p>
    <input type="radio" id="health1" value="はい" v-model="health">
    <label for="health1">はい</label>
    <input type="radio" id="health2" value="いいえ" v-model="health">
    <label for="health2">いいえ</label>
    <div v-if="health">
      <p>現在入院中ですか。または、最近3ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <input type="radio" id="hospital1" value="はい" v-model="hospital">
      <label for="hospital1">はい</label>
      <input type="radio" id="hospital2" value="いいえ" v-model="hospital">
      <label for="hospital2">いいえ</label>
    </div>
    <div v-if="health && hospital">
      <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
      <input type="radio" id="surgery1" value="はい" v-model="surgery">
      <label for="surgery1">はい</label>
      <input type="radio" id="surgery2" value="いいえ" v-model="surgery">
      <label for="surgery2">いいえ</label>
    </div>
    <br><br>
    <router-link to="/" tag="button">前へ戻る</router-link>
    <router-link to="/consultation" tag="button">次へ進む</router-link>
  </div>

</template>

<script>
export default {
  computed:{
    health:{
      get(){
        return this.$store.getters.health
      },
      set(value){
        this.$store.dispatch("updateHealth",value);
      }
    },
    hospital:{
      get(){
        return this.$store.getters.hospital
      },
      set(value){
        this.$store.dispatch("updateHospital",value)
      }
    },
    surgery:{
      get(){
        return this.$store.getters.surgery
      },
      set(value){
        this.$store.dispatch("updateSurgery",value)
      }
    },
  }
}
</script>

<style scoped>
  button{
    margin-right: 50px;
  }
</style>>


