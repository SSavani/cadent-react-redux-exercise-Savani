import React from 'react';

export const ListTable = ({
  groceryList,
  isItemSelected,
  selectedItem,
  removeItem,
  selectItem,
  deselectItem,
}) => {
  const handleSelect = (e, id) => {
    let item = groceryList.find((item) => item.id === id);
    if (e.target.checked) {
      selectItem(item);
    } else {
      deselectItem();
    }
  };

  const handleRemove = (id) => {
    if (selectedItem.id === id) {
      deselectItem();
    }
    removeItem(id);
  };

  return (
    <React.Fragment>
      <div className="listTable">Grocery List</div>
      {groceryList.length !== 0 ? (
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Category</th>
              <th>Delivery Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {groceryList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        handleSelect(e, item.id);
                      }}
                    ></input>{' '}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.deliveryMethod}</td>
                  <td>
                    <button onClick={() => handleRemove(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>The Grocery List is Empty!!</p>
      )}
    </React.Fragment>
  );
};

export default ListTable;
