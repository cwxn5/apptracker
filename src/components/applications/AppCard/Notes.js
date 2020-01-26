import React from "react";
import { Modal, Button } from "antd";

class Notes extends React.Component {
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
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    if (this.props.notes) {
      return (
        <div>
          <Button type="dashed" onClick={this.showModal}>
            Show Notes
          </Button>
          <Modal
            title="Notes"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
            <p>{this.props.notes}</p>
          </Modal>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Notes;
