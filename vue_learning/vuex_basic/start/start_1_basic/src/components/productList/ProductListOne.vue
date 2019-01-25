<template>
	<div id="productListOne">
        <h2> productListOne  </h2>
        <ul>
            <li v-for="item in saleProducts" :key="item.index">
				<span class="name"> {{ item.name }} </span>
				<span class="price"> ${{ item.price }} </span>
			</li>
        </ul>
		<button @click="reducePrice"> 商品降价 1s </button>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: 'ProductListOne',
	computed:{
		...mapGetters([
			"originProducts",
			"saleProducts",
		]),
	},
	methods:{
		reducePrice(){
			// 同步
			// this.$store.commit("reducePrice",4);

			// 异步
			this.$store.dispatch("reducePrice",4)
				// 返回 Promise 对象时使用 
				// .then(()=>{
				// 	// alert("aaaa");
				// 	console.log("reducePrice success !!!");
				// }).catch(()=>{
				// 	console.log("reducePrice fail !!!");
				// })
				;
		},
	},
}
</script>

<style scoped lang="less">
#productListOne{
	background-color: yellowgreen;
	box-shadow: 1px 2px 3px;
	margin-bottom: 30px;
	padding: 10px 20px;

	ul{
		padding: 0px;
		li{
			display: inline-block;
			margin-right: 10px;
			margin-top: 10px;
			padding: 20px;
			background-color: whitesmoke;
			opacity: 0.7;

			.price{
				font-weight: bold;
				color: #e8800c;
			}
		}
	}
}
</style>
