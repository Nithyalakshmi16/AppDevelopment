import React from 'react'
import '../assets/Style.css'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice.jsx'
function Dashboard() {
    const user=useSelector(selectUser)
    const chartData = {
        labels: ['Category A', 'Category B', 'Category C'],
        datasets: [
          {
            label: 'Renewal',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [12, 19, 3],
          },
          {
            label: 'Claims',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [7, 11, 5],
          },
        ],
      };
      const chartOptions = {
        scales: {
          x: { stacked: true },
          y: { stacked: true },
        },
      };
    
    
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
            <h1 className='chart-title'>Stacked Bar Chart</h1>
          
          </div>
        </div>
      </>
    )
}

export default Dashboard