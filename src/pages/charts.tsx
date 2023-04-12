import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import DotsElement from '@/components/DotsElement';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import Link from 'next/link';
import type { ChartData, ChartOptions } from 'chart.js';
import {
  Container,
  OtlinedButton,
  AppBar,
  LinkList,
  ChartHeader,
  ChartDescription,
  Chart,
  ChartTop,
  Chips,
  Calls,
  ChartWrapper,
} from '../components/sharedstyles';

const labels = ['22.08', '23.08', '24.08', '25.08', '26.08', '27.08', '28.08'];

export const lineOptions: ChartOptions<'line'> = {
  responsive: true,
  scales: {
    y: {
      min: 0, // Set the minimum value for the y-axis to 0
      grid: {
        tickBorderDash: [0, 1],
      },
      border: {
        dash: [4, 4],
        display: false,
      },
      ticks: {
        stepSize: 4000,
      },
    },
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      offset: true,
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
      align: 'start',
      labels: {
        usePointStyle: true,
        // padding: 50,
        useBorderRadius: true,
      },
      display: false,
      // fullSize: true
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#fff',
      bodyColor: '#111827',
      borderColor: '#E4E4E7',
      borderWidth: 1,
      yAlign: 'bottom',
      padding: 10,
      caretPadding: 10,
      displayColors: false,
      filter: (_, index) => index == 0, //filter to show one label
      callbacks: {
        label: function (context) {
          //   if (
          //     context.dataIndex === 0 ||
          //     context.dataIndex === context.dataset.data.length - 1
          //   ) {
          //     return '';
          //   } else {
          //     const value = context.parsed.y || 0;
          //     return `${value}`;
          //   }
          const value = context.parsed.y || 0;
          return `${value}`;
        },
        title: function () {
          return '';
        },
      },
    },
  },
  elements: {
    line: { tension: 0.4 },
  },
};

export const barOptions: ChartOptions<'bar'> = {
  responsive: true,
  scales: {
    y: {
      grid: {
        tickBorderDash: [0, 1],
        // color: '#000',
      },
      border: {
        dash: [4, 4],
        display: false,
      },
      ticks: {
        stepSize: 4000,
      },
    },
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#fff',
      bodyColor: '#111827',
      borderColor: '#E4E4E7',
      borderWidth: 1,
      yAlign: 'bottom',
      padding: 10,
      caretPadding: 10,
      displayColors: false,
      filter: (_, index) => index == 0,
      callbacks: {
        label: function (context) {
          const value = context.parsed.y || 0;
          return `${value}`;
        },
        title: function () {
          return '';
        },
        labelPointStyle(tooltipItem) {
          // console.log(tooltipItem);
        },
      },
    },
  },
  elements: {
    bar: {
      borderRadius: {
        topLeft: 5,
        topRight: 5,
        bottomLeft: 0,
        bottomRight: 0,
      },
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const lineData: ChartData<'line'> = {
  labels,
  datasets: [
    {
      label: 'Исходящие звонки',
      data: [10027, 11800, 12900, 14566, 20500, 7000, 8900],
      backgroundColor: '#fff',
      borderColor: '#EAA43A',
      pointStyle: 'circle',
      pointRadius: 0,
      pointHitRadius: 80,
      pointHoverRadius: 6,
      spanGaps: true,
    },
    {
      label: 'Входящие звонки',
      data: [20500, 14566, 12000, 11800, 10027, 8900, 3824],
      backgroundColor: '#fff',
      borderColor: '#4F46E5',
      pointRadius: 0,
      pointHitRadius: 80,
      pointHoverRadius: 6,
    },
  ],
};

export const barData: ChartData<'bar'> = {
  labels,
  datasets: [
    {
      label: 'Исходящие звонки',
      data: [10027, 11800, 12000, 14566, 20500, 7000, 8900],
      backgroundColor: '#F7B7CD',
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Аналитика</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <AppBar>
          <Link href="/">
            <Image
              src="/voice-assistant/logo.svg"
              alt="Vercel Logo"
              width={195}
              height={34}
              priority
            />
          </Link>
          <LinkList>
            <li>О нас</li>
            <li>
              <Link href="/charts">Платформа</Link>
            </li>
            <li>Портфолио</li>
            <li>Контакты</li>
          </LinkList>
          <Link href="/login">
            <OtlinedButton>Вход</OtlinedButton>
          </Link>
        </AppBar>
        <ChartHeader>
          <h1>
            Вся аналитика
            <br /> в одном кабинете
          </h1>
          <p>
            Отслеживайте работу голосового ассистента
            <br /> в личном кабинете
          </p>
        </ChartHeader>
        <ChartDescription>
          <p>
            Уникальные виджеты позволяют настроить дашборд под задачи различных
            подразделений вашей компании
          </p>
        </ChartDescription>
        <ChartWrapper>
          <Chart>
            <ChartTop>
              <h4 style={{ fontSize: 18 }}>Звонки</h4>
              <DotsElement />
            </ChartTop>
            <Line options={lineOptions} data={lineData} />
            <Calls>
              <div className="call">
                <div className="circle" /> Исходящие звонки
              </div>
              <div className="call">
                <div className="circle" /> Входящие звонки
              </div>
            </Calls>
          </Chart>
          <Chart>
            <ChartTop>
              <h1 style={{ fontSize: 18 }}>Исходящие звонки</h1>
              <DotsElement />
            </ChartTop>
            <Chips>
              <div className="chip">Отказ от подключения</div>
              <div className="chip">Ростов-на-Дону</div>
            </Chips>
            <Bar options={barOptions} data={barData} />
          </Chart>
        </ChartWrapper>
      </Container>
    </>
  );
}

