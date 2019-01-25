<template>
  <div class="row">
    <div id="app" class="col-md-8 col-md-offset-2">
      <h1>在线翻译</h1>
      <h5 class="text-muted">简单 / 易用 / 便捷</h5>
      <translateForm @formSubmit="translateText"></translateForm>
      <translateOutput v-bind:translatedText="translatedText"></translateOutput>
    </div>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm';
import TranslateOutput from './components/TranslateOutput';

export default {
  name: 'App',
  data(){
    return{
      translatedText:"",
    };
  },
  components: {
    'translateForm': TranslateForm,
    'translateOutput': TranslateOutput,
  },
  methods:{
    translateText(text,lang){
      // alert(text);
      this.$http.get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate"
          + "?key=trnsl.1.1.20181010T120721Z.a6d826743c65bcca.fcb876f53227fcc0bbf49e35cbc46e492e3a74f1"
          + "&lang=" + lang
          + "&text=" + text
          ).then(
            (responses) => {
              this.translatedText = responses.body.text[0];
            }
          ).catch(
            (err) => {
              console.log(err);
            }
          );  
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
