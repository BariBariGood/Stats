let num = Math.floor(Math.random() * 2)

document.getElementById("sample").innerHTML = num;

 var a = document.createElement('a'); 
                  
var link = document.createTextNode("Click here for Google Form!");
  
a.appendChild(link); 


if (num == 0) {
  a.href = "https://www.geeksforgeeks.org";
} else {
  a.href = "https://www.youtube.com";
}


document.body.appendChild(a); 