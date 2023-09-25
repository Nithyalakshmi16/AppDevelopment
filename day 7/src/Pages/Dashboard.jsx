import React from 'react';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice.jsx';
import ReactApexChart from 'react-apexcharts';
import '../assets/Style.css';

function Dashboard() {
  const user = useSelector(selectUser);

  // Sample data for the column chart
  const chartOptions = {
    chart: {
      type: 'bar', // Use 'bar' for a column chart
      width: '400px', // Set the width to a specific value like '400px' or a percentage like '100%'
      height: '500px'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '100%',
      },
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ ( thousands )',
      },
    },
  };

  const chartData = [
    {
      name: 'Renewal',
      data: [56, 45, 67, 32, 55, 48, 61, 52, 70],
    },
    {
      name: 'Claims',
      data: [60, 50, 72, 35, 58, 52, 65, 58, 75],
    },
  ];

  // Sample data for the Irregular Timeseries chart
  const irregularTimeseriesOptions = {
    chart: {
      type: 'line', // Use 'line' for an irregular timeseries
      width: '100%', // Set the width to a specific value like '400px' or a percentage like '100%'
      height: 400,
    },
    xaxis: {
      type: 'datetime', // Specify 'datetime' for irregular timeseries
    },
    yaxis: {
      title: {
        text: 'Value',
      },
    },
    title: {
      text: 'Irregular Timeseries Chart',
      align: 'left',
    },
    markers: {
      size: 6,
    },
  };

  const irregularTimeseriesData = [
    {
      name: 'Series 1',
      data: [
        [1618416000000, 31.13],
        [1618502400000, 42.86],
        [1618588800000, 33.85],
        // Add more data points as needed
      ],
    },
  ];

  return (
    <>
      <Layout />
      <div className='main-wrapper'>
        <div className='welcomes-container'>
          <h1 className='username-color'> Welcome👋🏻 </h1>
          <h1>{user.username}</h1>
        </div>
        <div className='claim-container'>
          <h1 className='username-color'> Renewal </h1>
          <h1 className='count'>56</h1>
        </div>
        <div className='renewal-container'>
          <h1 className='username-color'> Claims </h1>
          <h1 className='count'>60</h1>
        </div>
        <div className='chart-container'>
          {/* Column Chart */}
          <ReactApexChart options={chartOptions} series={chartData} type='bar' />

          {/* Irregular Timeseries Chart */}
          <ReactApexChart options={irregularTimeseriesOptions} series={irregularTimeseriesData} type='line' />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
