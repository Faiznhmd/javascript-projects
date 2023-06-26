const header = document.getElementById("header");
const title = document.getElementById("text");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-texts");
setTimeout(getdata, 2500);
function getdata() {
  header.innerHTML =
    '<img src="./photo-1496181133206-80ce9b88a853.jpg" alt="" />';
  title.innerHTML = "lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "lorem ipsum dolor sit amet constructer animated animted elit dolore prefeiends";
  profile_img.innerHTML =
    '<img src="./Twitter-profile-picture-4-1024x1024.jpg" alt=""/>';
  name.innerHTML = "john doe";
  date.innerHTML = "oct 08,2020 ";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));

  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
