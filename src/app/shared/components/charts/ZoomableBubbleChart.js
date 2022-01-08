import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");

export class ZoomableBubbleChart extends Component {
    componentDidMount() {

        console.log("this is props ", this.props)

        let info = this.props

        let card_id = info['card_id'];
        let data = JSON.parse(info['graph-data']);

        console.log("cardname", card_id);
        console.log("data", data);

        let chart = am4core.create(card_id, am4charts.XYChart);

        chart.data = data
        chart.fontSize = 12;
        chart.fontFamily = "Ubuntu";

        let valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxisX.renderer.ticks.template.disabled = true;
        valueAxisX.renderer.axisFills.template.disabled = true;
        valueAxisX.renderer.line.strokeOpacity = 0.2; // for reducing the x axis opacity 
        valueAxisX.renderer.line.stroke = am4core.color("#707070"); // for changing the x axis color
        valueAxisX.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF X AXIS LABELS
        valueAxisX.tooltip.disabled = true; // for disabling to the x axis tooltip

        let valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxisY.renderer.ticks.template.disabled = true;
        valueAxisY.renderer.axisFills.template.disabled = true;
        valueAxisY.renderer.line.strokeOpacity = 0; // for reducing the x axis opacity 
        valueAxisY.renderer.line.stroke = am4core.color("#707070"); // for changing the Y axis color
        valueAxisY.renderer.grid.template.strokeWidth = 1; //disable horizontal lines
        valueAxisY.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF Y AXIS LABELS
        valueAxisY.renderer.line.strokeOpacity = 0.2; // for reducing the Y axis opacity 
        valueAxisY.tooltip.disabled = true; // for disabling to the y axis tooltip

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueX = "x";
        series.dataFields.valueY = "y";
        series.dataFields.value = "value";
        series.strokeOpacity = 0;
        series.sequencedInterpolation = true;
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("#213345");
        series.tooltip.background.cornerRadius = 5;
        series.tooltip.label.padding(10, 10, 10, 10);
        series.tooltip.label.fontSize = 12;
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.label.minWidth = 150;
       
        var shadow = series.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");
        series.legendSettings.valueText = "{valueY}";

        var bullet = series.bullets.push(new am4core.Circle());
        bullet.fill = am4core.color("#ff0000");
        bullet.propertyFields.fill = "color";
        bullet.strokeOpacity = 0;
        bullet.strokeWidth = 2;
        bullet.stroke = am4core.color("#ffffff");
        bullet.hiddenState.properties.opacity = 1;
        bullet.tooltipText = "{title} - x: {valueX}, y: {valueY}";

        series.heatRules.push({ target: bullet, min: 2, max: 60, property: "radius" });


        bullet.adapter.add("tooltipY", function (tooltipY, target) {
            return -target.radius;
        })

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomXY";
        chart.cursor.snapToSeries = series;

        var colorSet = new am4core.ColorSet();
        colorSet.list = ["#11A1FD", "#FF9931", "#5A75F9", "#07C180", "#D51F30", "#4CC3FD", "#E96E7A", "#8298FB", "#3CD795", "#FFB866"].map(function (color) {
            return new am4core.color(color);
        });
        series.colors = colorSet;

        chart.paddingBottom = 10;
        chart.paddingTop = 10;
        chart.paddingLeft = 10;
        chart.paddingRight = 10;

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
