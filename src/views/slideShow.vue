<script setup>
import data from "../../data/data.json";
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import {$slideShow, $imageBox} from "@/store/store";
$slideShow.value = true;
let $flatedArr = data.flat(Infinity);

const $route = useRoute();

const $TargetGallery = computed(() => {
    return $flatedArr.find((el) => el.id == $route.params.id);
});

const $nextTarget = computed(() => {
    if ($TargetGallery.value === $flatedArr[$flatedArr.length - 1]) {
        return $flatedArr[0];
    } else {
        return $flatedArr[$flatedArr.indexOf($TargetGallery.value) + 1];
    }
});
const $prevTarget = computed(() => {
    if ($TargetGallery.value === $flatedArr[0]) {
        return $flatedArr[$flatedArr.length - 1];
    } else {
        return $flatedArr[$flatedArr.indexOf($TargetGallery.value) - 1];
    }
});

const $perc = computed(() => {
    return (
        (($flatedArr.indexOf($TargetGallery.value) + 1) / $flatedArr.length) *
        100
    );
});
</script>
<template>
    <main role="main" aria-label="main content">
        <div class="container mt-10 flex flex-col md:flex-row">
            <div class="md:w-2/4 relative" aria-label="image container">
                <picture class="block">
                    <source
                        :srcset="'/' + $TargetGallery.images.hero.large"
                        media="(min-width: 768px)"
                    />
                    <img
                        :src="'/' + $TargetGallery.images.hero.small"
                        :alt="$TargetGallery.name"
                        class="md:w-[80%]"
                    />
                </picture>
                <button
                    role="button"
                    class="absolute w-fit flex items-center top-5 md:top-[85%] left-5 gap-x-2 text-[0.66rem] tracking-[0.22rem] uppercase p-3 bg-p-black text-p-white hover:bg-p-black-lighter"
                    type="button"
                    aria-label="view image"
                    @click="$imageBox = true"
                >
                    <svg
                        width="12"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="#FFF" fill-rule="nonzero">
                            <path
                                d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"
                            />
                        </g>
                    </svg>
                    view image
                </button>
            </div>
            <div class="md:w-2/4"></div>
        </div>

        <div
            class="container relative py-10 flex justify-between items-center"
            aria-label="controllers"
        >
            <div
                class="h-[0.1rem] w-[calc(100%_-_10px)] left-2/4 -translate-x-2/4 top-5 absolute bg-neutral-200"
            >
                <div
                    id="progress"
                    class="h-full bg-primary bg-black"
                    :style="{width: `${$perc}%`}"
                ></div>
            </div>
            <div aria-label="current image info">
                <h2
                    aria-level="2"
                    aria-label="title"
                    class="text-[1.3rem] font-bold"
                >
                    {{ $TargetGallery.name }}
                </h2>
                <span aria-label="artist" class="text-[0.8rem] text-p-gray">
                    {{ $TargetGallery.artist.name }}
                </span>
            </div>
            <ul role="list" aria-label="controllers list" class="flex gap-x-8">
                <li aria-label="list wrapper" role="listitem">
                    <RouterLink
                        :to="{
                            name: 'slideShow',
                            params: {
                                id: $prevTarget.id,
                            },
                        }"
                        aria-label="previous image"
                        role="link"
                    >
                        <svg
                            width="26"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g stroke="#000" fill="none" fill-rule="evenodd">
                                <path
                                    d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                                    stroke-width="2"
                                />
                                <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
                            </g>
                        </svg>
                    </RouterLink>
                </li>
                <li aria-label="list wrapper" role="listitem">
                    <RouterLink
                        type="button"
                        :to="{
                            name: 'slideShow',
                            params: {
                                id: $nextTarget.id,
                            },
                        }"
                        aria-label="previous image"
                        role="link"
                    >
                        <svg
                            width="26"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g stroke="#000" fill="none" fill-rule="evenodd">
                                <path
                                    d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                                    stroke-width="2"
                                />
                                <path
                                    fill="#D8D8D8"
                                    d="M24.708.5h1v22.775h-1z"
                                />
                            </g>
                        </svg>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div
            aria-label="image box"
            v-if="$imageBox"
            class="absolute w-full h-full gap-y-4 bg-[#000000e3] flex flex-col justify-center items-center top-0"
        >
            <div class="w-[10%] flex justify-center">
                <button
                    @click="$imageBox = false"
                    aria-label="close image box"
                    class="text-p-light-gray uppercase"
                >
                    close
                </button>
            </div>
            <div aria-label="image container" class="w-2/4 flex justify-center">
                <img
                    class="w-full sm:w-[60%]"
                    :src="'/' + $TargetGallery.images.gallery"
                    :alt="$TargetGallery.name"
                />
            </div>
        </div>
    </main>
</template>
<style scoped>
#progress {
    transition: 0.4s;
}
</style>
