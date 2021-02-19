<template>
  <div>
    <h2>お客様の情報を入力してください</h2>
    <p>性別</p>
    <input type='radio' id='male' value='男性' v-model='sex'>
    <label for='male'>男性</label>
    <input type='radio' id='female' value='女性' v-model='sex'>
    <label for='female'>女性</label>
    <br>
    <p>生年月日</p>
    <select v-model='year'>
      <option v-for='year in years' :key='year'>{{ year }}</option>
    </select> 年
    <select v-model='month'>
      <option v-for='month in months' :key='month'>{{ month }}</option>
    </select> 月
    <select v-model='day'>
      <option v-for='day in days' :key='day'>{{ day }}</option>
    </select> 日
    <br>
    <br>
    <router-link to='/questionnaire' tag='button'>次へ進む</router-link>
  </div>
</template>

<script>
import { years,months,days } from '../utiles/definition.js'
export default {
  data() {
    return {
      years,
      months,
      days,
    }
  },
  computed:{
    sex:{
      get(){
        return this.$store.getters.sex
      },
      set(value){
        this.$store.dispatch("updateSex",value);
      }
    },
    year:{
      get(){
        return this.$store.getters.year
      },
      set(value){
        this.$store.dispatch("updateYear",value);
      }
    },
    month:{
      get(){
        return this.$store.getters.month
      },
      set(value){
        this.$store.dispatch("updateMonth",value);
      }
    },
    day:{
      get(){
        return this.$store.getters.day
      },
      set(value){
        this.$store.dispatch("updateDay",value);
      }
    },
  }
}
</script>

<style scoped>

</style>