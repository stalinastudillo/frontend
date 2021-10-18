/* variables locales de T_FCTRCXQDLAJAJ_918*/

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

    
        var task = designerEvents.api.clienteform;
    

    //"TaskId": "T_FCTRCXQDLAJAJ_918"


    	
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIETNNT_OY67 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
};

	
//gridRowDeleting QueryView: QV_RL67_UZN75
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_RL67_UZN75 = function (entities,gridRowDeletingEventArgs) {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.Cliente = true;

};






	
//gridRowInserting QueryView: QV_RL67_UZN75
//Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
task.gridRowInserting.QV_RL67_UZN75 = function (entities,gridRowInsertingEventArgs) {

     gridRowInsertingEventArgs.commons.execServer = true;
     //gridRowInsertingEventArgs.commons.serverParameters.Cliente = true;

};






	
//gridRowUpdating QueryView: QV_RL67_UZN75
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_RL67_UZN75 = function (entities,gridRowUpdatingEventArgs) {

     gridRowUpdatingEventArgs.commons.execServer = true;
     //gridRowUpdatingEventArgs.commons.serverParameters.Cliente = true;

};








}));
