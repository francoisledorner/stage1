<template>
  <div id="myDiv">
    <Plotly :data="donnees" :layout="layout" :display-mode-bar="true"></Plotly>
    <Plotly :data="donnees2" :layout="layout2" :display-mode-bar="false"></Plotly>
  </div>
</template>
 <!-- <script src="https://cdn.plot.ly/plotly-latest.min.js"></script> -->
<script>
import { Plotly } from "vue-plotly";

export default {
  name: "JouerAvecPlotly",
  components: {
    Plotly
  },
  data() {
    return {
      donnees: [
        {
          x: [
            1995,
            1996,
            1997,
            1998,
            1999,
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012
          ],
          y: [
            219,
            146,
            112,
            127,
            124,
            180,
            236,
            207,
            236,
            263,
            350,
            430,
            474,
            526,
            488,
            537,
            500,
            439
          ],
          name: "Rest of world",
          marker: { color: "rgb(55, 83, 109)" },
          type: "bar"
        },
        {
          x: [
            1995,
            1996,
            1997,
            1998,
            1999,
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012
          ],
          y: [
            16,
            13,
            10,
            11,
            28,
            37,
            43,
            55,
            56,
            88,
            105,
            156,
            270,
            299,
            340,
            403,
            549,
            499
          ],
          name: "China",
          marker: { color: "rgb(26, 118, 255)" },
          type: "bar"
        }
      ],
      layout: {
        title: "US Export of Plastic Scrap",
        xaxis: {
          tickfont: {
            size: 14,
            color: "rgb(107, 107, 107)"
          }
        },
        yaxis: {
          title: "USD (millions)",
          titlefont: {
            size: 16,
            color: "rgb(107, 107, 107)"
          },
          tickfont: {
            size: 14,
            color: "rgb(107, 107, 107)"
          }
        },
        legend: {
          x: 0,
          y: 1.0,
          bgcolor: "rgba(255, 255, 255, 0)",
          bordercolor: "rgba(255, 255, 255, 0)"
        },
        barmode: "group",
        bargap: 0.15,
        bargroupgap: 0.1
      },
      donnees2: [
        {
          values: [16, 15, 12, 6, 5, 4, 42],
          labels: [
            "US",
            "China",
            "European Union",
            "Russian Federation",
            "Brazil",
            "India",
            "Rest of World"
          ],
          domain: { column: 0 },
          name: "GHG Emissions",
          hoverinfo: "label+percent+name",
          hole: 0.4,
          type: "pie"
        },
        {
          values: [27, 11, 25, 8, 1, 3, 25],
          labels: [
            "US",
            "China",
            "European Union",
            "Russian Federation",
            "Brazil",
            "India",
            "Rest of World"
          ],
          text: "CO2",
          textposition: "inside",
          domain: { column: 1 },
          name: "CO2 Emissions",
          hoverinfo: "label+percent+name",
          hole: 0.4,
          type: "pie"
        }
      ],
      layout2: {
        title: "Global Emissions 1990-2011",
        annotations: [
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: "GHG",
            x: 0.17,
            y: 0.5
          },
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: "CO2",
            x: 0.82,
            y: 0.5
          }
        ],
        height: 400,
        width: 600,
        showlegend: false,
        grid: { rows: 1, columns: 2 }
      }
    };
  }
};
</script>

<style scoped>
</style>
