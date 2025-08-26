import React, { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2, Ban, CheckCircle } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { FormInput } from '../../components/ui/FormInput';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'suspended' | 'pending';
  totalInvestments: string;
  joinDate: string;
  lastLogin: string;
}

export function Users() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const mockUsers: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+234 806 123 4567',
      status: 'active',
      totalInvestments: 'NGN 2.5M',
      joinDate: '2024-01-15',
      lastLogin: '2 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+234 803 987 6543',
      status: 'pending',
      totalInvestments: 'NGN 0',
      joinDate: '2024-03-10',
      lastLogin: '1 day ago'
    },
    {
      id: 3,
      name: 'Michael Peters',
      email: 'mike.peters@email.com',
      phone: '+234 810 555 7890',
      status: 'suspended',
      totalInvestments: 'NGN 1.2M',
      joinDate: '2023-11-20',
      lastLogin: '2 weeks ago'
    },
    {
      id: 4,
      name: 'Emily Chen',
      email: 'emily.chen@email.com',
      phone: '+234 807 246 8135',
      status: 'active',
      totalInvestments: 'NGN 5.8M',
      joinDate: '2023-08-05',
      lastLogin: '30 minutes ago'
    }
  ];

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      suspended: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#261C15]">User Management</h1>
          <p className="text-gray-600">Manage platform users and their access</p>
        </div>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4" />
          Add User
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
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
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="suspended">Suspended</option>
            </select>
            <Button variant="outline">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Users Table */}
      <Card padding="sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">User</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Contact</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Investments</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Join Date</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Last Login</th>
                <th className="text-left py-3 px-4 font-semibold text-[#261C15]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#053DA6] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-[#261C15]">{user.name}</p>
                        <p className="text-sm text-gray-600">ID: {user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm text-[#261C15]">{user.email}</p>
                      <p className="text-sm text-gray-600">{user.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={getStatusBadge(user.status)}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-[#261C15]">
                    {user.totalInvestments}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    {user.lastLogin}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-gray-600 hover:text-[#053DA6]">
                        <Edit className="w-4 h-4" />
                      </button>
                      {user.status === 'active' ? (
                        <button className="p-1 text-gray-600 hover:text-red-600">
                          <Ban className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="p-1 text-gray-600 hover:text-green-600">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      )}
                      <button className="p-1 text-gray-600 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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
          Showing {filteredUsers.length} of {mockUsers.length} users
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