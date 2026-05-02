<!DOCTYPE html>
<html>
<head>
  <title>Aesthetic Room</title>
  <style>
    body {
      margin: 0;
      font-family: "Arial";
      background: linear-gradient(to bottom, #ffd6e0, #fff);
      text-align: center;
    }

    h1 {
      margin: 10px;
    }

    #room {
      width: 90vw;
      height: 70vh;
      margin: auto;
      background: #fffafc;
      border: 3px solid #ffc0cb;
      position: relative;
      overflow: hidden;
    }

    .item {
      width: 60px;
      height: 60px;
      position: absolute;
      cursor: grab;
    }

    #menu {
      margin-top: 10px;
    }

    button {
      padding: 10px;
      margin: 5px;
      border: none;
      border-radius: 10px;
      background: #ffc0cb;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <h1>🌸 Decorate Your Aesthetic Room 🌸</h1>

  <div id="room"></div>

  <div id="menu">
    <button onclick="addItem('🪴')">Plant</button>
    <button onclick="addItem('🕯️')">Candle</button>
    <button onclick="addItem('🧸')">Teddy</button>
    <button onclick="addItem('📚')">Books</button>
    <button onclick="changeColor()">Change Wall Color</button>
  </div>

  <script>
    const room = document.getElementById("room");

    function addItem(emoji) {
      const item = document.createElement("div");
      item.className = "item";
      item.innerText = emoji;

      item.style.left = Math.random() * 80 + "%";
      item.style.top = Math.random() * 60 + "%";

      makeDraggable(item);
      room.appendChild(item);
    }

    function changeColor() {
      const colors = ["#fffafc", "#e0f7fa", "#f3e5f5", "#fff3e0"];
      room.style.background = colors[Math.floor(Math.random() * colors.length)];
    }

    function makeDraggable(el) {
      let offsetX, offsetY;

      el.onmousedown = function(e) {
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;

        document.onmousemove = function(e) {
          el.style.left = (e.clientX - offsetX) + "px";
          el.style.top = (e.clientY - offsetY) + "px";
        };

        document.onmouseup = function() {
          document.onmousemove = null;
        };
      };
    }
  </script>
</body>
</html>
