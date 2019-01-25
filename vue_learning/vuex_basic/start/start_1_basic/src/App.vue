<template>
	<div id="app">
		<ProductListOne/>
		<ProductListTwo/>
	</div>
</template>

<script>
import ProductListOne from "./components/productList/ProductListOne.vue"
import ProductListTwo from "./components/productList/ProductListTwo.vue"

export default {
	name: 'app',
	components:{
		"ProductListOne": ProductListOne,
		"ProductListTwo": ProductListTwo,
	}
}
</script>

<style scoped lang="less">
body{
	font-family: Ubuntu;
	color: #555;
}
</style>
