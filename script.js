let num = Math.floor(Math.random() * 2)

// document.getElementById("sample").innerHTML = num;
console.log(num);

var a = document.createElement('a'); 
                  
var link = document.createTextNode("Click here for Google Form!");
  
a.appendChild(link); 


if (num == 0) {
  a.href = "https://forms.gle/Vem7nqxHd27bPwtp7";
} else {
  a.href = "https://forms.gle/jf4f4jCnK8jkEPsy5";
}


document.getElementById("random").appendChild(a); 