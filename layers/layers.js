var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_YewTownland_1 = new ol.format.GeoJSON();
var features_YewTownland_1 = format_YewTownland_1.readFeatures(json_YewTownland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YewTownland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YewTownland_1.addFeatures(features_YewTownland_1);
var lyr_YewTownland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YewTownland_1, 
                style: style_YewTownland_1,
                popuplayertitle: "Yew (Townland)",
                interactive: true,
                title: '<img src="styles/legend/YewTownland_1.png" /> Yew (Townland)'
            });
var format_RowanTownland_2 = new ol.format.GeoJSON();
var features_RowanTownland_2 = format_RowanTownland_2.readFeatures(json_RowanTownland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RowanTownland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RowanTownland_2.addFeatures(features_RowanTownland_2);
var lyr_RowanTownland_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RowanTownland_2, 
                style: style_RowanTownland_2,
                popuplayertitle: "Rowan (Townland)",
                interactive: true,
                title: '<img src="styles/legend/RowanTownland_2.png" /> Rowan (Townland)'
            });
var format_OakTownland_3 = new ol.format.GeoJSON();
var features_OakTownland_3 = format_OakTownland_3.readFeatures(json_OakTownland_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OakTownland_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OakTownland_3.addFeatures(features_OakTownland_3);
var lyr_OakTownland_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OakTownland_3, 
                style: style_OakTownland_3,
                popuplayertitle: "Oak (Townland)",
                interactive: true,
                title: '<img src="styles/legend/OakTownland_3.png" /> Oak (Townland)'
            });
var format_HawthornTownland_4 = new ol.format.GeoJSON();
var features_HawthornTownland_4 = format_HawthornTownland_4.readFeatures(json_HawthornTownland_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HawthornTownland_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HawthornTownland_4.addFeatures(features_HawthornTownland_4);
var lyr_HawthornTownland_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HawthornTownland_4, 
                style: style_HawthornTownland_4,
                popuplayertitle: "Hawthorn (Townland)",
                interactive: true,
                title: '<img src="styles/legend/HawthornTownland_4.png" /> Hawthorn (Townland)'
            });
var format_GeneralWoodTownland_5 = new ol.format.GeoJSON();
var features_GeneralWoodTownland_5 = format_GeneralWoodTownland_5.readFeatures(json_GeneralWoodTownland_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeneralWoodTownland_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeneralWoodTownland_5.addFeatures(features_GeneralWoodTownland_5);
var lyr_GeneralWoodTownland_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeneralWoodTownland_5, 
                style: style_GeneralWoodTownland_5,
                popuplayertitle: "General Wood (Townland)",
                interactive: true,
                title: '<img src="styles/legend/GeneralWoodTownland_5.png" /> General Wood (Townland)'
            });
var format_BirchTownland_6 = new ol.format.GeoJSON();
var features_BirchTownland_6 = format_BirchTownland_6.readFeatures(json_BirchTownland_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BirchTownland_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BirchTownland_6.addFeatures(features_BirchTownland_6);
var lyr_BirchTownland_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BirchTownland_6, 
                style: style_BirchTownland_6,
                popuplayertitle: "Birch (Townland)",
                interactive: true,
                title: '<img src="styles/legend/BirchTownland_6.png" /> Birch (Townland)'
            });
var format_AshTownland_7 = new ol.format.GeoJSON();
var features_AshTownland_7 = format_AshTownland_7.readFeatures(json_AshTownland_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AshTownland_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AshTownland_7.addFeatures(features_AshTownland_7);
var lyr_AshTownland_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AshTownland_7, 
                style: style_AshTownland_7,
                popuplayertitle: "Ash (Townland)",
                interactive: true,
                title: '<img src="styles/legend/AshTownland_7.png" /> Ash (Townland)'
            });
var format_HollyRiver_8 = new ol.format.GeoJSON();
var features_HollyRiver_8 = format_HollyRiver_8.readFeatures(json_HollyRiver_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HollyRiver_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HollyRiver_8.addFeatures(features_HollyRiver_8);
var lyr_HollyRiver_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HollyRiver_8, 
                style: style_HollyRiver_8,
                popuplayertitle: "Holly (River)",
                interactive: true,
                title: '<img src="styles/legend/HollyRiver_8.png" /> Holly (River)'
            });
