import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LineChartComponent from "../components/LineChartComponent";
import StatCard from "../components/StatCard";
import Table from "../components/Table";
import orderHistory from "../data/orderHistory.json";
import { LuPanelTopClose, LuPanelTopOpen } from "react-icons/lu";
import { BsExclamationCircle, BsThreeDotsVertical } from "react-icons/bs";
import StraightAnglePieChart from "../components/StraightAnglePieChart";
import { RiArrowDropDownLine } from "react-icons/ri";
import Notifications from "../components/Notifications";
import StatsSection from "../components/StatsSection";

const Dashboard = () => (
  <div className="flex min-h-screen">
    <div className="sticky top-0 h-screen">
      <Sidebar />
    </div>
    <div className="flex-1 bg-gray-100 overflow-y-auto">
      <Header username="Alex" />
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded-lg flex items-center justify-center min-h-[300px]">
            <LineChartComponent />
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCard
                title="Profit Target"
                value="$8,908.99"
                change={0.8}
                color="text-blue-800"
                bgColor="bg-blue-800"
                icon={<LuPanelTopClose />}
                price="$12,00.90"
              />
              <StatCard
                title="Daily Loss Limit"
                value="$12,908.99"
                change={-0.2}
                color="text-red-500"
                bgColor="bg-red-500"
                icon={<LuPanelTopOpen />}
                price="$12,00.90"
              />
            </div>
            <div className="bg-white p-4 shadow rounded-lg flex flex-col justify-between min-h-[150px]">
              <div className="flex items-center justify-between">
                <span>Most Traded</span>
                <BsThreeDotsVertical className="text-gray-400" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex flex-col">
                  <div className="py-2 flex items-center justify-between"><div className="mr-1 w-2 h-6 bg-blue-800"></div>NZDUSD</div>
                  <div className="py-2 flex items-center justify-between"><div className="mr-1 w-2 h-6 bg-orange-300"></div>GBPUSD</div>
                  <div className="py-2 flex items-center justify-between"><div className="mr-1 w-2 h-6 bg-blue-300"></div>AUDCHF</div>
                </div>
                <div className="flex flex-col">
                  <div className="py-2 flex items-center justify-between"><div className="mr-1 w-2 h-6 bg-blue-200"></div>USDCHF</div>
                  <div className="py-2 flex items-center justify-between"><div className="mr-1 w-2 h-6 bg-orange-100"></div>XAUUSD</div>
                  <div className="py-2 flex items-center justify-between"><div className="mr-1 w-2 h-6 bg-blue-50"></div>AUDNZD</div>
                </div>
                <div className="flex flex-col items-center justify-center min-h-[100px]">
                  <StraightAnglePieChart />
                  Total 16
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div>
            <StatsSection />
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <BsExclamationCircle className="mr-2 text-gray-400" /> Notifications
              </span>
              <div className="border border-gray-300 px-2 text-gray-400 flex items-center">
                Last 30 Day <RiArrowDropDownLine className="ml-2" />
              </div>
            </div>
            <Notifications />
          </div>
        </div>

        <div className="mt-6 bg-white p-4 shadow rounded-lg">
          <Table
            headers={["Symbol", "Type", "Open Date", "Open Price", "Close Date", "Close Price", "Profit"]}
            rows={orderHistory}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
