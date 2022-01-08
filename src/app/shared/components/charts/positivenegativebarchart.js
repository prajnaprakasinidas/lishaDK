import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");


export default class PositiveNegativeBarChart extends Component {
    componentDidMount() {

        let info = this.props;

        let chart_id = info['chart_id'];
        let data = info['graph-data'];
        let metric_1 = info['metric_1'];
        let metric_2 = info['metric_2'];

        let chart = am4core.create(chart_id, am4charts.XYChart);
        chart.fontFamily = "Ubuntu"; //TO CHANGE FONT SIZE OF CHART LABELS
        chart.fontSize = 12; //TO CHANGE FONT SIZE OF CHART LABELS

        // Add data
        chart.data = data;
        chart.colors.list = [
            am4core.color("#11A1FD"),
            am4core.color("#FF9931"),
        ];

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        // dateAxis.renderer.minGridDistance = 30;
        dateAxis.renderer.grid.template.disabled = true;
        dateAxis.renderer.line.strokeOpacity = 0.2; // for reducing the x axis opacity 
        dateAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the x axis color
        dateAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF X AXIS LABELS
        dateAxis.startLocation = 0.5;
        dateAxis.endLocation = 0;
        dateAxis.tooltip.disabled = true; // for disabling to the x axis tooltip

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.line.strokeOpacity = 0.2; // for reducing the Y axis opacity 
        valueAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the Y axis color
        valueAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF Y AXIS LABELS
        valueAxis.renderer.line.strokeOpacity = 0.2; // for reducing the Y axis opacity 
        valueAxis.tooltip.disabled = true; // for disabling to the y axis tooltip


        // Create series
        function createSeries(field, name) {
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = field;
            series.dataFields.dateX = "date";
            series.name = name;
            // series.tooltipText = "{dateX}: [b]{valueY}[/]";
            series.columns.template.width = am4core.percent(10);
            
            series.columns.template.column.adapter.add("cornerRadiusTopLeft", topRadius);
            series.columns.template.column.adapter.add("cornerRadiusTopRight", topRadius);
            series.columns.template.column.adapter.add("cornerRadiusBottomLeft", bottomRadius);
            series.columns.template.column.adapter.add("cornerRadiusBottomRight", bottomRadius);


            var tooltipHTML =
                `
                    <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%; paddding: 10px">
                        <table style="padding: 10px">
                            <tr style="padding: 10px">
                                <th align="left"></th>
                                <td style="padding: 5px; font-weight: bold">Net ` + metric_1 + `s</td>
                                <td style="padding: 5px; font-weight: bold">Net ` + metric_2 + `s</td>
                            </tr>
                            <tr style="text-align: center">
                                <th align="left" style="padding: 5px">Current Period</th>
                                <td>{value}</td>
                                <td>{value2}</td>
                            </tr>
                            <tr style="5px; text-align: center">
                                <th align="left" style="padding: 5px">Previous\nPeriod</th>
                                <td>{value}</td>
                                <td>{value2}</td>
                            </tr>
                            <tr style="5px; text-align: center">
                                <th align="left" style="padding: 5px">% Growth</th>
                                <td>{value}</td>
                                <td>{value2}</td>
                            </tr>
                        </table>
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


            return series;
        }

        function topRadius(radius, target) {
            return (target.dataItem && (target.dataItem.valueY < 0)) ? 0 : 5;
        }

        function bottomRadius(radius, target) {
            return (target.dataItem && (target.dataItem.valueY > 0)) ? 0 : 5;
        }

        createSeries("value", metric_1);
        createSeries("value2", metric_2);

        chart.cursor = new am4charts.XYCursor()
        chart.cursor.maxTooltipDistance = -1


        // LEGENDS
        chart.legend = new am4charts.Legend();
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

    }


    render() {

        let chart_class = this.props.chart_class;
        let chart_id = this.props.chart_id;

        return ( 
            <div id={chart_id} className={chart_class}></div>
        )
    }
}