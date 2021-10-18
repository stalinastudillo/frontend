package com.cobiscorp.cobis.fctrc.bli.services.impl;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import com.cobiscorp.cobis.cwc.context.MapperManager;
import com.cobiscorp.cobis.cwc.kernel.sp.dto.MapperResult;
import com.cobiscorp.cobis.cwc.kernel.sp.impl.ExecutorSP;

import com.cobiscorp.cobis.fctrc.model.Producto;

import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DataEntityList;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.bli.util.BLIUtils;
import com.cobiscorp.designer.bli.api.IBLIExecutor;
import com.cobiscorp.designer.exception.DesignerRuntimeException;
import com.cobiscorp.designer.bli.manager.BliManagerException;
import com.cobiscorp.cobis.cwc.server.information.ServerParamUtil;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.ecobis.map.Mapper;
import com.cobiscorp.ecobis.map.dto.Result;
import com.cobiscorp.ecobis.map.enums.SqlType;

@Component
@Service({ IBLIExecutor.class })
@Properties({
  @Property(name = "task.module", value = "FCTRC"),
  @Property(name = "bli.id", value = "BLI7007_bli_actualizar")
})
public class BLI7007_bli_actualizar implements IBLIExecutor {
  private static final ILogger logger = LogFactory.getLogger(BLI7007_bli_actualizar.class);

  public void execute(DynamicRequest dynamicRequest) {
    Mapper mapper = null;
    try {
      DataEntity row = BLIUtils.getRowDataEntity(dynamicRequest);
      List<Object> outListEntities = new ArrayList<Object>();
      DataEntity rowProducto;
      if (row != null && Producto.ENTITY_NAME.equals(row.getEntityName())) {
        rowProducto = row;
      } else {
        rowProducto = BLIUtils.getDataEntity(dynamicRequest, Producto.ENTITY_NAME);
        if (rowProducto == null) {
          throw new DesignerRuntimeException("No existe entidad " + Producto.ENTITY_NAME);
        }
      }

      String wcodigo = rowProducto.get(Producto.CODIGO);
      String wnombre = rowProducto.get(Producto.NOMBRE);
      Double wprecio = rowProducto.get(Producto.PRECIO);
      String wmoneda = rowProducto.get(Producto.MONEDA);

      if (logger.isDebugEnabled()) {
        logger.logDebug("inputParameters: " + " CODIGO: " + wcodigo + " NOMBRE: " + wnombre + " PRECIO: " + wprecio + " MONEDA: " + wmoneda);
      }

      mapper = MapperManager.get(Mapper.class);
      mapper.addInputParameter("@t_trn", SqlType.INT, "163030123");
      mapper.addInputParameter("@i_operacion", SqlType.CHAR, "U");

      if (wcodigo != null){
        mapper.addInputParameter("@i_codigo", SqlType.VARCHAR, BLIUtils.convertToType(wcodigo, String.class));
      }

      if (wnombre != null){
        mapper.addInputParameter("@i_nombre", SqlType.VARCHAR, BLIUtils.convertToType(wnombre, String.class));
      }

      if (wprecio != null){
        mapper.addInputParameter("@i_precio", SqlType.MONEY, BLIUtils.convertToType(wprecio, String.class));
      }

      if (wmoneda != null){
        mapper.addInputParameter("@i_moneda", SqlType.CHAR, BLIUtils.convertToType(wmoneda, String.class));
      }
      boolean ret = mapper.execute(".cobis.taller_factura");
      int retCode = mapper.returnCode();
      if (ret && (retCode == 0)) {




        if (logger.isDebugEnabled()) {
          logger.logDebug("returnCode: " + retCode);
        }
      } else {
        BliManagerException.handleMapperException(mapper);
      }
    } catch (Exception ex) {
      BliManagerException.handleBliException(ex);
    } finally {
      if (mapper != null)
        mapper.check();
    }
  }

}
