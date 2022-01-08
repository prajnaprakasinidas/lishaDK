import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

export default class Treemap extends Component {
    componentDidMount() {

        console.log("this is props ", this.props)

        let info = this.props

        let card_id = info['card_id'];
        let data = JSON.parse(info['graph-data']);

        console.log("cardname", card_id);
        console.log("data", data);

        let chart = am4core.create(card_id, am4charts.TreeMap);

        // Add data
        chart.data = data
        chart.maxLevels = 1;
        chart.colors.step = 1;
        chart.colors.list = [
            am4core.color("#8498FB"),
            am4core.color("#8498FB"),
            am4core.color("#8498FB"),
            am4core.color("#8498FB"),
            am4core.color("#8498FB"),
            am4core.color("#8498FB"),
            am4core.color("#8498FB"),
            am4core.color("#8498FB"),
        ];
        /* Define data fields */
        let level1 = chart.seriesTemplates.create("0");
        let level1_bullet = level1.bullets.push(new am4charts.LabelBullet());
        level1_bullet.locationY = 0.5;
        level1_bullet.locationX = 0.5;
        level1_bullet.label.text = "{name}";
        level1_bullet.label.fill = am4core.color("#fff");

        let level2 = chart.seriesTemplates.create("1");
        let level2_bullet = level2.bullets.push(new am4charts.LabelBullet());
        level2_bullet.locationY = 0.5;
        level2_bullet.locationX = 0.5;
        level2_bullet.label.text = "{name}";
        level2_bullet.label.fill = am4core.color("#fff");

        let level3 = chart.seriesTemplates.create("2");
        let level3_bullet = level3.bullets.push(new am4charts.LabelBullet());
        level3_bullet.locationY = 0.5;
        level3_bullet.locationX = 0.5;
        level3_bullet.label.text = "{name}";
        level3_bullet.label.fill = am4core.color("#fff");

        chart.dataFields.value = "value";
        chart.dataFields.name = "name";
        chart.dataFields.children = "children";
        chart.navigationBar = new am4charts.NavigationBar();
        chart.padding(-10 ,20,20,20);
        chart.fontFamily = "Ubuntu";//TO CHANGE FONT SIZE OF CHART LABELS
        chart.fontSize = 12;//TO CHANGE FONT SIZE OF CHART LABELS
        level1.tooltip.getFillFromObject = false;
        
        level1.tooltip.background.fill = am4core.color("#213345");
        level1.tooltip.background.stroke = am4core.color("#213345");
        level1.tooltip.label.fill = am4core.color("#ffffff");
        level1.tooltip.label.fontSize = 12;
        level2.tooltip.getFillFromObject = false;
        level2.tooltip.background.fill = am4core.color("#213345");
        level2.tooltip.background.stroke = am4core.color("#213345");
        level2.tooltip.label.fill = am4core.color("#ffffff");
        level2.tooltip.label.fontSize = 12;
        level3.tooltip.getFillFromObject = false;
        level3.tooltip.background.fill = am4core.color("#213345");
        level3.tooltip.background.stroke = am4core.color("#213345");
        level3.tooltip.label.fill = am4core.color("#ffffff");
        level3.tooltip.label.fontSize = 12;
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
