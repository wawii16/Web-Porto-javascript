$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/channels/',
    type: 'get',
    dataType: 'json',
    data: {
        'key': 'AIzaSyAZB35XiQs-8j6NUbeJzSpCyJJg2jB3oM0',
        'part': 'snippet,statistics',
        'id': 'UCmrhLdKQH_BMt4_yC1x7f8A'

    },
    success: function (result) {
        if (result.kind == "youtube#channelListResponse") {
            $('#info-yt').html(`<a href="https://www.youtube.com/@dwiwahyum.4192"><img class="rounded-image" src="` + result.items[0].snippet.thumbnails.medium.url + `" alt="">
            </a>
            <div class="text-info" id="info-yt">
            <h5>` + result.items[0].snippet.title + `</h5>
            <p>`+ result.items[0].statistics.subscriberCount + `</p>
            </div>

            `)


        }

    }
})



const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
    menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
    menuNav.classList.remove("menu-active");
});
// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
});
// ==== NAV-MENU ==== //
gsap.from(".menu .nav_menu_item", {
    opacity: 0,
    y: -10,
    delay: 1.4,
    duration: 0.5,
    stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
    opacity: 0,
    y: -10,
    delay: 1.4,
    duration: 0.5,
});
// ==== MAIN HEADING  ==== //
gsap.from(".main-heading", {
    opacity: 0,
    y: 20,
    delay: 2.4,
    duration: 1,
});
// ==== INFO TEXT ==== //
gsap.from(".info-text", {
    opacity: 0,
    y: 20,
    delay: 2.8,
    duration: 1,
});
// ==== CTA BUTTONS ==== //
gsap.from(".btn_wrapper", {
    opacity: 0,
    y: 20,
    delay: 2.8,
    duration: 1,
});
// ==== TEAM IMAGE ==== //
gsap.from(".team_img_wrapper img", {
    opacity: 0,
    y: 20,
    delay: 3,
    duration: 1,
});

