import Logo from '../../shared/logo/Logo';
import Navbar from './navbar/Navbar';
import ContactButton from '../../shared/contact-button/ContactButton';
import type { HeaderProps } from '../../types/types';
import ThemeToggler from './themeToggler/ThemeToggler';

export default function Header({ theme }: HeaderProps) {
  return (
    <header>
      <Logo />
      <Navbar />
      <ContactButton text={'Get in touch'} />
      <ThemeToggler theme={theme} />
    </header>
  );
}
