<template>
    <HeroArea></HeroArea>
    <!-- <CryptoSlider /> -->
    <Course></Course>
    <Player @finished="handleFinish" />
    <ServiceSection></ServiceSection>
</template>
<script>
import HeroArea from "@/components/HeroArea.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import Course from "@/components/Course.vue";
import CryptoSlider from "@/components/sliders/CryptoSlider.vue";
import Player from "@/components/players/Player.vue";
export default {
    components: {
        HeroArea,
        ServiceSection,
        Course,
        CryptoSlider,
        Player
    },
    methods: {
        handleFinish(value) {
            console.log(value)
            // Move to next page
        }
    }
};
</script>