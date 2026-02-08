var wms_layers = [];

var format_Manzanas_0 = new ol.format.GeoJSON();
var features_Manzanas_0 = format_Manzanas_0.readFeatures(json_Manzanas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_0.addFeatures(features_Manzanas_0);
var lyr_Manzanas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzanas_0, 
                style: style_Manzanas_0,
                popuplayertitle: 'Manzanas',
                interactive: false,
                title: '<img src="styles/legend/Manzanas_0.png" /> Manzanas'
            });
var format_Librerias_1 = new ol.format.GeoJSON();
var features_Librerias_1 = format_Librerias_1.readFeatures(json_Librerias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Librerias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Librerias_1.addFeatures(features_Librerias_1);
var lyr_Librerias_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Librerias_1, 
                style: style_Librerias_1,
                popuplayertitle: 'Librerias',
                interactive: true,
                title: '<img src="styles/legend/Librerias_1.png" /> Librerias'
            });

lyr_Manzanas_0.setVisible(true);lyr_Librerias_1.setVisible(true);
var layersList = [lyr_Manzanas_0,lyr_Librerias_1];
lyr_Manzanas_0.set('fieldAliases', {'fid': 'fid', 'Verde': 'Verde', });
lyr_Librerias_1.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'numero': 'numero', 'Direccion': 'Direccion', });
lyr_Manzanas_0.set('fieldImages', {'fid': 'TextEdit', 'Verde': 'CheckBox', });
lyr_Librerias_1.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'numero': 'Range', 'Direccion': '', });
lyr_Manzanas_0.set('fieldLabels', {'fid': 'no label', 'Verde': 'no label', });
lyr_Librerias_1.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'inline label - always visible', 'numero': 'hidden field', 'Direccion': 'inline label - always visible', });
lyr_Librerias_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});