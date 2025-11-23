import { IconType } from 'react-icons';

export interface Metric {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: IconType;
}

export interface PipelineStage {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'error' | 'waiting';
  itemsProcessed: number;
  totalItems: number;
  latency: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  source: 'TE' | 'GL' | 'PAYROLL' | 'HRIS' | 'SAP';
  table: string;
  message: string;
  status: 'success' | 'error' | 'warning';
}

export enum ChartPeriod {
  HOURLY = 'Hourly',
  DAILY = 'Daily',
  WEEKLY = 'Weekly'
}
