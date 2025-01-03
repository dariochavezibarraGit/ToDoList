interface Props {
  list: string[];
}

function List({ list }: Props) {
  return (
    <>
      <ul className="list-group">
        {list.map((item) => (
          <li className="list-group-item" key="item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
