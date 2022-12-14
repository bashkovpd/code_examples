import type { LinksFunction } from 'remix';
import { Link } from 'remix';
import { FC } from 'react';
import stylesURL from '../styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesURL }];
};

const IndexRoute: FC = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default IndexRoute;