import React from 'react';
import { Card } from '../../components/ui/Card';
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
  ArcElement
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { TrendingUp, Users, DollarSign, Building } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export function Reports() {
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Users',
        data: [120, 190, 300, 500, 420, 680],
        borderColor: '#053DA6',
        backgroundColor: 'rgba(5, 61, 166, 0.1)',
        tension: 0.1,
      },
      {
        label: 'Revenue (M)',
        data: [65, 89, 125, 180, 220, 280],
        borderColor: '#FB7F00',
        backgroundColor: 'rgba(251, 127, 0, 0.1)',
        tension: 0.1,
      }
    ],
  };

  const barChartData = {
    labels: ['Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan', 'Zamfara'],
    datasets: [
      {
        label: 'Active Investments',
        data: [45, 32, 28, 15, 22, 18],
        backgroundColor: '#053DA6',
      },
      {
        label: 'Completed Projects',
        data: [38, 25, 22, 12, 18, 14],
        backgroundColor: '#FB7F00',
      }
    ],
  };

  const pieChartData = {
    labels: ['Residential', 'Commercial', 'Industrial', 'Mixed-Use'],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          '#053DA6',
          '#FB7F00',
          '#22C55E',
          '#EF4444'
        ],
        borderWidth: 2,
        borderColor: '#fff',
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#261C15]">Analytics & Reports</h1>
          <p className="text-gray-600">Comprehensive platform analytics and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-transparent">
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-[#261C15]">2,847</p>
              <p className="text-sm text-green-600">+12.5% vs last month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="w-6 h-6 text-[#053DA6]" />
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold text-[#261C15]">156</p>
              <p className="text-sm text-green-600">+8.2% vs last month</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <Building className="w-6 h-6 text-[#FB7F00]" />
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-[#261C15]">₦847.2M</p>
              <p className="text-sm text-green-600">+18.7% vs last month</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Growth Rate</p>
              <p className="text-2xl font-bold text-[#261C15]">23.4%</p>
              <p className="text-sm text-green-600">+2.1% vs last month</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <Card>
          <h3 className="text-lg font-semibold text-[#261C15] mb-4">User Growth & Revenue Trend</h3>
          <Line data={lineChartData} options={chartOptions} />
        </Card>

        {/* Investment by Location */}
        <Card>
          <h3 className="text-lg font-semibold text-[#261C15] mb-4">Investments by Location</h3>
          <Bar data={barChartData} options={chartOptions} />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Property Type Distribution */}
        <Card>
          <h3 className="text-lg font-semibold text-[#261C15] mb-4">Property Type Distribution</h3>
          <div className="h-64">
            <Pie data={pieChartData} options={{ ...chartOptions, maintainAspectRatio: false }} />
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-[#261C15] mb-4">Recent Activity Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-[#261C15]">New User Registrations</p>
                <p className="text-sm text-gray-600">Today</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-[#053DA6]">47</p>
                <p className="text-xs text-green-600">+15% vs yesterday</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-[#261C15]">Investment Contributions</p>
                <p className="text-sm text-gray-600">Today</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-[#FB7F00]">₦24.8M</p>
                <p className="text-xs text-green-600">+22% vs yesterday</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-[#261C15]">Project Completions</p>
                <p className="text-sm text-gray-600">This week</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">3</p>
                <p className="text-xs text-green-600">On track</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-[#261C15]">Pending Approvals</p>
                <p className="text-sm text-gray-600">Awaiting action</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-red-600">23</p>
                <p className="text-xs text-red-600">Requires attention</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Export Options */}
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#261C15]">Export Reports</h3>
            <p className="text-sm text-gray-600">Download detailed reports for external analysis</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Export CSV
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Export PDF
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Export Excel
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}