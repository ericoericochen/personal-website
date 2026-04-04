export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full shrink-0 bg-transparent py-6 text-center text-sm text-secondary"
      role="contentinfo"
    >
      {year}
    </footer>
  );
}

export default Footer;
