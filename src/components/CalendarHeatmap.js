import * as React from 'react';
import {
  HeatMapComponent,
  Legend,
  Tooltip,
  Inject,
} from '@syncfusion/ej2-react-heatmap';
import data from '../data/calendar-data-source.json';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense(
  'ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1gWX5Yc3VUR2ZZWUY='
);
// import { SampleBase } from '../common/sample-base';
// import { Internationalization } from '@syncfusion/ej2-base';
/**
 * Schedule Default sample
 */

const CalendarHeatmap = () => {
  return (
    <div className="control-pane">
      <div className="control-section">
        <HeatMapComponent
          id="heatmap-container"
          titleSettings={{
            text: 'Habit Tracker',
            textStyle: {
              size: '15px',
              fontWeight: '500',
              fontStyle: 'Normal',
              fontFamily: 'Segoe UI',
            },
          }}
          height={'300px'}
          xAxis={{
            opposedPosition: true,
            valueType: 'DateTime',
            minimum: new Date(2017, 6, 23),
            maximum: new Date(2018, 6, 30),
            intervalType: 'Days',
            showLabelOn: 'Months',
            labelFormat: 'MMM',
            increment: 7,
            labelIntersectAction: 'Rotate45',
          }}
          yAxis={{
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            isInversed: true,
          }}
          dataSource={data.calendarDataSource}
          cellSettings={{
            showLabel: false,
            border: { color: 'white' },
          }}
          //tooltipRender={this.tooltipTemplate}
          paletteSettings={{
            palette: [
              {
                value: 0,
                color: 'rgb(238,238,238)',
                label: 'no contributions',
              },
              {
                value: 1,
                color: 'rgb(172, 213, 242)',
                label: '1-15 contributions',
              },
              {
                value: 16,
                color: 'rgb(127, 168, 201)',
                label: '16-31 contributions',
              },
              {
                value: 32,
                color: 'rgb(82, 123, 160)',
                label: '31-49 contributions',
              },
              {
                value: 50,
                color: 'rgb(37, 78, 119)',
                label: '50+ contributions',
              },
            ],
            type: 'Fixed',
            emptyPointColor: 'white',
          }}
          //load={this.load.bind(this)}
          legendSettings={{
            position: 'Bottom',
            width: '20%',
            alignment: 'Near',
            showLabel: true,
            labelDisplayType: 'None',
            enableSmartLegend: true,
          }}
        >
          <Inject services={[Legend]} />
          {/* <Inject services={[Legend, Tooltip]} /> */}
        </HeatMapComponent>
      </div>
    </div>
  );
};

export default CalendarHeatmap;

// export class CalendarHeatmap extends SampleBase {
//   render() {

//   }
//   tooltipTemplate(args) {
//     let intl = new Internationalization();
//     let format = intl.getDateFormat({ format: 'EEE MMM dd, yyyy' });
//     let newDate = new Date(args.xValue);
//     let date = new Date(newDate.getTime());
//     let axisLabel = args.heatmap.axisCollections[1].axisLabels;
//     let index = axisLabel.indexOf(args.yLabel);
//     date.setDate(date.getDate() + index);
//     let value = format(date);
//     args.content = [
//       (args.value === 0 ? 'No' : args.value) +
//         ' ' +
//         'contributions' +
//         '<br>' +
//         value,
//     ];
//   }
//   load(args) {
//     let selectedTheme = location.hash.split('/')[1];
//     selectedTheme = selectedTheme ? selectedTheme : 'Material';
//     args.heatmap.theme = (
//       selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
//     ).replace(/-dark/i, 'Dark');
//   }
// }
