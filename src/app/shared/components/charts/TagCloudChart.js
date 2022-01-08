import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

export default class TagCloudChart extends Component {
    componentDidMount() {
        console.log("this is props ", this.props)

        let info = this.props

        let card_id = info['card_id'];
        let data = info['graph-data'];

        console.log("cardname", card_id);
        console.log("data", data);

        let chart = am4core.create(card_id, am4plugins_wordCloud.WordCloud);
        chart.fontFamily = "Ubuntu";
        let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
        series.randomness = 0.1;
        series.rotationThreshold = 0.5;
       
        // Add data
        series.data = data

        series.dataFields.word = "tag";
        series.dataFields.value = "count";

        series.heatRules.push({
            "target": series.labels.template,
            "property": "fill",
            "min": am4core.color("#11A1FD"),
            "max": am4core.color("#085DB6"),
            "dataField": "value"
           });
           
           series.labels.template.url = "";
           series.labels.template.urlTarget = "_blank";
           series.labels.template.tooltipText = "{word}: {value}";
           series.tooltip.getFillFromObject = false;
           series.tooltip.background.fill = am4core.color("#213345");
           series.tooltip.background.stroke = am4core.color("#213345");
           series.tooltip.background.cornerRadius = 5;
           series.tooltip.label.padding(10, 10, 10, 10);
           series.tooltip.label.fontSize = 13;
           series.tooltip.autoTextColor = false;
           series.tooltip.label.fill = am4core.color("#fff");
           series.tooltip.pointerOrientation = "vertical";
           series.tooltip.label.minWidth = 150;
           var shadow = series.tooltip.background.filters.getIndex(0);
           shadow.dx = 3;
           shadow.dy = 10;
           shadow.blur = 10;
           shadow.color = am4core.color("#14567829");
           
           let hoverState = series.labels.template.states.create("hover");
           hoverState.properties.fill = am4core.color("#213345");
           
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
