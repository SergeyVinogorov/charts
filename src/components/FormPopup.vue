<template>
	<div>
		<DxPopup
      :visible="handleVisible"
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
import { DxPopup } from 'devextreme-vue/popup';

export default {
	name: 'FormPopup',
	components:{
		DxPopup
	},
	  props: {
		popupVisible:{
			type: Boolean,
			required: true
		}
  },
		methods: {
    handleVisible() {
			console.log('yes')
      this.popupVisible = this.popupVisible;
			return this.popupVisible
    }
	}
}
</script>