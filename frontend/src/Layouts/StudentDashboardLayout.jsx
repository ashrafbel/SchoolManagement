import React from 'react';
import { Outlet } from 'react-router-dom';

export default function StudentDashboardLayout() {
  return (
    <div className="student-dashboard-layout">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
