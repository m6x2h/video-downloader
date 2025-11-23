function download() {
    let url = document.getElementById("urlInput").value.trim();

    if (url === "") {
        alert("رجاءً ضع الرابط أولاً");
        return;
    }

    // إعلان ثالث يظهر بنسبة 25%
    if (Math.random() <= 0.25) {
        window.open("https://example-ad.com", "_blank"); // ضع رابط الإعلان الحقيقي هنا
    }

    // تحويل للرابط حسب المنصة
    if (url.includes("tiktok.com")) {
        window.location.href = "https://ssstik.io/?url=" + encodeURIComponent(url);
    } else if (url.includes("instagram.com")) {
        window.location.href = "https://saveinsta.app/ar?url=" + encodeURIComponent(url);
    } else if (url.includes("snapchat.com")) {
        window.location.href = "https://snapinsta.app/en1/snapchat-downloader?url=" + encodeURIComponent(url);
    } else if (url.includes("facebook.com") || url.includes("fb.watch")) {
        window.location.href = "https://www.getfvid.com/downloader?url=" + encodeURIComponent(url);
    } else {
        alert("الرابط غير مدعوم");
    }
}