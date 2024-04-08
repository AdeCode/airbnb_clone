<template>
    <Suspense>
        <div class="flex flex-col">
            <div class="w-full h-[300px] rounded-lg">
                <img :src="product.images[0]" alt="" class="w-full h-full object-cover rounded-lg"/>
            </div>
            <div class="flex flex-col">
                <div class="flex justify-between">
                    <h3 class="font-semibold">{{ product.title }}</h3>
                    <span>
                        <i class="fas fa-star"></i>
                        {{ product.rating }}
                    </span>
                </div>
                <h3 class="">{{ product.description }}</h3>
                <h3 class="font-semibold">${{ product.price }}</h3>
            </div>
        </div>
        <template #fallback>
          <ProductSkeleton/>
        </template>
      </Suspense>
</template>

<script>
import { Icon } from '@iconify/vue';

export default{
    props:['product'],
}
</script>