    // Toggle the side navigation
    $("#sidebarToggle").on('click', function(e) {
        e.preventDefault();
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(document).ready(function() {
        $('#example').DataTable();
    } );
    