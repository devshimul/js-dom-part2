const heading = document.getElementsByTagName("h1");
const heading2 = document.getElementsByTagName("h2");
const liCollection = document.getElementsByTagName("li");
const p = document.getElementsByTagName("p");

const description = document.getElementsByClassName("description");

const paragraph = document.getElementById("paragraph");
const text = document.querySelector(".text");

// Let`s apply style the selected element
for (const title of heading) {
  title.style.backgroundColor = "#27474E";
  title.style.color = "#fff";
  title.style.padding = "16px";
  title.style.borderRadius = "8px";
}
for (const title2 of heading2) {
  title2.style.backgroundColor = "#7D387D";
  title2.style.color = "#fff";
  title2.style.padding = "16px";
}
for (const li of liCollection) {
  li.style.color = "#fff";
  li.style.backgroundColor = "#2292A4";
  li.style.marginBottom = "5px";
  li.style.padding = "14px";
  li.style.fontSize = "18px";
  li.style.borderRadius = "4px";
}
text.style.backgroundColor = "#BDBF09";
text.style.color = "#fff";
text.style.padding = "14px";
text.style.fontSize = "18px";

for (const text of p) {
  text.style.backgroundColor = "#BDBF09";
  text.style.color = "#fff";
  text.style.padding = "14px";
  text.style.fontSize = "18px";
}
