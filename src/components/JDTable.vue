<template>
    <div>
        <!-- JD-TABLE REQUIRED - TEMPLATE -->
        <JDTable
            :option                 = "tableOptions"
            :loader                 = "tableLoader"
            :event-from-app         = "eventFromApp"
        />

        <!-- JD-TABLE REQUIRED - EXCEL EXPORT -->
        <iframe id="excelExportArea" style="display:none"></iframe>
    </div>
</template>

<script>
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import JDTable from 'vue-jd-table';

    export default
    {
        components:
        {
            JDTable
        },
        
        // JD-TABLE REQUIRED - OPTIONS/PROPS
        data ()
        {

            return {

                tableOptions :
                {
                    columns :
                    [
                        {
                            name          : 'businessName',
                            title         : 'Business Name',
                            width         : 30,
                            order         : 1,
                            type          : 'String',
                            sort          : true,
                            sortDirection : 'asc',
                            filterable    : true,
                            enabled       : true
                        },
                        {
                            name       : 'founderName',
                            title      : 'Founder Name',
                            width      : 35,
                            order      : 2,
                            type       : 'String',
                            filterable : true,
                            enabled    : true
                        },
                        
                    ],
                    columnSelect : true,
                    columnSort : true,
                    controls : true,
                    dataHeight : 500,
                    dataProvider : 0,
                    export : false,
                    filter : true,
                    footer : true,
                    forceMaximized : true,
                    forceSearchOpen : false,
                    frameWidth : 1250,
                    responsiveFrame: true,
                    headerHeight : 40,
                    highlight : true,
                    NAMEHERE : true,
                    contextMenu : true,
                    responsiveTable : true,
                    resize : false,
                    searchPlaceHolder : 'Buscar...'
                },
                eventFromAppTrigger : false,
                tableLoader         : false,
                eventFromApp        :  { 
                    name : 'sendData', 
                    data : [
                        // Row 1
                        {
                            businessName : 'Burger King',
                            founderName  : 'James McLamore'    	
                        },
                        // Row 2
                        {
                            businessName : 'Mc Donalds',
                            founderName  : 'Maurice McDonald'   
                        }
                        // Row 3
                        ,
                        {
                            businessName : 'Wendies',
                            founderName  : 'Dave Thomas'   
                        }
                        // etc.
                    ]

                }

            }

        }
    }
</script>

<style lang="scss">
    // JD-TABLE OPTIONAL - VARIABLE OVERRIDE

    // JD-TABLE REQUIRED - THEME
    @import "~vue-jd-table/dist/assets/jd-table.scss";
</style>