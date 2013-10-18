//http://www.highcharts.com/demo/gauge-dual
//http://jsfiddle.net/gh/get/jquery/1.9.1/highslide-software/highcharts.com/tree/master/samples/highcharts/demo/gauge-dual/


var drawChart=function(arrowShowVal,trueVal){

    if(arrowShowVal>100){
        arrowShowVal=100;
    }


    var plotBandsArray =  [

        {
            from: 0,
            to: 110,
            color: '#19a9e3', // green
            innerRadius: '5%',
            outerRadius: '125%'
        }, {
            from: 0,
            to: 110,
            color: '#fff', // green
            innerRadius: '5%',
            outerRadius: '106%'
        }  ,  {// 用户值
            from: 0,
            to: arrowShowVal,
            color: '#bde5f8', // green
            innerRadius: '5%',
            outerRadius: '106%'
        },

        {
            from: 100,
            to: 110,
            color: '#ff9c00',
            innerRadius: '106%',
            outerRadius: '125%'
        }
    ];
    if(arrowShowVal>100){
        plotBandsArray.push( {
            from: 100,
            to: 110,
            color: '#ffd799',
            innerRadius: '5%',
            outerRadius: '115%'
        });
    }


    var chart = new Highcharts.Chart({

        chart: {
            renderTo: 'J_panchart',
            type: 'gauge',

            plotBorderWidth: 0,
            margin:[60,0,0,0],
            height: 300

        },

        title: {
            text: null
        },

        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            size: 262
        }],

        yAxis: [{

            min: 0,
            max: 110,


            /*  minorGridLineWidth: 1,*/
            minorTickInterval: 1,
            minorTickLength:2,
            minorTickPosition: 'outside',
            minorTickWidth: 4,
            minorTickColor: '#19a9e3',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickLength: 11,
            tickPosition: 'inside',

            tickColor: '#19a9e3',


            labels: {
                step: 2,
                style:{
                    color:"#333"
                },
                rotation: 'auto',
                formatter: function () {
                    return this.value+"%";
                }
            },
            showLastLabel: false,
            showFistLabel:false,
            plotBands:plotBandsArray,
            pane: 0,
            title: {
                text: null,
                y: 0
            }
        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: false

                },


                dial: {
                    radius: '80%',
                    backgroundColor: '#19a9e3',
                    borderColor: '#19a9e3',
                    borderWidth: 0,
                    baseWidth: 10,
                    topWidth: 1,
                    baseLength: '70%', // of radius
                    rearLength: '0%'
                },
                pivot: {
                    radius: 10,
                    borderWidth: 5,
                    borderColor: '#a0a0a0',
                    backgroundColor: '#fff'
                },

                tooltip: {

                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>'+trueVal+'%</b>'
                },
                showInLegend: false
            }
        },


        series: [
            {
                name: "品牌释放价值",
                data: [arrowShowVal  ],
                backgroundColor: 'red',
                color: "#72b4c5",

                yAxis: 0
            }],
        legend: {
            enabled: false
        }




    });
    chart.redraw();

}