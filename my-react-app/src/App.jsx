import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calorie: 57 },
    { id: 2, name: "orange", calorie: 45 },
    { id: 3, name: "banana", calorie: 105 },
    { id: 4, name: "grapes", calorie: 55 },
    { id: 5, name: "coconut", calorie: 70 },
  ];
  const vegetables = [
    { id: 6, name: "potatoes", calorie: 95 },
    { id: 7, name: "calery", calorie: 45 },
    { id: 8, name: "carrots", calorie: 105 },
    { id: 9, name: "corn", calorie: 55 },
    { id: 10, name: "broccoli", calorie: 70 },
  ];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegotables" />
      )}
    </>
  );
}

export default App;
