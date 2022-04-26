// Xu ly loader:
function loader() {
    document.querySelector(".loader-container").classList.add("fade-out");
}

// Xu ly khi click vao menu-bars button thi hien thi menu:
const menuBarsBtn = document.querySelector(".menu-bars");
const navList = document.querySelector(".nav-list");
const iconBars = menuBarsBtn.querySelector(".fa-bars");

menuBarsBtn.onclick = function (event) {
    event.preventDefault();
    navList.classList.toggle("nav-show");
    menuBarsBtn.classList.toggle("active");
    iconBars.classList.toggle("fa-times");
};

// Xu ly khi click vao tung nav-link thi nav-link do se active:
const navLinks = document.querySelectorAll(".nav-link");
const lengthOfNavLinks = navLinks.length;

for (let i = 0; i < lengthOfNavLinks; i++) {
    navLinks[i].onclick = function (event) {
        for (let i = 0; i < lengthOfNavLinks; i++) {
            navLinks[i].classList.remove("active");
        }
        this.classList.add("active");
        navList.classList.remove("nav-show");
        iconBars.classList.remove("fa-times");
        menuBarsBtn.classList.toggle("active");
    };
}

// Xu ly hieu ung khi scroll:
const nav = document.querySelector(".nav");
const heightOfNav = nav.offsetHeight;
const section = document.querySelectorAll(".section");

window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    // Xu ly khi scroll xuong mot khoang thi nav chuyen sang fixed:
    if (document.body.scrollTop > heightOfNav || document.documentElement.scrollTop > heightOfNav) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }

    // Show scroll-top:
    const scrollToTop = document.querySelector(".scroll-top");
    if (document.body.scrollTop || document.documentElement.scrollTop >= 1128) {
        scrollToTop.classList.add("show");
    } else {
        scrollToTop.classList.remove("show");
    }

    // Xu ly khi scroll den section nao thi section do chuyen sang active:
    iconBars.classList.remove("fa-times");
    navList.classList.remove("nav-show");
    menuBarsBtn.classList.remove("active");

    section.forEach((sec) => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document.querySelector(".nav-list .nav-item [href*= " + id + " ]").classList.add("active");
            });
        }
    });
}

// Xu ly slide header:
const slider1 = document.getElementById("glide1");
if (slider1) {
    new Glide(slider1, {
        type: "carousel",
        startAt: 0,
        hoverpause: true,
        perView: 2,
        animationDuration: 800,
        animationDelay: 800,
        animationTimingFunc: "ease-in-out",
        breakpoints: {
            1024: {
                perView: 2,
            },
            768: {
                perView: 2,
            },
            540: {
                perView: 1,
            },
        },
    }).mount();
}

// Xu ly slide menu:
const slider2 = document.getElementById("glide2");
if (slider2) {
    new Glide(slider2, {
        type: "carousel",
        startAt: 0,
        hoverpause: true,
        perView: 3,
        animationDuration: 800,
        animationDelay: 800,
        animationTimingFunc: "ease-in-out",
        breakpoints: {
            1024: {
                perView: 3,
            },
            912: {
                perView: 2,
            },
            540: {
                perView: 1,
            },
        },
    }).mount();
}

// Xu ly today's menu:
const listItem = document.querySelector(".list");
const items = document.querySelectorAll(".gallery .box");

window.onload = () => {
	setInterval(loader, 1500);
    listItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("btn")) {
            listItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-food-type");
            items.forEach((box) => {
                let filterBox = box.getAttribute("data-food-type");
                if (filterName == filterBox || filterName == "all") {
                    box.classList.remove("hide");
                    box.classList.add("show");
                } else {
                    box.classList.add("hide");
                    box.classList.remove("show");
                }
            });
        }
    };
};

// Xu ly Deal:
let countDate = new Date("july 1, 2022 00:00:00").getTime();

function CountDown() {
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);

    d = addZeroBefore(d);
    h = addZeroBefore(h);
    m = addZeroBefore(m);
    s = addZeroBefore(s);

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}

function addZeroBefore(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}

setInterval(function () {
    CountDown();
}, 1000);

// Xu ly Review:
const slider3 = document.getElementById("glide3");
if (slider3) {
    new Glide(slider3, {
        type: "carousel",
        startAt: 0,
        hoverpause: true,
        perView: 3,
        animationDuration: 800,
        animationDelay: 800,
        animationTimingFunc: "ease-in-out",
        breakpoints: {
            1024: {
                perView: 3,
            },
            912: {
                perView: 2,
            },
            540: {
                perView: 1,
            },
        },
    }).mount();
}

// Xu ly Blogs:
const ulTag = document.querySelector(".pagination ul");
let totalPages = 20;
function element(totalPages, page) {
    let liTag = "";
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;

    if (page > 1) {
        liTag += `<li class="btn3 prev" onclick="element(totalPages, ${
            page - 1
        });"><span> <i class="fas fa-angle-left"></i> Prev </span></li>`;
    }

    if (page > 2) {
        liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
        if (page > 3) {
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

    if (page == totalPages) {
        beforePages = beforePages - 2;
    } else if (page == totalPages - 1) {
        beforePages = beforePages - 1;
    }

    if (page == 1) {
        afterPages = afterPages + 2;
    } else if (page == 2) {
        afterPages = afterPages + 1;
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if (pageLength > totalPages) {
            continue;
        }

        if (pageLength == 0) {
            pageLength = pageLength + 1;
        }

        if (page == pageLength) {
            activeLi = "active";
        } else {
            activeLi = "";
        }

        liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength});"><span>${pageLength}</span></li>`;
    }

    if (page < totalPages - 1) {
        if (page < totalPages - 2) {
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="numb" onclick="element(totalPages, ${totalPages});"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) {
        liTag += `<li class="btn3 next" onclick="element(totalPages, ${page + 1});">
                
                <span>Next <i class="fas fa-angle-right"></i></span></li>`;
    }

    ulTag.innerHTML = liTag;
}
element(totalPages, 5);





