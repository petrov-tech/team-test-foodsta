(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();document.querySelectorAll("[data-carousel-button]").forEach((e=>{e.addEventListener("click",(()=>{const t="next"===e.dataset.carouselButton?1:-1,o=e.closest("[data-carousel]").querySelector("[data-slides]"),d=o.querySelector("[data-active]");let l=[...o.children].indexOf(d)+t;l<0&&(l=o.children.length-1),l>=o.children.length&&(l=0),o.children[l].dataset.active=!0,delete d.dataset.active}))})),(()=>{const e={openModalBtn:document.querySelector("[data-burger-open]"),closeModalBtn:document.querySelector("[data-burger-close]"),modal:document.querySelector("[data-burger]"),body:document.querySelector("body")};function t(){e.modal.classList.toggle("menu-is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.4847fdee.js.map
