<template>
    <p v-for="(item, index) in sevices" :key="index">{{ item }}</p>
</template>
<script>
export default {
    data() {
        return {
            sevices: ['h1', 'h2']
        }
    }
}
</script>