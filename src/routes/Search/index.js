import React from "react";
import List from "../../component/List";
import "./index.css";
import _ from "lodash";
import Error from "../../component/Error";
import Loading from "../../component/Loading";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      error: null,
      filterList: [],
      query: "",
      loading: false,
    };
  }

  getTodoList = () => {
    try {
      this.setState({ loading: true });
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          this.setState({ todoList: data, filterList: data, loading: false });
        });
    } catch (err) {
      this.setState({ error: err, loading: false });
    }
  };

  componentWillMount() {
    this.getTodoList();
  }

  getList = () => {
    const { todoList, filterList, query } = this.state;
    const listData = query !== "" ? filterList : todoList;

    return (
      <>
        {listData.length > 0 &&
          listData.map((item) => {
            const { id, completed } = item;
            let bckgColor =
              completed && completed === true ? "green" : "crimson";
            return <List key={id} data={item} bckgColor={bckgColor} />;
          })}

        {listData.length == 0 && (
          <div className="error-message">No search result Found!</div>
        )}
      </>
    );
  };

  getSearchResult = (searchKeyword) => {
    
    const { todoList } = this.state;

    const searchList = todoList.filter((item) => {
      return (
        item.title.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1
      );
    });
    this.setState({ filterList: searchList });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(name)
    if (value !== "") {
      this.setState({ [name] : value }, console.log(this.state));
      this.getSearchResult(value);
    } else {
      this.setState({ filterList: this.state.todoList });
    }
  };

  getContent = () => {
    const { error } = this.state;
    return (
      <>
        {error ? (
          <Error message={error} />
        ) : (
          <div className="card-widget">{this.getList()}</div>
        )}
      </>
    );
  };

  render() {
    const { loading, query } = this.state;
    return (
      <>
        <div style={{ marginBottom: "10px", marginTop: "20px" }}>
          Search By title includes :
          <span style={{marginLeft: '10px'}}>
            <input
              type="text"
              name="query"
              defaultValue={query}
              onChange={_.debounce(this.handleChange, 500)}
            />
          </span  >
        </div>
        {loading ? <Loading /> : this.getContent()}
      </>
    );
  }
}

export default Search;
