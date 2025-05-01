import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Registration from './component/Registration';
import ExpenseTracker from './component/ExpenseTracker';
import Layout from './component/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/expenses" element={<ExpenseTracker />} />
      </Routes>
    </Layout>
  );
}
export default App ;