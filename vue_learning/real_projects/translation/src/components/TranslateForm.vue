<template>
  <div id="translateForm" class="row">
    <div class="col-md-6 col-md-offset-3">
      <form id="transForm" @submit="formSubmit" class="well form-inline">
        <input type="text" class="form-control" v-model="textToTranslate" placeholder="输入需要翻译的内容">
        <select v-model="language" class="form-control">
          <option value="en">English</option>
          <option value="ru">Ruassian</option>
          <option value="da">Danish</option>
          <option value="ko">Korean</option>
        </select>
        <input class="btn btn-primary" type="submit" value="translate">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TranslateForm',
  data(){
    return {
      textToTranslate:"",
      language:"en",
    };
  },
  methods:{
    formSubmit(e){
      // alert(this.textToTranslate);
      this.$emit("formSubmit",this.textToTranslate,this.language);
      e.preventDefault();
    }
  },
}
</script>

<style scoped>
#transForm{
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
