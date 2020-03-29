<template>
	<div id="app">
		<HelloWorld msg="来看看税后工资" />
		<Loan msg="来看看贷款情况" />
		<Algorithm msg="结构算法问题" />
		<Test />
		<Layout />
	</div>
</template>

<script>
// import { Button } from 'ant-design-vue'
import HelloWorld from './components/HelloWorld.vue'
import Loan from './components/Loan.vue'
import Algorithm from './components/Algorithm.vue'
import Test from './components/Test.vue'
import Layout from './components/Layout.vue'

export default {
	name: 'App',
	components: {
		HelloWorld,
		Loan,
		Algorithm,
		Test,
		Layout
	},
	methods: {}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
