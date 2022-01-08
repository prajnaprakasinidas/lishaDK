import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");


export default class DonutPieChart extends Component {
    componentDidMount() {

        let info = this.props
        console.log('info', info);
        let chart_id = info['chart_id'];
        let data = info['graph-data'];
        let title = info['center_title'];
        let color_set = info['chart_color_set'];
        console.log('color_set', color_set);

        let chart = am4core.create(chart_id, am4charts.PieChart);
        chart.fontFamily = "Ubuntu";//TO CHANGE FONT SIZE OF CHART LABELS
        chart.fontSize = 12;//TO CHANGE FONT SIZE OF CHART LABELS
        chart.data = data;
        chart.colors.list = [
            am4core.color("#11A1FD"),
            am4core.color("#FF9931"),
        ];

        var label = chart.seriesContainer.createChild(am4core.Label);
        label.text = title;
        label.horizontalCenter = "middle";
        label.verticalCenter = "middle";
        label.fontSize = 18;

        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";

        chart.innerRadius = am4core.percent(40);

        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 1;
        pieSeries.slices.template.strokeOpacity = 0.2;
        pieSeries.slices.template
            .cursorOverStyle = [
                {
                    "property": "cursor",
                    "value": "pointer"
                }
            ];

        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;


        // Create a base filter effect (as if it's not there) for the hover to return to
        var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
        shadow.opacity = 0;

        // Create hover state
        var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

        // Slightly shift the shadow and make it more prominent on hover
        var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
        hoverShadow.opacity = 0.7;
        hoverShadow.blur = 5;

        var colorSet = new am4core.ColorSet();
        colorSet.list = color_set.map(function (color) {
            return new am4core.color(color);
        });
        pieSeries.colors = colorSet;

    }


    render() {

        let chart_class = this.props.chart_class;
        let chart_id = this.props.chart_id;

        return (
            <div id={chart_id} className={chart_class}></div>
        )
    }
}
