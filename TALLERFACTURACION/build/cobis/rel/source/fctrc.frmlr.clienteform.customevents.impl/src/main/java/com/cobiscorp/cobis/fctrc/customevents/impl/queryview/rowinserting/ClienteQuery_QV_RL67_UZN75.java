/*
 * Archivo: ClienteQuery_QV_RL67_UZN75.java
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

package com.cobiscorp.cobis.fctrc.customevents.impl.queryview.rowinserting;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.customization.IGridRowInserting;
import com.cobiscorp.designer.api.customization.arguments.IGridRowActionEventArgs;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

@Component
@Service({ IGridRowInserting.class })
@Properties({ @Property(name = "queryView.id", value = "QV_RL67_UZN75"),
 			  @Property(name = "queryView.controlId", value = "QV_RL67_UZN75")})

public class ClienteQuery_QV_RL67_UZN75 implements IGridRowInserting {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(ClienteQuery_QV_RL67_UZN75.class);

	@Override
	public void rowAction(DataEntity arg0, IGridRowActionEventArgs arg1) {
		// TODO Auto-generated method stub
		try {
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start rowAction in ClienteQuery_QV_RL67_UZN75");
			}
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}

}

