
// 작물정보
var crops = crops||{};
// 데이터 전송
var dataTransfer = dataTransfer||{};
// 스마트폰 사용정보
var smartphone = smartphone||{};
// 장비상태정보
var statusFarmingon = statusFarmingon||{};
var statusFarmingon2 = statusFarmingon2||{};
var statusRmfarm = statusRmfarm||{};





// 장비상태정보
statusFarmingon.options = {
    series: [{
        name: "정상",
        data: [340, 345, 321, 299, 288, 301, 312, 345, 366, 341]
    },{
        name: "에러",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 85, 62]
    },],
    chart: {
        toolbar: {
            show: false,
        },
        height: 243,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    colors: ['#2985d2','#f28f6c'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    markers: {
        size: 3,
        colors: ['#2985d2','#f28f6c'],
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
            size: undefined,
            sizeOffset: 3
        }
    },
    title: {
        text: '파밍온',
        align: 'left',
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['3/12', '3/13', '3/14', '3/15', '3/16', '3/17', '3/18', '3/19', '3/20', '3/21'],
    },
    legend: {
        show: true,
        fontSize: '16px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        offsetX: -40,
    }
}
statusFarmingon2.options = {
    series: [{
        name: "정상",
        data: [340, 345, 366, 303, 399, 345, 340, 288, 266, 301]
    },{
        name: "에러",
        data: [10, 41, 35, 51, 33, 62, 69, 45, 32, 14]
    },],
    chart: {
        toolbar: {
            show: false,
        },
        height: 243,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    colors: ['#2985d2','#f28f6c'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    markers: {
        size: 3,
        colors: ['#2985d2','#f28f6c'],
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
            size: undefined,
            sizeOffset: 3
        }
    },
    title: {
        text: '파밍온2',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['3/12', '3/13', '3/14', '3/15', '3/16', '3/17', '3/18', '3/19', '3/20', '3/21'],
    },
    legend: {
        show: true,
        fontSize: '16px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        offsetX: -40,
    }
}
statusRmfarm.options = {
    series: [{
        name: "정상",
        data: [300, 345, 325, 345, 333, 311, 312, 345, 299, 341]
    },{
        name: "에러",
        data: [10, 41, 35, 51, 49, 12, 5, 41, 30, 28]
    },],
    chart: {
        toolbar: {
            show: false,
        },
        height: 243,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    colors: ['#2985d2','#f28f6c'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    markers: {
        size: 3,
        colors: ['#2985d2','#f28f6c'],
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
            size: undefined,
            sizeOffset: 3
        }
    },
    title: {
        text: '알엠팜',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['3/12', '3/13', '3/14', '3/15', '3/16', '3/17', '3/18', '3/19', '3/20', '3/21'],
    },
    legend: {
        show: true,
        fontSize: '16px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        offsetX: -40,
    }
}

// 작물정보
crops.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
        width:'100%',
        height: 243,
    },
    series: [{
        name: '미입력',
        data: [146, 15, 150]
    },{
        name: '딸기',
        data: [15, 5, 30]
    },{
        name: '토마토',
        data: [166, 3, 123]
    },{
        name: '파프리카',
        data: [80, 12, 101]
    }],
    xaxis: {
        categories: ['파밍온', '파밍온2', '알엠팜'],
    },
    plotOptions: {
        bar: {
            borderRadius: 3,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
            columnWidth: '50%',
        }
    },
    dataLabels: {
        enabled: true,
        // formatter: function (val) {
        //     return val + "%";
        // },
        offsetY: -20,
        style: {
            fontSize: '16px',
            colors: ["#304758"]
        }
    },
    responsive: [
        {
            breakpoint: 1000,
            options: {
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                legend: {
                    position: "bottom"
                }
            }
        }
    ],
    colors: ['#2985d2','#6d9d64','#f1c644','#f28f6c'],
    // colors: ['#5e58c9','#2985d2','#2eb7c4','#6d9d64','#b5bf1b','#f1c644','#f28f6c'],
    stroke: {
        show: true,
        // curve: 'smooth',
        lineCap: 'butt',
        colors: '#ffffff',
        width: 2,
        dashArray: 0,
    },
    legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '16px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        offsetX: -40,
        markers: {
            width: 8,
            height: 8,
            strokeWidth: 0,
            strokeColor: '#fff',
            radius: 12,
            offsetX: 0,
            offsetY: 20
        },
        itemMargin: {
            horizontal: 10,
            vertical: 0
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
    }
}
// 데이터 전송
dataTransfer.options = {
    series: [271, 373, 434],
    labels: ['정상', '미전송', '대기'],
    chart: {
        type: 'donut',
        width:'100%',
        height: 280,
    },
    colors: ['#2985d2', '#f1c644','#f28f6c'],
    stroke: {
        show: true,
        colors: '#fff',
        width: 1,
        dashArray: 0,
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true,
                    },
                    value: {
                        show: true,
                    },
                    total: {
                        show: true,
                    }
                }
            }
        }
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '16px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        offsetY: 8,
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
    },
}
// 스마트폰 사용정보
smartphone.options = {
    series: [525, 300],
    labels: ['안드로이드', 'IOS'],
    chart: {
        type: 'donut',
        width:'100%',
        height: 280,
    },
    colors: ['#b5d130', '#60bd85'],
    // colors: ['#8176d4','#4d5dbe','#2985d2','#2eb7c4','#4cd3c5','#60bd85','#609057','#a7b01e','#b5d130','#f4eb00','#f1d200','#edaa4b','#ec6751','#e55d81'],
    stroke: {
        show: true,
        colors: '#fff',
        width: 1,
        dashArray: 0,
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true,
                    },
                    value: {
                        show: true,
                    },
                    total: {
                        show: true,
                    }
                }
            }
        }
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '16px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        offsetY: 8,
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
    },
}




// 장비상태정보
statusFarmingon.render = function() {
    new ApexCharts(document.querySelector("#statusFarmingon"), statusFarmingon.options).render();
}

statusFarmingon2.render = function() {
    new ApexCharts(document.querySelector("#statusFarmingon2"), statusFarmingon2.options).render();
}

statusRmfarm.render = function() {
    new ApexCharts(document.querySelector("#statusRmfarm"), statusRmfarm.options).render();
}

// 작물정보
crops.render = function() {
    new ApexCharts(document.querySelector("#crops"), crops.options).render();
}
// 데이터 전송
dataTransfer.render = function() {
    new ApexCharts(document.querySelector("#dataTransfer"), dataTransfer.options).render();
}
// 스마트폰 사용정보
smartphone.render = function() {
    new ApexCharts(document.querySelector("#smartphone"), smartphone.options).render();
}
