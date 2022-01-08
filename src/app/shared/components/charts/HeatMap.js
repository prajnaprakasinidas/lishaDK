import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");


export default class HeatMap extends Component {
    componentDidMount() {

        let info = this.props;
        let chart_id = info['chart_id'];
        let data = info['graph-data'];

        var chart = am4core.create(chart_id, am4charts.XYChart);
        chart.maskBullets = false;

        var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());

        xAxis.dataFields.category = "weekday";
        yAxis.dataFields.category = "hour";

        xAxis.renderer.grid.template.disabled = true;
        xAxis.renderer.minGridDistance = 40;

        yAxis.renderer.grid.template.disabled = true;
        yAxis.renderer.inversed = true;
        yAxis.renderer.minGridDistance = 30;

        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "weekday";
        series.dataFields.categoryY = "hour";
        series.dataFields.value = "value";
        series.sequencedInterpolation = true;
        series.defaultState.transitionDuration = 3000;
        series.columns.template.width = am4core.percent(100);
        series.columns.template.height = am4core.percent(100);

        var tooltipHTML =
            `
      <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%">
        <div class="text-left d-flex flex-column justify-start" style="width: 150px; padding:10px">
          <span style="font-size: 13px; color: #fff; font-weight: 400">{value.workingValue.formatNumber('#.')}</span>
        </div>
        <div class="d-flex justify-content-between"
        style="width: 150px; background-color: #1A2B3D; padding: 10px 5px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;">
            <span style="font-size: 13px; color: #fff; font-weight: 400">{weekday} {hour}</span>
        </div>
      </div>
      `;

        // Tooltip 
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("#213345");
        series.tooltip.background.stroke = am4core.color("#213345");
        series.tooltip.background.cornerRadius = 5;
        series.tooltip.label.minWidth = 150;
        series.tooltip.label.padding(0, 0, 0, 0);
        series.tooltip.label.fontSize = 12;
        series.tooltip.position = "pointer";
        // series.tooltip.pointerOrientation = "vertical";
        series.tooltipHTML = tooltipHTML;
        var shadow = series.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");

        series.heatRules.push({ target: series.columns.template, property: "fill", min: am4core.color("#ffffff"), max: am4core.color("#11a1fd") });

        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        columnTemplate.stroke = am4core.color("#ffffff");
        columnTemplate.tooltipText = "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}";

        // heat legend
        var heatLegend = chart.bottomAxesContainer.createChild(am4charts.HeatLegend);
        heatLegend.width = am4core.percent(100);
        heatLegend.series = series;
        heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
        heatLegend.valueAxis.renderer.minGridDistance = 30;

        // heat legend behavior
        series.columns.template.events.on("over", (event) => {
            handleHover(event.target);
        })

        series.columns.template.events.on("hit", (event) => {
            handleHover(event.target);
        })

        function handleHover(column) {
            if (!isNaN(column.dataItem.value)) {
                heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
            }
            else {
                heatLegend.valueAxis.hideTooltip();
            }
        }

        series.columns.template.events.on("out", (event) => {
            heatLegend.valueAxis.hideTooltip();
        })

        chart.data = data;

        // Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";

    }


    render() {

        let chart_class = this.props.chart_class;
        let chart_id = this.props.chart_id;

        return (
            <div id={chart_id} className={chart_class} ></div>
        )
    }
}