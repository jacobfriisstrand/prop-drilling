export default function Header(data) {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
      </nav>
      <div className="user-info">
        <p>Velkommen {data.username}</p>
        <p> {data.email}</p>
      </div>
    </header>
  );
}
