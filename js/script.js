window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("c").addEventListener("click", function () {
    
    var op = document.getElementById("op").value,
 
      n1 = document.getElementById("n1").value,
      n2 = document.getElementById("n2").value,
 
      // operacion = op == 1 ? Math.pow(n1, n2) : n1 * n2;

      operacion = op == 1 == n1 + n2;
      operacion = op == 2 == n1 - n2; 
      operacion = op == 3 == n1 * n2; 
      operacion = op == 4 == n1 / n2; 

 
      document.getElementById("r").innerHTML = operacion;
  
  });
});
