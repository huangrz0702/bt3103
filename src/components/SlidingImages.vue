<template>
  <div class="sliding-images">
    <div class="slider">
      <div v-for="(image, index) in images" :key="index" class="slide">
        <img :src="image" alt="Slide Image" />
      </div>
    </div>
  </div>
</template>

<script>
import Pancakes from "../assets/pic/Pancakes.jpg";
import Jajangmyeon from "../assets/pic/Jajangmyeon.jpg";
import Xiaolongbao from "../assets/pic/Xiaolongbao.jpg";

export default {
  data() {
    return {
      images: [Pancakes, Jajangmyeon, Xiaolongbao], // Replace with your own image paths
    };
  },
  mounted() {
    this.initSlider();
  },
  methods: {
    initSlider() {
      let slideIndex = 0;
      const slides = document.querySelectorAll(".slide");
      slides[slideIndex].classList.add("active");

      setInterval(() => {
        slides[slideIndex].classList.remove("active");
        slideIndex++;
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }
        slides[slideIndex].classList.add("active");
      }, 3000);
    },
  },
};
</script>

<style>
.sliding-images {
  margin-top: 20px; /* Adjust this to your liking */
  height: 300px; /* Adjust this to your desired height */
  overflow: hidden;
}

.slider {
  display: flex;
  width: 100%;
}

.slide {
  flex: 1;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(100%);
}

.slide.active {
  transform: translateX(0%);
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