var format_GeneralWoodRiver_9 = new ol.format.GeoJSON();
var features_GeneralWoodRiver_9 = format_GeneralWoodRiver_9.readFeatures(json_GeneralWoodRiver_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeneralWoodRiver_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeneralWoodRiver_9.addFeatures(features_GeneralWoodRiver_9);
var lyr_GeneralWoodRiver_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeneralWoodRiver_9, 
                style: style_GeneralWoodRiver_9,
                popuplayertitle: "General Wood (River)",
                interactive: true,
                title: '<img src="styles/legend/GeneralWoodRiver_9.png" /> General Wood (River)'
            });
var format_ElmRivers_10 = new ol.format.GeoJSON();
var features_ElmRivers_10 = format_ElmRivers_10.readFeatures(json_ElmRivers_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElmRivers_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElmRivers_10.addFeatures(features_ElmRivers_10);
var lyr_ElmRivers_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElmRivers_10, 
                style: style_ElmRivers_10,
                popuplayertitle: "Elm (Rivers)",
                interactive: true,
                title: '<img src="styles/legend/ElmRivers_10.png" /> Elm (Rivers)'
            });
var format_YewPoints_11 = new ol.format.GeoJSON();
var features_YewPoints_11 = format_YewPoints_11.readFeatures(json_YewPoints_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YewPoints_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YewPoints_11.addFeatures(features_YewPoints_11);
var lyr_YewPoints_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YewPoints_11, 
                style: style_YewPoints_11,
                popuplayertitle: "Yew (Points)",
                interactive: true,
                title: '<img src="styles/legend/YewPoints_11.png" /> Yew (Points)'
            });
var format_WillowPoints_12 = new ol.format.GeoJSON();
var features_WillowPoints_12 = format_WillowPoints_12.readFeatures(json_WillowPoints_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WillowPoints_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WillowPoints_12.addFeatures(features_WillowPoints_12);
var lyr_WillowPoints_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WillowPoints_12, 
                style: style_WillowPoints_12,
                popuplayertitle: "Willow (Points)",
                interactive: true,
                title: '<img src="styles/legend/WillowPoints_12.png" /> Willow (Points)'
            });
var format_RowanPoints_13 = new ol.format.GeoJSON();
var features_RowanPoints_13 = format_RowanPoints_13.readFeatures(json_RowanPoints_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RowanPoints_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RowanPoints_13.addFeatures(features_RowanPoints_13);
var lyr_RowanPoints_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RowanPoints_13, 
                style: style_RowanPoints_13,
                popuplayertitle: "Rowan (Points)",
                interactive: true,
                title: '<img src="styles/legend/RowanPoints_13.png" /> Rowan (Points)'
            });
var format_HollyPoints_14 = new ol.format.GeoJSON();
var features_HollyPoints_14 = format_HollyPoints_14.readFeatures(json_HollyPoints_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HollyPoints_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HollyPoints_14.addFeatures(features_HollyPoints_14);
var lyr_HollyPoints_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HollyPoints_14, 
                style: style_HollyPoints_14,
                popuplayertitle: "Holly (Points)",
                interactive: true,
                title: '<img src="styles/legend/HollyPoints_14.png" /> Holly (Points)'
            });
var format_GeneralWoodpoints_15 = new ol.format.GeoJSON();
var features_GeneralWoodpoints_15 = format_GeneralWoodpoints_15.readFeatures(json_GeneralWoodpoints_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeneralWoodpoints_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeneralWoodpoints_15.addFeatures(features_GeneralWoodpoints_15);
var lyr_GeneralWoodpoints_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeneralWoodpoints_15, 
                style: style_GeneralWoodpoints_15,
                popuplayertitle: "General Wood (points)",
                interactive: true,
                title: '<img src="styles/legend/GeneralWoodpoints_15.png" /> General Wood (points)'
            });
var format_ElmPoints_16 = new ol.format.GeoJSON();
var features_ElmPoints_16 = format_ElmPoints_16.readFeatures(json_ElmPoints_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElmPoints_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElmPoints_16.addFeatures(features_ElmPoints_16);
var lyr_ElmPoints_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElmPoints_16, 
                style: style_ElmPoints_16,
                popuplayertitle: "Elm (Points)",
                interactive: true,
                title: '<img src="styles/legend/ElmPoints_16.png" /> Elm (Points)'
            });
var format_ElderPoints_17 = new ol.format.GeoJSON();
var features_ElderPoints_17 = format_ElderPoints_17.readFeatures(json_ElderPoints_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElderPoints_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElderPoints_17.addFeatures(features_ElderPoints_17);
var lyr_ElderPoints_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElderPoints_17, 
                style: style_ElderPoints_17,
                popuplayertitle: "Elder (Points)",
                interactive: true,
                title: '<img src="styles/legend/ElderPoints_17.png" /> Elder (Points)'
            });
