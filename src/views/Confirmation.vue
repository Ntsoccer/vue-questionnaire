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
import { mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters(["sex","year","month","day","health","hospital","surgery","consultation"]),
  }
}
</script>

<style scoped>
  button{
    margin-right: 50px;
  }
</style>