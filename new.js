document.addEventListener("DOMContentLoaded", function () {
  const para = document.querySelector(".e");

  function checkVisibility() {
    const rect = para.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      para.classList.add("show"); // يضيف الكلاس ويشغل الأنيميشن
      window.removeEventListener("scroll", checkVisibility); // يشيل المراقبة بعد التشغيل
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // باش يتحقق حتى إذا كان العنصر باين من الأول
});
