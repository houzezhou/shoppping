//import Es6Promise from 'es6-promise';
// Es6Promise.polyfill();

const sweetScroll = new SweetScroll();
$(document).on("click", ".js-back-to-top", function(e) {
    e.preventDefault(),
    e.stopPropagation(),
    sweetScroll.toTop(0)
});
$(document).on("click", ".icon-reorder", function(e) {
    e.preventDefault(),
    e.stopPropagation(),
    $('body').addClass('fix_body');
});