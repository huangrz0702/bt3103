<template>
  <div>
    <a @click="move(1)">&lt;</a>
    <a @click="move(-1)">&gt;</a>
    <div id="div1" ref="carousel">
      <ul ref="carouselList">
        <li v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </li>
        <div style="clear: none;"></div>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      images: [
        "src/assets/pic/download.jpg",
        "src/assets/pic/download-1.jpg",
        "src/assets/pic/download-2.jpg",
        "src/assets/pic/download-3.jpg",
        "src/assets/pic/download-4.jpg",
        "src/assets/pic/xiaolongbao.jpg",
        "src/assets/pic/Jajangmyeon.jpg",
      ],
      timer: null,
      iSpeed: 250,
    };
  },
  mounted() {
    const carouselList = this.$refs.carouselList;
    carouselList.innerHTML += carouselList.innerHTML;
    carouselList.style.width = carouselList.children.length * carouselList.children[0].offsetWidth + "px";
  },
  methods: {
    move(iDirection) {
      clearInterval(this.timer);
      const carouselList = this.$refs.carouselList;
      const iTarget = carouselList.offsetLeft - iDirection * this.iSpeed;
      const iInterval = this.iSpeed / 10;
      let iLeft = carouselList.offsetLeft;
      let bEnd = false;

      this.timer = setInterval(() => {
        if (bEnd) {
          clearInterval(this.timer);
          return;
        }
        if (iDirection > 0) {
          if (carouselList.offsetLeft <= iTarget) {
            carouselList.style.left = iTarget + "px";
            bEnd = true;
          } else {
            carouselList.style.left = iLeft - iInterval + "px";
            iLeft = carouselList.offsetLeft;
          }
        } else {
          if (carouselList.offsetLeft >= iTarget) {
            carouselList.style.left = iTarget + "px";
            bEnd = true;
          } else {
            carouselList.style.left = iLeft + iInterval + "px";
            iLeft = carouselList.offsetLeft;
          }
        }
      }, 10);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#div1 {
  position: relative;
  border: 1px solid #0ff;
  width: 100%;
  height: 350px;
  margin: 50px auto 0;
  overflow: hidden;
}

#div1 ul {
  position: absolute;
  left: 0;
}

#div1 ul li {
  list-style: none;
  width: 400px;
  float: left;
  padding: 10px;
  height: 70%;
  margin-top: 0px;
}

#div1 ul li img {
  width: 100%;
  height: 300px;
}

a {
  position: absolute;
  display: block;
  width: 50px;
  height: 50px;
  font-size: 30px;
  text-decoration: none;
  color: #030202;
  background-color: rgba(253, 250, 250, 0.5);
  top: 0%;
}

a:nth-of-type(1) {
    right: 70px;
    transform: translateY(730px);
}

a:nth-of-type(2) {
    right: 10px;
    transform: translateY(730px);
}


</style>