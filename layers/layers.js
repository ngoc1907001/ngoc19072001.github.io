var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_VTQTKK_BienHoa_260421_1 = new ol.format.GeoJSON();
var features_VTQTKK_BienHoa_260421_1 = format_VTQTKK_BienHoa_260421_1.readFeatures(json_VTQTKK_BienHoa_260421_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VTQTKK_BienHoa_260421_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VTQTKK_BienHoa_260421_1.addFeatures(features_VTQTKK_BienHoa_260421_1);
var lyr_VTQTKK_BienHoa_260421_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VTQTKK_BienHoa_260421_1, 
                style: style_VTQTKK_BienHoa_260421_1,
                interactive: true,
                title: '<img src="styles/legend/VTQTKK_BienHoa_260421_1.png" /> VTQTKK_BienHoa_260421'
            });
var format_VTQTKK_NhonTrach_260421_2 = new ol.format.GeoJSON();
var features_VTQTKK_NhonTrach_260421_2 = format_VTQTKK_NhonTrach_260421_2.readFeatures(json_VTQTKK_NhonTrach_260421_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VTQTKK_NhonTrach_260421_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VTQTKK_NhonTrach_260421_2.addFeatures(features_VTQTKK_NhonTrach_260421_2);
var lyr_VTQTKK_NhonTrach_260421_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VTQTKK_NhonTrach_260421_2, 
                style: style_VTQTKK_NhonTrach_260421_2,
                interactive: true,
                title: '<img src="styles/legend/VTQTKK_NhonTrach_260421_2.png" /> VTQTKK_NhonTrach_260421'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_VTQTKK_BienHoa_260421_1.setVisible(true);lyr_VTQTKK_NhonTrach_260421_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_VTQTKK_BienHoa_260421_1,lyr_VTQTKK_NhonTrach_260421_2];
lyr_VTQTKK_BienHoa_260421_1.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'X2': 'X2', 'Y2': 'Y2', 'Diem_QT': 'Diem_QT', '2013': '2013', '2014': '2014', '2015': '2015', '2016': '2016', '2017': '2017', '2018': '2018', '2019': '2019', '2020': '2020', '2021': '2021', '2022': '2022', 'field_17': 'field_17', 'field_18': 'field_18', });
lyr_VTQTKK_NhonTrach_260421_2.set('fieldAliases', {'ID': 'ID', 'Diem_QT': 'Diem_QT', 'X': 'X', 'Y': 'Y', 'X2': 'X2', 'Y2': 'Y2', '2013': '2013', '2014': '2014', '2015': '2015', '2016': '2016', '2017': '2017', '2018': '2018', '2019': '2019', '2020': '2020', '2021': '2021', '2022': '2022', 'field_17': 'field_17', 'field_18': 'field_18', });
lyr_VTQTKK_BienHoa_260421_1.set('fieldImages', {'ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'Diem_QT': 'TextEdit', '2013': 'TextEdit', '2014': 'TextEdit', '2015': 'TextEdit', '2016': 'TextEdit', '2017': 'TextEdit', '2018': 'TextEdit', '2019': 'TextEdit', '2020': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', });
lyr_VTQTKK_NhonTrach_260421_2.set('fieldImages', {'ID': 'TextEdit', 'Diem_QT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', '2013': 'TextEdit', '2014': 'TextEdit', '2015': 'TextEdit', '2016': 'TextEdit', '2017': 'TextEdit', '2018': 'TextEdit', '2019': 'TextEdit', '2020': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', });
lyr_VTQTKK_BienHoa_260421_1.set('fieldLabels', {'ID': 'no label', 'X': 'no label', 'Y': 'no label', 'X2': 'no label', 'Y2': 'no label', 'Diem_QT': 'no label', '2013': 'no label', '2014': 'no label', '2015': 'no label', '2016': 'no label', '2017': 'no label', '2018': 'no label', '2019': 'no label', '2020': 'no label', '2021': 'no label', '2022': 'no label', 'field_17': 'no label', 'field_18': 'no label', });
lyr_VTQTKK_NhonTrach_260421_2.set('fieldLabels', {'ID': 'inline label', 'Diem_QT': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'X2': 'inline label', 'Y2': 'inline label', '2013': 'inline label', '2014': 'inline label', '2015': 'inline label', '2016': 'inline label', '2017': 'inline label', '2018': 'inline label', '2019': 'inline label', '2020': 'inline label', '2021': 'inline label', '2022': 'inline label', 'field_17': 'inline label', 'field_18': 'inline label', });
lyr_VTQTKK_NhonTrach_260421_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});