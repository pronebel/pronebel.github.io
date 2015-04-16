var Factory ={
    x:460,
    y:720
}
var getSites = function(){





    var customerPosition = [
        {
            name:"A",
            x:220,
            y:800,
            need:0.3
        },
        {
            name:"B",
            x:240,
            y:720,
            need:3.15
        },
        {
            name:"C",
            x:470,
            y:790,
            need:1.65
        },
        {
            name:"D",
            x:670,
            y:860,
            need:0.6
        },
        {
            name:"E",
            x:540,
            y:730,
            need:0.45
        },
        {
            name:"F",
            x:630,
            y:680,
            need:0.675
        },
        {
            name:"G",
            x:420,
            y:570,
            need:0.375
        },
        {
            name:"H",
            x:370,
            y:490,
            need:0.6
        },
        {
            name:"I",
            x:130,
            y:500,
            need:0.75
        },
        {
            name:"J",
            x:180,
            y:270,
            need:0.9
        },
        {
            name:"K",
            x:480,
            y:360,
            need:0.525
        },
        {
            name:"L",
            x:480,
            y:210,
            need:1.8
        },
        {
            name:"M",
            x:660,
            y:250,
            need:0.3
        },
        {
            name:"N",
            x:760,
            y:390,
            need:0.675
        },
        {
            name:"O",
            x:810,
            y:640,
            need:1.125
        }
    ]

    /*
     以仓库为原点的坐标系中，每个site与x轴正方向的夹角。 排序后，可以用来进行 扫描的排序操作
     */
    function calSite(){


        var allWeight = 0;

        for(var i=0;i<customerPosition.length;i++){
            var curPos = customerPosition[i];
            curPos._x = curPos.x;
            curPos._y = curPos.y;

            curPos.x -= Factory.x;
            curPos.y -= Factory.y;
            curPos.need = curPos.need*1000;//转化成kg
            allWeight += curPos.need;

            curPos.sin = curPos.y/Math.sqrt(curPos.x * curPos.x+ curPos.y*curPos.y);
            curPos.angle = Math.asin(curPos.sin)*180/Math.PI;

            if(curPos.angle>=0&&curPos.x<=0){
                curPos.angle =180-curPos.angle;
            }else if(curPos.angle<=0&&curPos.x<=0){
                curPos.angle =Math.abs(curPos.angle)+  180;
            }else if(curPos.angle<=0&&curPos.x>0){
                curPos.angle =360-Math.abs(curPos.angle);
            }
        }

        //perWeight = allWeight/5;
        console.log(allWeight);

        var resultArray = _.sortBy(customerPosition,function(_posi){
            return _posi.angle;
        })


        var returnArray = $.map(resultArray, function(obj){
            return $.extend(true,{},obj);//返回对象的深拷贝
        });
        return returnArray;

    }


    return calSite();



}


/**
 * 获取排序后某个site的索引，根据tag查找
 * @param scanArray
 * @param tag
 * @returns {number}
 */
function getSiteIndex (scanArray ,tag){

    for(var i=0;i<scanArray.length;i++){
        if(scanArray[i].name==tag){
            return i;
        }
    }

}

/**
 * 计算两点之间的距离
 * @param site1
 * @param site2
 * @returns {number}
 */
function calSiteToSite(site1,site2){

    var x = site1.x - site2.x;
    var y = site1.y - site2.y;

    var distance = Math.sqrt(x * x+ y*y);
    var road = Math.round(distance* distancePrecent);

    return road;

}
/**
 * 计算站点到仓库的距离（site的x，y已在之前做过移位操作）
 * @param site
 * @returns {number}
 */
function calCankuToSite(site){

    var distance = Math.sqrt(site.x * site.x+ site.y*site.y);

    var road = Math.round(distance* distancePrecent);

    return road;

}

function showTime(times){

    var minutes = times*60;

    var days = parseInt(times/24);

    var hours = parseInt(minutes/60);
    minutes = minutes-hours*60;

    var dayStr = "";
    if(days>0){
        dayStr =  "第"+(days+1)+"日,";
        return dayStr+(hours-days*24)+"时"+ parseInt(minutes)+"分";
    }else{
        return dayStr+hours+"时"+ parseInt(minutes)+"分";
    }


}
