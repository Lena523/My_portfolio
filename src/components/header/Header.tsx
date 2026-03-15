import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import ContactButton from '../../shared/contact-button/ContactButton';

export default function Header() {
  return (
    <header>
      <Logo />
      <Navbar />
      <ContactButton text={'Get in touch'} />
    </header>
  );
}
