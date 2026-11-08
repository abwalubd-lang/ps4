import logoUrl from '../assets/dpy-logo.webp';

/** Official DPY | دبلوماسي بلس logo. */
export function BrandMark({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return <img className={`brand-logo brand-logo--${size}`} src={logoUrl} alt="DPY · دبلوماسي بلس" width={468} height={168} />;
}
