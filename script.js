window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};

var mbAttr = `ФГБУ «Институт глобального климата и экологии имени академика Ю.А. Израэля»` + `<br>` + '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
var mbUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
var baseMap = L.tileLayer(mbUrl, { attribution: mbAttr });



var geojson = L.geoJSON(year2019, {
    onEachFeature: colorLayer,
    style: {
        color: "#00008c",
        opacity: 0.6,
        fillColor: "#333333",
        fillOpacity: 0.6,
    },
})

var geojson2018 = L.geoJSON(year2018, {
    onEachFeature: colorLayer,
    style: {
        color: "#00008c",
        opacity: 0.6,
        fillColor: "#333333",
        fillOpacity: 0.6,
    },
})
var geojson2017 = L.geoJSON(year2017, {
    onEachFeature: colorLayer,
    style: {
        color: "#00008c",
        opacity: 0.6,
        fillColor: "#333333",
        fillOpacity: 0.6,
    },
})
var geojson2016 = L.geoJSON(year2016, {
    onEachFeature: colorLayer,
    style: {
        color: "#00008c",
        opacity: 0.6,
        fillColor: "#333333",
        fillOpacity: 0.6,
    },
})
var geojson2015 = L.geoJSON(year2015, {
    onEachFeature: colorLayer,
    style: {
        color: "#00008c",
        opacity: 0.6,
        fillColor: "#333333",
        fillOpacity: 0.6,
    },
})
var geojson2014 = L.geoJSON(year2014, {
    onEachFeature: colorLayer,
    style: {
        color: "#00008c",
        opacity: 0.6,
        fillColor: "#333333",
        fillOpacity: 0.6,
    },
})



var baseMaps = {
    "2019 год": geojson,
    "2018 год": geojson2018,
    "2017 год": geojson2017,
    "2016 год": geojson2016,
    "2015 год": geojson2015,
    "2014 год": geojson2014
};
var map = L.map('map', {
    center: [65.753, 97.619],
    zoom: 3,
    layers: [geojson, baseMap]
});


L.control.layers(baseMaps, {}).addTo(map);



geojson.eachLayer(function(layer) {
    var popupContent = `Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Комплексная оценка загрязнений: ${layer.feature.properties.komplDirt}`;
    layer.bindPopup(popupContent);
});

geojson.eachLayer(function(layer) {
    if (layer.feature.properties.komplDirt == "1") {
        layer.setStyle({
            fillColor: "#006400",
        });
    } else if (layer.feature.properties.komplDirt == "2") {
        layer.setStyle({
            fillColor: "#00FF00",
        });
    } else if (layer.feature.properties.komplDirt == "3") {
        layer.setStyle({
            fillColor: "#FFFF00",
        });
    } else if (layer.feature.properties.komplDirt == "4") {
        layer.setStyle({
            fillColor: "#FF8C00",
        });
    } else if (layer.feature.properties.komplDirt == "5") {
        layer.setStyle({
            fillColor: "#FE0000",
        });
    }
});

geojson2018.eachLayer(function(layer) {
    var popupContent = `Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Комплексная оценка загрязнений: ${layer.feature.properties.komplDirt}`;
    layer.bindPopup(popupContent);
});

geojson2018.eachLayer(function(layer) {
    if (layer.feature.properties.komplDirt == "1") {
        layer.setStyle({
            fillColor: "#006400",
        });
    } else if (layer.feature.properties.komplDirt == "2") {
        layer.setStyle({
            fillColor: "#00FF00",
        });
    } else if (layer.feature.properties.komplDirt == "3") {
        layer.setStyle({
            fillColor: "#FFFF00",
        });
    } else if (layer.feature.properties.komplDirt == "4") {
        layer.setStyle({
            fillColor: "#FF8C00",
        });
    } else if (layer.feature.properties.komplDirt == "5") {
        layer.setStyle({
            fillColor: "#FE0000",
        });
    }
});

geojson2017.eachLayer(function(layer) {
    var popupContent = `Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Комплексная оценка загрязнений: ${layer.feature.properties.komplDirt}`;
    layer.bindPopup(popupContent);
});

