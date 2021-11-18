import React from "react";
import { connect } from "react-redux";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { startLogout } from "../actions/auth";

import * as Style from "../styles/Navbar";

class Logout extends React.Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = () => {
        this.setState({
            visible: false
        });
        this.props.startLogout();
    };

    handleCancel = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        return (
            <>
                <Style.LogOutButton onClick={this.showModal}>
                    <FontAwesomeIcon style={{ paddingRight: "4px" }} icon={faGoogle} />
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </Style.LogOutButton>
                <Modal
                    title="Confirm Sign Out"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={
                        <Style.LogOutButton onClick={this.handleOk}>
                            Sign Out
                        </Style.LogOutButton>
                    }
                >
                    <p>Are you sure?</p>
                </Modal>
            </>
        );
    }
}

export default connect(null, { startLogout })(Logout);