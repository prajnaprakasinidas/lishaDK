import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");

export class BarChart extends Component {
    componentDidMount() {
        // console.log("this is props ", this.props)

        let info = this.props

        // let card_name = info['name'];
        let card_id = info['card_id'];
        let data = JSON.parse(info['graph-data']);

        console.log("cardname"); //Avgsession_barchart
        console.log("data", data);
        let chart = am4core.create(card_id, am4charts.XYChart);
        chart.data = data;
        chart.fontFamily = "Ubuntu"; //TO CHANGE FONT SIZE OF CHART LABELS
        chart.fontSize = 12; //TO CHANGE FONT SIZE OF CHART LABELS
     
        chart.colors.list = [
            am4core.color("#11A1FD"),
            am4core.color("#FF9931"),
        ];
        // Create axes

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.baseGrid.disabled = true;
        categoryAxis.renderer.grid.template.strokeWidth = 0;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.inside = false;
        categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
        categoryAxis.renderer.labels.template.fontSize = 0;
        categoryAxis.renderer.cellStartLocation = 0.2;
        categoryAxis.renderer.cellEndLocation = 0.8;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.baseGrid.disabled = true; // to remove the x axis 
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.min = 0;
        valueAxis.renderer.grid.template.disabled = true;

        // Remove padding
        chart.paddingBottom = -20;
        chart.paddingTop = -20;
        chart.paddingLeft = 0;
        chart.paddingRight = 0;
        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "points";
        series.dataFields.categoryX = "name";

        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";

        series.columns.template.fillOpacity = .9;
        // series.columns.template.propertyFields.fill = "color";
        // series.columns.template.propertyFields.stroke = "color";
        series.columns.template.column.cornerRadiusTopLeft = 6;
        series.columns.template.column.cornerRadiusTopRight = 6;

        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("#213345");
        series.tooltip.background.stroke = am4core.color("#213345");
        series.tooltip.label.fill = am4core.color("#ffffff");
        series.tooltip.label.fontSize = 12;
        series.tensionX = 0.77;

        let columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = .6;
        columnTemplate.strokeOpacity = 0;


        let bullet = series.bullets.push(new am4charts.Bullet());

        let image = bullet.createChild(am4core.Image);
        image.horizontalCenter = "middle";
        image.verticalCenter = "bottom";
        image.dy = 20;
        image.y = am4core.percent(100);
        image.propertyFields.href = "bullet";
        // image.tooltipText = series.columns.template.tooltipText;
        // image.propertyFields.fill = "color";
        image.filters.push(new am4core.DropShadowFilter());
    }

    render() {
        let card_class = this.props.card_class;
        let card_id = this.props.card_id;

        return (

            <div id={card_id} className={card_class} > </div>
        )
    }
}