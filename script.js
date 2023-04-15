export function updateTime() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/time", true);
  xhr.onload = function () {
    document.getElementById("time").innerHTML = xhr.responseText;
  };
  xhr.send();
}
