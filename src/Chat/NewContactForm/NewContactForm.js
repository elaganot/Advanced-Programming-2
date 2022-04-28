import React from 'react';



export class NewContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    
    event.preventDefault();
    // Check that user exists
    const myUser = this.props.contacts.find((contact) => {
      return contact.name == this.props.name;
    });

    if (this.state.value == this.props.name) {
      alert("You can't add yourself");
      return;
    }
    const search = this.props.contacts.find((contact) => {
      return contact.name == this.state.value;
    });
    if (search != null) {
      const x =myUser.myFriends;
      var friendsName = Object.keys(x);
      for (let i = 0; i < friendsName.length; i++) {
        if (x[i].name == this.state.value) {
          alert('This contact already exists');
          return;
        }
      }

      const item = { image: search.image, name: search.name, messages:[{message: 'hello', timestamp:'Now'}]}
      this.props.alertFunction(item)
      x.push(item)
    } else {
      alert("User does not exist")
    }

  }

  render() {
    return (
      <form id="create-contact-form" onSubmit={this.handleSubmit}>
        <div class="modal-body">
          <div class="mb-3">
            <label for="contact-name" class="col-form-label"> Contact's identifier</label>
            <input type="text" class="form-control" id="contact-name" value={this.state.value} onChange={this.handleChange}></input>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-dark">Add</button>
        </div>
      </form>
    );
  }
}
