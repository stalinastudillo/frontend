/* variables locales de T_FCTRCSDYLNTBO_817*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.productos;
    

    //"TaskId": "T_FCTRCSDYLNTBO_817"


    	

//Entity: Producto
//Producto. (Button) View: Productos
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONCLXLLOP_363733 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Producto = true;

};

	

//Entity: Producto
//Producto. (Button) View: Productos
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONNWFGLOJ_960733 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Producto = true;

};

	
//Start signature to Callback event to VA_VABUTTONNWFGLOJ_960733
task.executeCommandCallback.VA_VABUTTONNWFGLOJ_960733 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    let nav = executeCommandCallbackEventArgs.commons.api.navigation; nav.closeModal({});
};


	
     
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



}));
