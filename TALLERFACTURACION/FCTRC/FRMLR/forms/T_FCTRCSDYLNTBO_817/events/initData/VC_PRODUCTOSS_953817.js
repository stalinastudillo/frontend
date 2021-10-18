
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: Productos
task.initData.VC_PRODUCTOSS_953817 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    if(entities.Producto.codigo != "" && entities.Producto.codigo != null){
        initDataEventArgs.commons.api.viewState.hide('VA_VABUTTONNWFGLOJ_960733');
        initDataEventArgs.commons.api.viewState.show('VA_VABUTTONCLXLLOP_363733');
    }
    else {
        initDataEventArgs.commons.api.viewState.show('VA_VABUTTONNWFGLOJ_960733');
        initDataEventArgs.commons.api.viewState.hide('VA_VABUTTONCLXLLOP_363733');
    }

};