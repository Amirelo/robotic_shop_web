const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: 4,
        height: 40,
        width: "30%",
      }}
    >
      <input
        type="text"
        placeholder="Search.."
        style={{
          height: 40,
          flex: 1,
          border: "none",
          paddingLeft: 20,
        }}
      />
      <div
        style={{
          width: 40,
          height: 40,
          backgroundColor: "gold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img style={{ width: 30 }} src="/icons/ic_search.svg" alt="" />
      </div>
    </div>
  );
};

export default SearchBar;

const transitionStyles: { [key: string]: React.CSSProperties } = {
  entering: { borderColor: "blue" },
  entered: { borderColor: "blue" },
  exiting: { borderColor: "black" },
  exited: { borderColor: "black" },
};
