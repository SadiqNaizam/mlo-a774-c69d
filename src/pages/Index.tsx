import React from 'react';
import FunnelMetrics from '../components/Dashboard/FunnelMetrics';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import OtherMetrics from '../components/Dashboard/OtherMetrics';
import ReasonsStats from '../components/Dashboard/ReasonsStats';
import SourceChart from '../components/Dashboard/SourceChart';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * Index page for the Leads Overview Dashboard.
 * This component acts as the main entry point for the dashboard, composing various
 * data visualization components within a structured layout.
 * The layout is managed by MainAppLayout, and the content area is arranged
 * in a responsive grid to display metrics and charts effectively.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        {/* Top Row: Funnel Metrics and Source Chart */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <FunnelMetrics />
          </div>
          <div className="md:col-span-3">
            <SourceChart />
          </div>
        </div>

        {/* Middle Row: Leads Tracking Chart (Full Width) */}
        <LeadsTrackingChart />

        {/* Bottom Row: Reason Statistics and Other Metrics */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <ReasonsStats />
          </div>
          <div className="md:col-span-3">
            <OtherMetrics />
          </div>
        </div>
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;
