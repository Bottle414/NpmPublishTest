<template>
    <div class="card" :class="shadow">
        <slot></slot>
    </div>
</template>

<script lang='ts' setup>
    import { PropType } from 'vue'
    defineProps({
        shadow: {
            type: String as PropType<'always' | 'hover'>,
            default: 'hover'
        }
    })
    defineOptions({
        name: 'BCard'
    })
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    .card {
        border: 2px solid #eee;
        width: 100%;
        padding: 1%;
    }

    .always, .hover:hover {
        box-shadow: 2px 2px 2px rgba(100, 100, 100, .2), 3px 4px 4px rgba(100, 100, 100, .1);
    }
</style>