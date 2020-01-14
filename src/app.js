$(document).ready(function () {
    $("#grid").kendoGrid({
        columns: [
            {
                selectable: true, 
                width: "60px"
            },
            {
                field: "name",
                title: "Contact Name" 
            },
            {
                field: "phone",
                title: "Phone Number"
            },
            {
                field: "email",
                title: "E-mail"
            }
        ],
        pageable: {
            pageSizes: [10, 25, 100],
        },
        persistSelection: true,
        scrollable:false,
        sortable: true,
    });
 });