function download() {
    let url = document.getElementById("urlInput").value.trim();

    if (url === "") {
        alert("رجاءً ضع الرابط أولاً");
        return;
    }

    // إعلان احتمالي 25%
    if (Math.random() <= 0.25) {
        window.open("https://example-ad.com", "_blank");
    }

    // تيك توك
    if (url.includes("tiktok.com")) {
        window.location.href =
            "https://ssstik.io/ar?url=" + encodeURIComponent(url);
        return;
    }

    // إنستقرام - المسار الصحيح للتنزيل في GetInSaver
    if (url.includes("instagram.com") || url.includes("instagr.am")) {
        window.location.href =
            "https://getinsaver.com/instagram-download/?url=" + encodeURIComponent(url);
        return;
    }

    alert("الرابط غير مدعوم حالياً");
}