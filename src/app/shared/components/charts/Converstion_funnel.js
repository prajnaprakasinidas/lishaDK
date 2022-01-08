import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

export default class Converstion_funnel extends Component {
    componentDidMount() {

        console.log("this is props ", this.props)

        let info = this.props

        // let card_name = info['name'];
        let card_id = info['card_id'];
        let data = JSON.parse(info['graph-data']);
     
        let chart = am4core.create(card_id , am4charts.SlicedChart);
        chart.hiddenState.properties.opacity = 0;
      

        chart.data = data;
        let series = chart.series.push(new am4charts.FunnelSeries());
        series.colors.step = 2;
        series.dataFields.value = "value";
        series.dataFields.category = "name";
        series.alignLabels = false;
        series.labels.template.disabled = true;
        series.orientation = "horizontal";
        series.bottomRatio = 1;
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("#213345");
        series.tooltip.background.stroke = am4core.color("#213345");
        series.tooltip.label.fill = am4core.color("#ffffff");
        series.tooltip.label.fontSize = 12;

        chart.legend = new am4charts.Legend();

        chart.legend.labels.template.maxWidth = 150;

        chart.legend.paddingBottom = 0;
        chart.legend.paddingTop = 0;
        chart.legend.paddingLeft = 0;
        chart.legend.paddingRight = 0;
        chart.legend.labels.template.fontSize = 12;
        // chart.legend.labels.template.fontFamily = "Ubuntu";
        let markerTemplate = chart.legend.markers.template;
        markerTemplate.width = 10;
        markerTemplate.height = 10;
        chart.legend.valueLabels.template.disabled = true; //value label hide

        var colorSet = new am4core.ColorSet();
        colorSet.list = ["#038ce3", "#1ca6fc", "#4fb9fd", "#81cdfd", "#b3e1fe", "#e6f5ff", "#9ecae6"].map(function (color) {
            return new am4core.color(color);
        });
        series.colors = colorSet;
    }


    render() {
        let card_class = this.props.card_class;
        let card_id = this.props.card_id;
        return (
            <div>
            <div id={card_id} className={card_class} > </div>
            </div>
        )
    }
}
