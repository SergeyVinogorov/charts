<template>
  <div id="app">
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
      :height="250"
      title="Создать график"
    >
      <p>
        Full Name:
        <span> FirstName</span>
        <span> LastName</span>
      </p>
      <p>
        Birth Date: <span> BirthDate</span>
      </p>
      <p>
        Address: <span>Address</span>
      </p>
      <p>
        Hire Date: <span>HireDate</span>
      </p>
      <p>
        Position: <span>Position</span>
      </p>
    </DxPopup>
  </div>
</template>

<script>
import DxButton from 'devextreme-vue/button';
// import FormPopup from './components/FormPopup';
import { DxPopup } from 'devextreme-vue/popup';


export default {
  name: 'App',
	components: {
			DxButton,
			// FormPopup
		DxPopup
	},
	data() {
		return{
			popupVisible: false
		}
	},
	methods: {
    showInfo() {
      this.popupVisible = true;
    }
	}
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
