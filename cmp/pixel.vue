<template>
    <div class="l-pixel" :style="pixelStyle" @click="onPixelClick">
    </div>
</template>

<script>

    export default {
        props: {
            color: {
                type: String,
                required: true,
            },
            size: {
                type: String,
                required: true
            }
        },
        data() {
            return {};
        },
        computed: {
            pixelStyle() {
                return {
                    'background-color': `rgb(${this.color})`,
                    'width': this.size,
                    'height': this.size
                }
            }
        },
        methods: {
            onPixelClick() {
                this.$emit('pixel-click', this.color)
            }
        }
    }

</script>

<style scoped>
    .l-pixel {
        display: inline-block;
    }
</style>
