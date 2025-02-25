window.addEventListener("scroll", function () {
    let header = document.querySelector(".container_nav");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let target = document.querySelector(".ws15");

    let observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active"); // เพิ่มคลาสเมื่อเห็น
                }
            });
        },
        { threshold: 0.5 } // 50% ของ div ต้องอยู่บนหน้าจอถึงจะทำงาน
    );

    observer.observe(target);
});