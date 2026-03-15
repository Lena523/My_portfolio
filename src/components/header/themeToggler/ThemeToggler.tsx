import type { HeaderProps } from '../../../types/types';

export default function ThemeToggler({ theme }: HeaderProps) {
  return <button onClick={theme}>Change theme</button>;
}
