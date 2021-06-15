const parent = document.querySelector(".parent");
let bool = true;
window.addEventListener("scroll", () => {
    if (bool) {
        if (window.scrollY >= parent.offsetTop - 200) {
            counter();
            bool = false;
        }
    }
});

function counter() {
    const count1 = document.querySelector(".count1");
    const count2 = document.querySelector(".count2");
    const count3 = document.querySelector(".count3");
    const count4 = document.querySelector(".count4");

    //count1
    let i = 0;
    setInterval(() => {
        count1.innerHTML = i;
        if (i < count1.getAttribute("data-label")) {
            i++;
        }
    }, 50);

    //count2
    let j = 0;
    setInterval(() => {
        count2.innerHTML = j;
        if (j < count2.getAttribute("data-label")) {
            j++;
        }
    }, 40);

    //count3
    let k = 0;
    setInterval(() => {
        count3.innerHTML = k;
        if (k < count3.getAttribute("data-label")) {
            k++;
        }
    }, 15);

    //count4
    let z = 0;
    setInterval(() => {
        count4.innerHTML = z;
        if (z < count4.getAttribute("data-label")) {
            z++;
        }
    }, 6);
}