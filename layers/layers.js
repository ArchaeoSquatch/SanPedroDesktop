var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_HaysCounty1877_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hays County (1877)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HaysCounty1877_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10948548.051459, 3470229.326327, -10869866.556202, 3557050.850519]
        })
    });
var lyr_USGS24k1966_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'USGS 24k (1966)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/USGS24k1966_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10910363.613349, 3469442.269642, -10894225.073581, 3488395.567368]
        })
    });
var lyr_USGS24k1975_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'USGS 24k (1975)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/USGS24k1975_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10910369.043648, 3469315.970661, -10894240.040772, 3488259.660903]
        })
    });
var lyr_USGS24k1994_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'USGS 24k (1994)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/USGS24k1994_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10910428.489074, 3469516.856897, -10894235.820167, 3488474.603783]
        })
    });
var lyr_USGS24k2010_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'USGS 24k (2010)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/USGS24k2010_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10910533.647431, 3468385.344070, -10894172.255672, 3489150.421094]
        })
    });
var lyr_USGS24k2022_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'USGS 24k (2022)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/USGS24k2022_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10910925.646188, 3468575.266568, -10893683.123744, 3489357.450558]
        })
    });
var lyr_TobinAerials1938_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Tobin Aerials (1938)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TobinAerials1938_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10908423.833919, 3477438.108091, -10906307.483699, 3479549.680998]
        })
    });
var lyr_USDA1958_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'USDA (1958)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/USDA1958_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10908423.833919, 3477438.108091, -10906307.483699, 3479549.680998]
        })
    });
var lyr_USDA1981_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'USDA (1981)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/USDA1981_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10908423.833919, 3477438.108091, -10906307.483699, 3479549.680998]
        })
    });
var lyr_USDA2001_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'USDA (2001)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/USDA2001_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10908423.833919, 3477438.108091, -10906307.483699, 3479549.680998]
        })
    });
var lyr_USDA2012_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'USDA (2012)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/USDA2012_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10908423.833919, 3477438.108091, -10906307.483699, 3479549.680998]
        })
    });

        var lyr_GoogleSatellite2026_12 = new ol.layer.Tile({
            'title': 'Google Satellite (2026)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SanPedroCemetery_13 = new ol.format.GeoJSON();
var features_SanPedroCemetery_13 = format_SanPedroCemetery_13.readFeatures(json_SanPedroCemetery_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanPedroCemetery_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanPedroCemetery_13.addFeatures(features_SanPedroCemetery_13);
var lyr_SanPedroCemetery_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanPedroCemetery_13, 
                style: style_SanPedroCemetery_13,
                popuplayertitle: 'San Pedro Cemetery',
                interactive: true,
                title: '<img src="styles/legend/SanPedroCemetery_13.png" /> San Pedro Cemetery'
            });
var format_ProjectAPE_14 = new ol.format.GeoJSON();
var features_ProjectAPE_14 = format_ProjectAPE_14.readFeatures(json_ProjectAPE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectAPE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectAPE_14.addFeatures(features_ProjectAPE_14);
var lyr_ProjectAPE_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectAPE_14, 
                style: style_ProjectAPE_14,
                popuplayertitle: 'Project APE',
                interactive: false,
                title: '<img src="styles/legend/ProjectAPE_14.png" /> Project APE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_HaysCounty1877_1.setVisible(true);lyr_USGS24k1966_2.setVisible(true);lyr_USGS24k1975_3.setVisible(true);lyr_USGS24k1994_4.setVisible(true);lyr_USGS24k2010_5.setVisible(true);lyr_USGS24k2022_6.setVisible(true);lyr_TobinAerials1938_7.setVisible(true);lyr_USDA1958_8.setVisible(true);lyr_USDA1981_9.setVisible(true);lyr_USDA2001_10.setVisible(true);lyr_USDA2012_11.setVisible(true);lyr_GoogleSatellite2026_12.setVisible(true);lyr_SanPedroCemetery_13.setVisible(true);lyr_ProjectAPE_14.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HaysCounty1877_1,lyr_USGS24k1966_2,lyr_USGS24k1975_3,lyr_USGS24k1994_4,lyr_USGS24k2010_5,lyr_USGS24k2022_6,lyr_TobinAerials1938_7,lyr_USDA1958_8,lyr_USDA1981_9,lyr_USDA2001_10,lyr_USDA2012_11,lyr_GoogleSatellite2026_12,lyr_SanPedroCemetery_13,lyr_ProjectAPE_14];
lyr_SanPedroCemetery_13.set('fieldAliases', {'CEMNUM': 'CEMNUM', 'CEMNAME': 'CEMNAME', 'Add_Name': 'Add_Name', 'CEMTYPE': 'CEMTYPE', 'County': 'County', 'Source': 'Source', 'Quad_Name': 'Quad_Name', 'Quad_Code': 'Quad_Code', 'Quad_Numbe': 'Quad_Numbe', 'Calc_Acres': 'Calc_Acres', 'ATLAS_NUM': 'ATLAS_NUM', 'ATLAS_INDE': 'ATLAS_INDE', 'last_edite': 'last_edite', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ProjectAPE_14.set('fieldAliases', {'CEMNUM': 'CEMNUM', 'CEMNAME': 'CEMNAME', 'Add_Name': 'Add_Name', 'CEMTYPE': 'CEMTYPE', 'County': 'County', 'Source': 'Source', 'Quad_Name': 'Quad_Name', 'Quad_Code': 'Quad_Code', 'Quad_Numbe': 'Quad_Numbe', 'Calc_Acres': 'Calc_Acres', 'ATLAS_NUM': 'ATLAS_NUM', 'ATLAS_INDE': 'ATLAS_INDE', 'last_edite': 'last_edite', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SanPedroCemetery_13.set('fieldImages', {'CEMNUM': '', 'CEMNAME': '', 'Add_Name': '', 'CEMTYPE': '', 'County': '', 'Source': '', 'Quad_Name': '', 'Quad_Code': '', 'Quad_Numbe': '', 'Calc_Acres': '', 'ATLAS_NUM': '', 'ATLAS_INDE': '', 'last_edite': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ProjectAPE_14.set('fieldImages', {'CEMNUM': '', 'CEMNAME': '', 'Add_Name': '', 'CEMTYPE': '', 'County': '', 'Source': '', 'Quad_Name': '', 'Quad_Code': '', 'Quad_Numbe': '', 'Calc_Acres': '', 'ATLAS_NUM': '', 'ATLAS_INDE': '', 'last_edite': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SanPedroCemetery_13.set('fieldLabels', {'CEMNUM': 'hidden field', 'CEMNAME': 'inline label - always visible', 'Add_Name': 'hidden field', 'CEMTYPE': 'hidden field', 'County': 'hidden field', 'Source': 'hidden field', 'Quad_Name': 'hidden field', 'Quad_Code': 'hidden field', 'Quad_Numbe': 'hidden field', 'Calc_Acres': 'hidden field', 'ATLAS_NUM': 'hidden field', 'ATLAS_INDE': 'hidden field', 'last_edite': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ProjectAPE_14.set('fieldLabels', {'CEMNUM': 'hidden field', 'CEMNAME': 'inline label - always visible', 'Add_Name': 'hidden field', 'CEMTYPE': 'hidden field', 'County': 'hidden field', 'Source': 'hidden field', 'Quad_Name': 'hidden field', 'Quad_Code': 'hidden field', 'Quad_Numbe': 'hidden field', 'Calc_Acres': 'hidden field', 'ATLAS_NUM': 'hidden field', 'ATLAS_INDE': 'hidden field', 'last_edite': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ProjectAPE_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});