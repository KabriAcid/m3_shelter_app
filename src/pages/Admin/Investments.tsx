import React, { useState } from 'react';
import { Search, Plus, Eye, Check, X, Clock, MapPin } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

interface Investment {
  id: number;
  title: string;
  location: string;
  totalAmount: string;
  raisedAmount: string;
  percentage: number;
  investors: number;
  status: 'active' | 'pending' | 'completed' | 'rejected';
  startDate: string;
  endDate: string;
  image: string;
}

export function Investments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const mockInvestments: Investment[] = [
    {
      id: 1,
      title: 'Lagos Heights Luxury Apartments',
      location: 'Victoria Island, Lagos',
      totalAmount: 'NGN 450M',
      raisedAmount: 'NGN 340M',
      percentage: 76,
      investors: 234,
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-12-31',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
    },
    {
      id: 2,
      title: 'Abuja Commercial Plaza',
      location: 'Central Business District, Abuja',
      totalAmount: 'NGN 280M',
      raisedAmount: 'NGN 0',
      percentage: 0,
      investors: 0,
      status: 'pending',
      startDate: '2024-04-01',
      endDate: '2024-10-31',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg'
    },
    {
      id: 3,
      title: 'Port Harcourt Industrial Complex',
      location: 'Trans-Amadi, Port Harcourt',
      totalAmount: 'NGN 620M',
      raisedAmount: 'NGN 620M',
      percentage: 100,
      investors: 487,
      status: 'completed',
      startDate: '2023-06-01',
      endDate: '2023-12-15',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg'
    },
    {
      id: 4,
      title: 'Kano Residential Estate',
      location: 'Nasarawa GRA, Kano',
      totalAmount: 'NGN 180M',
      raisedAmount: 'NGN 0',
      percentage: 0,
      investors: 0,
      status: 'rejected',
      startDate: '2024-02-01',
      endDate: '2024-08-31',
      image: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg'
    }
  ];

  const filteredInvestments = mockInvestments.filter(investment => {
    const matchesSearch = investment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         investment.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || investment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return `px-3 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`;
  };

  const handleApprove = (id: number) => {
    console.log('Approving investment:', id);
  };

  const handleReject = (id: number) => {
    console.log('Rejecting investment:', id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#261C15]">Investment Management</h1>
          <p className="text-gray-600">Oversee and manage all investment projects</p>
        </div>
        <Button>
          <Plus className="w-4 h-4" />
          Add Investment
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search investments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </Card>

      {/* Investment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#053DA6]">{mockInvestments.filter(i => i.status === 'active').length}</p>
            <p className="text-sm text-gray-600">Active Projects</p>
          </div>
        </Card>
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#FB7F00]">{mockInvestments.filter(i => i.status === 'pending').length}</p>
            <p className="text-sm text-gray-600">Pending Approval</p>
          </div>
        </Card>
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{mockInvestments.filter(i => i.status === 'completed').length}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
        </Card>
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#261C15]">NGN 1.53B</p>
            <p className="text-sm text-gray-600">Total Value</p>
          </div>
        </Card>
      </div>

      {/* Investments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredInvestments.map((investment) => (
          <Card key={investment.id} hover>
            <div className="flex gap-4">
              <img
                src={investment.image}
                alt={investment.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#261C15]">{investment.title}</h3>
                  <span className={getStatusBadge(investment.status)}>
                    {investment.status.charAt(0).toUpperCase() + investment.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  {investment.location}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{investment.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#053DA6] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${investment.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{investment.raisedAmount} raised</span>
                    <span>{investment.investors} investors</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {new Date(investment.startDate).toLocaleDateString()} - {new Date(investment.endDate).toLocaleDateString()}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                  {investment.status === 'pending' && (
                    <>
                      <Button size="sm" variant="success" onClick={() => handleApprove(investment.id)}>
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleReject(investment.id)}>
                        <X className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}