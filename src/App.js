
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Components/RootLayout/RootLayout';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import AnnouncementsPage from './Pages/AnnouncementsPage/AnnouncementsPage';
import InstitutionsPage from './Pages/InstitutionsPage/InstitutionsPage';
import CompaniesPage from './Pages/CompaniesPage/CompaniesPage';
import ResearchProjectsPage from './Pages/ResearchProjectsPage/ResearchProjectsPage';
import EventsPage from './Pages/EventsPage/EventsPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import FeedbackPage from './Pages/FeedbackPage/FeedbackPage';
import LearningMaterialsPage from './Pages/LearningMaterialsPage/LearningMaterialsPage';
import AnalyticsPage from './Pages/AnalyticsPage/AnalyticsPage';
import ReportsPage from './Pages/ReportsPage/ReportsPage';
import PrivacyandTermsPages from './Pages/PrivacyandTermsPage/PrivacyandTermsPages';
import HomePage from './Pages/HomePage/HomePage';
import AboutUsPage from './Pages/AboutusPage/AboutUsPage';

function App() {
  const router = createBrowserRouter([
    {
      path:'',
    element: <RootLayout/>,
    children:[
      {
        path:'',
        element:<HomePage/>
      },
      {
        path:'/login',
        element: <LoginPage/>,
      },
      {
        path:'/aboutus',
        element: <AboutUsPage/>,
      },
      {
        path:'/signin',
        element: <SignupPage/>,
      },
      {
        path:'/profile',
        element: <ProfilePage/>,
      },
      {
        path:'/announcements',
        element: <AnnouncementsPage/>,
      },
      {
        path:'/institutions',
        element: <InstitutionsPage/>,
      },
      {
        path:'/companies',
        element: <CompaniesPage/>,
      },
      {
        path:'/projects',
        element: <ResearchProjectsPage/>,
      },
      {
        path:'/events',
        element: <EventsPage/>,
      },
      {
        path:'/projectsproposal',
        element: <ProjectsPage/>,
      },
      {
        path:'/feedback',
        element: <FeedbackPage/>,
      },
      {
        path:'/learning-materials',
        element: <LearningMaterialsPage/>,
      },
      {
        path:'/admin/analytics',
        element: <AnalyticsPage/>,
      },
      {
        path:'/admin/reports',
        element: <ReportsPage/>,
      },
      {
        path:'/privacyandterms',
        element: <PrivacyandTermsPages/>,
      },
      
    ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
