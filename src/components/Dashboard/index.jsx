import { useSelector } from 'react-redux';
import Chat from '../Chat';
const Dashboard = () => {
  const { user } = useSelector((state) => state.login);
  console.log(user);
  return (
    <>
      {user.role === 'mentor' ? <h1>mentor page</h1> : <h1> protege page</h1>}
      <Chat></Chat>
    </>
  );
};
export default Dashboard;
