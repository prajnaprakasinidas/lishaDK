import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");

export default class CombinedColumnLineChart extends Component {
    componentDidMount() {
        let info = this.props
        let chart_id = info['chart_id'];
        let data = JSON.parse(info['graph-data']);

        let chart = am4core.create(chart_id, am4charts.XYChart);
        chart.fontFamily = "Ubuntu"; //TO CHANGE FONT SIZE OF CHART LABELS
        chart.fontSize = 12; //TO CHANGE FONT SIZE OF CHART LABELS

        chart.data = data;

        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        //dateAxis.renderer.grid.template.location = 0;
        //dateAxis.renderer.minGridDistance = 30;
        dateAxis.tooltip.disabled = true; 

        let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.title.text = "Total Videos";
        valueAxis1.tooltip.disabled = true; 

        let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis2.title.text = "Views Count";
        valueAxis2.renderer.opposite = true;
        valueAxis2.renderer.grid.template.disabled = true;
        valueAxis2.tooltip.disabled = true; 

        

        // Create series
        let series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.dataFields.valueY = "videos1";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "Target Videos";
        series1.tooltipText = "{name}\n[bold]${valueY}M[/]";
        series1.fill = chart.colors.getIndex(0);
        series1.strokeWidth = 0;
        series1.clustered = false;
        series1.columns.template.width = am4core.percent(10);
        series1.tooltip.getFillFromObject = false;
        series1.tooltip.background.fill = am4core.color("#213345");
        series1.tooltip.background.cornerRadius = 5;
        series1.tooltip.label.padding(10, 10, 10, 10);
        series1.tooltip.label.fontSize = 12;
        series1.tooltip.pointerOrientation = "vertical";
        series1.tooltip.label.minWidth = 150;
        var shadow = series1.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");

        let series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = "videos2";
        series2.dataFields.dateX = "date";
        series2.yAxis = valueAxis1;
        series2.name = "Actual Videos";
        series2.tooltipText = "{name}\n[bold]${valueY}M[/]";
        series2.fill = chart.colors.getIndex(0).lighten(0.5);
        series2.strokeWidth = 0;
        series2.clustered = false;
        series2.toBack();
        series2.columns.template.width = am4core.percent(30);
        series2.tooltip.getFillFromObject = false;
        series2.tooltip.background.fill = am4core.color("#213345");
        series2.tooltip.background.cornerRadius = 5;
        series2.tooltip.label.padding(10, 10, 10, 10);
        series2.tooltip.label.fontSize = 12;
        series2.tooltip.pointerOrientation = "vertical";
        series2.tooltip.label.minWidth = 150;
        var shadow = series2.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");

        let series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = "views1";
        series3.dataFields.dateX = "date";
        series3.name = "Views Count";
        series3.stroke = series3.stroke;
        series3.strokeWidth = 2;
        series3.stroke = "#FF9931";
        series3.fill = "#FF9931";
        series3.tensionX = 0.8;
        series3.yAxis = valueAxis2;
        series3.tooltipText = "{name}\n[bold]{valueY}[/]";
        series3.tooltip.getFillFromObject = false;
        series3.tooltip.background.fill = am4core.color("#213345");
        series3.tooltip.background.cornerRadius = 5;
        series3.tooltip.label.padding(10, 10, 10, 10);
        series3.tooltip.label.fontSize = 12;
        series3.tooltip.pointerOrientation = "vertical";
        series3.tooltip.label.minWidth = 150;
        var shadow = series3.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");

        let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
        bullet3.circle.radius = 3;
        bullet3.circle.strokeWidth = 2;
        bullet3.circle.fill = am4core.color("#fff");

        let series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.valueY = "views2";
        series4.dataFields.dateX = "date";
        series4.name = "Views Count ALL";
        series4.stroke = series4.stroke;
        series4.strokeWidth = 2;
        series4.stroke = "#11A1FD";
        series4.fill = "#11A1FD";
        series4.strokeOpacity = 0.5;
        series4.tensionX = 0.8;
        series4.yAxis = valueAxis2;
        series4.tooltipText = "{name}\n[bold]{valueY}[/]";
        series4.tooltip.getFillFromObject = false;
        series4.tooltip.background.fill = am4core.color("#213345");
        series4.tooltip.background.cornerRadius = 5;
        series4.tooltip.label.padding(10, 10, 10, 10);
        series4.tooltip.label.fontSize = 12;
        series4.tooltip.pointerOrientation = "vertical";
        series4.tooltip.label.minWidth = 150;
        var shadow = series4.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");
        series4.strokeDasharray = "3,3";

        let bullet4 = series4.bullets.push(new am4charts.CircleBullet());
        bullet4.circle.radius = 3;
        bullet4.circle.strokeWidth = 2;
        bullet4.circle.fill = am4core.color("#fff");

        // Add cursor
        chart.cursor = new am4charts.XYCursor();

        

        // Add legend
        chart.legend = new am4charts.Legend();
        chart.legend.position = "bottom";
        chart.legend.useDefaultMarker = true;
        chart.legend.labels.template.text = "{name}";
        chart.legend.labels.template.fill = "#213345";
        chart.legend.fill = "rgba(112, 112, 112, 0.1)";
        chart.legend.opacity = 1;
        var markerTemplate = chart.legend.markers.template;
        let marker = chart.legend.markers.template.children.getIndex(0);
        marker.cornerRadius(12, 12, 12, 12);
        markerTemplate.width = 13;
        markerTemplate.height = 13;

        // Add scrollbar
        chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series1);
        chart.scrollbarX.series.push(series3);
        chart.scrollbarX.parent = chart.bottomAxesContainer;
    }

    render() {
        let chart_class = this.props.chart_class;
        let chart_id = this.props.chart_id;

        return (
            <div id={chart_id} className={chart_class}></div>
        )
    }
}
