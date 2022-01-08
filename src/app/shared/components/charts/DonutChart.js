import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");

export class DonutChart extends Component {
    componentDidMount(props) {
        console.log("this is props ", this.props)

        let info = this.props

        // let card_name = info['name'];

        let card_id = info['card_id'];
        let data = info['graph-data'];
        let title = info['center_title'];
        console.log("cardname"); //Avgsession_barchart
        console.log("data", data);

        let chart = am4core.create(card_id, am4charts.PieChart);


        // Add data
        chart.data = data
        chart.fontFamily = "Ubuntu";//TO CHANGE FONT SIZE OF CHART LABELS
        chart.fontSize = 12;//TO CHANGE FONT SIZE OF CHART LABELS

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "name";

        // Let's cut a hole in our Pie chart the size of 30% the radius
        chart.innerRadius = am4core.percent(40);

        // Put a thick white border around each Slice
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 1;
        pieSeries.slices.template.strokeOpacity = 0.2;
        pieSeries.slices.template
            // change the cursor on hover to make it apparent the object can be interacted with
            .cursorOverStyle = [
                {
                    "property": "cursor",
                    "value": "pointer"
                }
            ];

        pieSeries.alignLabels = false;
        pieSeries.labels.disabled = true;
        pieSeries.labels.template.bent = false;
        pieSeries.labels.template.disabled = true;
        pieSeries.labels.template.padding(0, 0, 0, 0);
        pieSeries.ticks.template.disabled = true;

        let label1 = chart.seriesContainer.createChild(am4core.Label);
        label1.text = title;
        label1.horizontalCenter = "middle";
        label1.fontSize = 20;
        label1.fontWeight = 600;
        label1.dy = -20;

        let label2 = chart.seriesContainer.createChild(am4core.Label);
        label2.text = info['card_value'];
        label2.horizontalCenter = "middle";
        label2.fontSize = 14;
        label2.dy = 10;

        pieSeries.tooltip.getFillFromObject = false;
        pieSeries.tooltip.background.fill = am4core.color("#213345");
        pieSeries.tooltip.background.stroke = am4core.color("#213345");
        pieSeries.tooltip.background.cornerRadius = 5;
        pieSeries.tooltip.label.padding(10, 10, 10, 10);
        pieSeries.tooltip.label.fontSize = 13;
        pieSeries.tooltip.autoTextColor = false;
        pieSeries.tooltip.label.fill = am4core.color("#fff");
        pieSeries.tooltip.pointerOrientation = "vertical";
        pieSeries.tooltip.label.minWidth = 150;
        
        var shadow = pieSeries.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");

        
        // Create hover state
        let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

        var colorSet = new am4core.ColorSet();
        colorSet.list = ["#11A1FD", "#FF9931", "#5A75F9", "#07C180", "#D51F30", "#4CC3FD", "#E96E7A", "#8298FB", "#3CD795", "#FFB866"].map(function (color) {
            return new am4core.color(color);
        });
        pieSeries.colors = colorSet;

        pieSeries.slices.template.events.on("hit", function (ev) {
            // let series = ev.target.dataItem.component;
            // series.slices.each(function (item) {
            //     if (item.isActive && item != ev.target) {
            //         item.isActive = false;
            //     }
            // })
        });

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