AOS.init();


const marquee = document.getElementById('my-marquee');
    setTimeout(() => {
        marquee.stop(); // Dừng chạy
        setTimeout(() => {
            marquee.start(); // Bắt đầu chạy lại
        }, 100); // Lặp lại sau 3 giây
    }, 100); // Dừng sau 3 giây