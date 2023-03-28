<template>
    <head>
    <title>My Profile</title>
</head>
<body>
  <div class="store">
    <h1>My Favourite Store</h1>
    <img id="store-picture" src="src/assets/pic/hongkongkitchen.jpg" alt="Store Image">
    <div id="store-description" class="store-details">
        <h2>Hong Kong Kitchen</h2>
        <a href="#">read more</a>
        <p>Cuisine: Chinese | Price: 5$ | Rating: 3.78</p>
        <p>Recommendation: This is a good tasty dish that will leave you wanting more.</p>
    </div>
    <button id="delete-button" class="delete" onclick="deletePicture()">Delete</button>
  </div>
  <div class="preference">
    <h1>My Preference</h1>
    <form>
      <label for="preference-select">Select your preference:</label>
      <select id="preference-select" name="preference">
        <option value="Vegetarian">Vegetarian</option>
        <option value="Halal">Halal</option>
        <option value="Non-Spicy">Non-Spicy</option>
        <option value="Western">Western</option>
      </select>
      <button type="submit">Change Preference</button>
    </form>
  </div>
</body>
</template>

<script>
        function deletePicture() {
          var picture = document.getElementById("store-picture");
          picture.parentNode.removeChild(picture);
          var deleteButton = document.getElementById("delete-button");
          deleteButton.parentNode.removeChild(deleteButton);
          var setButton = document.createElement("button");
          setButton.className = "set";
          setButton.textContent = "Set as Favourite";
          var storeDiv = document.querySelector(".store");
          var inputContainer = document.createElement("div");
          inputContainer.className = "input-container";
          storeDiv.appendChild(inputContainer);
          var input = document.createElement("input");
          input.type = "text";
          input.placeholder = "Favourite Store Name";
          inputContainer.appendChild(input);
          inputContainer.appendChild(setButton);
      
          var storeDesc = document.getElementById("store-description");
          storeDesc.parentNode.removeChild(storeDesc);
        }
</script>

<style>
    #store-picture{
        width: 20%;
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
    }
    .store {
      padding: 10px;
      margin-bottom: 20px;
      overflow: auto;
    }
    .store img {
      float: left;
      margin-right: 10px;
    }
    .store button.delete {
      float: right;
      background-color: red;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
    }
    .store button.set {
      background-color: green;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      margin-left: 10px;
    }
    .preference {
      padding: 10px;
      overflow: auto;
    }
    .preference button {
      background-color: red;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
    }
    .preference select {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid gray;
      width: 150px;
    }
    .input-container {
      display: flex;
      align-items: center;
    }
</style>