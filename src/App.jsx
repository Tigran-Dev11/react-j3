import ContactUs from "./pages/contact-us";

function App() {
  let pageTile = "contact us page";

  let description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt, aperiam totam aspernatur ipsa, libero doloremque optio itaque rem qui, voluptatem explicabo. Modi exercitationem cupiditate illo provident nemo quam consequuntur!";

  let count = 0;

  const increment = () => {
    count = count + 1;

    console.log(count);
  };

  const menu = [
    {
      id:1,
      name: "home",
      href: "/home"
    },
    { id:2,
      name: "about",
      href: "/about"
    },
    { id:3,
      name: "help",
      href: "/help"
    }
  ];

  return (
    <div className="App">
      {/* <Home title="Welcome to home page"/> using class components */}
      <ContactUs title={pageTile} description={description} count={count} />
      <button onClick={increment}>+</button>
      <header>
        <ul>
          {menu.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
