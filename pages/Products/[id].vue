<template>
    <div>

        <Head>
            <Title>TheLukCraft | {{ product.title }}</Title>
        </Head>
        <Meta name="description" :content="product.description" />
        <productDetails :product="product" />
    </div>
</template>

<script setup>
import { createError } from 'nuxt/app';

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//  fetch the products
const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

definePageMeta({
    layout: 'products'
})
</script>

<style scoped></style>