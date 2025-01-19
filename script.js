var tik = document.getElementById('tiktok');
var insta = document.getElementById('instagram')
var stylebgc = document.getElementById('buttonstyle');
var bgcblanc = document.getElementById('backgroundchange');
var btn2 = document.getElementById('buttonstyle2');
stylebgc.addEventListener('click', function(){
  bgcblanc.style = 'background-color: white;';
  instagram.style = 'color: white;';
  tiktok.style = 'color: white;';
});
btn2.addEventListener('click', function(){
  bgcblanc.style = 'background-color: black;';
  instagram.style = 'color: black;';
  tiktok.style = 'color: black;';
})
