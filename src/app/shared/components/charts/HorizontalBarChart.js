import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");

export default class HorizontalBarChart extends Component {
    componentDidMount() {
        let info = this.props

        // let card_name = info['name'];
        let chart_id = info['chart_id'];
        let data = info['graph-data'];
        let bar_color = info['bar_color'];
        let chart = am4core.create(chart_id, am4charts.XYChart);
        chart.fontFamily = "Ubuntu";//TO CHANGE FONT SIZE OF CHART LABELS
        chart.fontSize = 12;//TO CHANGE FONT SIZE OF CHART LABELS
        chart.data = data;
        chart.colors.list = [
            am4core.color(bar_color)
        ];

        chart.data = data;
        // Create axes
        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "age";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 10;
        // categoryAxis.interpolationDuration = 2000;
        categoryAxis.renderer.baseGrid.disabled = true;
        categoryAxis.renderer.grid.template.strokeWidth = 0;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.inside = false;
        categoryAxis.renderer.labels.template.fill = am4core.color("#757575");
        categoryAxis.renderer.labels.template.fontSize = 12;
        categoryAxis.renderer.cellStartLocation = 0.3;
        categoryAxis.renderer.cellEndLocation = 0.5;
        categoryAxis.tooltip.disabled = true; // for disabling to the y axis tooltip

        var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.labels.template.fill = am4core.color("#757575");
        valueAxis.renderer.labels.template.fontSize = 12;
        valueAxis.renderer.cellStartLocation = 0.2;
        valueAxis.renderer.cellEndLocation = 0.8;
        valueAxis.tooltip.disabled = true; // for disabling to the y axis tooltip

        // Create series
        function createSeries(field, name) {
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueX = "research";
            series.dataFields.categoryY = "age";
            // series.columns.template.tooltipText = "[bold]{valueX}[/]";
            series.columns.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
            series.tensionX = 0.77;
            series.columns.template.strokeWidth = .2;
            series.columns.template.strokeOpacity = 0;
            series.columns.template.column.cornerRadiusBottomRight = 10;
            series.columns.template.column.cornerRadiusTopRight = 10;
            series.columns.template.width = am4core.percent(5);

            var tooltipHTML =
                `
                <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%">
                <div class="text-left d-flex flex-column justify-start" style="width: 150px; padding:10px">
                  <span style="font-size: 13px; color: #fff; font-weight: 400">{valueX}%</span>
                  <span style="font-size: 12px; color: #7D9EB5; font-weight: 300">Age Group: {age}</span>
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
            series.tooltip.position = "pointer";
            // series.tooltip.pointerOrientation = "vertical";
            series.tooltipHTML = tooltipHTML;
            var shadow = series.tooltip.background.filters.getIndex(0);
            shadow.dx = 3;
            shadow.dy = 10;
            shadow.blur = 10;
            shadow.color = am4core.color("#14567829");

            var hs = series.columns.template.states.create("hover");
            hs.properties.fillOpacity = 0.7;

            var columnTemplate = series.columns.template;
            columnTemplate.maxX = 0;
            columnTemplate.draggable = true;

            columnTemplate.events.on("dragstart", function (ev) {
                var dataItem = ev.target.dataItem;

                var axislabelItem = categoryAxis.dataItemsByCategory.getKey(
                    dataItem.categoryY
                )._label;
                axislabelItem.isMeasured = false;
                axislabelItem.minX = axislabelItem.pixelX;
                axislabelItem.maxX = axislabelItem.pixelX;

                axislabelItem.dragStart(ev.target.interactions.downPointers.getIndex(0));
                axislabelItem.dragStart(ev.pointer);
            });
            columnTemplate.events.on("dragstop", function (ev) {
                var dataItem = ev.target.dataItem;
                var axislabelItem = categoryAxis.dataItemsByCategory.getKey(
                    dataItem.categoryY
                )._label;
                axislabelItem.dragStop();
                // handleDragStop(ev);
            });
        }
        createSeries("research", "Research");

        // Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";

    }

    render() {
        let chart_class = this.props.chart_class;
        let chart_id = this.props.chart_id;

        return (
            <div id={chart_id} className={chart_class}></div>
            // <div id="chartdiv"></div>
        )
    }
}
