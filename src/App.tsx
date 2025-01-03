import Heading from "./components/Heading";

function App() {
  return (
    <>
      <Heading
        heading="To Do List"
        unfinished={["Item 1", "Item 2", "Item 3"]}
        completed={["Item 4", "Item 5", "Item 6"]}
      />
    </>
  );
}

export default App;
