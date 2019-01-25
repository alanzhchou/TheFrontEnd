<template>
  <div id="translateOutput" class="row">
      <div id="output" class="col-md-4 col-md-offset-4 well">
        <h2> {{ translatedText }} </h2>
      </div>
  </div>
</template>

<script>

export default {
  name: 'TranslateOutput',
  props:{
    translatedText:{
        type: String,
    },
  },
}
</script>

<style scoped>
#output{
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
