$(function() {
    $("body>[data-role='panel']")
        .panel()
        .find('ul')
        .listview();
});