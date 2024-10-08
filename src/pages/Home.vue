<template>
    <HeroArea></HeroArea>
    <!-- <CryptoSlider /> -->
    <Course></Course>
    <ServiceSection></ServiceSection>
</template>
<script>
import HeroArea from "@/components/HeroArea.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import Course from "@/components/Course.vue";
import CryptoSlider from "@/components/sliders/CryptoSlider.vue";
export default {
    components: {
        HeroArea,
        ServiceSection,
        Course,
        CryptoSlider
    },
};
</script>