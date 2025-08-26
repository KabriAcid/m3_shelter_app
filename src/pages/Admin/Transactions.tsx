import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Calendar } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { format } from 'date-fns';

interface Transaction {
  id: string;
  user: string;
  userEmail: string;
  type: 'investment' | 'withdrawal' | 'dividend' | 'fee';
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
  reference: string;
  date: string;
  investmentProject?: string;
  paymentMethod: string;
}

export function Transactions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [dateRange, setDateRange] = useState<string>('all');

  const mockTransactions: Transaction[] = [
    {
      id: 'TXN-001',
      user: 'John Doe',
      userEmail: 'john.doe@email.com',
      type: 'investment',
      amount: 2500000,
      currency: 'NGN',
      status: 'completed',
      reference: 'REF-2024-001',
      date: '2024-03-15T10:30:00Z',
      investmentProject: 'Lagos Heights Apartments',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 'TXN-002',
      user: 'Sarah Johnson',
      userEmail: 'sarah.j@email.com',
      type: 'investment',
      amount: 1800000,
      currency: 'NGN',
      status: 'pending',
      reference: 'REF-2024-002',
      date: '2024-03-14T14:20:00Z',
      investmentProject: 'Abuja Commercial Plaza',
      paymentMethod: 'Card Payment'
    },
    {
      id: 'TXN-003',
      user: 'Michael Peters',
      userEmail: 'mike.peters@email.com',
      type: 'withdrawal',
      amount: 500000,
      currency: 'NGN',
      status: 'completed',
      reference: 'REF-2024-003',
      date: '2024-03-13T09:15:00Z',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 'TXN-004',
      user: 'Emily Chen',
      userEmail: 'emily.chen@email.com',
      type: 'dividend',
      amount: 125000,
      currency: 'NGN',
      status: 'completed',
      reference: 'REF-2024-004',
      date: '2024-03-12T16:45:00Z',
      investmentProject: 'Port Harcourt Industrial',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 'TXN-005',
      user: 'David Wilson',
      userEmail: 'david.w@email.com',
      type: 'investment',
      amount: 3200000,
      currency: 'NGN',
      status: 'failed',
      reference: 'REF-2024-005',
      date: '2024-03-11T11:30:00Z',
      investmentProject: 'Kano Residential Estate',
      paymentMethod: 'Card Payment'
    }
  ];

  const filteredTransactions = mockTransactions.filter(transaction => {
    const matchesSearch = transaction.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.reference.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || transaction.status === statusFilter;
    const matchesType = typeFilter === 'all' || transaction.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800'
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`;
  };

  const getTypeBadge = (type: string) => {
    const styles = {
      investment: 'bg-blue-100 text-blue-800',
      withdrawal: 'bg-purple-100 text-purple-800',
      dividend: 'bg-green-100 text-green-800',
      fee: 'bg-orange-100 text-orange-800'
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${styles[type as keyof typeof styles]}`;
  };

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  const totalVolume = mockTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const completedTransactions = mockTransactions.filter(t => t.status === 'completed').length;
  const pendingTransactions = mockTransactions.filter(t => t.status === 'pending').length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#261C15]">Transaction Management</h1>
          <p className="text-gray-600">Monitor and manage all platform transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4" />
            Date Range
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Volume</p>
            <p className="text-2xl font-bold text-[#261C15]">{formatAmount(totalVolume, 'NGN')}</p>
            <p className="text-sm text-green-600">+15.2% vs last month</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Transactions</p>
            <p className="text-2xl font-bold text-[#261C15]">{mockTransactions.length}</p>
            <p className="text-sm text-blue-600">All time</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-600">Completed</p>
            <p className="text-2xl font-bold text-green-600">{completedTransactions}</p>
            <p className="text-sm text-gray-500">Successful</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">{pendingTransactions}</p>
            <p className="text-sm text-gray-500">Awaiting</p>
          </div>
        </Card>
      </div>

      {/* Search and Filter Bar */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="investment">Investment</option>
              <option value="withdrawal">Withdrawal</option>
              <option value="dividend">Dividend</option>
              <option value="fee">Fee</option>
            </select>
            <Button variant="outline">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Transactions Table */}
      <Card padding="sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Transaction</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">User</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-[#261C15]">{transaction.id}</p>
                      <p className="text-sm text-gray-600">{transaction.reference}</p>
                      {transaction.investmentProject && (
                        <p className="text-xs text-blue-600">{transaction.investmentProject}</p>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-[#261C15]">{transaction.user}</p>
                      <p className="text-sm text-gray-600">{transaction.userEmail}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={getTypeBadge(transaction.type)}>
                      {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-[#261C15]">
                      {formatAmount(transaction.amount, transaction.currency)}
                    </p>
                    <p className="text-sm text-gray-600">{transaction.paymentMethod}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className={getStatusBadge(transaction.status)}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-[#261C15]">
                      {format(new Date(transaction.date), 'MMM dd, yyyy')}
                    </p>
                    <p className="text-xs text-gray-600">
                      {format(new Date(transaction.date), 'HH:mm')}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {filteredTransactions.length} of {mockTransactions.length} transactions
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
}