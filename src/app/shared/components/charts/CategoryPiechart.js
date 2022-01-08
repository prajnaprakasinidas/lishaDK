import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default class CategoryPiechart extends Component {

  componentDidMount(props) {


    console.log("this is props ", this.props)

    let info = this.props

    // let card_name = info['name'];

    let card_id = info['card_id'];
    let data = JSON.parse(info['graph-data']);

    console.log("cardname"); //Avgsession_barchart
    console.log("data", data);

    let chart = am4core.create(card_id, am4charts.PieChart);
    
    // Add data
    chart.data = data
    // chart.data = [{
    //   name: "Social", value: 30
    // },
    // {
    //   name: "Direct", value: 10
    // },
    // {
    //   name: "Website", value: 12
    // },
    // {
    //   name: "Email", value: 28
    // },
    // {
    //   name: "Organic", value: 22
    // },


    // ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "name";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.ticks.template.disabled = true;
    // remove label
    pieSeries.alignLabels = false;
    pieSeries.labels.template.text = "";
    
    pieSeries.alignLabels = false;
    pieSeries.labels.template.propertyFields.disabled = "disabled";
    pieSeries.ticks.template.propertyFields.disabled = "disabled";
    pieSeries.tooltip.getFillFromObject = false;
    pieSeries.tooltip.background.fill = am4core.color("#213345");
    pieSeries.tooltip.label.fill = am4core.color("#ffffff");
    pieSeries.tooltip.label.fontSize = 12;
    
    // Remove padding
    chart.paddingBottom = 0;
    chart.paddingTop = 0;
    chart.paddingLeft = 0;
    chart.paddingRight = 0;
    pieSeries.slices.template.events.on("hit", function(ev) {
      let series = ev.target.dataItem.component;
      series.slices.each(function(item) {
        if (item.isActive && item !== ev.target) {
          item.isActive = false;
        }
      })
    });
    // color 
    var colorSet = new am4core.ColorSet();
        colorSet.list = ["#11A1FD", "#b3e1fe", "#81cdfe", "#4eb9fe", "#1ba5fd", "#028ce4","#016db1"].map(function (color) {
            return new am4core.color(color);
        });
        pieSeries.colors = colorSet ;

  }
  
  render() {
    let class_list = this.props.card_id + "  chart_h200 ";
    return (
      <div>
        <div className={class_list} ></div>
      </div>
    )
  }
}
