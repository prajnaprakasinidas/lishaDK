import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as  am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst"; 
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


export default class Sunbrust_chart extends Component {


  componentDidMount(){
    let chart = am4core.create("chartdiv", am4plugins_sunburst.Sunburst);
chart.padding(0, 0, 0, 0);
chart.radius = am4core.percent(98);

chart.data = [{
  name: "First",
  children: [
    { name: "A1", value: 100 },
    { name: "A2", value: 60 }
  ]
},
{
  name: "Second",
  children: [
    { name: "B1", value: 135 },
    { name: "B2", value: 98 }
  ]
},
{
  name: "Third",
  children: [
    {
      name: "C1",
      children: [
        { name: "EE1", value: 130 },
        { name: "EE2", value: 87 },
        { name: "EE3", value: 55 }
      ]
    },
    { name: "C2", value: 148 },
    {
      name: "C3", children: [
        { name: "CC1", value: 53 },
        { name: "CC2", value: 30 }
      ]
    },
    { name: "C4", value: 26 }
  ]
},
{
  name: "Fourth",
  children: [
    { name: "D1", value: 415 },
    { name: "D2", value: 148 },
    { name: "D3", value: 89 }
  ]
},
{
  name: "Fifth",
  children: [
    {
      name: "E1",
      children: [
        { name: "EE1", value: 33 },
        { name: "EE2", value: 40 },
        { name: "EE3", value: 89 }
      ]
    },
    {
      name: "E2",
      value: 148
    }
  ]
}];

chart.colors.step = 2;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(20);

// define data fields
chart.dataFields.value = "value";
chart.dataFields.name = "name";
chart.dataFields.children = "children";


let level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
chart.seriesTemplates.setKey("0", level0SeriesTemplate)

// this makes labels to be hidden if they don't fit
level0SeriesTemplate.labels.template.truncate = true;
level0SeriesTemplate.labels.template.hideOversized = true;
level0SeriesTemplate.showOnInit = false;
level0SeriesTemplate.usePercentHack = false;

level0SeriesTemplate.radius = am4core.percent(100);
level0SeriesTemplate.innerRadius = am4core.percent(0);

let selectedState = level0SeriesTemplate.states.create("selected");
selectedState.properties.opacity = 0.7;
level0SeriesTemplate.defaultState.properties.radius = am4core.percent(100);

let currentlySelected;

level0SeriesTemplate.slices.template.events.on("over", function(event) {
  if(event.target.dataItem.sunburstDataItem.children){
   event.target.cursorOverStyle = am4core.MouseCursorStyle.pointer;
  }
})

level0SeriesTemplate.slices.template.events.on("hit", function(event) {
  zoomOutButton.show();
  let hitSlice = event.target;

  if (hitSlice.dataItem.sunburstDataItem.children) {

    let series = event.target.dataItem.component;
    
    if (!series.dummyData) {
      series.tooltip.disabled = true;
      hitSlice.dataItem.label.radius = (hitSlice.radius - hitSlice.pixelInnerRadius) - 7;
      hitSlice.dataItem.label.bent = true;
      hitSlice.dataItem.label.rotation = -180;

      currentlySelected = hitSlice;
      series.dummyData = true;
      series.setState("selected");
      hitSlice.dataItem.sunburstDataItem.series.show();
      series.slices.each(function(slice) {
        if (slice != event.target) {
          slice.dataItem.hide();
        }
      })
    }
    else {
      drillUp(hitSlice);
    }
  }
})


level0SeriesTemplate.labels.template.adapter.add("rotation", function(rotation, target) {
  target.maxWidth = target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
  target.maxHeight = Math.abs(target.dataItem.slice.arc * (target.dataItem.slice.innerRadius + target.dataItem.slice.radius) / 2 * am4core.math.RADIANS);
  return rotation;
})

let level1SeriesTemplate = level0SeriesTemplate.clone();
level1SeriesTemplate.hidden = true;
level1SeriesTemplate.innerRadius = am4core.percent(10);
chart.seriesTemplates.setKey("1", level1SeriesTemplate)
level1SeriesTemplate.fillOpacity = 0.75;

let level2SeriesTemplate = level0SeriesTemplate.clone();
level2SeriesTemplate.hidden = true;
level2SeriesTemplate.innerRadius = am4core.percent(20);
chart.seriesTemplates.setKey("2", level2SeriesTemplate)

let zoomOutButton = chart.seriesContainer.createChild(am4core.ZoomOutButton);
zoomOutButton.visible = false;
zoomOutButton.horizontalCenter = "middle";
zoomOutButton.verticalCenter = "middle";
zoomOutButton.events.on("hit", function() {
  drillUp(currentlySelected)
})


function drillUp(slice) {
  collapse(slice);
  let series = slice.dataItem.component;
  series.tooltip.disabled = false;
  series.dummyData = false;
  series.setState("default");

  series.slices.each(function(slice) {
    if (slice != Event.target) {
      slice.dataItem.show();
    }
  })

  if (series.parentDataItem.seriesDataItem) {
    currentlySelected = series.parentDataItem.seriesDataItem.slice;
  }
  else {
    zoomOutButton.hide();
  }
}

function collapse(slice) {

  slice.dataItem.label.bent = false;
  slice.dataItem.label.radius = 10;


  if (slice.dataItem.sunburstDataItem.children) {
    slice.dataItem.sunburstDataItem.children.each(function(child) {
      child.seriesDataItem.component.setState("hidden");
      collapse(child.seriesDataItem.slice);
    })
  }
}

  }
  render() {
    return (
      <div>
        <div className="chartdiv chart_h250"></div>
      </div>
    )
  }
}



