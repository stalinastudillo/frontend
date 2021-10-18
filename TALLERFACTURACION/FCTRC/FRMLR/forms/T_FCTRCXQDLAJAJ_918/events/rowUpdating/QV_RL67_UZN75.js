
//gridRowUpdating QueryView: QV_RL67_UZN75
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_RL67_UZN75 = function (entities,gridRowUpdatingEventArgs) {

     gridRowUpdatingEventArgs.commons.execServer = true;
     //gridRowUpdatingEventArgs.commons.serverParameters.Cliente = true;

};




