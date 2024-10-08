<template>
  <div class="sub_page">
    <div class="hero_area">
      <FlexHeader></FlexHeader>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import FlexHeader from '@/components/navs/FlexHeader.vue';
export default {
  components: {
    FlexHeader
  }
}
</script>
