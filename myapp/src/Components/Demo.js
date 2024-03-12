import React, { Component } from 'react';

class UserProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: null,
      firstname: '',
      email: '',
      error: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const userData = await response.json();
      const { firstname, email } = userData;
      this.setState({ userProfile: userData, firstname: firstname || '', email: email || '', isLoading: false });
    } catch (error) {
      this.setState({ error: 'Failed to load user profile.', isLoading: false });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { firstname, email } = this.state;
      // Simulate update request
      const updatedUserData = { ...this.state.userProfile, firstname, email };
      console.log(updatedUserData); // Check if the state is correctly updated
      this.setState({ userProfile: updatedUserData, error: null });
    } catch (error) {
      this.setState({ error: 'Failed to update user profile.' });
    }
  };

  render() {
    const { userProfile, firstname, email, error, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!userProfile) {
      return <div>An error occurred while loading the user profile.</div>;
    }

    return (
      <div>
        <h2>User Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstname">Firstname:</label>
            <input type="text" id="firstname" name="firstname" value={firstname} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={this.handleChange} />
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button type="submit">Update Profile</button>
        </form>
      </div>
    );
  }
}

export default UserProfileForm;
