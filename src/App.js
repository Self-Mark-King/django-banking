import React, { Component } from "react";
    import Modal from "./components/Modal";
    import axios from "axios";

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          viewCompleted: true,
          activeItem: {
            branch_name: "",
            address: "",
            // completed: false
          },
          todoList: [],
          customer_list: [],
          product_list: []
        };
      }
      componentDidMount() {
        this.refreshList();
        // console.log(this.state.customer_list);
        // console.log(this.state.product_list);
        // console.log(this.state.todoList);
      }
      refreshList = () => {
        axios
          .get("https://backend-banking.herokuapp.com/api/branch/")
          .then(res => this.setState({ todoList: res.data }))
          .catch(err => console.log(err));
        axios
        .get("https://backend-banking.herokuapp.com/api/customer/")
        .then(res => this.setState({ customer_list: res.data }))
        .catch(err => console.log(err));
        axios
        .get("https://backend-banking.herokuapp.com/api/product/")
        .then(res => this.setState({ product_list: res.data }))
        .catch(err => console.log(err));
      };
      displayCompleted = status => {
        if (status) {
          return this.setState({ viewCompleted: true });
        }
        return this.setState({ viewCompleted: false });
      };
      renderTabList = () => {
        return (
          <div className="my-5 tab-list">
            <span
              onClick={() => this.displayCompleted(true)}
              className={this.state.viewCompleted ? "active" : ""}
            >
              Branch
            </span>
            {/* <span
              onClick={() => this.displayCompleted(false)}
              className={this.state.viewCompleted ? "" : "active"}
            >
              Incomplete
            </span> */}
          </div>
        );
      };
      renderItems = () => {
        // const { viewCompleted } = this.state;
        // const newItems = this.state.todoList.filter(
        //   item => item.completed === viewCompleted
        // );
        const newItems = this.state.todoList
        return newItems.map(item => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              className={`todo-title mr-2 ${
                this.state.viewCompleted ? "" : ""
              }`}
              title={item.branch_name}
            >
              {item.branch_name}
            </span>
            <span>
              <button
                onClick={() => this.editItem(item)}
                className="btn btn-secondary mr-2"
              >
                {" "}
                Edit{" "}
              </button>
              <button
                onClick={() => this.handleDelete(item)}
                className="btn btn-danger"
              >
                Delete{" "}
              </button>
            </span>
          </li>
        ));
      };
      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
      handleSubmit = item => {
        this.toggle();
        console.log(item)
        if (item.id) {
          axios
            .put(`https://backend-banking.herokuapp.com/api/branch/${item.id}/`, item) //create
            .then(res => this.refreshList());
          return;
        }
        axios
          .post("https://backend-banking.herokuapp.com/api/branch/", item) //update
          .then(res => this.refreshList());
      };
      handleDelete = item => {
        axios
          .delete(`https://backend-banking.herokuapp.com/api/branch/${item.id}`) //delete
          .then(res => this.refreshList());
      };
      createItem = () => {
        const item = { branch_name: "", address: ""};
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      editItem = item => {
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      render() {
        
        return (
          <main className="content">
            <h1 className="text-white text-uppercase text-center my-4">CRUD Bank app</h1>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="">
                    <button onClick={this.createItem} className="btn btn-primary">
                      Add Branch
                    </button>
                  </div>
                  {this.renderTabList()}
                  <ul className="list-group list-group-flush">
                    {this.renderItems()}
                  </ul>
                </div>
              </div>
            </div>
            {this.state.modal ? (
              <Modal
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.handleSubmit}
              />
            ) : null}
          </main>
        );
      }
    }
    export default App;