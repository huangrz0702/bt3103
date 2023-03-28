<template>
      <head>
        <title>My Profile</title>
    </head>
    <body>
      <div class="store">
        <h1>My Favourite Store</h1>
        <img id="store-picture" src="src/assets/pic/hongkongkitchen.jpg" alt="Store Image" style="width: 200px;">
        <div id="store-description" class="store-details">
            <h2>Hong Kong Kitchen</h2>
            <a href="#">read more</a>
            <p>Cuisine: Chinese | Price: 5$ | Rating: 3.78</p>
            <p>Recommendation: This is a good tasty dish that will leave you wanting more.</p>
        </div>
        <button id="delete-button" class="delete" onclick="deletePicture()">Delete</button>
      </div>
    </body>  
</template>
