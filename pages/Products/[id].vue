<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex explicabo a impedit quasi commodi ad porro,
            ipsam est, inventore iusto harum repellendus. Natus amet repellat fugit aliquid quae debitis odit!</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const { id } = useRoute().params
</script>

<style scoped></style>