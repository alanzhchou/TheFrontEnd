<template>
	<div id="productListTwo">
        <h2> productListTwo  </h2>
        <ul>
            <li v-for="item in saleProducts" :key="item.index">
				<span class="name"> {{ item.name }} </span>
				<span class="price"> ${{ item.price }} </span>
			</li>
        </ul>
	</div>
</template>

<script>

export default {
	name: 'ProductListTwo',
	computed:{
		products(){
			return this.$store.state.products;
		},
		saleProducts(){
			return this.$store.getters.saleProducts;
		},
	},
}
</script>

<style scoped lang="less">
#productListTwo{
	background-color: plum;
	box-shadow: 1px 2px 3px;
	margin-bottom: 30px;
	padding: 10px 20px;

	ul{
		padding: 0px;
		list-style-type: none;

		li{
			margin-right: 10px;
			margin-top: 10px;
			padding: 20px;
			background-color: whitesmoke;
			opacity: 0.9;

			.price{
				font-weight: bold;
				color: purple;
			}
		}
	}
}
</style>
