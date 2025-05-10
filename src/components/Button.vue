<template>
    <button :style="{ color: color }" @click="handleClick">
        
        <slot></slot>
        {{ count }}
    </button>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    let count = ref(0)

    function handleClick(){
        count.value ++
        console.log('click!', count.value)
    }

    defineProps({
        color: {
            type: String,
            default: '#333'
        }
    })
    defineOptions({
        name: 'BButton'
    })
</script>

<style>

</style>