geojson2017.eachLayer(function(layer) {
    if (layer.feature.properties.komplDirt == "1") {
        layer.setStyle({
            fillColor: "#006400",
        });
    } else if (layer.feature.properties.komplDirt == "2") {
        layer.setStyle({
            fillColor: "#00FF00",
        });
    } else if (layer.feature.properties.komplDirt == "3") {
        layer.setStyle({
            fillColor: "#FFFF00",
        });
    } else if (layer.feature.properties.komplDirt == "4") {
        layer.setStyle({
            fillColor: "#FF8C00",
        });
    } else if (layer.feature.properties.komplDirt == "5") {
        layer.setStyle({
            fillColor: "#FE0000",
        });
    }
});

geojson2016.eachLayer(function(layer) {
    var popupContent = `Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Комплексная оценка загрязнений: ${layer.feature.properties.komplDirt}`;
    layer.bindPopup(popupContent);
});
geojson2016.eachLayer(function(layer) {
    if (layer.feature.properties.komplDirt == "1") {
        layer.setStyle({
            fillColor: "#006400",
        });
    } else if (layer.feature.properties.komplDirt == "2") {
        layer.setStyle({
            fillColor: "#00FF00",
        });
    } else if (layer.feature.properties.komplDirt == "3") {
        layer.setStyle({
            fillColor: "#FFFF00",
        });
    } else if (layer.feature.properties.komplDirt == "4") {
        layer.setStyle({
            fillColor: "#FF8C00",
        });
    } else if (layer.feature.properties.komplDirt == "5") {
        layer.setStyle({
            fillColor: "#FE0000",
        });
    }
});

geojson2015.eachLayer(function(layer) {
    var popupContent = `Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Комплексная оценка загрязнений: ${layer.feature.properties.komplDirt}`;
    layer.bindPopup(popupContent);
});
geojson2015.eachLayer(function(layer) {
    if (layer.feature.properties.komplDirt == "1") {
        layer.setStyle({
            fillColor: "#006400",
        });
    } else if (layer.feature.properties.komplDirt == "2") {
        layer.setStyle({
            fillColor: "#00FF00",
        });
    } else if (layer.feature.properties.komplDirt == "3") {
        layer.setStyle({
            fillColor: "#FFFF00",
        });
    } else if (layer.feature.properties.komplDirt == "4") {
        layer.setStyle({
            fillColor: "#FF8C00",
        });
    } else if (layer.feature.properties.komplDirt == "5") {
        layer.setStyle({
            fillColor: "#FE0000",
        });
    }
});

geojson2014.eachLayer(function(layer) {
    var popupContent = `Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Комплексная оценка загрязнений: ${layer.feature.properties.komplDirt}`;
    layer.bindPopup(popupContent);
});
geojson2014.eachLayer(function(layer) {
    if (layer.feature.properties.komplDirt == "1") {
        layer.setStyle({
            fillColor: "#006400",
        });
    } else if (layer.feature.properties.komplDirt == "2") {
        layer.setStyle({
            fillColor: "#00FF00",
        });
    } else if (layer.feature.properties.komplDirt == "3") {
        layer.setStyle({
            fillColor: "#FFFF00",
        });
    } else if (layer.feature.properties.komplDirt == "4") {
        layer.setStyle({
            fillColor: "#FF8C00",
        });
    } else if (layer.feature.properties.komplDirt == "5") {
        layer.setStyle({
            fillColor: "#FE0000",
        });
    }
});

function colorLayer(feature, layer) {
    layer.on("mouseover", function(e) {
        layer.setStyle({
            fillOpacity: 0.2,
        });
    });
    layer.on("mouseout", function(e) {
        layer.setStyle({
            fillOpacity: 0.6,
        });
    });
}

function getColor(d) {
    return d > 5 ? '#FE0000' :
        d > 4 ? '#FF8C00' :
        d > 3 ? '#FFFF00' :
        d > 2 ? '#00FF00' :
        d > 1 ? '#006400' :
        '#FFEDA0';
}

var legend = L.control({ position: 'bottomright' });

legend.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 2, 3, 4, 5],
        labels = [];
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' + 'Уровень загрязнений - ' +
            grades[i] + '<br>' + '<br>';
    }

    return div;
};
legend.addTo(map);