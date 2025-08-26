import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Card } from './Card';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    type: 'increase' | 'decrease' | 'neutral';
  };
  icon: LucideIcon;
  color?: 'blue' | 'orange' | 'green' | 'red';
}

export function StatCard({ title, value, change, icon: Icon, color = 'blue' }: StatCardProps) {
  const colorClasses = {
    blue: 'text-[#053DA6] bg-[#053DA6]/10',
    orange: 'text-[#FB7F00] bg-[#FB7F00]/10',
    green: 'text-green-600 bg-green-100',
    red: 'text-red-600 bg-red-100',
  };

  const changeColors = {
    increase: 'text-green-600',
    decrease: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <Card hover className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-[#261C15]">{value}</p>
          {change && (
            <div className={`flex items-center gap-1 text-sm ${changeColors[change.type]}`}>
              <span>{change.value}</span>
              <span className="text-gray-500">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  );
}