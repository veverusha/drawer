<!DOCTYPE html>
<html>
<head>
<style>
.img-comparison-container {
  position: relative;
  width: 100%; /* Full width */
  max-width: 500px; /* Adjust as needed, maximum width */
  margin: auto; /* Center the container */
}

.img-comparison-container img {
  width: 100%;
  display: block;
  vertical-align: middle; /* Align images vertically */
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%; /* Initial overlay width set to 50% */
  height: 100%; /* Full height */
  overflow: hidden;
}

.slider {
  position: absolute;
  z-index: 9;
  cursor: ew-resize;
  width: 10px; /* Slider width */
  height: 100%; /* Slider height */
  background-color: #2196F3; /* Slider color */
  left: 50%; /* Initial slider position */
  transform: translateX(-50%); /* Center the slider */
}
</style>
</head>
<body>

<div class="img-comparison-container">
  <img src="https://vinsova.weebly.com/uploads/7/2/5/9/72597425/39a221bf-27aa-4c7e-80f6-0dd922d5fbde_orig.png" alt="Before">
  <div class="img-overlay">
    <img src="https://vinsova.weebly.com/uploads/7/2/5/9/72597425/f289c2a9-c4e0-4c4a-817c-8fe9c8446813_orig.png" alt="After">
  </div>
  <div class="slider"></div>
</div>

</body>
</html>
