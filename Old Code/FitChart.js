import React from 'react'
import { Chart } from 'react-charts'

const FitChart = () => {

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[1610582400000, 5.21], [1610668800000, 5.26], [1610755200000, 5.02], [1610841600000, 5.11], [1610928000000, 5]]
      }
      // ,{
      //   label: 'Series 2',
      //   data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      // }
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'utc', position: 'bottom' },
      { type: 'linear', position: 'left', hardMin: 4, hardMax: 6 }
    ],
    []
  )

  const series = React.useMemo(
    () => ({
      showPoints: true
    }),
    []
  )

  return <>

    <div
      style={{
        width: '1000px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} series={series} />
    </div>
  </>

}

export default FitChart










// import React from "react";
// //

// const options = {
//   elementType: ["line", "area", "bar", "bubble"],
//   primaryAxisType: ["linear", "time", "log", "ordinal"],
//   secondaryAxisType: ["linear", "time", "log", "ordinal"],
//   primaryAxisPosition: ["top", "left", "right", "bottom"],
//   secondaryAxisPosition: ["top", "left", "right", "bottom"],
//   secondaryAxisStack: [true, false],
//   primaryAxisShow: [true, false],
//   secondaryAxisShow: [true, false],
//   grouping: ["single", "series", "primary", "secondary"],
//   tooltipAnchor: [
//     "closest",
//     "top",
//     "bottom",
//     "left",
//     "right",
//     "center",
//     "gridTop",
//     "gridBottom",
//     "gridLeft",
//     "gridRight",
//     "gridCenter",
//     "pointer"
//   ],
//   tooltipAlign: [
//     "auto",
//     "top",
//     "bottom",
//     "left",
//     "right",
//     "topLeft",
//     "topRight",
//     "bottomLeft",
//     "bottomRight",
//     "center"
//   ],
//   snapCursor: [true, false]
// };

// const optionKeys = Object.keys(options);

// export default function useChartConfig({
//   series,
//   useR,
//   show = [],
//   count = 1,
//   resizable = true,
//   canRandomize = true,
//   dataType = "time",
//   elementType = "line",
//   primaryAxisType = "time",
//   secondaryAxisType = "linear",
//   primaryAxisPosition = "bottom",
//   secondaryAxisPosition = "left",
//   primaryAxisStack = false,
//   secondaryAxisStack = true,
//   primaryAxisShow = true,
//   secondaryAxisShow = true,
//   tooltipAnchor = "closest",
//   tooltipAlign = "auto",
//   grouping = "primary",
//   snapCursor = true,
//   datums = 10
// }) {
//   const [state, setState] = React.useState({
//     count,
//     resizable,
//     canRandomize,
//     dataType,
//     elementType,
//     primaryAxisType,
//     secondaryAxisType,
//     primaryAxisPosition,
//     secondaryAxisPosition,
//     primaryAxisStack,
//     secondaryAxisStack,
//     primaryAxisShow,
//     secondaryAxisShow,
//     tooltipAnchor,
//     tooltipAlign,
//     grouping,
//     snapCursor,
//     datums,
//     data: makeDataFrom(dataType, series, useR, datums)
//   });

//   React.useEffect(() => {
//     setState(old => ({
//       ...old,
//       data: makeDataFrom(dataType, series, useR, datums)
//     }));
//   }, [count, dataType, datums, series, useR]);

//   const randomizeData = () =>
//     setState(old => ({
//       ...old,
//       data: makeDataFrom(dataType, series, useR, datums)
//     }));

//   const Options = optionKeys
//     .filter(option => show.indexOf(option) > -1)
//     .map(option => (
//       <div key={option}>
//         {option}: &nbsp;
//         <select
//           value={state[option]}
//           onChange={({ target: { value } }) =>
//             setState(old => ({
//               ...old,
//               [option]:
//                 typeof options[option][0] === "boolean"
//                   ? value === "true"
//                   : value
//             }))
//           }
//         >
//           {options[option].map(d => (
//             <option value={d} key={d.toString()}>
//               {d.toString()}
//             </option>
//           ))}
//         </select>
//         <br />
//       </div>
//     ));

//   return {
//     ...state,
//     randomizeData,
//     Options
//   };
// }

// function makeDataFrom(dataType, series, useR, datums) {
//   return [
//     ...new Array(series || Math.max(Math.round(Math.random() * 5), 1))
//   ].map((d, i) => makeSeries(i, dataType, useR, datums));
// }

// function makeSeries(i, dataType, useR, datums) {
//   const start = 0;
//   const startDate = new Date();
//   startDate.setMinutes(0);
//   startDate.setSeconds(0);
//   startDate.setMilliseconds(0);
//   // const length = 5 + Math.round(Math.random() * 15)
//   const length = datums;
//   const min = 0;
//   const max = 100;
//   const rMin = 2;
//   const rMax = 20;
//   const nullChance = 0;
//   return {
//     label: `Series ${i + 1}`,
//     data: [...new Array(length)].map((_, i) => {
//       let x = start + i;
//       if (dataType === "ordinal") {
//         x = `Ordinal Group ${x}`;
//       }
//       if (dataType === "time") {
//         x = new Date(startDate.getTime() + 60 * 1000 * 60 * 24 * i);
//       }
//       if (dataType === "linear") {
//         x =
//           Math.random() < nullChance
//             ? null
//             : min + Math.round(Math.random() * (max - min));
//       }
//       const distribution = 1.1;
//       const y =
//         Math.random() < nullChance
//           ? null
//           : min + Math.round(Math.random() * (max - min));
//       const r = !useR
//         ? undefined
//         : rMax -
//           Math.floor(
//             Math.log(Math.random() * (distribution ** rMax - rMin) + rMin) /
//               Math.log(distribution)
//           );
//       return {
//         primary: x,
//         secondary: y,
//         radius: r
//       };
//     })
//   };
// }
