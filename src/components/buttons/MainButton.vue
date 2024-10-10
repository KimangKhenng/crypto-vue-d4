<template>
    <div class="btn-box">
        <div @click="customClick" class="btn1">
            <span class="inline">
                <slot></slot>
            </span>
            {{ text }}
        </div>
    </div>
</template>
<script>
export default {
    props: ['text'],
    methods: {
        customClick() {
            this.$emit('custom-click', "Hello World Click")
        }
    }
}
</script>