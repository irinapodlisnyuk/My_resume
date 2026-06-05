import { AppHeader } from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    // Обертка для всей страницы
    <div className="root-wrapper">
      <AppHeader/>
      
      {/* Сюда будут подставляться страницы (Главная, Логин и т.д.) */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}