import type { LinksFunction } from 'remix';
import { Links, LiveReload, Outlet } from 'remix';
import globalStylesURL from "./styles/global.css";
import globalMediumStylesURL from "./styles/global-medium.css";
import globalLargeStylesURL from "./styles/global-large.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesURL
    },
    {
      rel: "stylesheet",
      href: globalMediumStylesURL,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: globalLargeStylesURL,
      media: "screen and (min-width: 1024px)"
    }
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" && (
          <LiveReload />
        )}
      </body>
    </html>
  );
}