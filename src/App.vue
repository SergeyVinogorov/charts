<template>
    <DxButton
        text="Создать график"
        :on-click="showInfo"
    />
		<DxPopup
      v-model:visible="popupVisible"
      :drag-enabled="false"
      :close-on-outside-click="true"
      :show-title="true"
      :width="300"
      :height="270"
      title="Создать график"
    >
      <div class="option">
        <p>Выберите тип графика</p>
        <DxSelectBox
          v-model:value="typeChart"
          :items="typeChartItems"
          display-expr="name"
          value-expr="value"
        />
				<p v-if="isTypeChange">Выберите тип источника</p>
        <DxSelectBox
					v-if="isTypeChange"
          v-model:value="sourceChart"
          :items="sourceChartItems"
          display-expr="name"
          value-expr="value"
        />
      </div>
    </DxPopup>
		<Chart/>
</template>

<script>
import DxButton from 'devextreme-vue/button';
import { DxPopup } from 'devextreme-vue/popup';
import { DxSelectBox } from 'devextreme-vue/select-box';
import Chart from './components/Chart.vue'
import { uniqElements } from "./helpers"
import moment from 'moment'

export default {
  name: 'App',
  components: {	
   DxButton,
	 DxPopup,
	 DxSelectBox,
	 Chart
  },
	data() {
		return{
			popupVisible: false,
			typeChart: 'Линейный',
			typeChartItems: [{
        name: "Линейный",
        value: 'Линейный'
      }, {
        name: "Донат",
        value: 'Донат'
      }],
			sourceChart: 'Линейный',
			sourceChartItems: [{
        name: "Bloomberg",
        value: 'Bloomberg'
      }, {
        name: "CNBC",
        value: 'CNBC'
      }],
			isTypeChange: false,
			charts: []
		}
	},
	watch: {
		typeChart: function() {
			this.isTypeChange = true
		},
		sourceChart: function(val) {
			this.isTypeChange = false
			this.popupVisible = false
		},
	},
	methods: {
    showInfo() {
      this.popupVisible = true;
    },
	},
	async mounted() {
		const resLines = await fetch('https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2')
		const resPies = await fetch('https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047')
		const postLines = await resLines.json()
		const postPies = await resPies.json()
		let sortedMonth = postLines.filter((el, index, arr)=>uniqElements(el, index, arr))
		let sourceLines = sortedMonth.map(item=>{return { value: item.Месяц, name: item.Месяц}})
		let sorceData = postLines.map(item=>{return {date: moment(item.Дата).format('DD/MM/YY'),[item.Месяц]: item.Процент}})
		let newState = this.charts
		this.charts.splice(newState.length, 0, {title:sourceLines, data:sorceData })

		console.log(newState)

	},
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
