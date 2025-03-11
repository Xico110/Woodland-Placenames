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
var format_YewFeature_11 = new ol.format.GeoJSON();
var features_YewFeature_11 = format_YewFeature_11.readFeatures(json_YewFeature_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YewFeature_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YewFeature_11.addFeatures(features_YewFeature_11);
var lyr_YewFeature_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YewFeature_11, 
                style: style_YewFeature_11,
                popuplayertitle: "Yew (Feature)",
                interactive: true,
                title: '<img src="styles/legend/YewFeature_11.png" /> Yew (Feature)'
            });
var format_WillowFeature_12 = new ol.format.GeoJSON();
var features_WillowFeature_12 = format_WillowFeature_12.readFeatures(json_WillowFeature_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WillowFeature_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WillowFeature_12.addFeatures(features_WillowFeature_12);
var lyr_WillowFeature_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WillowFeature_12, 
                style: style_WillowFeature_12,
                popuplayertitle: "Willow (Feature)",
                interactive: true,
                title: '<img src="styles/legend/WillowFeature_12.png" /> Willow (Feature)'
            });
var format_RowanFeature_13 = new ol.format.GeoJSON();
var features_RowanFeature_13 = format_RowanFeature_13.readFeatures(json_RowanFeature_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RowanFeature_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RowanFeature_13.addFeatures(features_RowanFeature_13);
var lyr_RowanFeature_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RowanFeature_13, 
                style: style_RowanFeature_13,
                popuplayertitle: "Rowan (Feature)",
                interactive: true,
                title: '<img src="styles/legend/RowanFeature_13.png" /> Rowan (Feature)'
            });
var format_GeneralWoodFeature_14 = new ol.format.GeoJSON();
var features_GeneralWoodFeature_14 = format_GeneralWoodFeature_14.readFeatures(json_GeneralWoodFeature_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeneralWoodFeature_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeneralWoodFeature_14.addFeatures(features_GeneralWoodFeature_14);
var lyr_GeneralWoodFeature_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeneralWoodFeature_14, 
                style: style_GeneralWoodFeature_14,
                popuplayertitle: "General Wood (Feature)",
                interactive: true,
                title: '<img src="styles/legend/GeneralWoodFeature_14.png" /> General Wood (Feature)'
            });
var format_HollyFeature_15 = new ol.format.GeoJSON();
var features_HollyFeature_15 = format_HollyFeature_15.readFeatures(json_HollyFeature_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HollyFeature_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HollyFeature_15.addFeatures(features_HollyFeature_15);
var lyr_HollyFeature_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HollyFeature_15, 
                style: style_HollyFeature_15,
                popuplayertitle: "Holly (Feature)",
                interactive: true,
                title: '<img src="styles/legend/HollyFeature_15.png" /> Holly (Feature)'
            });
var format_HawthornFeature_16 = new ol.format.GeoJSON();
var features_HawthornFeature_16 = format_HawthornFeature_16.readFeatures(json_HawthornFeature_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HawthornFeature_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HawthornFeature_16.addFeatures(features_HawthornFeature_16);
var lyr_HawthornFeature_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HawthornFeature_16, 
                style: style_HawthornFeature_16,
                popuplayertitle: "Hawthorn (Feature)",
                interactive: true,
                title: '<img src="styles/legend/HawthornFeature_16.png" /> Hawthorn (Feature)'
            });
var format_ElmFeature_17 = new ol.format.GeoJSON();
var features_ElmFeature_17 = format_ElmFeature_17.readFeatures(json_ElmFeature_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElmFeature_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElmFeature_17.addFeatures(features_ElmFeature_17);
var lyr_ElmFeature_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElmFeature_17, 
                style: style_ElmFeature_17,
                popuplayertitle: "Elm (Feature)",
                interactive: true,
                title: '<img src="styles/legend/ElmFeature_17.png" /> Elm (Feature)'
            });
