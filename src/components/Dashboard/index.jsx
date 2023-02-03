import { useSelector } from 'react-redux';
import MentorDashboard from './MentorDashboard';
import ProtegeDashboard from './ProtegeDashboard';
const Dashboard = () => {
  const { user } = useSelector((state) => state.login);

  return (
    <>{user.role === 'mentor' ? <MentorDashboard /> : <ProtegeDashboard />}</>
  );
};
export default Dashboard;
