<script setup>
import data from "../../data/data.json";
import {$slideShow} from "@/store/store";
import {RouterLink} from "vue-router";
$slideShow.value = false;
/*

        <link
            rel="preload"
            fetchpriority="high"
            as="image"
            href="/public/assets/lady-with-an-ermine/artist.webp"
            type="image/webp"
        />
        <link
            rel="preload"
            fetchpriority="high"
            as="image"
            href="/public/assets/lady-with-an-ermine/gallery.webp"
            type="image/webp"
        />
        <link
            rel="preload"
            fetchpriority="high"
            as="image"
            href="/public/assets/lady-with-an-ermine/hero-large.webp"
            type="image/webp"
        />
        <link
            rel="preload"
            fetchpriority="high"
            as="image"
            href="/public/assets/lady-with-an-ermine/hero-small.webp"
            type="image/webp"
        />
        <link
            rel="preload"
            fetchpriority="high"
            as="image"
            href="/public/assets/lady-with-an-ermine/thumbnail.webp"
            type="image/webp"
        />








*/
</script>
<template>
    <main role="main" aria-label="main content" class="mt-10">
        <div class="container" aria-label="content wrapper">
            <nav role="navigation" aria-label="navigation links">
                <ul
                    role="list"
                    aria-label="list of layers"
                    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-main-grid-cols gap-10 py-4"
                >
                    <li role="listitem" aria-label="layer of links">
                        <RouterLink
                            v-for="($image, $index) in data[0]"
                            :to="{name: 'slideShow', params: {id: $image.id}}"
                            :aria-label="$image.name + ' link'"
                            role="link"
                            class="mb-10 last:mb-0 block overflow-hidden relative"
                        >
                            <div
                                aria-label="image info"
                                class="absolute z-20 bottom-10 text-p-white px-10"
                            >
                                <h1
                                    aria-level="1"
                                    aria-label="image title"
                                    class="text-[1.7rem] capitalize"
                                >
                                    {{ $image.name }}
                                </h1>
                                <span
                                    aria-label="artist name"
                                    class="text-p-light-gray text-[0.777rem]"
                                >
                                    {{ $image.artist.name }}
                                </span>
                            </div>
                            <img
                                :src="$image.images.thumbnail"
                                :alt="$image.name"
                                class="max-w-none w-full"
                            />
                        </RouterLink>
                    </li>
                    <li role="listitem" aria-label="layer of links">
                        <RouterLink
                            v-for="($image, $index) in data[1]"
                            :to="{name: 'slideShow', params: {id: $image.id}}"
                            :aria-label="$image.name + ' link'"
                            role="link"
                            class="mb-10 last:mb-0 block overflow-hidden relative"
                        >
                            <div
                                aria-label="image info"
                                class="absolute z-20 bottom-10 text-p-white px-10"
                            >
                                <h1
                                    aria-level="1"
                                    aria-label="image title"
                                    class="text-[1.7rem] capitalize"
                                >
                                    {{ $image.name }}
                                </h1>
                                <span
                                    aria-label="artist name"
                                    class="text-p-light-gray text-[0.777rem]"
                                >
                                    {{ $image.artist.name }}
                                </span>
                            </div>
                            <img
                                :src="$image.images.thumbnail"
                                :alt="$image.name"
                                class="max-w-none w-full"
                            />
                        </RouterLink>
                    </li>
                    <li role="listitem" aria-label="layer of links">
                        <RouterLink
                            v-for="($image, $index) in data[2]"
                            :to="{name: 'slideShow', params: {id: $image.id}}"
                            :aria-label="$image.name + ' link'"
                            role="link"
                            class="mb-10 last:mb-0 block overflow-hidden relative"
                        >
                            <div
                                aria-label="image info"
                                class="absolute z-20 bottom-10 text-p-white px-10"
                            >
                                <h1
                                    aria-level="1"
                                    aria-label="image title"
                                    class="text-[1.7rem] capitalize"
                                >
                                    {{ $image.name }}
                                </h1>
                                <span
                                    aria-label="artist name"
                                    class="text-p-light-gray text-[0.777rem]"
                                >
                                    {{ $image.artist.name }}
                                </span>
                            </div>
                            <img
                                :src="$image.images.thumbnail"
                                :alt="$image.name"
                                class="max-w-none w-full"
                            />
                        </RouterLink>
                    </li>
                    <li role="listitem" aria-label="layer of links">
                        <RouterLink
                            v-for="($image, $index) in data[3]"
                            :to="{name: 'slideShow', params: {id: $image.id}}"
                            :aria-label="$image.name + ' link'"
                            role="link"
                            class="mb-10 last:mb-0 block overflow-hidden relative"
                        >
                            <div
                                aria-label="image info"
                                class="absolute z-20 bottom-10 text-p-white px-10"
                            >
                                <h1
                                    aria-level="1"
                                    aria-label="image title"
                                    class="text-[1.7rem] capitalize"
                                >
                                    {{ $image.name }}
                                </h1>
                                <span
                                    aria-label="artist name"
                                    class="text-p-light-gray text-[0.777rem]"
                                >
                                    {{ $image.artist.name }}
                                </span>
                            </div>
                            <img
                                :src="$image.images.thumbnail"
                                :alt="$image.name"
                                class="max-w-none w-full"
                            />
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>
<style scoped>
img {
    transition: 0.4s;
}
a:hover {
    img {
        transform: scale(1.1);
        filter: grayscale(100);
    }
}
</style>
