import React from "react";
import FriendsList from "../components/FriendsList";
import { connect } from "react-redux";
import { getFriends } from "../actions/index";
class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    const { friends } = this.props;
    return <FriendsList friends={friends} />;
  }
}

const mapStateToProps = ({ friends }) => ({
  friends
});
export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsListView);
