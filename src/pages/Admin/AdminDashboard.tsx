import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
// Register chart.js components
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
import {
  Users,
  Building,
  Clock,
  DollarSign,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";
import { Card } from "../../components/ui/Card";

export function AdminDashboard() {
  // Chart data
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Users",
        data: [120, 190, 300, 500, 420, 680],
        borderColor: "#053DA6",
        backgroundColor: "rgba(5, 61, 166, 0.08)",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#053DA6",
      },
      {
        label: "Revenue (M)",
        data: [65, 89, 125, 180, 220, 280],
        borderColor: "#FB7F00",
        backgroundColor: "rgba(251, 127, 0, 0.08)",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#FB7F00",
      },
    ],
  };

  const barChartData = {
    labels: ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Zamfara"],
    datasets: [
      {
        label: "Active Investments",
        data: [45, 32, 28, 15, 22, 18],
        backgroundColor: "#053DA6",
        borderRadius: 8,
      },
      {
        label: "Completed Projects",
        data: [38, 25, 22, 12, 18, 14],
        backgroundColor: "#FB7F00",
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#261C15",
          font: { size: 14, family: "inherit" },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#053DA6",
        bodyColor: "#261C15",
        borderColor: "#eee",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: { color: "#f3f4f6" },
        ticks: { color: "#261C15" },
      },
      y: {
        grid: { color: "#f3f4f6" },
        ticks: { color: "#261C15" },
      },
    },
  };
  const recentActivities = [
    {
      id: 1,
      action: "New user registered",
      user: "John Doe",
      time: "2 minutes ago",
      type: "user",
    },
    {
      id: 2,
      action: "Investment approved",
      user: "Lagos Heights Project",
      time: "15 minutes ago",
      type: "investment",
    },
    {
      id: 3,
      action: "Payment processed",
      user: "NGN 2,500,000",
      time: "1 hour ago",
      type: "transaction",
    },
    {
      id: 4,
      action: "Blog post published",
      user: "Investment Tips for 2024",
      time: "3 hours ago",
      type: "content",
    },
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: "Investment",
      name: "Abuja Commercial Plaza",
      amount: "NGN 45M",
      status: "pending",
    },
    {
      id: 2,
      type: "User Verification",
      name: "Sarah Johnson",
      amount: "",
      status: "pending",
    },
    {
      id: 3,
      type: "Withdrawal",
      name: "Mike Peters",
      amount: "NGN 1.2M",
      status: "pending",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#261C15]">Admin Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with M3 Shelter.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="2,847"
          change={{ value: "+12.5%", type: "increase" }}
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Active Investments"
          value="156"
          change={{ value: "+8.2%", type: "increase" }}
          icon={Building}
          color="green"
        />
        <StatCard
          title="Pending Approvals"
          value="23"
          change={{ value: "-5.1%", type: "decrease" }}
          icon={Clock}
          color="orange"
        />
        <StatCard
          title="Total Revenue"
          value="₦847.2M"
          change={{ value: "+18.7%", type: "increase" }}
          icon={DollarSign}
          color="green"
        />
      </div>

      {/* Premium Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-[#261C15] mb-4">
            User Growth & Revenue Trend
          </h3>
          <Line data={lineChartData} options={chartOptions} />
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-[#261C15] mb-4">
            Investments by Location
          </h3>
          <Bar data={barChartData} options={chartOptions} />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#261C15]">
              Recent Activities
            </h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "user"
                      ? "bg-blue-500"
                      : activity.type === "investment"
                      ? "bg-green-500"
                      : activity.type === "transaction"
                      ? "bg-orange-500"
                      : "bg-purple-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#261C15]">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-600">{activity.user}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Pending Approvals */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#261C15]">
              Pending Approvals
            </h3>
            <AlertTriangle className="w-5 h-5 text-orange-500" />
          </div>
          <div className="space-y-4">
            {pendingApprovals.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-[#261C15]">
                    {item.type}
                  </p>
                  <p className="text-sm text-gray-600">{item.name}</p>
                  {item.amount && (
                    <p className="text-xs text-gray-500">{item.amount}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200">
                    Approve
                  </button>
                  <button className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full hover:bg-red-200">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <h3 className="text-lg font-semibold text-[#261C15] mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-[#053DA6] text-white rounded-lg hover:bg-[#042d85] transition-colors">
            <Users className="w-6 h-6 mx-auto mb-2" />
            <p className="text-sm font-medium">Manage Users</p>
          </button>
          <button className="p-4 bg-[#FB7F00] text-white rounded-lg hover:bg-[#e67200] transition-colors">
            <Building className="w-6 h-6 mx-auto mb-2" />
            <p className="text-sm font-medium">Add Investment</p>
          </button>
          <button className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <DollarSign className="w-6 h-6 mx-auto mb-2" />
            <p className="text-sm font-medium">View Transactions</p>
          </button>
          <button className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <TrendingUp className="w-6 h-6 mx-auto mb-2" />
            <p className="text-sm font-medium">Generate Report</p>
          </button>
        </div>
      </Card>
    </div>
  );
}
