document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() { 
        let navTitle = document.querySelector(".site-title");
        if (navTitle) {
            navTitle.innerText = "Xiaoyan";  // 确保它能生效
            console.log("Title changed successfully!");
        } else {
            console.log("Element .site-title not found");
        }
    }, 500); // 500ms 延迟，确保元素加载完成
});
