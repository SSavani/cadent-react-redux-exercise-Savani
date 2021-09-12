import React from 'react';

const ListSelection = ({ isItemSelected, selectedItem }) => {
  return (
    <div className="listSelection">
      ListSelection
      {isItemSelected ? (
        <table>
          <tbody>
            {[selectedItem].map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No selections made yet</p>
      )}
    </div>
  );
};
export default ListSelection;
