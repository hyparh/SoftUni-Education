function solve() {
  let text = document.getElementById("text").value.split(" ");
  let type = document.getElementById("naming-convention").value;
  let result = "";

  if (type == "Camel Case") {
      result += text[0].toLowerCase();
      
      for (let i = 1; i < text.length; i++) {
          result += lowerCase(text[i]);
      }
  } else if (type == "Pascal Case") {

      for (let i = 0; i < text.length; i++) {
          result += lowerCase(text[i]);
      }
  } else {
    
      result = "Error!";
  }

  function lowerCase(str){
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }

  document.getElementById("result").textContent = result;
}