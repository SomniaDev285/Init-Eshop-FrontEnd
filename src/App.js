import { useTranslation } from 'react-i18next';
import './App.css';
import Router from './router/Router';
import { useEffect } from 'react';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language || navigator.userLanguage;
    i18n.changeLanguage(lng);
  }, [i18n]);
  return (
    <div className="">
      <Router />
    </div>
  );
}

export default App;
