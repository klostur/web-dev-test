const nav = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if ( scrollPosition > 10 ) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})

function filterFeatures() {
    let select = document.getElementById("filter");

    let selectedCategory = select.value;
    // If a default "Select category" option is selected, the value become "none" (facepalm)
    //console.log(selectedCategory.value);
    let featureItems = document.getElementsByClassName("features__item");

    for (let i = 0; i < featureItems.length; i++) {

      let featureCategory = featureItems[i].getAttribute("data-category");

      if (selectedCategory === "none"  || selectedCategory === featureCategory) {
        featureItems[i].style.display = "flex";
      } else {
        featureItems[i].style.display = "none";
      }
    }
  }