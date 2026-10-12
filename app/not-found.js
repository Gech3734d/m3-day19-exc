import Link from "next/link";
export default function NotFound() { return <main><h1>Dish or page not found</h1><p className="lead">We could not find the page you requested. Return to the menu to continue browsing.</p><Link className="button" href="/menu">Browse menu</Link></main>; }
