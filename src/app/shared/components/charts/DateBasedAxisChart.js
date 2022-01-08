import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");

export default class DateBasedAxisChart extends Component {
    componentDidMount() {
        console.log("this is props ", this.props)

        let info = this.props

        // let card_name = info['name'];

        let card_id = info['card_id'];
        let data = JSON.parse(info['graph-data']);

        console.log("cardname"); //Avgsession_barchart
        console.log("data", data);


        // Create chart instance
        let chart = am4core.create(card_id, am4charts.XYChart);

        chart.data = data
        chart.fontSize = 12;

        var colorSet = new am4core.ColorSet();
        colorSet.list = ["#11A1FD", "#FF9931"].map(function (color) {
            return new am4core.color(color);
        });
        chart.colors = colorSet;

        // Create axes
        let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
        xAxis.renderer.minGridDistance = 50;

        let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
        yAxis.renderer.minGridDistance = 50;

        // Create series #1
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "y";
        series.dataFields.valueX = "x";
        series.dataFields.value = "value";
        series.strokeOpacity = 0;
        series.name = "Series 1";
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("#213345");
        series.tooltip.background.cornerRadius = 5;
        series.tooltip.label.padding(10, 10, 10, 10);
        series.tooltip.label.fontSize = 12;
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.label.minWidth = 100;
        var shadow = series.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");



        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.strokeOpacity = 0.2;
        bullet.stroke = am4core.color("#11A1FD");
        bullet.nonScalingStroke = true;
        bullet.tooltipText = "x: {valueX} y: {valueY}";
        series.heatRules.push({
            target: bullet.circle,
            min: 10,
            max: 20,
            property: "radius"
        });

        // Create series #2
        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "y2";
        series2.dataFields.valueX = "x2";
        series2.dataFields.value = "value2";
        series2.strokeOpacity = 0;
        series2.name = "Series 2";
        series2.tooltip.getFillFromObject = false;
        series2.tooltip.background.fill = am4core.color("#213345");
        series2.tooltip.background.cornerRadius = 5;
        series2.tooltip.label.padding(10, 10, 10, 10);
        series2.tooltip.label.fontSize = 12;
        series2.tooltip.pointerOrientation = "vertical";
        series2.tooltip.label.minWidth = 100;
        var shadow = series2.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");

        let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
        bullet2.strokeOpacity = 0.2;
        bullet2.stroke = am4core.color("#FF9931");
        bullet2.nonScalingStroke = true;
        bullet2.tooltipText = "x: {valueX} y: {valueY}";
        series2.heatRules.push({
            target: bullet2.circle,
            min: 10,
            max: 20,
            property: "radius"
        });


        chart.legend = new am4charts.Legend();
        chart.legend.useDefaultMarker = true;
        chart.legend.labels.template.text = "{name}";
        chart.legend.fill = "rgba(112, 112, 112, 0.1)";
        chart.legend.opacity = 1;
        var markerTemplate = chart.legend.markers.template;
        let marker = chart.legend.markers.template.children.getIndex(0);
        marker.cornerRadius(12, 12, 12, 12);
        markerTemplate.width = 13;
        markerTemplate.height = 13;

    }

    render() {
        let card_class = this.props.card_class;
        let card_id = this.props.card_id;
        return (
            <div>
                <div id={card_id} className={card_class}></div>
            </div>
        )
    }
}
