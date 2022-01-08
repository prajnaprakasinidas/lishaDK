import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
export default class BulletPiechart extends Component {

    componentDidMount() {

        let info = this.props;

        let chart_id = info['chart_id'];
        let bardata = info['graph-data1'];
        let piedata = info['graph-data2'];
        let metric_1 = info['metric_1'];
        let metric_2 = info['metric_2'];

        // Create chart instance
        let chart = am4core.create(chart_id, am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.fontFamily = "Ubuntu";//TO CHANGE FONT SIZE OF CHART LABELS
        chart.fontSize = 12;//TO CHANGE FONT SIZE OF CHART LABELS

        // Add data
        chart.data = bardata;

        // CHART COLORSET
        var colorSet = new am4core.ColorSet();
        colorSet.list = ["#4CC3FD", "red"].map(function (color) {
            return new am4core.color(color);
        });
        chart.colors = colorSet;

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF X AXIS LABELS
        categoryAxis.renderer.line.strokeOpacity = 0.2; // for reducing the x axis opacity 
        categoryAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the x axis color
        categoryAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF X AXIS LABELS
        categoryAxis.tooltip.disabled = true; // for disabling to the x axis tooltip

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.line.strokeOpacity = 0.2; // for reducing the Y axis opacity
        valueAxis.min = 0;
        valueAxis.renderer.baseGrid.disabled = true;
        valueAxis.renderer.grid.template.strokeOpacity = 0.07;
        valueAxis.renderer.line.strokeOpacity = 0; // for reducing the x axis opacity 
        valueAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the Y axis color
        valueAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF X AXIS LABELS
        valueAxis.tooltip.disabled = true; // for disabling to the x axis tooltip

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "units";
        series.dataFields.categoryX = "country";
        series.tooltip.pointerOrientation = "vertical";

        var tooltipHTML =
            `
            <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%">
            <div class="text-left d-flex flex-column justify-start" style="width: 150px; padding:10px">
              <span style="font-size: 13px; color: #fff; font-weight: 400">{units}</span>
              <span style="font-size: 12px; color: #7D9EB5; font-weight: 300">{country}</span>
            </div>
          </div>
      `;

        // Tooltip 
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("#213345");
        series.tooltip.background.stroke = am4core.color("#213345");
        series.tooltip.background.cornerRadius = 5;
        // series.tooltip.background.strokeOpacity = 0;
        series.tooltip.label.minWidth = 150;
        series.tooltip.label.padding(0, 0, 0, 0);
        series.tooltip.label.fontSize = 12;
        // series.tooltip.position = "pointer";
        // series.tooltip.pointerOrientation = "vertical";
        series.tooltipHTML = tooltipHTML;
        var shadow = series.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");


        let columnTemplate = series.columns.template;
        // add tooltip on column, not template, so that slices could also have tooltip
        // columnTemplate.column.tooltipText = "Category: {categoryX}\nValue: {valueY}";
        columnTemplate.column.tooltipText = pieChartTooltipHTML;
        columnTemplate.column.tooltipY = 0;
        columnTemplate.column.cornerRadiusTopLeft = 20;
        columnTemplate.column.cornerRadiusTopRight = 20;
        columnTemplate.strokeOpacity = 0;

        var pieChartTooltipHTML =
            `
            <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%">
                <div class="text-left d-flex flex-column justify-start" style="width: 150px; padding:10px">
                <span style="font-size: 13px; color: #fff; font-weight: 400">{valueY}</span>
                <span style="font-size: 12px; color: #7D9EB5; font-weight: 300">{categoryX}</span>
                </div>
            </div>
      `;


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


        // Create chart instance
        let chart2 = am4core.create("chart", am4charts.XYChart);
        chart2.hiddenState.properties.opacity = 0; // this creates initial fade-in

        // Add data
        chart2.data = piedata;

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
        // columnTemplate2.column.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
        columnTemplate2.column.tooltipText = pieChartTooltipHTML;
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

        // Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";


    }
    render() {
        let chart_class = this.props.chart_class;
        let chart_id = this.props.chart_id;

        return (
            <div id={chart_id} className={chart_class}></div>
        )
    }
}