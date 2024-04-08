<script>
export default {
  props: ["product"],
  data() {
    return {
      products: [],
      isLoading:false,
    };
  },
  async mounted() {
    try {
      this.isLoading = true
      const response = await fetchProducts();
      this.products = response.data.products;
      console.log(this.products);
      this.isLoading = false
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>

<template>
  <div class="px-10">
    <div v-if="isLoading">
      <div class="flex lg:gap-24">
        <ProductSkeleton/>
        <ProductSkeleton/>
        <ProductSkeleton/>
        <ProductSkeleton/>
      </div>
    </div>
    <div v-else class="grid grid-cols-4 gap-4 lg:gap-24">
      <div class="w-full" v-for="product in products" :key="product.id">
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>