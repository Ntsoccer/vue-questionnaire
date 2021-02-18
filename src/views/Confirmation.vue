<template>
  <div>
    <p>性別</p>
    <p>{{ sex }}</p>
    <p>生年月日</p>
    <p>{{ year }}年{{ month }}月{{ day }}日</p>
    <p>現在、生命保険に加入されていますか？</p>
    <p>{{ health }}</p>
    <p>現在入院中ですか。または、最近3ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
    <p>{{ hospital }}</p>
    <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
    <p>{{ surgery }}</p>
    <p>ご相談内容</p>
    <p>{{ consultation }}</p>
    <br>
    <br>
    <router-link to="/consultation" tag="button">前へ戻る</router-link>
    <button>送信</button> 
  </div>
</template>

<script>
export default {
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
    health:{
      get(){
        return this.$store.getters.health
      },
      set(value){
        this.$store.dispatch("updateHealth",value)
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
    consultation:{
      get(){
        return this.$store.getters.consultation
      },
      set(value){
        this.$store.dispatch("updateConsultation",value)
      }
    }
  }
}
</script>

<style scoped>
  button{
    margin-right: 50px;
  }
</style>