<template>
  <div class="hero_area">
    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="images/hero-bg.png" alt="Change" />
      </div>
    </div>
    <CryptoSlider />
  </div>
</template>
<script>
import axios from "axios";
import CryptoSlider from "@/components/sliders/CryptoSlider.vue";
export default {
  components: {
    CryptoSlider
  },
  props: {
    text: {
      type: String,
      default: 'Hello'
    }
  },
  data() {
    return {
      services: ["Hello", "Hello2"],
      changedColor: false
    };
  },
  methods: {
    updateTitle() {
      this.services[0] = "Updated!";
    },
    switchColor() {
      this.changedColor = !this.changedColor
    }
  },
  beforeCreate() {
    console.log("Before created");
    console.log(this.services);
  },
  async created() {
    const response = await axios.get("/v1/courses");
    // Call API (Backend) to get data
    console.log("Created and after beforeCreate");
    console.log(response.data);
  },
  beforeMount() {
    // Component appeared in DOM
    console.log("Before mounted");
  },
  mounted() {
    // Component appeared in DOM
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before updated");
  },
  updated() {
    console.log("Updated");
  },
  beforeUnmount() {
    console.log("Before unmount");
  },
  unmounted() {
    console.log("Unmounted");
  },
};
</script>
<style>
.red-text {
  color: red;
}
</style>
<!-- Useful when overriding global style -->