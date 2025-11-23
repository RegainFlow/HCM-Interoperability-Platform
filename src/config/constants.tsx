import {
  PiDatabaseDuotone,
  PiCheckCircleDuotone,
  PiWarningDuotone,
  PiGitDiffDuotone,
  PiTableDuotone,
  PiLinkDuotone
} from 'react-icons/pi';
import { Metric, PipelineStage, LogEntry } from './types';

export const METRICS: Metric[] = [
  {
    title: 'Validation Rate',
    value: '99.8%',
    change: '+0.4%',
    isPositive: true,
    icon: PiCheckCircleDuotone
  },
  {
    title: 'Schema Norm. Match',
    value: '100%',
    change: '0.0%',
    isPositive: true,
    icon: PiDatabaseDuotone
  },
  {
    title: 'Tables Processed',
    value: '342',
    change: '+12',
    isPositive: true,
    icon: PiTableDuotone
  },
  {
    title: 'Active Interfaces',
    value: '108',
    change: 'Legacy Maps',
    isPositive: true,
    icon: PiLinkDuotone
  },
  {
    title: 'Reconciliation Gaps',
    value: '23',
    change: '-5',
    isPositive: true,
    icon: PiGitDiffDuotone
  }
];

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: '1',
    name: 'Ingestion (TE/GL/Pay)',
    status: 'completed',
    itemsProcessed: 45200,
    totalItems: 45200,
    latency: '45ms'
  },
  {
    id: '2',
    name: 'Schema Normalization',
    status: 'completed',
    itemsProcessed: 45200,
    totalItems: 45200,
    latency: '120ms'
  },
  {
    id: '3',
    name: 'Rule Engine',
    status: 'active',
    itemsProcessed: 38500,
    totalItems: 45200,
    latency: '210ms'
  },
  {
    id: '4',
    name: 'Reconciliation',
    status: 'waiting',
    itemsProcessed: 0,
    totalItems: 45200,
    latency: '-'
  },
  {
    id: '5',
    name: 'SAP Integration',
    status: 'waiting',
    itemsProcessed: 0,
    totalItems: 45200,
    latency: '-'
  }
];

export const RECENT_LOGS: LogEntry[] = [
  {
    id: 'LOG-9921',
    timestamp: '10:42:05',
    source: 'TE',
    table: 'T_EXPENSE_HEADERS',
    message: 'Schema validation passed for batch #4021',
    status: 'success'
  },
  {
    id: 'LOG-9920',
    timestamp: '10:41:58',
    source: 'GL',
    table: 'GL_JOURNAL_LINES',
    message: 'Field transformation warning: Currency precision',
    status: 'warning'
  },
  {
    id: 'LOG-9919',
    timestamp: '10:41:45',
    source: 'HRIS',
    table: 'EMPLOYEE_MASTER',
    message: 'Deterministic rule applied: COST_CENTER_MAP',
    status: 'success'
  },
  {
    id: 'LOG-9918',
    timestamp: '10:40:12',
    source: 'PAYROLL',
    table: 'PAY_RUN_RESULTS',
    message: 'Data type mismatch in column: NET_PAY. Expected DECIMAL(18,2)',
    status: 'error'
  },
  {
    id: 'LOG-9917',
    timestamp: '10:39:55',
    source: 'TE',
    table: 'T_TRAVEL_REQ',
    message: 'Normalization complete',
    status: 'success'
  }
];

export const RECONCILIATION_DATA = [
  { time: '06:00', matched: 4000, mismatch: 20 },
  { time: '07:00', matched: 3500, mismatch: 45 },
  { time: '08:00', matched: 5600, mismatch: 12 },
  { time: '09:00', matched: 8200, mismatch: 8 },
  { time: '10:00', matched: 7800, mismatch: 35 },
  { time: '11:00', matched: 9100, mismatch: 5 },
  { time: '12:00', matched: 6400, mismatch: 0 }
];
