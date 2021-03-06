//Designer Generator v 7.2.0 - SPR 2020-24 4/12/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.mostrarproductos = designerEvents.api.mostrarproductos || designer.dsgEvents();

function VC_MOSTRARPOC_134592(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_MOSTRARPOC_134592_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_MOSTRARPOC_134592_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "FCTRC",
            subModuleId: "FRMLR",
            taskId: "T_FCTRCVYEYWCJM_592",
            taskVersion: "1.0.0",
            viewContainerId: "VC_MOSTRARPOC_134592",
            hasCloseModalEvent: true,
            serverEvents: true
        },
            "${contextPath}/resources/FCTRC/FRMLR/T_FCTRCVYEYWCJM_592",
        designerEvents.api.mostrarproductos,
        $scope.rowData);
        $scope.kendo = kendo;
        //Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
        $scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
        if (preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL)) {
            $scope.currencySymbol = preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL);
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT)) {
            $scope.dateFormat = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT);
        } else {
            $scope.dateFormat = 'yyyy/MM/dd';
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER)) {
            $scope.dateFormatPlaceholder = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER);
        } else {
            $scope.dateFormatPlaceholder = $scope.dateFormat;
        }
        $scope.vc.routeProvider = cobisMainModule.routeProvider;
        if (!$scope.vc.loaded) {
            var page = {
                hasTemporaryDataSupport: false,
                hasInitDataSupport: false,
                hasChangeInitDataSupport: false,
                hasSearchRenderEvent: false,
                ejecTemporaryData: false,
                ejecInitData: false,
                ejecChangeInitData: false,
                ejecSearchRenderEvent: false,
                hasTemporaryData: false,
                hasInitData: false,
                hasChangeInitData: false,
                hasCRUDSupport: false,
                vcName: 'VC_MOSTRARPOC_134592'
            };
            if (typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined') {
                $scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
                $scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
            } else {
                //CobisPattern no definido en framework de Designer como constante. Actualizar Framework
                $scope.vc.cobisPattern = 0;
                $scope.vc.isConsolidateView = false;
            }
            if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
                $scope.vc.pk = $scope.queryParameters.pk;
                $scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
            } else {
                $scope.vc.pk = $location.search().pk;
                $scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
            }
            $scope.vc.args.pk = $scope.vc.pk;
            $scope.vc.args.mode = $scope.vc.mode;
            if (cobis.userContext.getValue(cobis.constant.USER_NAME)) {
                $scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
            } else {
                $scope.vc.args.user = "UserOutContainer";
            }
            $scope.vc.customDialogParameters = $scope.customDialogParameters;
            $scope.vc.args.channel = $location.search().channel;
            $scope.vc.metadata = {
                taskPk: {
                    moduleId: 'FCTRC',
                    subModuleId: 'FRMLR',
                    taskId: 'T_FCTRCVYEYWCJM_592',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    Producto: "Producto"
                },
                entities: {
                    Producto: {
                        moneda: 'AT34_MONEDAFD429',
                        nombre: 'AT68_NOMBREUC429',
                        precio: 'AT76_PRECIOXA429',
                        codigo: 'AT82_CODIGOWK429',
                        _pks: [],
                        _entityId: 'EN_PRODUCTOO_429',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            $scope.vc.queryProperties.Q_PRODTUUT_UU85 = {
                autoCrud: false
            };
            $scope.vc.getRequestQuery_Q_PRODTUUT_UU85 = function() {
                var parametersAux = {};
                if ($.isEmptyObject($scope.vc.queries.Q_PRODTUUT_UU85_filters)) {
                    parametersAux = {};
                } else {
                    var filters = $scope.vc.queries.Q_PRODTUUT_UU85_filters;
                    parametersAux = {};
                }
                return {
                    mainEntityPk: {
                        entityId: 'EN_PRODUCTOO_429',
                        version: '1.0.0'
                    },
                    queryPk: {
                        queryId: 'Q_PRODTUUT_UU85',
                        version: '1.0.0'
                    },
                    parameters: parametersAux,
                    filters: {},
                    updateParameters: function() {}
                }
            };
            $scope.vc.queries.Q_PRODTUUT_UU85_filters = {};
            var defaultValues = {
                Producto: {}
            };
            $scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist) {
                var channel = $scope.vc.args.channel;
                for (var en in defaultValues) {
                    if (defaultValues.hasOwnProperty(en) && en === entityName) {
                        for (var att in defaultValues[en]) {
                            if (defaultValues[en].hasOwnProperty(att) && att === attributeName) {
                                for (var ch in defaultValues[en][att]) {
                                    if (defaultValues[en][att].hasOwnProperty(ch) && ch === channel) {
                                        return defaultValues[en][att][ch];
                                    }
                                }
                            }
                        }
                    }
                }
                if (typeof valueIfNotExist !== "undefined") {
                    return valueIfNotExist;
                } else {
                    return null;
                }
            };
            $scope.vc.temporarySave = function() {
                var modelo = $scope.vc.cleanData($scope.vc.model);
                var data = {
                    model: modelo,
                    trackers: $scope.vc.trackers,
                    temporaryStorePK: $scope.vc.metadata.taskPk
                };
                $scope.vc.execute("temporarySave", VC_MOSTRARPOC_134592, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_MOSTRARPOC_134592, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_MOSTRARPOC_134592, data, function() {});
                            $scope.vc.crud.addTrackers($scope.vc.model);
                        }
                        page.hasTemporaryData = result;
                        page.ejecTemporaryData = response.success;
                        return page;
                    });
                } else {
                    page.ejecTemporaryData = false;
                    page.hasTemporaryData = false;
                    return page;
                }
            };
            $scope.vc.viewState.keyDown = function(e) {
                dsgnrUtils.container.validateOnEnter(e, $scope.vc);
            };
            $scope.vc.viewState.VC_MOSTRARPOC_134592 = {
                style: []
            };
            //ViewState - Group: Group1327
            $scope.vc.createViewState({
                id: "G_MOSTRARROS_357570",
                hasId: true,
                componentStyle: [],
                label: 'Group1327',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.types.Producto = kendo.data.Model.define({
                id: "dsgnrId",
                fields: {
                    dsgnrId: {
                        type: "string"
                    },
                    trackId: {
                        type: "string"
                    },
                    codigo: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Producto", "codigo", '')
                    },
                    nombre: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Producto", "nombre", '')
                    },
                    precio: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Producto", "precio", 0)
                    },
                    moneda: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Producto", "moneda", '')
                    }
                }
            });
            $scope.vc.model.Producto = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var promise = false;
                        var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
                        if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                            var queryId = 'Q_PRODTUUT_UU85';
                            var queryRequest = $scope.vc.getRequestQuery_Q_PRODTUUT_UU85();
                            if (queryId && queryRequest) {
                                var queryLoaded = queryRequest.loaded;
                                if (angular.isUndefined(queryLoaded) || isRefresh === true) {
                                    queryRequest.loaded = true;
                                    queryRequest.updateParameters();
                                    promise = true;
                                    $scope.vc.executeQuery(
                                        'QV_QI85_UBK50',
                                    queryRequest,
                                    queryRequest.mainEntityPk.entityId,
                                    true,

                                    function(response) {
                                        if (response.success) {
                                            var result = response.data['RESULT' + queryId];
                                            if (angular.isUndefined(result)) {
                                                result = [];
                                            }
                                            if (angular.isDefined(result) && angular.isArray(result)) {
                                                options.success(result);
                                            } else {
                                                options.success([]);
                                            }
                                        } else {
                                            options.error([]);
                                        }
                                    }, (function() {
                                        var queryOptions = options.data;
                                        var queryView = {
                                            'allowPaging': false,
                                            'pageSize': 0
                                        };

                                        function config(queryOptions, queryView) {
                                            var result = undefined;
                                            if (queryView.allowPaging === true) {
                                                result = {};
                                                if (angular.isDefined(queryOptions.appendRecords) && queryOptions.appendRecords === true) {
                                                    result.appendRecords = true;
                                                }
                                                result.pageSize = queryView.pageSize;
                                            }
                                            return result;
                                        }
                                        return config(queryOptions, queryView);
                                    }()));
                                }
                            }
                        }
                        if (promise === false) {
                            options.error({
                                xhr: {}
                            });
                        }
                    },
                    create: function(options) {
                        var model = options.data;
                        model.dsgnrId = designer.utils.uuid();
                        options.success(model);
                    },
                    update: function(options) {
                        var model = options.data;
                        options.success(model);
                    },
                    destroy: function(options) {
                        var model = options.data;
                        //this block of code only appears if the grid has set a RowDeletingEvent
                        var args = {
                            rowData: model,
                            nameEntityGrid: 'Producto',
                            cancel: false
                        }
                        $scope.vc.gridRowAction('QV_QI85_UBK50', $scope.vc.designerEventsConstants.GridRowDeleting, args, function() {
                            if (!args.cancel) {
                                options.success(args.rowData);
                            } else {
                                options.error(new Error('DeletingError'));
                            }
                        });
                        // end block
                    }
                },
                schema: {
                    model: $scope.vc.types.Producto
                },
                aggregate: [],
                error: function(e) {
                    if (e.xhr.message && e.xhr.message === 'DeletingError') {
                        $("#QV_QI85_UBK50").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_PRODTUUT_UU85 = $scope.vc.model.Producto;
            $scope.vc.trackers.Producto = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.Producto);
            $scope.vc.model.Producto.bind('change', function(e) {
                $scope.vc.trackers.Producto.track(e);
            });
            $scope.vc.grids.QV_QI85_UBK50 = {};
            $scope.vc.grids.QV_QI85_UBK50.queryId = 'Q_PRODTUUT_UU85';
            $scope.vc.viewState.QV_QI85_UBK50 = {
                style: []
            };
            $scope.vc.viewState.QV_QI85_UBK50.column = {};
            $scope.vc.grids.QV_QI85_UBK50.editable = {
                mode: 'inline',
                confirmation: false
            };
            $scope.vc.grids.QV_QI85_UBK50.events = {
                customCreate: function(e, entity) {
                    var dialogParameters = {
                        nameEntityGrid: entity,
                        rowData: new $scope.vc.types.Producto(),
                        rowIndex: -1,
                        isNew: true,
                        hasBeforeOpenDialogEvent: false,
                        hasAfterCloseDialogEvent: false,
                        isModal: true,
                        moduleId: "FCTRC",
                        subModuleId: "FRMLR",
                        taskId: "T_FCTRCSDYLNTBO_817",
                        taskVersion: "1.0.0",
                        viewContainerId: 'VC_PRODUCTOSS_953817',
                        title: 'FCTRC.LBL_FCTRC_GUARDARMR_83234',
                        size: 'md'
                    };
                    $scope.vc.beforeOpenGridDialog("QV_QI85_UBK50", dialogParameters);
                },
                customEdit: function(e, entity, grid) {
                    var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
                    var rowIndex = grid.dataSource.indexOf(dataItem);
                    var row = grid.tbody.find(">tr:not(.k-grouping-row)").eq(rowIndex);
                    var dialogParameters = {
                        nameEntityGrid: entity,
                        rowData: dataItem,
                        rowIndex: grid.dataSource.indexOf(dataItem),
                        isNew: false,
                        hasBeforeOpenDialogEvent: false,
                        hasAfterCloseDialogEvent: false,
                        isModal: true,
                        moduleId: "FCTRC",
                        subModuleId: "FRMLR",
                        taskId: "T_FCTRCSDYLNTBO_817",
                        taskVersion: "1.0.0",
                        viewContainerId: 'VC_PRODUCTOSS_953817',
                        title: 'FCTRC.LBL_FCTRC_GUARDARMR_83234',
                        size: 'md'
                    };
                    $scope.vc.beforeOpenGridDialog("QV_QI85_UBK50", dialogParameters);
                },
                customRowClick: function(e, controlId, entity, idGrid, commandName) {
                    var grid = $scope.vc.getElementGrid(idGrid);
                    var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
                    var args = {
                        rowData: dataItem,
                        rowIndex: grid.dataSource.indexOf(dataItem),
                        nameEntityGrid: entity,
                        refreshData: false,
                        stopPropagation: false,
                        commandName: commandName
                    };
                    $scope.vc.executeGridRowCommand(controlId, args);
                    if (args.refreshData) {
                        grid.refresh();
                    }
                    if (args.stopPropagation) {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }
                },
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    $scope.vc.gridDataBound("QV_QI85_UBK50", false, grid);
                    $scope.vc.hideShowColumns("QV_QI85_UBK50", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_QI85_UBK50.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_QI85_UBK50.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_QI85_UBK50.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_QI85_UBK50 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_QI85_UBK50 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_QI85_UBK50.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_QI85_UBK50.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_QI85_UBK50.column.codigo = {
                title: 'codigo',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXOTC_698570',
                element: []
            };
            $scope.vc.viewState.QV_QI85_UBK50.column.nombre = {
                title: 'nombre',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXAAI_143570',
                element: []
            };
            $scope.vc.viewState.QV_QI85_UBK50.column.precio = {
                title: 'precio',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "n",
                decimals: kendo.cultures.current.numberFormat.decimals,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXHRH_524570',
                element: []
            };
            $scope.vc.viewState.QV_QI85_UBK50.column.moneda = {
                title: 'moneda',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_COMBOBOXGTBGTAI_260570',
                template: "",
                element: []
            };
            $scope.vc.catalogs.VA_COMBOBOXGTBGTAI_260570 = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        options.success([{
                            code: 'MX',
                            value: 'Pesos Mexicanos'
                        }, {
                            code: 'US',
                            value: 'Dolares'
                        }]);
                        $scope.vc.setGridComboBoxDefaultValue("QV_QI85_UBK50", "VA_COMBOBOXGTBGTAI_260570");
                    }
                },
                serverFiltering: true,
                schema: {
                    model: {
                        id: "code"
                    }
                }
            });
            $scope.vc.catalogs.VA_COMBOBOXGTBGTAI_260570.read(); //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_QI85_UBK50.columns.push({
                    field: 'codigo',
                    title: '{{vc.viewState.QV_QI85_UBK50.column.codigo.title|translate:vc.viewState.QV_QI85_UBK50.column.codigo.titleArgs}}',
                    width: $scope.vc.viewState.QV_QI85_UBK50.column.codigo.width,
                    format: $scope.vc.viewState.QV_QI85_UBK50.column.codigo.format,
                    template: "<span ng-class='vc.viewState.QV_QI85_UBK50.column.codigo.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.codigo, \"QV_QI85_UBK50\", \"codigo\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_QI85_UBK50.column.codigo.style",
                        "title": "{{vc.viewState.QV_QI85_UBK50.column.codigo.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_QI85_UBK50.column.codigo.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_QI85_UBK50.columns.push({
                    field: 'nombre',
                    title: '{{vc.viewState.QV_QI85_UBK50.column.nombre.title|translate:vc.viewState.QV_QI85_UBK50.column.nombre.titleArgs}}',
                    width: $scope.vc.viewState.QV_QI85_UBK50.column.nombre.width,
                    format: $scope.vc.viewState.QV_QI85_UBK50.column.nombre.format,
                    template: "<span ng-class='vc.viewState.QV_QI85_UBK50.column.nombre.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nombre, \"QV_QI85_UBK50\", \"nombre\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_QI85_UBK50.column.nombre.style",
                        "title": "{{vc.viewState.QV_QI85_UBK50.column.nombre.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_QI85_UBK50.column.nombre.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_QI85_UBK50.columns.push({
                    field: 'precio',
                    title: '{{vc.viewState.QV_QI85_UBK50.column.precio.title|translate:vc.viewState.QV_QI85_UBK50.column.precio.titleArgs}}',
                    width: $scope.vc.viewState.QV_QI85_UBK50.column.precio.width,
                    format: $scope.vc.viewState.QV_QI85_UBK50.column.precio.format,
                    template: "<span ng-class='vc.viewState.QV_QI85_UBK50.column.precio.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.precio, \"QV_QI85_UBK50\", \"precio\"):kendo.toString(#=precio#, vc.viewState.QV_QI85_UBK50.column.precio.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_QI85_UBK50.column.precio.style",
                        "title": "{{vc.viewState.QV_QI85_UBK50.column.precio.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_QI85_UBK50.column.precio.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_QI85_UBK50.columns.push({
                    field: 'moneda',
                    title: '{{vc.viewState.QV_QI85_UBK50.column.moneda.title|translate:vc.viewState.QV_QI85_UBK50.column.moneda.titleArgs}}',
                    width: $scope.vc.viewState.QV_QI85_UBK50.column.moneda.width,
                    format: $scope.vc.viewState.QV_QI85_UBK50.column.moneda.format,
                    template: "<span ng-class='vc.viewState.QV_QI85_UBK50.column.moneda.element[dataItem.dsgnrId].style' ng-bind='vc.catalogs.VA_COMBOBOXGTBGTAI_260570.get(dataItem.moneda).value'> </span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_QI85_UBK50.column.moneda.style",
                        "title": "{{vc.viewState.QV_QI85_UBK50.column.moneda.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_QI85_UBK50.column.moneda.hidden
                });
            }
            $scope.vc.viewState.QV_QI85_UBK50.column.edit = {
                element: []
            };
            $scope.vc.viewState.QV_QI85_UBK50.column["delete"] = {
                element: []
            };
            $scope.vc.viewState.QV_QI85_UBK50.column.cmdEdition = {};
            $scope.vc.viewState.QV_QI85_UBK50.column.cmdEdition.hidden = (!designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)) ? false : true;
            $scope.vc.grids.QV_QI85_UBK50.columns.push({
                field: 'cmdEdition',
                title: ' ',
                command: [{
                    name: "customEdit",
                    text: "{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}",
                    entity: "Producto",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", '': !vc.viewState.G_MOSTRARROS_357570.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"customEdit\", " + "vc.viewState.QV_QI85_UBK50.column.edit.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_QI85_UBK50.column.edit.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}\" " + "ng-disabled = (vc.viewState.G_MOSTRARROS_357570.disabled==true?true:false) " + "data-ng-click = 'vc.grids.QV_QI85_UBK50.events.customEdit($event, \"#:entity#\", grids.QV_QI85_UBK50)' " + "href='\\#'>" + "<span class='fa fa-pencil'></span>" + "</a>"
                }, {
                    name: "destroy",
                    text: "{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-delete': !vc.viewState.G_MOSTRARROS_357570.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"destroy\", " + "vc.viewState.QV_QI85_UBK50.column.delete.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_QI85_UBK50.column.delete.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}\" " + "ng-disabled = (vc.viewState.G_MOSTRARROS_357570.disabled==true?true:false) " + ">" + "<span class='fa fa-times'></span>" + "</a>"
                }],
                attributes: {
                    "class": "btn-toolbar"
                },
                hidden: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode) === true ? true : $scope.vc.viewState.QV_QI85_UBK50.column.cmdEdition.hidden,
                width: Number(sessionStorage.columnSize) || 100
            });
            $scope.vc.viewState.QV_QI85_UBK50.toolbar = {
                create: {
                    visible: !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)
                }
            }
            $scope.vc.grids.QV_QI85_UBK50.toolbar = [{
                "name": "create",
                "entity": "Producto",
                "text": "",
                "template": "<button id = 'QV_QI85_UBK50_CUSTOM_CREATE' class = 'btn btn-default cb-grid-button' " + "ng-if = 'vc.viewState.QV_QI85_UBK50.toolbar.create.visible' " + "ng-disabled = 'vc.viewState.G_MOSTRARROS_357570.disabled?true:false' " + "title = \"{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}\" " + "data-ng-click = 'vc.grids.QV_QI85_UBK50.events.customCreate($event, \"#:entity#\")'> " + "<span class = 'fa fa-plus'></span>{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}</button>"
            }];
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_FCTRCVYEYWCJM_592_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_FCTRCVYEYWCJM_592_CANCEL",
                componentStyle: [],
                label: 'Cancel',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            if ($scope.vc.parentVc) {
                $scope.vc.afterOpenGridDialog();
            }
        }
        $scope.isInvalid = function(form, field) {
            if (!field) {
                return false;
            }
            var submitted = $scope.vc.submitted[form.$name];
            return ((submitted || field.$dirty) && field.$invalid);
        };
        $scope._initPage_CRUDExecuteQueryEntities = function(page) {
            if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                if (page.hasTemporaryDataSupport && page.ejecTemporaryData && !page.hasTemporaryData) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else if (page.hasCRUDSupport) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else {
                    return page;
                }
            } else {
                return page;
            }
        };
        $scope._initPage_InitializeTrackers = function(page) {
            $scope.vc.addChangeEvents($scope);
            $scope.vc.crud.addTrackers($scope.vc.model);
            return page;
        };
        $scope._initPage_ChangeInitData = function(page) {
            return $scope.vc.changeInitData(page, $scope.vc);
        };
        $scope._initPage_ProcessRender = function(page) {
            if (page.hasSearchRenderEvent) {
                $scope.vc.render('VC_MOSTRARPOC_134592');
            }
            return page;
        };
        if ($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude) {
            //para ventanas modales se usa ng-include con onload
            $scope.runLifeCycle = function() {
                var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                if (threadLifeCycle) {
                    if (!$scope.isDesignerInclude) {
                        cobis.showMessageWindow.loading(true, "none");
                    }
                    $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                    cobis.showMessageWindow.loading(false);
                }
            };
        } else {
            //con ngView no funciona el $document.ready se cambia por $viewContentLoaded
            $scope.$on('$viewContentLoaded', function() {
                if ($scope.vc.loaded) {
                    //Si se esta regresando de otra pantalla
                    $scope.vc.addAfterInitDataFlags($scope);
                    $scope.vc.addChangeEvents($scope);
                    if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
                        $scope.vc.onCloseModalEvent();
                    }
                    if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
                        $scope.vc.afterCloseGridDialog();
                    }
                    cobis.showMessageWindow.loading(false);
                } else {
                    //Si es la primera vez que se ejecuta la pantalla
                    var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                    if (threadLifeCycle) {
                        $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                        cobis.showMessageWindow.loading(false);
                    }
                }
            });
        }
    }]);
}
if (typeof cobisMainModule === "undefined") {
    var cobisMainModule = cobis.createModule("VC_MOSTRARPOC_134592", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "FCTRC"]);
    cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",

    function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            asyncLoader: $script
        });
        $locationProvider.html5Mode(true);
        cobisMainModule.controllerProvider = $controllerProvider;
        cobisMainModule.compileProvider = $compileProvider;
        cobisMainModule.routeProvider = $routeProvider;
        cobisMainModule.filterProvider = $filterProvider;
        cobisMainModule.provide = $provide;
        var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
        $routeProvider.when("/VC_MOSTRARPOC_134592", {
            templateUrl: "VC_MOSTRARPOC_134592_FORM.html",
            controller: "VC_MOSTRARPOC_134592_CTRL",
            label: "MostrarProductos",
            resolve: {
                i18n: function($translatePartialLoader, $translate) {
                    cobis.showMessageWindow.customLoading(true);
                    $translatePartialLoader.addPart('DSGNR');
                    $translatePartialLoader.addPart('FCTRC');
                    return $translate.use(cobis.userContext.getValue(cobis.constant.CULTURE)).then(function() {
                        return $translate.refresh().then(function() {
                            cobis.showMessageWindow.customLoading(false);
                        });
                    });
                }
            }
        }).otherwise({
            redirectTo: function(routeParams, path, search) {
                return "/VC_MOSTRARPOC_134592?" + $.param(search);
            }
        });
        VC_MOSTRARPOC_134592(cobisMainModule);
    }]);
} else {
    VC_MOSTRARPOC_134592(cobisMainModule);
}