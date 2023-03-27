<template>

  <div>
    <div class="header">
      <h1>My Profile</h1>
      <button id = "logoff" >Log Off</button>
    </div>
    <form>
      <label for="username">Username:</label>
      <div class="input-container">
        <input type="text" id="username" name="username" placeholder="Your Username" required>
        <button type="submit" class="submit-btn">Submit</button>
      </div>
    </form>
    <div class="change-password-container">
      <h2>Change Password</h2>
      <p>An email to renew your password will be sent to your registered email address.</p>
      <button class="change-password-btn">Change Password</button>
    </div>
  </div>
</template>

<script>
export default {
  // Add your component logic here
};
</script>

<style>
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
  }
  button {
    background-color: red;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
  }
  .input-container {
    display: flex;
  }
  .change-password-container {
    margin-top: 20px;
  }
  .submit-btn,
  .change-password-btn {
    background-color: orange;
    font-size: 16px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #logoff{
    background: red;
    color : white ;
  }

</style>
