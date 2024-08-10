function Filter ( { setFilter } ) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
}

export default Filter;