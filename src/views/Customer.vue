<template>
  <div>
    <h2>お客様の情報を入力してください</h2>
    <p>性別</p>
    <input type="radio" id="male" value="男性" v-model="sex">
    <label for="male">男性</label>
    <input type="radio" id="female" value="女性" v-model="sex">
    <label for="female">女性</label>
    <br>
    <p>生年月日</p>
    <select v-model="year">
      <option v-for="year in years" :key="year">{{year}}</option>
    </select> 年
    <select v-model="month">
      <option v-for="month in months" :key="month">{{month}}</option>
    </select> 月
    <select v-model="day">
      <option v-for="day in days" :key="day">{{day}}</option>
    </select> 日
    <br>
    <br>
    <router-link to="/questionnaire" tag="button">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sex:"",
      years:["1990年(平成2)","1991年(平成3)","1992年(平成4)","1993年(平成5)","1994年(平成6)","1995年(平成7)","1996年(平成8)","1997年(平成9)","1998年(平成10)","1999年(平成11)","2000年(平成12)","2001年(平成13)"],
      year:"",
      months:["1","2","3","4","5","6","7","8","9","10","11","12"],
      month:"",
      days:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
      day:""
    }
  },
}
</script>

<style>

</style>