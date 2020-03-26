<template>
	<div class="hello">
		<h1>{{ msg }}</h1>

		<div style="margin-top:12px;">
			<a-button type="primary" v-on:click="sublime()"
				>计算三个数字合成24</a-button
			>
		</div>
		<div v-show="status">
			先做加法{{ addArray }}
			<br />
			先做减法{{ reduceArray }}
			<br />
			先做乘法{{ multiplicationArray }}
			<br />
			先做除法{{ divisionArray }}
		</div>
	</div>
</template>

<script>
import { Button } from 'ant-design-vue'
export default {
	name: 'Loan',
	components: {
		AButton: Button
	},
	props: {
		msg: String
	},
	data() {
		return {
			addArray: [],
			reduceArray: [],
			multiplicationArray: [],
			divisionArray: [],
			status: false
		}
	},
	methods: {
		sublime() {
			this.status = true
			this.addArray = []
			this.reduceArray = []
			this.multiplicationArray = []
			this.divisionArray = []
			const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
			const Array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
			const Array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
			console.log(Array1, Array2, Array3)
			let midV = 0 //先加
			let midReduce = 0 //先减法
			let midMultiplication = 0 //先乘法
			let midDivision = 0 //先除法
			Array1.forEach(val1 => {
				console.log(val1)
				Array2.forEach(val2 => {
					console.log(val2)
					Array3.forEach(val3 => {
						console.log(val3)
						midV = this.add(val1, val2)
						midReduce = this.reduce(val1, val2)
						midMultiplication = this.multiplication(val1, val2)
						midDivision = this.division(val1, val2)
						if (
							this.add(midV, val3) === 24 ||
							this.reduce(midV, val3) === 24 ||
							this.multiplication(midV, val3) === 24 ||
							this.division(midV, val3) === 24
						) {
							this.addArray.push([val1, val2, val3])
						}

						if (
							this.add(midReduce, val3) === 24 ||
							this.reduce(midReduce, val3) === 24 ||
							this.multiplication(midReduce, val3) === 24 ||
							this.division(midReduce, val3) === 24
						) {
							this.reduceArray.push([val1, val2, val3])
						}
						if (
							this.add(midMultiplication, val3) === 24 ||
							this.reduce(midMultiplication, val3) === 24 ||
							this.multiplication(midMultiplication, val3) === 24 ||
							this.division(midMultiplication, val3) === 24
						) {
							this.multiplicationArray.push([val1, val2, val3])
						}
						if (
							this.add(midDivision, val3) === 24 ||
							this.reduce(midDivision, val3) === 24 ||
							this.multiplication(midDivision, val3) === 24 ||
							this.division(midDivision, val3) === 24
						) {
							this.divisionArray.push([val1, val2, val3])
						}
					})
				})
			})
		},
		add(m, n) {
			return m + n
		},
		reduce(m, n) {
			return m - n
		},
		multiplication(m, n) {
			return m * n
		},

		division(m, n) {
			return m / n
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
