import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");


export default class CountryChart extends Component {
    componentDidMount() {
        let info = this.props;

        let chart_id = info['chart_id'];
        // let data = JSON.parse(info['graph-data']);

        var chart = am4core.create(chart_id, am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Series for World map
        var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldSeries.exclude = ["AQ"];
        worldSeries.useGeodata = true;
        var polygonTemplate = worldSeries.mapPolygons.template;
        polygonTemplate.tooltipText = tooltipHTML;
        polygonTemplate.fill = am4core.color("#4CC3FD");
        polygonTemplate.propertyFields.disabled = "disabled";
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#11A1FD");
        worldSeries.data = [{
            id: "US",
            disabled: true
        }];

        // Series for United States map
        var usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
        usaSeries.geodata = am4geodata_worldLow;
        var polygonTemplate = usaSeries.mapPolygons.template;
        polygonTemplate.tooltipText = tooltipHTML;
        polygonTemplate.fill = am4core.color("#4CC3FD");
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#11A1FD");

        var tooltipHTML =
            `
      <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%">
        <div class="text-left d-flex flex-column justify-start" style="width: 150px; padding:10px">
          <span style="font-size: 13px; color: #fff; font-weight: 400">{name}</span>
          <span style="font-size: 12px; color: #7D9EB5; font-weight: 300">Country</span>        
        </div>
      </div>
      `;

        // Tooltip 
        worldSeries.tooltip.getFillFromObject = false;
        worldSeries.tooltip.background.fill = am4core.color("#213345");
        worldSeries.tooltip.background.stroke = am4core.color("#213345");
        worldSeries.tooltip.background.cornerRadius = 5;
        worldSeries.tooltip.label.minWidth = 150;
        worldSeries.tooltip.label.padding(0, 0, 0, 0);
        worldSeries.tooltip.label.fontSize = 12;
        worldSeries.tooltip.position = "pointer";
        // series.tooltip.pointerOrientation = "vertical";
        worldSeries.tooltipHTML = tooltipHTML;
        var shadow = worldSeries.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");

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
