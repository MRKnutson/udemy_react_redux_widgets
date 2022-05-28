import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end Javascript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among Engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components.",
  },
];

const App = () => {
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
};

export default App;
