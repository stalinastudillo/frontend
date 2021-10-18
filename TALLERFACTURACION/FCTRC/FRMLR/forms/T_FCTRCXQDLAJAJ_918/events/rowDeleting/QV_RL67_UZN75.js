
//gridRowDeleting QueryView: QV_RL67_UZN75
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_RL67_UZN75 = function (entities,gridRowDeletingEventArgs) {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.Cliente = true;

};




