import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
export default class BulletPiechart extends Component {

    componentDidMount(props) {

        let data = [{
            "country": "Lithuania",
            "units": 500,
            "pie": [{
                "value": 250,
                "title": "Cat #1"
            }, {
                "value": 150,
                "title": "Cat #2"
            }, {
                "value": 100,
                "title": "Cat #3"
            }]
        }, {
            "country": "Czechia",
            "units": 300,
            "pie": [{
                "value": 80,
                "title": "Cat #1"
            }, {
                "value": 130,
                "title": "Cat #2"
            }, {
                "value": 90,
                "title": "Cat #3"
            }]
        }, {
            "country": "Ireland",
            "units": 200,
            "pie": [{
                "value": 75,
                "title": "Cat #1"
            }, {
                "value": 55,
                "title": "Cat #2"
            }, {
                "value": 70,
                "title": "Cat #3"
            }]
        }];


        // Create chart instance
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        // Add data
        chart.data = data;

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.disabled = true;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Units sold (M)";
        valueAxis.min = 0;
        valueAxis.renderer.baseGrid.disabled = true;
        valueAxis.renderer.grid.template.strokeOpacity = 0.07;

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "units";
        series.dataFields.categoryX = "country";
        series.tooltip.pointerOrientation = "vertical";


        let columnTemplate = series.columns.template;
        // add tooltip on column, not template, so that slices could also have tooltip
        columnTemplate.column.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
        columnTemplate.column.tooltipY = 0;
        columnTemplate.column.cornerRadiusTopLeft = 20;
        columnTemplate.column.cornerRadiusTopRight = 20;
        columnTemplate.strokeOpacity = 0;


        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        columnTemplate.adapter.add("fill", function (fill, target) {
            let color = chart.colors.getIndex(target.dataItem.index * 3);
            return color;
        });

        // create pie chart as a column child
        let pieChart = series.columns.template.createChild(am4charts.PieChart);
        pieChart.width = am4core.percent(80);
        pieChart.height = am4core.percent(80);
        pieChart.align = "center";
        pieChart.valign = "middle";
        pieChart.dataFields.data = "pie";

        let pieSeries = pieChart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "title";
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;
        pieSeries.slices.template.stroke = am4core.color("#ffffff");
        pieSeries.slices.template.strokeWidth = 1;
        pieSeries.slices.template.strokeOpacity = 0;

        pieSeries.slices.template.adapter.add("fill", function (fill, target) {
            return am4core.color("#ffffff")
        });

        pieSeries.slices.template.adapter.add("fillOpacity", function (fillOpacity, target) {
            return (target.dataItem.index + 1) * 0.2;
        });

        pieSeries.hiddenState.properties.startAngle = -90;
        pieSeries.hiddenState.properties.endAngle = 270;

        let data2 = [{
            "country": "Lithuania",
            "units": 500,
            "pie": [{
                "value": 250,
                "title": "Cat #1"
            }, {
                "value": 150,
                "title": "Cat #2"
            }, {
                "value": 100,
                "title": "Cat #3"
            }]
        }, {
            "country": "Czechia",
            "units": 300,
            "pie": [{
                "value": 80,
                "title": "Cat #1"
            }, {
                "value": 130,
                "title": "Cat #2"
            }, {
                "value": 90,
                "title": "Cat #3"
            }]
        }, {
            "country": "Ireland",
            "units": 30,
            "pie": [{
                "value": 75,
                "title": "Cat #1"
            }, {
                "value": 55,
                "title": "Cat #2"
            }, {
                "value": 70,
                "title": "Cat #3"
            }]
        }];


        // Create chart instance
        let chart2 = am4core.create("chart", am4charts.XYChart);
        chart2.hiddenState.properties.opacity = 0; // this creates initial fade-in

        // Add data
        chart2.data = data2;

        // Create axes
        let categoryAxis2 = chart2.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis2.dataFields.category = "country";
        categoryAxis2.renderer.grid.template.disabled = true;

        let valueAxis2 = chart2.yAxes.push(new am4charts.ValueAxis());
        valueAxis2.title.text = "Units sold (M)";
        valueAxis2.min = 0;
        valueAxis2.renderer.baseGrid.disabled = true;
        valueAxis2.renderer.grid.template.strokeOpacity = 0.07;

        // Create series
        let series2 = chart2.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = "units";
        series2.dataFields.categoryX = "country";
        series2.tooltip.pointerOrientation = "vertical";


        let columnTemplate2 = series2.columns.template;
        // add tooltip on column, not template, so that slices could also have tooltip
        columnTemplate2.column.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
        columnTemplate2.column.tooltipY = 0;
        columnTemplate2.column.cornerRadiusTopLeft = 20;
        columnTemplate2.column.cornerRadiusTopRight = 20;
        columnTemplate2.strokeOpacity = 0;


        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        columnTemplate2.adapter.add("fill", function (fill, target) {
            let color = chart.colors.getIndex(target.dataItem.index * 3);
            return color;
        });

        // create pie chart as a column child
        let pieChart2 = series.columns.template.createChild(am4charts.PieChart);
        pieChart2.width = am4core.percent(80);
        pieChart2.height = am4core.percent(80);
        pieChart2.align = "center";
        pieChart2.valign = "middle";
        pieChart2.dataFields.data = "pie";

        let pieSeries2 = pieChart2.series.push(new am4charts.PieSeries());
        pieSeries2.dataFields.value = "value";
        pieSeries2.dataFields.category = "title";
        pieSeries2.labels.template.disabled = true;
        pieSeries2.ticks.template.disabled = true;
        pieSeries2.slices.template.strokeWidth = 1;

        pieSeries2.slices.template.adapter.add("stroke", function (stroke, target) {
            return chart.colors.getIndex(target.parent.parent.dataItem.index * 3);
        });

        pieSeries2.slices.template.adapter.add("fill", function (fill, target) {
            return am4core.color("#ffffff")
        });

        pieSeries2.slices.template.adapter.add("fillOpacity", function (fillOpacity, target) {
            return (target.dataItem.index + 1) * 0.2;
        });

        pieSeries2.hiddenState.properties.startAngle = -90;
        pieSeries2.hiddenState.properties.endAngle = 270;

        // this moves the pie out of the column if column is too small
        pieChart2.adapter.add("verticalCenter", function (verticalCenter, target) {
            let point = am4core.utils.spritePointToSprite({ x: 0, y: 0 }, target.seriesContainer, chart.plotContainer);
            point.y -= target.dy;

            if (point.y > chart.plotContainer.measuredHeight - 15) {
                target.dy = -target.seriesContainer.measuredHeight - 15;
            }
            else {
                target.dy = 0;
            }
            return verticalCenter
        })


    }
    render() {
        return (
            <div>
                <div className="chartdiv chart_h300"></div>

            </div>
        )
    }
}
