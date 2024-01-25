import PropTypes from "prop-types";

function List(props) {
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  //fruits.sort((a, b) => a.calorie - b.calorie); // NUMERIC
  //fruits.sort((a, b) => b.calorie - a.calorie); // REVERSE NUMERIC

  // const lowCalFruits = fruits.filter(fruit => fruit.calorie < 100); //find the low calorie fruits

  const category = props.category;
  const itemList = props.items;

  const listOfFruits = itemList.map(item => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calorie}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listOfFruits}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calorie: PropTypes.number,
    }),
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
