<template>
	<div>
		<a-table :columns="columns" :dataSource="data">
			<a slot="name" slot-scope="text">{{ text }}</a>
			<span slot="customTitle"><a-icon type="smile-o" /> 姓名</span>
			<span slot="tags" slot-scope="tags">
				<a-tag
					v-for="tag in tags"
					:color="
						tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
					"
					:key="tag"
				>
					{{ tag.toUpperCase() }}
				</a-tag>
			</span>
			<span slot="action" slot-scope="text, record">
				<a>Invite 一 {{ record.name }}</a>
				<a-divider type="vertical" />
				<a>Delete</a>
				<a-divider type="vertical" />
				<a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
			</span>
		</a-table>
		<a-list itemLayout="horizontal" :dataSource="listData">
			<a-list-item slot="renderItem" slot-scope="item">
				<a-list-item-meta
					description="我在浦东，我很无奈，一直在等待，无奈不能颓废自暴自弃"
				>
					<a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
					<a-avatar
						slot="avatar"
						src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
					/>
				</a-list-item-meta>
			</a-list-item>
		</a-list>
		<a-tabs defaultActiveKey="2">
			<a-tab-pane key="1"
				><span slot="tab">
					<a-icon type="apple" />
					Tab 1
				</span>
				Tab 1
			</a-tab-pane>
			<a-tab-pane tab="这一生关于你的风景" disabled key="2"
				>这一生关于你的风景</a-tab-pane
			>
			<a-tab-pane tab="余 年" key="3">余 年</a-tab-pane>

			<a-tab-pane key="4">
				<span slot="tab">
					<a-icon type="android" />
					天刚好黑了
				</span>
				Tab 4内容
			</a-tab-pane>
		</a-tabs>
		<h3>时间轴组件</h3>
		<a-row>
			<a-col :span="6"></a-col>
			<a-col :span="12">
				<a-timeline>
					<a-timeline-item color="green"
						>Create a services site 2015-09-01</a-timeline-item
					>
					<a-timeline-item color="green"
						>Create a services site 2015-09-01</a-timeline-item
					>
					<a-timeline-item color="red">
						<p>Solve initial network problems 1</p>
						<p>Solve initial network problems 2</p>
						<p>Solve initial network problems 3 2015-09-01</p>
					</a-timeline-item>
					<a-timeline-item>
						<p>Technical testing 1</p>
						<p>Technical testing 2</p>
						<p>Technical testing 3 2015-09-01</p>
					</a-timeline-item>
					<a-timeline-item color="gray">
						<p>Technical testing 1</p>
						<p>Technical testing 2</p>
						<p>Technical testing 3 2015-09-01</p>
					</a-timeline-item>
					<a-timeline-item color="gray">
						<p>Technical testing 1</p>
						<p>Technical testing 2</p>
						<p>Technical testing 3 2015-09-01</p>
					</a-timeline-item>
				</a-timeline>
			</a-col>
		</a-row>
	</div>
</template>
<script>
const columns = [
	{
		dataIndex: 'name',
		key: 'name',
		slots: { title: 'customTitle' },
		scopedSlots: { customRender: 'name' }
	},
	{
		title: '年龄',
		dataIndex: 'age',
		key: 'age'
	},
	{
		title: '地址',
		dataIndex: 'address',
		key: 'address'
	},
	{
		title: '标签',
		key: 'tags',
		dataIndex: 'tags',
		scopedSlots: { customRender: 'tags' }
	},
	{
		title: '操作',
		key: 'action',
		scopedSlots: { customRender: 'action' }
	}
]

const data = [
	{
		key: '1',
		name: '马壮',
		age: 32,
		address: '浦东，北蔡',
		tags: ['玩世不恭', '不学无术', 'loser']
	},
	{
		key: '2',
		name: '张晶晶',
		age: 28,
		address: '山东，临沂',
		tags: ['漂亮', '明月几时有1', 'volcano']
	},
	{
		key: '3',
		name: '无谓侠',
		age: 32,
		address: '在江南饮过马',
		tags: ['帅', '有才']
	}
]

export default {
	data() {
		return {
			data,
			columns,
			listData: [
				{
					title: '让我们做个了断吧 1'
				},
				{
					title: '这是一段漫无目的的寻找 2'
				},
				{
					title: '我摸索着，不知要干啥才好 3'
				},
				{
					title: '为你受太多委屈 4'
				}
			]
		}
	}
}
</script>
