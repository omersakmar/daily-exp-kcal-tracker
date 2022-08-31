import React, { useEffect, useState } from "react";
import "./App.css";

import MonthlyOverview from "./components/DailyOverview/DailyOverview";
import WelcomeMessage from "./components/WelcomeUser/WelcomeMessage";

import { UserData } from "./Data";

import LineChart from "./LineChart";
function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.today),
    datasets: [
      {
        label: "Weight",
        data: UserData.map((data) => data.currentWeight),
        borderColor: ["rgba(255, 239, 130, 1)"],
        tension: 0.5,
        pointBorderColor: ["rgba(255, 255, 255, 1)"],
        pointRadius: 1,
        pointHoverRadius: 3,
        lineBorderWidth: 2,
      },
      {
        label: "Daily Calories",
        data: UserData.map((data) => data.calorieConsumption),
        borderColor: ["rgba(255, 26, 104, 1)"],
        tension: 0.5,
        pointBorderColor: ["rgba(255, 255, 255, 1)"],
        pointRadius: 1,
        pointHoverRadius: 3,
        lineBorderWidth: 2,
      },
      {
        label: "Daily Expense ($)",
        data: UserData.map((data) => data.dailyExpense),
        borderColor: ["rgba(20, 195, 142, 1)"],
        tension: 0.5,
        pointBorderColor: ["rgba(255, 255, 255, 1)"],
        pointRadius: 1,
        pointHoverRadius: 3,
        lineBorderWidth: 2,
      },
    ],
  });

  return (
    <div className="wrapper">
      <div className="welcome-message">
        <WelcomeMessage />
      </div>
      <div className="widget-wrapper">
        <MonthlyOverview />
      </div>
      <div className="line-chart">
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
