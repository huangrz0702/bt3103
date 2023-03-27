
<template>
<!-- This is the profile image upload component -->

    <div>
        <input type = "file" v-show="false" accept="image/*"  ref="file" @change="change">
        <div style="position: relative; display: inline-block;">
            <img :src="src" alt="Avatar" style="height: 130px; width: 130px; border-radius: 50%; object-fit: cover;">
            <div id="photo">
            <button @click="browse()"> 
               <img :src="cameraIcon" alt="Camera Icon" 
                @mouseover="hoverCamera = true"
                @mouseout="hoverCamera = false"
                @focus="focusCamera = true"
                @blur="focusCamera = false"
                :style="cameraButtonStyles">
            </button>
            <button v-if="file" @click="remove()"> 
               <img :src="circularIcon" alt="Circular Icon" 
                @mouseover="hoverCircular = true"
                @mouseout="hoverCircular = false"
                @focus="focusCircular = true"
                @blur="focusCircular = false"
                :style="circularButtonStyles"
                >
            </button>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        value: File,
        defaultSrc : String
    },
    data(){
        return {
            src : "src/assets/pic/profilephoto.png",
            file : null,
            cameraIcon : "src/assets/pic/camera.svg",
            hoverCamera: false,
            focusCamera: false,
            hoverCircular: false,
            focusCircular: false,
            circularIcon : "src/assets/pic/circularArrow.svg",
        }
    },
    computed: {
    cameraButtonStyles() {
      return `
        border-radius: 50%;
        padding: 0.5rem;
        outline: none;
        color: white;
        height: 50px; 
        width: 50px;
        ${this.hoverCamera || this.focusCamera ? 'background-color: rgba(255, 255, 255, 0.5);' : ''}
        opacity: ${this.hoverCamera || this.focusCamera ? 1 : 0};
      `;
    },
    circularButtonStyles() {
    return `
      border-radius: 50%;
      padding: 0.5rem;
      outline: none;
      color: white;
      height: 50px; 
      width: 50px;
      ${this.hoverCircular || this.focusCircular ? 'background-color: rgba(255, 255, 255, 0.5);' : ''}
      opacity: ${this.hoverCircular || this.focusCircular ? 1 : 0};
    `;},
    },
    methods: {
        browse() {
            this.$refs.file.click();
        },
        change(e) {
            this.file = e.target.files[0];
            this.$emit("input", this.file);
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                this.src = e.target.result;
            }

        },
        remove(){
            this.file = null;
            this.src = "src/assets/pic/profilephoto.png";
            this.$emit("input", this.file);

        },
    }
}
</script>

<style>
    #photo{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;}
    


</style>