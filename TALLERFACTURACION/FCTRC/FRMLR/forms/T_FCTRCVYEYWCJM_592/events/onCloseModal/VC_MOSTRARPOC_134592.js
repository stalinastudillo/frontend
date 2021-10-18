
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: MostrarProductos
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    onCloseModalEventArgs.commons.api.grid.refresh('QV_QI85_UBK50');
};