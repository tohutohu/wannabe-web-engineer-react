import Item from "./Item";
const ItemList = () => {
  return (
    // ここにItemコンポーネントを並べる
    <div>
      <h2>商品リスト</h2>
      <ul>
        <li>
          <Item name="りんご" price={300} />
        </li>
        <li>
          <Item name="バナナ" price={200} />
        </li>
      </ul>
    </div>
  );
};

export default ItemList;
