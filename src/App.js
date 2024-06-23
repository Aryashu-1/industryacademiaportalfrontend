
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
import IOMPInternships from './Pages/Internships/Internships/Internships';
import SummerInternships from './Pages/Internships/SummerInternships/SummerInternships';
import OtherInternships from './Pages/Internships/OtherInternships/OtherInternships';
import ActiveMOUs from './Pages/MOUs/ActiveMOUs/ActiveMOUs';
import IndustryDesignedCourses from './Pages/Courses/IndustryDesignedCourses/IndustryDesignedCourses';
import CoursesbyIndustryExperts from './Pages/Courses/CoursesbyIndustryExperts/CoursesbyIndustryExperts';
import IndustrySponsoredLaboratories from './Pages/Laboratories/IndustrySponsoredLaboratories';
import CertificationCourses from './Pages/CertificationPrograms/CertificationCourses';
import GuestLecturesbyIndustryExperts from './Pages/LecturesandWorkshops/GuestLecturesbyIndustryExperts';
import Startups from './Pages/Startups/Startups';
import ResearchPublications from './Pages/Publications/ResearchPublications';
import ResearchCenters from './Pages/ResearchCenters/ResearchCenters';
import IndustryConsultancyProjects from './Pages/ProjectsPage/IndustryConsultancyProjects/IndustryConsultancyProjects';
import IndustrialVisits from './Pages/Visits/IndustrialVisits';
import IndustryCollaboratedProjects from './Pages/ProjectsPage/IndustryCollaboratedProjects/IndustryCollaboratedProjects';
import Internships from './Pages/Internships/Internships/Internships';

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
        path:'/internships/',
        element:<Internships/>
      },
      {
        path: '/mous/active-mous',
        element: <ActiveMOUs />
      },
      {
        path: '/courses/industry-designed',
        element: <IndustryDesignedCourses />
      },
      {
        path: '/courses/industry-experts',
        element: <CoursesbyIndustryExperts />
      },
      {
        path: '/laboratories',
        element: <IndustrySponsoredLaboratories />
      },
      {
        path: '/certifications',
        element: <CertificationCourses />
      },
      {
        path: '/guest-lectures',
        element: <GuestLecturesbyIndustryExperts />
      },
      {
        path: '/startups',
        element: <Startups />
      },
      {
        path: '/publications/research-publications',
        element: <ResearchPublications />
      },
      {
        path: '/research-centers',
        element: <ResearchCenters />
      },
      {
        path: 'projects/consultancy-projects',
        element: <IndustryConsultancyProjects />
      },
      {
        path: 'visits/industrial-visits',
        element: <IndustrialVisits />
      },
      {
        path: 'projects/collaborated-projects',
        element: <IndustryCollaboratedProjects />
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
        path:'/resources',
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
