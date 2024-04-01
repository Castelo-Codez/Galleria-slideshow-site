import {ref, watch} from "vue";

const $slideShow = ref(false);
const $imageBox = ref(false);
watch($imageBox, (newValue) => {
    if (newValue) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
});

export {$slideShow, $imageBox};
