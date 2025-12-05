function Filter({ setFilter }) {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option>All</option>
      <option>Math</option>
      <option>Science</option>
      <option>History</option>
      <option>Programming</option>
    </select>
  );
}

export default Filter;
