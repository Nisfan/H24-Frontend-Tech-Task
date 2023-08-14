import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page">
      <header className="header">
        <h1>home24</h1>
        <input placeholder="Search" />
      </header>
      {children}
      <footer className="footer">
        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
        Versandkosten.
      </footer>
    </div>
  );
};

export default Layout;
