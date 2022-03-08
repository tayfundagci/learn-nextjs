import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">Home Page</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
