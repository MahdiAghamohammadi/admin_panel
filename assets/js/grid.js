$(document).ready(function () {

    function removeAllClassSidebarToggle() {
        $('#sidebar-toggle-hide').removeClass('d-md-inline');
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-show').removeClass('d-inline');
        $('#sidebar-toggle-show').removeClass('d-md-none');
    }

    $('#sidebar-toggle-hide').click(function () {
        $('#sidebar').fadeOut(300);
        $('#main-body').animate({
            width: "100%"
        }, 300);
        setTimeout(function () {
            removeAllClassSidebarToggle();
            $('#sidebar-toggle-hide').addClass('d-none');
            $('#sidebar-toggle-show').removeClass('d-none');
        });
    });

    $('#sidebar-toggle-show').click(function () {
        $('#sidebar').fadeIn(300);
        setTimeout(function () {
            removeAllClassSidebarToggle();
            $('#sidebar-toggle-hide').removeClass('d-none');
            $('#sidebar-toggle-show').addClass('d-none');
        });
    });
});