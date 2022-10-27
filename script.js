let num = Math.floor(Math.random() * 2)

// document.getElementById("sample").innerHTML = num;
console.log(num);

var a = document.createElement('a'); 
                  
var link = document.createTextNode("Click here for Google Form!");
  
a.appendChild(link); 


if (num == 0) {
  a.href = "https://docs.google.com/forms/d/e/1FAIpQLSdZZNjvs5tUVkYkFBBerWBV6fVo99aA15Xc_9M64xbEizw8jg/viewform?usp=sf_link";
} else {
  a.href = "https://docs.google.com/forms/d/e/1FAIpQLSeqpcA7XP5-GHKVIk7Zbgs4-GV4z2wlAeRvfYKCmsCIWjdiLA/viewform?usp=sf_link";
}


document.getElementById("random").appendChild(a); 