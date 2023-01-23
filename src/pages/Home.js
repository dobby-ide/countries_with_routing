import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1>My HomePage</h1>
      <p>
        go to <Link to="countries">list of all countries</Link>
      </p>
    </>
  );
}
export default HomePage;
