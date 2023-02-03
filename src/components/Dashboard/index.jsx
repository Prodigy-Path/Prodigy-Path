/** @format */

import { useSelector } from 'react-redux';
import MentorDashboard from './mentorDashboard';
import ProtegeDashboard from './protegeDashboard';
const Dashboard = () => {
  const { user } = useSelector((state) => state.login);

  return (
    <div className="dashboard__main">
      {user.role === 'mentor' ? <MentorDashboard /> : <ProtegeDashboard />}
    </div>
  );
};
export default Dashboard;
 