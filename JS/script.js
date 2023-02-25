var hiddenItems = document.getElementsByClassName("hidden");
var index = 0;

function Previous() {
  hiddenItems[index].className = "hidden";
  index--;
  if (index < 0) {
    index = hiddenItems.length - 1;
  }
  hiddenItems[index].className = "hidden show";
}

function Next() {
  hiddenItems[index].className = "hidden";
  index++;
  if (index >= hiddenItems.length) {
    index = 0;
  }
  hiddenItems[index].className = "hidden show";
}