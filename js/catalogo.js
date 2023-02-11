const productos = [
    {
        nombre: 'Proceso Sucesorio – Transcripción del auto que ordena la inscripción a favor de los herederos',
        destino: 'Circular DN 14-2022',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2022/08/Circular-DN-14-2022-Proceso-Sucesorio-–-Transcripción-del-auto-que-ordena-la-inscripción-a-favor-de-los-herederos.pdf'
    },
    {
        nombre: 'INSTRUCTIVO SELLOS CÓRDOBA',
        destino: 'Circular Informativa Nº019-2022',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2022/01/CIR-DR-1-2022-INSTRUCTIVO-SELLOS-CÓRDOBA.pdf.pdf'
    },
    {
        nombre: 'UIF $4.800.000',
        destino: 'Disposición DN Nº 151/2021',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2021/10/DISPOSICION-DN-151-2021-UIF.pdf'
      
    },
   
    {
        nombre: 'EXCLUSIVO PARA MANDATARIOS - TURNOS',
        destino: 'Circular Informativa 327/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2021/09/15-septiembre.pdf'
    },
    {
        nombre: 'CIERRE REGISTRO CÓRDOBA 4',
        destino: 'Circular Informativa 327/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/09/Circular-Informativa-327.pdf'
    },
    {
        nombre: 'CIERRE REGISTROS JOVITA CÓRDOBA',
        destino: 'Circular Informativa 324/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/09/Circular-Informativa-324.pdf'
    },
    {
        nombre: 'MANDATARIOS DEROGA DISPOSICIÓN 309/2019',
        destino: 'Circular Informativa 323/2020',
        imagen: '../imagens/simbolo.png',
        link: 'https://camarademandatarios.org.ar/wp-content/uploads/2020/09/Circular-Informativa-323.pdf'
    },
    {
        nombre: 'CIERRE REGISTRO 16 CÓRDOBA CAPITAL',
        destino: 'Circular Informativa 316/2020',
        imagen: '../imagens/simbolo.png',
        link: 'https://camarademandatarios.org.ar/wp-content/uploads/2020/09/Circular-Informativa-316.pdf'
    },
    {
        nombre: 'CIERRE REGISTRO 19 CÓRDOBA CAPITAL',
        destino: 'Circular Informativa 307/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/09/Circular-Informativa-307.pdf'
    },
    {
        nombre: 'APLAZA APLICACIÓN CIRCULAR DRS 22/2020 TURNOS COMERCIANTES HABITUALISTAS',
        destino: 'Circular Informativa 299/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/08/Circular-Informativa-299.pdf'
    },
    {
        nombre: 'PRORROGA CIERRE REGISTRO RÍO CUARTO CÓRDOBA',
        destino: 'Circular Informativa 298/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/08/Circular-Informativa-298.pdf'
    },
    {
        nombre: 'MODELO AÑO TRANSPORTE DE PASAJEROS',
        destino: 'Circular Informativa 296/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/08/Circular-Informativa-296.pdf'
    },
    {
        nombre: 'PRÓRROGA PIEZAS BAJO RECUPERO HASTA 30/11/2020',
        destino: 'Circular Informativa 295/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/08/Circular-Informativa-295.pdf'
    },
    {
        nombre: 'SISTEMA DE TURNOS COMERCIANTES HABITUALISTAS',
        destino: 'Circular Informativa 294/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/08/Circular-Informativa-294.pdf'
    },
    {
        nombre: 'CIERRE REGISTRO LABOULAYE CÓRDOBA',
        destino: 'Circular Informativa 293/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/202/08/Circular-Informativa-293.pdf'
    },
    {
        nombre: 'CIERRE REGISTRO RIO CUARTO CÓRDOBA',
        destino: 'Circular Informativa 289/2020',
        imagen: '../imagens/simbolo.png',
        link: 'https://camarademandatarios.org.ar/wp-content/uploads/2020/08/Circular-Informativa-289.pdf'
    },
    {
        nombre: 'CIERRE REGISTRO "2" Y "B" COSQUÍN CÓRDOBA',
        destino: 'Circular Informativa 263/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/cedula-azul/'
    },
    {
        nombre: 'RECOPILACIÓN DATOS INTERMEDIOS DE MALA FE',
        destino: 'Circular Informativa 269/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/08/Circular-Informativa-269.pdf'
    },
    {
        nombre: 'LEGALIZACIONES DIGITALES CONSEJOS DE CIENCIAS ECONÓMICAS',
        destino: 'Circular Informativa 258/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/08/Circular-Informativa-258.pdf'
    },
    {
        nombre: 'NUEVA TABLA DE VALUACIÓN VIGENCIA 03/08/2020',
        destino: 'Circular Informativa 232/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-230.pdf'
    },
    {
        nombre: ' ÓRDENES JUDICIALES DIGITALES',
        destino: 'Circular Informativa 230/2020',
        imagen: '../imagens/simbolo.png',
        link: 'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-230.pdf'
    },
    {
        nombre: 'INFORME DE DEUDA',
        destino: 'Circular Informativa 216/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-216.pdf'
    },
    {
        nombre: 'PRÓRROGA DE LA DI 104/2020 HASTA EL 30-09-2020 (MATRÍCULA DE MANDATARIOS CERTIFICADOS DE ANTECEDENTES Y DESARMADEROS',
        destino: ' Circular Informativa 211/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-210.pdf'
    },
    {
        nombre: ' SISTEMA DE TURNOS',
        destino: 'Circular Informativa 210/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-210.pdf/'
    },
    {
        nombre: 'CIERRE DE REGISTRO OLIVA CÓRDOBA',
        destino: 'Circular Informativa 205/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-205.pdf'
    },
    {
        nombre: 'ATENCIÓN TURNOS',
        destino: 'Circular Informativa 203/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-201.pdf'
    },
    {
        nombre: 'PRECARGA MANDATARIOS',
        destino: 'Circular Informativa 201/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-201.pdf'
    },
    {
        nombre: 'CIERRE REGISTRO MARCOS JUAREZ CÓRDOBA',
        destino: 'Circular Informativa 200/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-200.pdf'
    },
    {
        nombre: 'VALIDACION DE INFORMES EMITIDOS EN LOS TERMINOS DE LA CIRCULAR DANJ 4',
        destino: 'Circular Informativa 201/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-193.pdf'
    },
    {
        nombre: 'PERMISO PARA CIRCULAR DE MOTOVEHÍCULOS',
        destino: 'Circular Informativa 175/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/07/Circular-Informativa-175.pdf'
    },
    {
        nombre: 'PRÓRROGAS PARA MATRÍCULA DE MANDATARIOS - CERTIFICADO DE ANTECEDENTES PENALES Y DESARMADEROS HASTA 31 07 2020',
        destino: 'Circular Informativa 140/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/06/Circular-Informativa-140.pdf'
    },
    {
        nombre: 'COMUNICACIONES JUDICIALES Y ADMINISTRATIVAS ELECTRONICAS',
        destino: 'Circular Informativa 134/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/05/C.-I.-134-2020.pdf'
    },

    {
        nombre: 'FINALIZACION DE BAJA CON RECUPERO DE PIEZAS',
        destino: 'Circular Informativa 123/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/05/C.-I.-123-2020.pdf'
    },

    {
        nombre: 'REPOSICION DE PLACAS METALICAS POR DEFECTO DE FABRICACION',
        destino: 'Circular Informativa 089/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/04/C.-I.-089-2020.pdf'
    },

    {
        nombre: 'SELLOS PROVINCIA DE CORDOBA',
        destino: 'Circular Informativa 088/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/04/CIRCULAR-INFORMATIVA-088.pdf'
    },

    {
        nombre: 'PRÓRROGAS DE MATRÍCULAS DE MANDATARIOS E INSCRIPCIÓN DE DESARMADERS HASTA EL 31-05',
        destino: 'Circular Informativa 084/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/04/C.-I.-084-2020.pdf'
    },

    {
        nombre: 'REGISTROS DE MAQUINARIA AGRICOLA CON HORARIO HABITUAL',
        destino: 'Circular Informativa 083/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/04/C.-I.-083-2020.pdf'
    },

    {
        nombre: 'INSTRUCTIVO DE REAPERTURA',
        destino: 'Circular Informativa 078/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/04/C.-I.-078-2020.pdf'
    },

    {
        nombre: 'NUEVOS PLAZOS PARA LAS REINSCRIPCIONES DE PRENDAS Y MEDIDAS CAUTELARES VENCIERON DURANTE EL CIERRE DE LOS REGISTROS',
        destino: 'Circular Informativa 077/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/04/C.-I.-077-2020-Registral-Plazos-reinscripciones-de-prendas-y-medidas-cautelares.pdf'
    },

    {
        nombre: 'NO SE INSCRIBEN TRANSFERENCIAS ORIGINADAS EN PROCESOS JUDICIALES PRENDARIOS HASTA 30-9-20',
        destino: 'Circular Informativa 076/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/04/C.-I.-075-2020-Registral-Nueva-tabla-de-valores-para-el-cálculo-de-aranceles-vigencia-01-04-20.pdf'
    },
    {
        nombre: 'NUEVA TABLA DE VALORES PARA EL CALCULO DE ARANCELES (VIGENCIA 01-04-2020)',
        destino: 'Circular Informativa 075/2020',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/04/C.-I.-075-2020-Registral-Nueva-tabla-de-valores-para-el-cálculo-de-aranceles-vigencia-01-04-20.pdf'
    },


    {
        nombre: ' ACREDITACIÓN DE DOMICILIO PERSONAS HUMANAS VIGENCIA 01/10/2019',
        destino: 'Disp 318/19',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/DI-318-2019-ACRDITACION-DE-DOMICILIO-PERSONAS-HUMANAS-VIGENCIA-01-10-2019.pdf'
    },


    {
        nombre: '  MANDATARIOS Y DEPARTAMENTO DE CALIDAD de GESTION',
        destino: 'Disp 309/19',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/D190030901_mandatarios_y_calidad_de_gestion.pdf'
    },


    {
        nombre: 'CUADRICICLOS L6(b) Y L7(b) - RESTRICCIÓN DE CIRCULACIÓN',
        destino: 'Circ DN 33/19 - RESTRICCIÓN DE CIRCULACIÓN',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2020/05/C.-I.-134-2020.pdf'
    },


    {
        nombre: ' PROV. DE CORDOBA - FIN EXENCION IMP. DE SELLOS 0 KM PLAN NACIONAL',
        destino: 'Circ D.R N° 46-19',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/CIRCULAR-D.R-N°-46-19-PROV.-DE-CORDOBA-FIN-EXENCION-IMP.-DE-SELLOS-0-KM-PLAN-NACIONAL.pdf'
    },


    {
        nombre: ' PROVINCIA DE SANTA FE FORMULARIO 1057 WEB (API) VIGENCIA 02/09/2019',
        destino: 'CIRCULAR DR Nº 45/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/cir-dr-45-2019-PROVINCIA-DE-SANTA-FE-FORMULARIO-1057-WEB-API-VIGENCIA-02-09-2019.pdf'
    },



    {
        nombre: '  ACTUALIZA MONTOS CETA',
        destino: 'DI-2019-279',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/di-279-2019-ACTUALIZA-MONTO-CETA.pdf'
    },




    {
        nombre: ' SOLICITUDES TIPO 08D Y TP PARA ESCRIBANOS PÚBLICOS (SIN FECHA DE VIGENCIA)',
        destino: 'DISP-2019-277',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/DI-277-219-SOLICITUDES-TIPO-08D-Y-TP-PARA-ESCRIBANOS-PUBLICOS.pdf'
    },



    {
        nombre: ' TP Y TPM IMPRESIONES',
        destino: 'CIRCULAR DN Nº 32/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/cir-dn-32-2019-IMPRESION-DE-TP-Y-TPM.pdf'
    },



    {
        nombre: ' EXENCIÓN PAGO DE SELLOS 0KM PROVINCIA DE CÓRDOBA (NUEVA NÓMINA)',
        destino: 'CIRCULAR DR Nº 36/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/cir-dr-36-2019-eximicion-sellos-provincia-de-cordoba-decreto-929-2019-nueva-nomina.pdf'
    },



    {
        nombre: ' ACLARA PLACAS PROVISORIAS EN EXTRAÑA JURISDICCIÓN',
        destino: 'CIRCULAR DN Nº 28/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/cir-dn-28-2019-placas-identificacion-provisoria.pdf'
    },

    
    {
        nombre: '  PLACAS PROVISORIAS PARA BAJAS CON RECUPERO DE PIEZAS',
        destino: 'Disposición 250/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/di-250-2019-placas-provisorias-para-baja-con-recuperacion-de-piezas.pdf'
    },


    {
        nombre: ' PLACAS PROVISORIAS Y CÉDULAS EN EXTRAÑA JURISDICCIÓN VIGENCIA 12/08/2019',
        destino: 'Disposición 249/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/di-249-2019-placas-en-extraña-jurisdiccion-cedulas-placas-digital.pdf'
    },


    {
        nombre: ' ALTA DE MOTOR ELÉCTRICO',
        destino: 'CIRCULAR DTR Y R Nº 09/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/cir-dtr-y-r-9-2019-ALTA-DE-MOTOR-ELECTRICO.pdf'
    },


    
    {
        nombre: ' MEDIOS DE PAGO DE ARANCELES PARA INSCRIPCIONES INICIALES',
        destino: 'Disposición 234/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/DI-234-2019-MEDIOS-DE-PAGOS-DE-ARANCELES-DE-INSCRIPCIONES-INICIALES.pdf'
    },


    
    {
        nombre: ' PLACAS ALTERNATIVAS (0KM SIN LCM/LCA)',
        destino: 'CIRCULAR DN Nº 18/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/cir-dn-18-2019-PLACAS-ALTERNATIVAS-OKM-SIN-LCM-LCA.pdf'
    },


    
    {
        nombre: ' Placas Alternativas y Placas M.A.V.I.',
        destino: 'Disp 194/19',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/D190019401_PLACAS_ALTERNATIVAS_Y_MAVI.pdf'
    },


     
    {
        nombre: ' ARANCEL 14 - MORA EN TRANSFERENCIAS',
        destino: 'Circ DN 17/19 - Aclaratoria. solo Transferencias en RRSS Automotor mediante ST 08-08D-15o17. Cálculo para CH. Descuento en ST 08D',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/A190001701_ACLARATORIA_MORA_ARANCEL_14.pdf'
    },



     
    {
        nombre: ' UER REINCIDENCIA',
        destino: 'CIRCULAR D.N. N° 19 - A partir del 10 de julio se habilita el turnero para tramitar el CAP en los RRSS habilitados',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/A190001901_CAP_TURNERO-1.pdf'
    },



     
    {
        nombre: ' CÉDULAS DIGITALES INSTRUCTIVO',
        destino: ' CIRCULAR DN Nº 21/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/Captura-de-pantalla-completa-11072019-081837-a.m..jpg',
        links:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/A190001901_CAP_TURNERO-1.pdf'
    },


       
    {
        nombre: ' CÉDULAS DIGITALES INSTRUCTIVO',
        destino: ' CIRCULAR D.N. Nº 21',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/A190002101_CEDULA_MI_ARGENTINA.pdf'
    },



       
    {
        nombre: ' Disposición Conjunta 1/2019',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/DispSSGDDnrpa_1_19_CEDULA_DIGITAL_MI_ARGENTINA.pdf'
    },



       
    {
        nombre: '  Placa de Identificación Metálica para Tráileres vigencia el 01/11/2019',
        destino: 'Disp 323/19',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/D190032301_placas_traileres_categoria_01.pdf'
    },

         
    {
        nombre: '  IMPUESTO DE SELLOS CABA - INSCRIPCIONES INICIALES',
        destino: 'Circ DR 54/19',
        imagen: '../imagens/simbolo.png',
        link:'https://camarademandatarios.org.ar/wp-content/uploads/2019/09/R180005401_AGIP_SELLOS_OKM_EXTIENDE_EXENCION.pdf'
    }



      
]
    
    
    


