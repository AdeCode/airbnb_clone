<template>
    <div class="flex justify-center mb-6">
        <div class="w-full lg:w-[1000px] rounded-full shadow-slate-500 border border-gray-500 shadow h-[70px] flex justify-between items-center pr-3">
            <div class="flex w-[90%] py-1 h-full">
                <div class="w-[25%] hover:rounded-full hover:bg-gray-200 py-2 border-r border-gray-400 pl-3">
                    <h3 class="">Where</h3>
                    <input type="text" class="focus:outline-none hover:bg-gray-200" placeholder="Search destinations"/>
                </div>
                <div class="w-[25%] hover:rounded-full hover:bg-gray-200 py-2 border-r border-gray-400 pl-3">
                    <h3 class="">Check in</h3>
                    <input type="text" class="focus:outline-none" placeholder="Add dates"/>
                </div>
                <div class="w-[25%] hover:rounded-full hover:bg-gray-200 py-2 border-r border-gray-400 pl-3">
                    <h3 class="">Check out</h3>
                    <input type="text" class="focus:outline-none" placeholder="Add dates"/>
                </div>
                <div class="w-[25%] hover:rounded-full hover:bg-gray-200 py-2 border-r border-gray-400 pl-3">
                    <h3 class="">Who</h3>
                    <input type="text" class="focus:outline-none" placeholder="Add guests"/>
                </div>
            </div>
            <div class="rounded-[50%] bg-red-400 h-[50px] w-[50px] flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" 
                    style="display:block;fill:none;height:16px;width:16px;stroke:currentColor;stroke-width:4;overflow:visible" 
                    aria-hidden="true" role="presentation" 
                    focusable="false"><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                </svg>
            </div>
        </div>
    </div>
</template>