var format_ApplePoints_18 = new ol.format.GeoJSON();
var features_ApplePoints_18 = format_ApplePoints_18.readFeatures(json_ApplePoints_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApplePoints_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApplePoints_18.addFeatures(features_ApplePoints_18);
var lyr_ApplePoints_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApplePoints_18, 
                style: style_ApplePoints_18,
                popuplayertitle: "Apple (Points)",
                interactive: true,
                title: '<img src="styles/legend/ApplePoints_18.png" /> Apple (Points)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YewTownland_1.setVisible(true);lyr_RowanTownland_2.setVisible(true);lyr_OakTownland_3.setVisible(true);lyr_HawthornTownland_4.setVisible(true);lyr_GeneralWoodTownland_5.setVisible(true);lyr_BirchTownland_6.setVisible(true);lyr_AshTownland_7.setVisible(true);lyr_HollyRiver_8.setVisible(true);lyr_GeneralWoodRiver_9.setVisible(true);lyr_ElmRivers_10.setVisible(true);lyr_YewPoints_11.setVisible(true);lyr_WillowPoints_12.setVisible(true);lyr_RowanPoints_13.setVisible(true);lyr_HollyPoints_14.setVisible(true);lyr_GeneralWoodpoints_15.setVisible(true);lyr_ElmPoints_16.setVisible(true);lyr_ElderPoints_17.setVisible(true);lyr_ApplePoints_18.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YewTownland_1,lyr_RowanTownland_2,lyr_OakTownland_3,lyr_HawthornTownland_4,lyr_GeneralWoodTownland_5,lyr_BirchTownland_6,lyr_AshTownland_7,lyr_HollyRiver_8,lyr_GeneralWoodRiver_9,lyr_ElmRivers_10,lyr_YewPoints_11,lyr_WillowPoints_12,lyr_RowanPoints_13,lyr_HollyPoints_14,lyr_GeneralWoodpoints_15,lyr_ElmPoints_16,lyr_ElderPoints_17,lyr_ApplePoints_18];
lyr_YewTownland_1.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_RowanTownland_2.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_OakTownland_3.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_HawthornTownland_4.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_GeneralWoodTownland_5.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_BirchTownland_6.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_AshTownland_7.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_HollyRiver_8.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_GeneralWoodRiver_9.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_ElmRivers_10.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_YewPoints_11.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_WillowPoints_12.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_RowanPoints_13.set('fieldAliases', {'Species': 'Species', 'Placenames': 'Placenames', 'Meaning': 'Meaning', });
lyr_HollyPoints_14.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_GeneralWoodpoints_15.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_ElmPoints_16.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_ElderPoints_17.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_ApplePoints_18.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_YewTownland_1.set('fieldImages', {'Species': '', 'Placename': '', 'Meaning': '', });
lyr_RowanTownland_2.set('fieldImages', {'Species': '', 'Placename': '', 'Meaning': '', });
lyr_OakTownland_3.set('fieldImages', {'Species': '', 'Placename': '', 'Meaning': '', });
lyr_HawthornTownland_4.set('fieldImages', {'Species': '', 'Placename': '', 'Meaning': '', });
lyr_GeneralWoodTownland_5.set('fieldImages', {'Species': '', 'Placename': '', 'Meaning': '', });
lyr_BirchTownland_6.set('fieldImages', {'Species': '', 'Placename': '', 'Meaning': '', });
lyr_AshTownland_7.set('fieldImages', {'Species': '', 'Placename': '', 'Meaning': '', });
lyr_HollyRiver_8.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_GeneralWoodRiver_9.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_ElmRivers_10.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_YewPoints_11.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_WillowPoints_12.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_RowanPoints_13.set('fieldImages', {'Species': 'TextEdit', 'Placenames': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_HollyPoints_14.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_GeneralWoodpoints_15.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_ElmPoints_16.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_ElderPoints_17.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_ApplePoints_18.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_YewTownland_1.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_RowanTownland_2.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_OakTownland_3.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_HawthornTownland_4.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_GeneralWoodTownland_5.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_BirchTownland_6.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_AshTownland_7.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_HollyRiver_8.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_GeneralWoodRiver_9.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_ElmRivers_10.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_YewPoints_11.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_WillowPoints_12.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_RowanPoints_13.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placenames': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_HollyPoints_14.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_GeneralWoodpoints_15.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_ElmPoints_16.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_ElderPoints_17.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_ApplePoints_18.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_ApplePoints_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});