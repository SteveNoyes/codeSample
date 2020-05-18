let wrapper = document.getElementById('wrapper');
let heading = document.getElementById('heading');
let subHeading = document.getElementById('subHeading');
let heroWrap = document.getElementById('hero-wrap');
let buttonGroup = document.getElementById('buttonGroup');
let button0 = document.getElementById('button0');
let firstResponse = document.getElementById('firstResponse');
let button1 = document.getElementById('button1');
let secondResponse = document.getElementById('secondResponse');
let rehead = document.getElementById('rehead');
let button2 = document.getElementById('button2');
let thirdResponse = document.getElementById('thirdResponse');
let newBody = document.getElementById('newBody');
let learnMore = document.getElementById('final');
let js0 = document.getElementById('js0');
let js1 = document.getElementById('js1');
let js2 = document.getElementById('js2');
let js3 = document.getElementById('js3');
let js4 = document.getElementById('js4');
let js5 = document.getElementById('js5');
let js6 = document.getElementById('js6');
let js7 = document.getElementById('js7');
let js8 = document.getElementById('js8');
let aside = document.getElementById('aside');
let aside0 = document.getElementById('aside0');
let aside1 = document.getElementById('aside1');
let aside2 = document.getElementById('aside2');
let aside3 = document.getElementById('aside3');
let aside4 = document.getElementById('aside4');
let aside5 = document.getElementById('aside5');
let aside6 = document.getElementById('aside6');
let aside7 = document.getElementById('aside7');


heading.style.textAlign = "center";
buttonGroup.style.textAlign = "center";
buttonGroup.style.marginTop = "40px";
learnMore.style.display = "none";



button0.addEventListener('click', () => {
  firstResponse.textContent = "I am learning to use javascript to change a webpage with event interactions.";
  heading.style.display = "none";
  subHeading.style.display = "none";
  heroWrap.style.backgroundImage = "url(ubuntu.jpg)";
  heroWrap.style.backgroundSize = "70% 300px";
  heroWrap.style.backgroundColor = "white";
  button0.style.display = "none";
});



button1.addEventListener('click', () => {
  heroWrap.style.display = "none";
  button1.style.display = "none";
  firstResponse.style.display = "none";
  secondResponse.textContent = "I am trying to build a small app that walks a user through my code as they scroll. I am building it for my resume so I don't have to use Github (It's ugly).";
  rehead.innerHTML = "<img src='uglyGitHub.png' width='100%' height='90%'>";

  rehead.style.marginTop = "30px";
  
  button0.style.display = "none";
  subHeading.style.display = "none";
});

button2.addEventListener('click', () => {
  wrapper.style.display = 'none';
  thirdResponse.textContent = "Here's what I mean."
  thirdResponse.style.color = "white";
  newBody.style.backgroundColor = "black";
  js0.style.color = "white";
  js1.style.color = "white";
  js2.style.color = "white";
  js3.style.color = "white";
  js4.style.color = "white";
  js5.style.color = "white";
  js6.style.color = "white";
  js7.style.color = "white";
  js8.style.color = "white";
  js0.textContent = "01  let button0 = document.getElementById('button0')"
  js1.textContent = "02 button0.addEventListener('click', () => {";
  js2.textContent = "03  firstResponse.textContent = 'I am learning to use javascript to change a webpage with event interactions.';";
  js3.textContent = "04  heading.style.display = 'none';";
  js4.textContent = "05  subHeading.style.display = 'none';";
  js5.textContent = "06  heroWrap.style.backgroundImage = 'url(img/ubuntu.jpg);";
  js6.textContent = "07  heroWrap.style.backgroundSize = '70% 300px';";
  js7.textContent = "08  heroWrap.style.backgroundColor = 'white';";
  js8.textContent = "09  button0.style.display = 'none';";
  learnMore.style.display = "block";
  learnMore.style.marginLeft = "auto";
  learnMore.style.marginRight = "auto";
});

learnMore.addEventListener('click', () => {
  aside.style.backgroundColor = "lightblue";
  aside0.style.backgroundColor = "lightblue";
  aside1.style.backgroundColor = "lightblue";
  aside2.style.backgroundColor = "lightblue";
  aside3.style.backgroundColor = "lightblue";
  aside4.style.backgroundColor = "lightblue";
  aside5.style.backgroundColor = "lightblue";
  aside6.style.backgroundColor = "lightblue";
  aside7.style.backgroundColor = "lightblue";
  aside.style.color = "black";
  aside0.style.color = "black";
  aside1.style.color = "black";
  aside2.style.color = "black";
  aside3.style.color = "black";
  aside4.style.color = "black";
  aside5.style.color = "black";
  aside6.style.color = "black";
  aside7.style.color = "black";
  aside.textContent = "Line 01 begins by declaring the button0 variable and assigning the HTML document ID button0 to it.";
  aside0.textContent = "Line 02 uses the button0 variable to listen for a mouse click on the first button";
  aside1.textContent = "Line 03 adds text to the page with the variable firstResponse";
  aside2.textContent = "Line 04 takes away the heading 'Hey Jillian and Lincoln!'";
  aside3.textContent = "Line 05 takes away the subHeading";
  aside4.textContent = "Line 06 changes the url address inside the heroWrap HTML element.";
  aside5.textContent = "Line 07 sets the size of the image.";
  aside6.textContent = "Line 08 changes the background color to white.";
  aside7.textContent = "Line 09 hides the button that you just pressed.";
});

