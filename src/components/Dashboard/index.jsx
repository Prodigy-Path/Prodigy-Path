import { useSelector } from 'react-redux';
const Dashboard = () => {
  const { user } = useSelector((state) => state.login);
  console.log(user);
  return (
    <>
      {user.role === 'mentor' ? <h1>mentor page</h1> : <h1> protege page</h1>}
    </>
  );
};
export default Dashboard;
