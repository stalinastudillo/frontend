/*
 * Archivo: QV_QI85_UBK50_QueryViewEvent.java
 * Fecha: 17/10/2021 20:18:36
 *
 * Esta aplicacion es parte de los paquetes bancarios propiedad de COBISCORP.
 * Su uso no autorizado queda expresamente prohibido asi como cualquier
 * alteracion o agregado hecho por alguno de sus usuarios sin el debido
 * consentimiento por escrito de COBISCORP.
 * Este programa esta protegido por la ley de derechos de autor y por las
 * convenciones internacionales de propiedad intelectual. Su uso no
 * autorizado dara derecho a COBISCORP para obtener ordenes de secuestro
 * o retencion y para perseguir penalmente a los autores de cualquier infraccion.
 */

package com.cobiscorp.cobis.fctrc.customevents.queryview;

import java.util.List;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.ReferencePolicy;
import org.apache.felix.scr.annotations.Service;

import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DataEntityList;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.builder.QueryViewEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Query
 *
 * QV_QI85_UBK50_QueryViewEvent - MostrarProductos
 *
 */
@Component
@Service({ QueryViewEventBuilder.class })
@Properties({ @Property(name = "queryView.id", value = "QV_QI85_UBK50") })

public class CEQV_204QV_QI85_UBK50_737_QueryViewEvent extends QueryViewEventBuilder
 implements IGridRowDeleting
{
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(CEQV_204QV_QI85_UBK50_737_QueryViewEvent.class);
    
	@Reference(name="iGridRowDeletingQV_QI85_UBK50",referenceInterface =IGridRowDeleting.class,bind = "setiGridRowDeletingQV_QI85_UBK50",unbind = "unsetiGridRowDeletingQV_QI85_UBK50",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(queryView.id=QV_QI85_UBK50)(queryView.controlId=QV_QI85_UBK50))")
	private IGridRowDeleting iGridRowDeletingQV_QI85_UBK50;

	public void setiGridRowDeletingQV_QI85_UBK50(IGridRowDeleting iGridRowDeletingQV_QI85_UBK50) {
		this.iGridRowDeletingQV_QI85_UBK50 = iGridRowDeletingQV_QI85_UBK50;
	}

	public void unsetiGridRowDeletingQV_QI85_UBK50(IGridRowDeleting iGridRowDeletingQV_QI85_UBK50) {
		this.iGridRowDeletingQV_QI85_UBK50 = iGridRowDeletingQV_QI85_UBK50;
	}

	@Override
	public void rowAction(DataEntity arg0, IGridRowActionEventArgs arg1) {
		try {
			iGridRowDeletingQV_QI85_UBK50.rowAction(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}


	@Override
	public void configure() {
        this.addGridRowDeleting("QV_QI85_UBK50", this);
	}
}

