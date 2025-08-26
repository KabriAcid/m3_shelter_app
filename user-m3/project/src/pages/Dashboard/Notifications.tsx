import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { 
  Bell, 
  TrendingUp, 
  Home, 
  DollarSign, 
  AlertCircle, 
  CheckCircle, 
  Info,
  X,
  Settings,
  Filter
} from 'lucide-react';

// Mock data for notifications
const notifications = [
  {
    id: 1,
    type: 'investment',
    title: 'Investment Opportunity',
    message: 'New property "Luxury Penthouse Suite" is now available for investment. Limited shares remaining.',
    time: '2 hours ago',
    read: false,
    icon: Home,
    color: 'text-[#053DA6] bg-[#053DA6]/10'
  },
  {
    id: 2,
    type: 'dividend',
    title: 'Dividend Payment Received',
    message: 'You received ₦25,000 dividend from Golden Sands Villas. Payment has been credited to your wallet.',
    time: '5 hours ago',
    read: false,
    icon: DollarSign,
    color: 'text-green-600 bg-green-100'
  },
  {
    id: 3,
    type: 'portfolio',
    title: 'Portfolio Performance Update',
    message: 'Your portfolio has grown by 12.5% this month. Azure Bay Villas showing strong performance.',
    time: '1 day ago',
    read: true,
    icon: TrendingUp,
    color: 'text-purple-600 bg-purple-100'
  },
  {
    id: 4,
    type: 'alert',
    title: 'Document Verification Required',
    message: 'Please verify your identity documents to continue investing. Upload required documents in Settings.',
    time: '2 days ago',
    read: false,
    icon: AlertCircle,
    color: 'text-yellow-600 bg-yellow-100'
  },
  {
    id: 5,
    type: 'success',
    title: 'Investment Completed Successfully',
    message: 'Your investment of 5 shares in Azure Bay Villas has been processed successfully.',
    time: '3 days ago',
    read: true,
    icon: CheckCircle,
    color: 'text-green-600 bg-green-100'
  },
  {
    id: 6,
    type: 'info',
    title: 'New Feature: Legal Vault',
    message: 'Access all your property documents securely in the new Legal Vault section.',
    time: '5 days ago',
    read: true,
    icon: Info,
    color: 'text-blue-600 bg-blue-100'
  },
  {
    id: 7,
    type: 'investment',
    title: 'Share Price Update',
    message: 'Serene Heights Villas share price increased by 8%. Your investment value has grown.',
    time: '1 week ago',
    read: true,
    icon: TrendingUp,
    color: 'text-[#FB7F00] bg-[#FB7F00]/10'
  },
  {
    id: 8,
    type: 'dividend',
    title: 'Quarterly Dividend Announcement',
    message: 'Q1 2024 dividends will be distributed on March 31st. Expected yield: 2.1%.',
    time: '1 week ago',
    read: true,
    icon: DollarSign,
    color: 'text-green-600 bg-green-100'
  }
];

const notificationTypes = ['All', 'Investment', 'Dividend', 'Portfolio', 'Alert', 'Success', 'Info'];

export const Notifications: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [notificationList, setNotificationList] = useState(notifications);

  const filteredNotifications = notificationList.filter(notification => {
    if (selectedType === 'All') return true;
    return notification.type.toLowerCase() === selectedType.toLowerCase();
  });

  const unreadCount = notificationList.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotificationList(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotificationList(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotificationList(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F7F7F2] p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#053DA6] rounded-lg relative">
                <Bell className="h-6 w-6 text-white" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-[#FB7F00] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#261C15]">Notifications</h1>
                <p className="text-gray-600">
                  {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <Button variant="outline" size="sm" onClick={markAllAsRead}>
                  Mark All Read
                </Button>
              )}
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-[#261C15]">Filter by type:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {notificationTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-[#053DA6] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Notifications List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {filteredNotifications.map((notification, index) => {
            const IconComponent = notification.icon;
            return (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <Card 
                  className={`p-6 transition-all duration-200 ${
                    !notification.read 
                      ? 'border-l-4 border-l-[#053DA6] bg-[#053DA6]/5' 
                      : 'hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${notification.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className={`font-semibold ${!notification.read ? 'text-[#261C15]' : 'text-gray-800'}`}>
                            {notification.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          {!notification.read && (
                            <div className="w-2 h-2 bg-[#053DA6] rounded-full"></div>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{notification.time}</span>
                        {!notification.read && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs"
                          >
                            Mark as Read
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Bell className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No notifications found</h3>
            <p className="text-gray-500">Try adjusting your filter selection</p>
          </motion.div>
        )}

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-[#261C15] mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#261C15]">Investment Opportunities</p>
                  <p className="text-sm text-gray-600">Get notified about new properties and investment chances</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-[#053DA6] focus:ring-[#053DA6] border-gray-300 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#261C15]">Dividend Payments</p>
                  <p className="text-sm text-gray-600">Receive alerts when dividends are paid</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-[#053DA6] focus:ring-[#053DA6] border-gray-300 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#261C15]">Portfolio Updates</p>
                  <p className="text-sm text-gray-600">Monthly portfolio performance reports</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-[#053DA6] focus:ring-[#053DA6] border-gray-300 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#261C15]">Security Alerts</p>
                  <p className="text-sm text-gray-600">Important account security notifications</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-[#053DA6] focus:ring-[#053DA6] border-gray-300 rounded" />
              </div>
            </div>
            <div className="mt-6">
              <Button size="sm">Save Preferences</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};