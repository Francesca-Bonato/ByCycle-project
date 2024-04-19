export function Footer({ nameApp }) {
    const data = new Date();
    const year = data.getFullYear();
    return (
      <div className="footer">
        <span>
          Copyright {year} {nameApp}
        </span>
      </div>
    );
  }