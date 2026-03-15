import HomePage from './pages/homePage/HomePage.tsx';
import PortfolioPage from './pages/portfolioPage/PortfolioPage.tsx';
import AboutPage from './pages/aboutPage/AboutPage.tsx';
import ContactsPage from './pages/contactsPage/ContactsPage.tsx';
import NotFoundPage from './pages/notFoundPage/NotFoundPage.tsx';
import App from './App.tsx';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'aboutme',
        Component: AboutPage,
      },
      {
        path: 'contacts',
        Component: ContactsPage,
      },
      {
        path: 'portfolio',
        Component: PortfolioPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);