var format_ElderFeature_18 = new ol.format.GeoJSON();
var features_ElderFeature_18 = format_ElderFeature_18.readFeatures(json_ElderFeature_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElderFeature_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElderFeature_18.addFeatures(features_ElderFeature_18);
var lyr_ElderFeature_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElderFeature_18, 
                style: style_ElderFeature_18,
                popuplayertitle: "Elder (Feature)",
                interactive: true,
                title: '<img src="styles/legend/ElderFeature_18.png" /> Elder (Feature)'
            });
var format_AppleFeature_19 = new ol.format.GeoJSON();
var features_AppleFeature_19 = format_AppleFeature_19.readFeatures(json_AppleFeature_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AppleFeature_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AppleFeature_19.addFeatures(features_AppleFeature_19);
var lyr_AppleFeature_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AppleFeature_19, 
                style: style_AppleFeature_19,
                popuplayertitle: "Apple (Feature)",
                interactive: true,
                title: '<img src="styles/legend/AppleFeature_19.png" /> Apple (Feature)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YewTownland_1.setVisible(true);lyr_RowanTownland_2.setVisible(true);lyr_OakTownland_3.setVisible(true);lyr_HawthornTownland_4.setVisible(true);lyr_GeneralWoodTownland_5.setVisible(true);lyr_BirchTownland_6.setVisible(true);lyr_AshTownland_7.setVisible(true);lyr_HollyRiver_8.setVisible(true);lyr_GeneralWoodRiver_9.setVisible(true);lyr_ElmRivers_10.setVisible(true);lyr_YewFeature_11.setVisible(true);lyr_WillowFeature_12.setVisible(true);lyr_RowanFeature_13.setVisible(true);lyr_GeneralWoodFeature_14.setVisible(true);lyr_HollyFeature_15.setVisible(true);lyr_HawthornFeature_16.setVisible(true);lyr_ElmFeature_17.setVisible(true);lyr_ElderFeature_18.setVisible(true);lyr_AppleFeature_19.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YewTownland_1,lyr_RowanTownland_2,lyr_OakTownland_3,lyr_HawthornTownland_4,lyr_GeneralWoodTownland_5,lyr_BirchTownland_6,lyr_AshTownland_7,lyr_HollyRiver_8,lyr_GeneralWoodRiver_9,lyr_ElmRivers_10,lyr_YewFeature_11,lyr_WillowFeature_12,lyr_RowanFeature_13,lyr_GeneralWoodFeature_14,lyr_HollyFeature_15,lyr_HawthornFeature_16,lyr_ElmFeature_17,lyr_ElderFeature_18,lyr_AppleFeature_19];
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
lyr_YewFeature_11.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_WillowFeature_12.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_RowanFeature_13.set('fieldAliases', {'Species': 'Species', 'Placenames': 'Placenames', 'Meaning': 'Meaning', });
lyr_GeneralWoodFeature_14.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_HollyFeature_15.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_HawthornFeature_16.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_ElmFeature_17.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_ElderFeature_18.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
lyr_AppleFeature_19.set('fieldAliases', {'Species': 'Species', 'Placename': 'Placename', 'Meaning': 'Meaning', });
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
lyr_YewFeature_11.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_WillowFeature_12.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_RowanFeature_13.set('fieldImages', {'Species': 'TextEdit', 'Placenames': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_GeneralWoodFeature_14.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_HollyFeature_15.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_HawthornFeature_16.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_ElmFeature_17.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_ElderFeature_18.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
lyr_AppleFeature_19.set('fieldImages', {'Species': 'TextEdit', 'Placename': 'TextEdit', 'Meaning': 'TextEdit', });
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
lyr_YewFeature_11.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_WillowFeature_12.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_RowanFeature_13.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placenames': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_GeneralWoodFeature_14.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_HollyFeature_15.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_HawthornFeature_16.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_ElmFeature_17.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_ElderFeature_18.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_AppleFeature_19.set('fieldLabels', {'Species': 'inline label - visible with data', 'Placename': 'inline label - visible with data', 'Meaning': 'inline label - visible with data', });
lyr_AppleFeature_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});