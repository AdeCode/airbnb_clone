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
    <div class="mb-4">
      <div class="flex gap-12 border-t border-gray-300 pt-7 mb-2">
        <div class="hover:border-black hover:border-b-4 flex flex-col items-center cursor-pointer">
          <div class="w-[25px] h-[25px]">
            <img src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" class="opacity-50"/>
          </div>
          <h4 class="mb-2">Trending</h4>
        </div>
        <div class="hover:border-black hover:border-b-4 flex flex-col items-center cursor-pointer">
          <div class="w-[25px] h-[25px]">
            <img src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" class="opacity-50"/>
          </div>
          <h4 class="mb-2">Countryside</h4>
        </div>
        <div class="hover:border-black hover:border-b-4 flex flex-col items-center cursor-pointer">
          <div class="w-[25px] h-[25px]">
            <img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" class="opacity-50"/>
          </div>
          <h4 class="mb-2">OMG!</h4>
        </div>
        <div class="hover:border-black hover:border-b-4 flex flex-col items-center cursor-pointer">
          <div class="w-[25px] h-[25px]">
            <img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" class="opacity-50"/>
          </div>
          <h4 class="mb-2">Rooms</h4>
        </div>
        <div class="hover:border-black hover:border-b-4 flex flex-col items-center cursor-pointer">
          <div class="w-[25px] h-[25px]">
            <img src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" class="opacity-50"/>
          </div>
          <h4 class="mb-2">Mansions</h4>
        </div>
        <div class="hover:border-black hover:border-b-4 flex flex-col items-center cursor-pointer">
          <div class="w-[25px] h-[25px]">
            <img src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" class="opacity-50"/>
          </div>
          <h4 class="mb-2">Beachfront</h4>
        </div>
        <div class="hover:border-black hover:border-b-4 flex flex-col items-center cursor-pointer">
          <div class="w-[25px] h-[25px]">
            <img src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg" class="opacity-50"/>
          </div>
          <h4 class="mb-2">Campers</h4>
        </div>

      </div>
    </div>
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