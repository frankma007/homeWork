<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div>
			<label>贷款金额： </label>
			<a-input-number id="amount" :min="1" :max="3000000" v-model="amount" />
			<label>贷款年限： </label>
			<a-input-number id="years" :min="1" :max="3000000" v-model="years" />
			<label>贷款年利率： </label>
			<a-input-number
				id="interest"
				:min="1"
				:max="3000000"
				v-model="interest"
			/>%
			<label>贷款方式： </label>
			<div style="display:inline-block">
				<select
					v-model="repayment"
					class="ant-input-number"
					style="width:120px;"
				>
					<option value="">请选择贷款方式</option>
					<option v-for="item in infolist" :key="item" :value="item">{{
						item
					}}</option>
				</select>
			</div>
		</div>
		<div style="margin-top:12px;">
			<a-button type="primary" v-on:click="sublime()">查询</a-button>
		</div>
		<div>
			结算结果：总利息{{ totalRate }} ，以及每月还款的本金{{ mAmount }} +
			月利息{{ mRateAmount }}
		</div>
	</div>
</template>

<script>
import { InputNumber, Button } from 'ant-design-vue'
export default {
	name: 'Loan',
	components: {
		AInputNumber: InputNumber,
		AButton: Button
	},
	props: {
		msg: String
	},
	data() {
		return {
			amount: 0,
			years: 0,
			interest: 0,
			infolist: ['等额本息', '等额本金'],
			repayment: '',
			queryParam: { status: 0 },
			totalRate: 0,
			mRateAmount: 0,
			mAmount: 0
		}
	},
	methods: {
		sublime() {
			let mAmount = 0 //月还款金额
			let interest = this.interest / (100 * 12) //月利率
			let mouth = this.years * 12 //期数
			let mmx = Math.pow(1 + interest, mouth) // [(1+月利率)^n
			//总金额
			let totalAmount = 0
			// let mms = (1 + interest) ^ (mouth - 1)
			if (!this.repayment) {
				alert('请选择贷款方式')
				return false
			}
			if (this.repayment === '等额本息') {
				// (每个月的还款额相等)月还款额=本金*月利率*[(1+月利率)^n/[(1+月利率)^n-1]
				mAmount = (this.amount * interest * mmx) / (mmx - 1)
				totalAmount = mouth * mAmount
				this.totalRate = totalAmount - this.amount
				//月利息=剩余本金*月利率
				this.mRateAmount = (this.amount - 0) * interest
				this.mAmount = mAmount - this.mRateAmount
			} else {
				//等额本金
				//         1.每月月供额=(贷款本金÷还款月数)+(贷款本金-已归还本金累计额)×月利率
				// 2.每月应还本金=贷款本金÷还款月数
				// 3.每月应还利息=剩余本金×月利率=(贷款本金-已归还本金累计额)×月利率
				// 4.每月月供递减额=每月应还本金×月利率=贷款本金÷还款月数×月利率
				// 5.总利息=〔(总贷款额÷还款月数+总贷款额×月利率)+总贷款额÷还款月数×(1+月利率)〕÷2×还款月数-总贷款额
				mAmount = this.amount / mouth + (this.amount - 0) * interest
				this.mAmount = this.amount / mouth

				this.mRateAmount = (this.amount - 0) * interest
				// this.totalRate =
				// 	((this.amount / mouth +
				// 		this.amount +
				// 		interest +
				// 		(this.amount / mouth) * (1 + interest)) /
				// 		2) *
				// 		mouth -
				// 	this.amount
				// totalAmount //总金额
				for (let i = 0; i < mouth; i++) {
					mAmount = this.amount / mouth + (this.amount - i) * interest
					totalAmount = totalAmount + mAmount
				}
				this.totalRate = totalAmount - this.amount

				console.log(mAmount, this.mAmount, this.mRateAmount)
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
