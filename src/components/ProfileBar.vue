<template>

  <link href='https://unpkg.com/css.gg@2.0.0/icons/css/arrow-align-h.css' rel='stylesheet'>
  <link href='https://unpkg.com/css.gg@2.0.0/icons/css/user.css' rel='stylesheet'>
  <link href='https://unpkg.com/css.gg@2.0.0/icons/css/heart.css' rel='stylesheet'>
  <link href='https://unpkg.com/css.gg@2.0.0/icons/css/bookmark.css' rel='stylesheet'>
  <link href='https://unpkg.com/css.gg@2.0.0/icons/css/log-out.css' rel='stylesheet'>

	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
      <!-- <img src="../assets/pic/transparent_logo.png" alt="meNUS logo"/>  put profile photo-->
      <!-- <span class = "text"> {username} </span> -->
      <img src="../assets/pic/transparent_logo.png" alt="meNUS logo"/> 
    </div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons"><i class="gg-arrow-align-h"></i></span>
			</button>
		</div>

		<avatar-input v-if="is_expanded"></avatar-input>

		<h3>Profile Page Menu</h3>
		<div class="menu">
			<router-link to="/Profile" class="button">
				<span class="material-icons"><i class="gg-user"></i></span>
				<span class="text">My Profile</span>
			</router-link>
			<router-link to="/Preference" class="button">
				<span class="material-icons"><i class="gg-heart"></i></span>
				<span class="text">My Preference</span>
			</router-link>
			<router-link to="/Hist" class="button">
				<span class="material-icons"><i class="gg-bookmark"></i></span>
				<span class="text">My History</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
import AvatarInput from './AvatarInput.vue';

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}


</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	background-color: pink;
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 1rem;
		img {
			width: 2rem;
		}
	}
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-start;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;

			}
			
		}
	}
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
    font-size: 20px;
	}
	h3 {
		color: black;
    font-size: 28px;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
			.material-icons {
				font-size: 2rem;
			}
		}
	}
	&.is-expanded {
		width: 30%;

    .logo {
		margin-bottom: 1rem;
		img {
			width: 5rem;
		}
	}
		.menu-toggle-wrap {
			top: -3rem;
      justify-content: flex-end;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}
		h3, .button .text {
			opacity: 1;
		}
		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
	}
	@media (max-width: 1024px) {
		position: absolute;
	}
}
</style>
