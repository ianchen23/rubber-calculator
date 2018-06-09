var result = 0;
var densityList = {
    834: 0.0451,
    577: 0.0452,
    553: 0.0453,
    906: 0.0454,
    920: 0.0455,
    922: 0.0456,
    886: 0.0457
}

$("select").change(function(){
    $("#rubberDensity").text(densityList[$("select").val()]);
});

$("button").click(function(){
    var rubberOD = $("input[name=rubberOD]").val();
    var mandrelOD = $("input[name=mandrelOD]").val();
    var len = $("input[name=elemLen]").val();
    var density = densityList[$("select").val()];
    var area = (Math.pow(Number(rubberOD)+0.5, 2)-Math.pow(Number(mandrelOD), 2)) * 3.14159 / 4;
    var result = area * len * density;
    $("#result").text(Math.ceil(result));
});