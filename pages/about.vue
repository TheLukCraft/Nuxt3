<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">TheLukCraft</NuxtLink>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa ipsum alias autem minima ea quo placeat
            natus quidem? Reprehenderit illo, neque non quidem fuga modi quod fugiat laboriosam eius?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi atque possimus molestias recusandae magni quia
            odit! Molestiae numquam deserunt quisquam, animi sunt ipsum, velit, magni reiciendis reprehenderit
            perferendis beatae atque!</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>