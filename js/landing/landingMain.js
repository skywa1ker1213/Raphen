const modals = document.getElementsByClassName('idMyModal');
const imgs = document.getElementsByClassName('toZoom');
const modalImgs = document.getElementsByClassName('modal-content');

for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function(index) {
    return function() {
      modals[index].style.display = "block";
      modalImgs[index].src = this.src;
    };
  }(i); // immediately invoke the function to capture the current value of i
}

const spans = document.getElementsByClassName("close");
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function(index) {
    return function() {
      modals[index].style.display = "none";
    };
  }(i);
}