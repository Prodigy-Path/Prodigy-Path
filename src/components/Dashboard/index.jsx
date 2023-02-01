import { useSelector } from 'react-redux';
import MentorDashboard from './mentorDashboard';
import ProtegeDashboard from './protegeDashboard';
const Dashboard = () => {
  const { user } = useSelector((state) => state.login);

  return (
    <>{user.role === 'mentor' ? <MentorDashboard /> : <ProtegeDashboard />}</>
  );
};
export default Dashboard;
