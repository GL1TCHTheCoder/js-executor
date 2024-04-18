javascript:(function(){document.body.innerHTML += `<style>
    .f330j-28 {
      z-index: 99999;
      position: fixed;
      top: 10px;
      left: 10px;
      background-color: black;
      width: 25%;
      height: 50px;
      border: 1px solid black;
      border-radius: 10px;
      padding: 10px;
    }
    .f330j-28 p {
      font-family: Arial, monospace;
      color: white;
    }
  </style>

  <div class='f330j-28'>
    <span><p>js executor</p>
    <textarea placeholder='JavaScript code here.' style='width: 100px; height: 20px;' id='txt22f1'></textarea>
    <button onclick='executeCode();'>Execute code</button></span>
  </div>

  <script>
    function executeCode() {
      var code = document.getElementById('txt22f1').value;
      try {
        var result = eval(code);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  </script>`;
})();
