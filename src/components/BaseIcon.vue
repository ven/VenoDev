<template>
    <span class="BaseIcon" v-bind:class="[{ 'mr-2' : margin }, name]"></span>
</template>

<script>
export default {
    name: "BaseIcon",
    props: {
        name: String,
        margin: {
            default: true,
            type: Boolean,
        }
    },
}
</script>
