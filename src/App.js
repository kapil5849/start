import './App.css';
import DSAComponent from './pages/Dsa';
import NavigationBar from './components/NavigationBar';
import Curriculum from './pages/CourseCurriculum';
import BatchOverview from './pages/BatchOverview';
import Footer from './pages/Footer';
import Faq from './pages/Faq';
import Mentor from './pages/MentorDetails';
import JoinDetails from './pages/JoinDetails';
import Comparison from './pages/ComparisonSession';

function App() {  
  return (
    <div className="App">
      <NavigationBar />
      <DSAComponent />
      <Curriculum />
      <BatchOverview />
      <Comparison/>
      <JoinDetails/>
      <Mentor />
      <Faq/>
      <Footer />
    </div>
  );
}

export default App;
