var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_EquiposdePrimera_1 = new ol.format.GeoJSON();
var features_EquiposdePrimera_1 = format_EquiposdePrimera_1.readFeatures(json_EquiposdePrimera_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquiposdePrimera_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquiposdePrimera_1.addFeatures(features_EquiposdePrimera_1);
var lyr_EquiposdePrimera_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EquiposdePrimera_1, 
                style: style_EquiposdePrimera_1,
                interactive: true,
                title: '<img src="styles/legend/EquiposdePrimera_1.png" /> Equipos de Primera'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_EquiposdePrimera_1.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_EquiposdePrimera_1];
lyr_EquiposdePrimera_1.set('fieldAliases', {'fid': 'fid', 'Equipo': 'Equipo', 'Estadio': 'Estadio', 'Capacidad': 'Capacidad', });
lyr_EquiposdePrimera_1.set('fieldImages', {'fid': '', 'Equipo': '', 'Estadio': '', 'Capacidad': '', });
lyr_EquiposdePrimera_1.set('fieldLabels', {'fid': 'no label', 'Equipo': 'no label', 'Estadio': 'no label', 'Capacidad': 'no label', });
lyr_EquiposdePrimera_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});