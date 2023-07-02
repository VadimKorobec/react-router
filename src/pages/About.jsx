import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h1>About page</h1>
      <ul>
        <li>
          <Link to="mission">Mission</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
