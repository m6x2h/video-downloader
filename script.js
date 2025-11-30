function download() {
    let url = document.getElementById("urlInput").value.trim();

    if (url === "") {
        alert("رجاءً ضع الرابط أولاً");
        return;
    }

    // تيك توك
    if (url.includes("tiktok.com")) {
        window.location.href =
            "https://ssstik.io/ar?url=" + encodeURIComponent(url);
        return;
    }

    // إنستجرام
    if (url.includes("instagram.com") || url.includes("instagr.am")) {
        window.location.href =
            "https://getinsaver.com/instagram-download/?url=" + encodeURIComponent(url);
        return;
    }

    // سناب شات
    if (url.includes("snapchat.com")) {
        window.location.href =
            "https://snapinsta.app/en1/snapchat-downloader?url=" + encodeURIComponent(url);
        return;
    }

    // فيسبوك
    if (url.includes("facebook.com") || url.includes("fb.watch")) {
        window.location.href =
            "https://www.getfvid.com/downloader?url=" + encodeURIComponent(url);
        return;
    }

    // يوتيوب
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
        window.location.href =
            "https://ytdownloader.xyz/download?url=" + encodeURIComponent(url);
        return;
    }

    alert("الرابط غير مدعوم حالياً");
}