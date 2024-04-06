<script setup>
import { ref } from "vue";
import airbnb from "~/assets/images/airbnb.png";

const isOpen = ref(false);
</script>
<template>
  <nav class="bg-white">
    <div class="mx-auto px-6">
      <div class="flex justify-between">
        <!-- logo -->
        <div>
          <a
            href="#"
            class="flex items-center px-2 text-gray-700 hover:text-gray-900"
          >
            <img src="~/assets/images/airb.png" class="h-[70px]" />
          </a>
        </div>
        <div class="flex space-x-4">
          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="px-3 py-1 hover:bg-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:font-bold">
                <h3 class="">Stays</h3>
            </a>
            <a href="#" class="px-3 py-1 hover:bg-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:font-bold"
              >Experiences</a
            >
            <a href="#" class="px-3 py-1 hover:bg-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:font-bold"
              >Online Experiences</a
            >
          </div>
        </div>
        <!-- secondary nav -->
        <div class="hidden md:flex items-center gap-4">
          <a href="#" class="px-3 text-gray-700 hover:text-gray-900 mr-3"
            >Airbnb your home</a
          >
          <i class="fas fa-globe"></i>
          <div class="border border-gray-300 rounded-full flex gap-3 p-3">
            <i class="fas fa-bars"></i>
            <i class="fas fa-circle-user"></i>
          </div>
        </div>
        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="md:hidden" :class="isOpen ? 'block' : 'hidden'">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Careers</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Blog</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Contact Us</a
      >
    </div>
  </nav>
</template>