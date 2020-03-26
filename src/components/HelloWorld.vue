<template>
	<div class="hello">
		<h1>{{ msg }}</h1>

		<ul>
			<li>
				<div>
					<label>税前工资： </label>
					<a-input-number
						id="inputNumber"
						:min="1"
						:max="3000000"
						v-model="value"
					/>

					<br />
					<br />
					<a-button type="primary" v-on:click="calc()">计算</a-button>
					<div v-show="calced">
						税后工资：{{ amountTotal }} 其中 社保公积金{{ amountSB }} 个税：{{
							amountP
						}}
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { InputNumber, Button } from 'ant-design-vue'
export default {
	name: 'HelloWorld',
	components: {
		AInputNumber: InputNumber,
		AButton: Button
	},
	props: {
		msg: String
	},
	data() {
		return {
			value: 0,
			amountTotal: 0,
			amountSB: 0,
			amountP: 0,
			calced: false
		}
	},
	methods: {
		calc() {
			// console.log(value)
			this.amountSB = (this.value * 17.5) / 100
			let vAmount = this.value - this.amountSB
			// let zAmount = vAmount - 5000
			let rate = 0
			if (vAmount <= 5000) {
				rate = 0
			} else if (vAmount > 5000 && vAmount <= 8000) {
				rate = 3
			} else if (vAmount > 8000 && vAmount <= 17000) {
				rate = 10
			} else if (vAmount > 17000 && vAmount <= 30000) {
				rate = 20
			} else if (vAmount > 30000 && vAmount <= 40000) {
				rate = 25
			} else if (vAmount > 40000 && vAmount <= 60000) {
				rate = 30
			} else if (vAmount > 60000 && vAmount <= 85000) {
				rate = 35
			} else {
				rate = 45
			}
			console.log(this.amountSB)
			console.log(rate)
			console.log(vAmount)
			this.amountP = (rate * (vAmount - 5000)) / 100
			this.amountTotal = vAmount - this.amountP
			this.calced = true
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
	text-align: left;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
