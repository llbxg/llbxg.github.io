document.querySelectorAll(".contents a").forEach(link => {
    const href = link.getAttribute("href");
    if (href.startsWith("/") || href.includes("kosh.dev") || href.includes("127.0.0.1") || href.startsWith("..") || href.startsWith("#") ) {
        link.outerHTML = `[${link.outerHTML}]`;
    } else {
        link.outerHTML = `{${link.outerHTML}}`;
    }
});
