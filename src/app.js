$(document).ready(function () {
    const dataSource = new kendo.data.DataSource({
            pageSize: 10,
            transport: {
                read:  {
                    url: "https://demos.telerik.com/kendo-ui/service/Products",
                    dataType: "jsonp"
                },
                update: {
                    url: "https://demos.telerik.com/kendo-ui/service/Products/Update",
                    dataType: "jsonp"
                },
                destroy: {
                    url: "https://demos.telerik.com/kendo-ui/service/Products/Destroy",
                    dataType: "jsonp"
                },
                create: {
                    url: "https://demos.telerik.com/kendo-ui/service/Products/Create",
                    dataType: "jsonp"
                },
                parameterMap: function (options, operation) {
                    if (operation !== "read" && options.models) {
                        return { models: kendo.stringify(options.models) };
                    }
                }
            },
            batch: true,
            schema: {
                model: {
                    id: "ProductID",
                    fields: {
                        ProductID: { editable: false, nullable: true },
                        ProductName: { validation: { required: true } },
                        UnitPrice: { type: "number", validation: { required: true, min: 1 } },
                        UnitsInStock: { type: "number", validation: { min: 0, required: true } }
                    }
                }
            }
    });

    const toolbar = kendo.template($("#custom-toolbar").html());

    $("#grid").kendoGrid({
        dataSource: dataSource,
        toolbar: toolbar,
        pageable: {
            buttonCount: 5,
            pageSizes: [10, 25, 100]
        },
        scrollable: false,
        persistSelection: true,
        columns: [
            { selectable: true, width: "50px" },
            { field:"ProductName", title: "Product Name" },
            { field: "UnitPrice", title:"Unit Price", format: "{0:c}"},
            { field: "UnitsInStock", title:"Units In Stock"},
        ],
        editable: "inline"
    });

    const grid = $("#grid").data("kendoGrid");

        $("#addItem").on("click", function() {
            grid.addRow();
        });

        $("#saveItem").on("click", function() {
            grid.saveRow();
        });
});