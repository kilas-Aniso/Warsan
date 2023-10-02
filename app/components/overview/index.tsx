'use client';
import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import useGetChildRecords from '@/app/hooks/useGetChildRecords';
import { Sidebar } from '../Sidebar';
import {
  FaUsers,
  FaSyringe,
  FaTimes,
  FaChevronDown
} from 'react-icons/fa';

function Overview() {
  const { child } = useGetChildRecords();
  const [population, setPopulation] = useState<number>(0);
  const [immunized, setImmunized] = useState<number>(0);
  const [vaccineCounts, setVaccineCounts] = useState<{ [key: string]: number }>({});
  const [lineChartData, setLineChartData] = useState<number[]>([]);
  useEffect(() => {
    if (child.length === 0) {
      return;
    }
    const totalChildren: number = child.length;
    const immunizedCount: number = child.filter((childData) => childData.is_immunized).length;
    setPopulation(totalChildren);
    setImmunized(immunizedCount);
    const vaccineChoices: string[] = child.flatMap((childData) =>
      childData.vaccines.map((vaccine) => vaccine.vaccine_choice)
    );
    const counts: { [key: string]: number } = {};
    vaccineChoices.forEach((choice) => {
      counts[choice] = (counts[choice] || 0) + 1;
    });
    setVaccineCounts(counts);
  }, [child]);
  useEffect(() => {
    updateStackedBarChart(Object.keys(vaccineCounts), Object.values(vaccineCounts));
    updatePieChart(immunized, population);
    updateLineChart(lineChartData);
  }, [vaccineCounts, immunized, population, lineChartData]);
  const calculateMonthlyRates = (childData: any[]) => {
    const monthlyRates = Array(12).fill(0);
    childData.forEach((child) => {
      const date = new Date(child.date_of_administration);
      const month = date.getMonth();
      monthlyRates[month] += 1;
    });
    const totalChildren = childData.length;
    const monthlyRatePercentages = monthlyRates.map((count) => (count / totalChildren) * 100);
    return monthlyRatePercentages;
  };
  const updateStackedBarChart = (labels: string[], data: number[]) => {
    const stackedCanvas = document.getElementById('stackedBarChart') as HTMLCanvasElement | null;
    if (stackedCanvas) {
      const stackedCtx = stackedCanvas.getContext('2d');
      if (stackedCtx) {
        const stackedChart = new Chart(stackedCtx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Immunization Rate',
              backgroundColor: '#68BBD6',
              data: data,
              barPercentage: 0.6,
              categoryPercentage: 0.7
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                stacked: true
              }],
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  offsetGridLines: true
                }
              }]
            }
          }
        });
      }
    }
  };
  const updatePieChart = (immunized: number, total: number) => {
    const pieCanvas = document.getElementById('myChart') as HTMLCanvasElement | null;
    if (pieCanvas) {
      const notImmunized = total - immunized;
      const immunizedPercentage: number = (immunized / total) * 100;
      const notImmunizedPercentage: number = (notImmunized / total) * 100;
      var pieChart = new Chart(pieCanvas, {
        type: 'pie',
        data: {
          labels: ['Fully Immunized', 'Not Fully Immunized'],
          datasets: [{
            data: [immunizedPercentage, notImmunizedPercentage],
            borderColor: ['#1082EB', '#DA95F2'],
            backgroundColor: ['#1082EB', '#DA95F2'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }
  };
  const updateLineChart = (data: number[]) => {
    const lineCanvas = document.getElementById('lineChart') as HTMLCanvasElement | null;
    if (lineCanvas) {
      var lineChart = new Chart(lineCanvas, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            data: data,
            label: 'Coverage Rate',
            borderColor: 'rgb(62,149,205)',
            backgroundColor: 'rgb(62,149,205,0.1)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  };
  useEffect(() => {
    if (child.length === 0) {
      return;
    }
    const monthlyRateData = calculateMonthlyRates(child);
    setLineChartData(monthlyRateData);
  }, [child]);
  return (
    <div>
      <Sidebar/>
    <div className="bg-white pl-10">
      <div className="flex-auto ml-64 pt-8">
        <a className="text-blue-500 font-bold text-4xl">Overview</a>
        <a className="text-bleu-500 " style={{ marginLeft: '68%' }}></a>
        <a className="text-blue-500 font-bold ml-16">Vaccines <FaChevronDown className="inline-block mr-5 text-sm font-bold" /></a>
        <a className="text-blue-500 font-bold">Regions <FaChevronDown className="inline-block mr-1 text-sm" /></a>
      </div>
      <div className="mt-10 -mb-60 ml-20">
        <div className="flex bg-hey w-10/12 justify-between px-12 mt-10 mx-48 ml-52 py-8 rounded">
          <div className="bg-blue-400 px-4 py-4 text-white flex items-center w-1/4 rounded-md">
            <FaUsers size={56} className="mr-2 p-2 ml-5 bg-white rounded-full text-customBlue" />
            <div className="ml-8 text-xl font-bold">
              <h1>Immunized Children</h1>
              <p>{population}</p>
            </div>
          </div>
          <div className="bg-blue-400 px-4 py-4 text-white flex items-center w-1/4 rounded-xl">
            <FaSyringe size={56} className="mr-2 p-2 ml-5 bg-white rounded-full text-customBlue" />
            <div className="ml-8 text-xl font-bold">
              <h1>Fully Immunized</h1>
              <p>{immunized}</p>
            </div>
          </div>
          <div className="bg-blue-400 px-4 py-4 text-white flex items-center w-1/4 rounded-xl">
            <FaTimes size={58} className="mr-2 p-2 ml-5 bg-white rounded-full text-customBlue" />
            <div className="ml-8 text-xl font-bold">
              <h1>Not Fully Immunized</h1>
              <p>{population - immunized}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-32 justify-between mx-20 mt-60 space-y-4">
        <div className="w-[800px] mx-auto mt-1 flex items-center">
          <div className="border border-gray-400 rounded-xl w-full shadow-xl bg-white">
            <canvas id="stackedBarChart" width="720" height="550"></canvas>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-[500px] mx-auto mt-10 flex items-center">
            <div className="border border-gray-400 rounded-xl w-full shadow-xl bg-white">
              <canvas id="myChart" width="360" height="240"></canvas>
            </div>
          </div>
          <div className="w-[500px] mx-auto my-16 flex items-center">
            <div className="border border-gray-400 pt-0 rounded-xl w-full shadow-xl">
              <canvas id="lineChart" width="360" height="240"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Overview;