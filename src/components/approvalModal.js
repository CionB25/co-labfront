import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

// class RequestModal extends Component {
const ApprovalModal = (props) => {
      return (<Modal trigger={<Button basic color='blue' size='small'>Approve</Button>}>
      <Modal.Header>User is now collaborator</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <p>Happy Coding!</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>)

  }
  export default ApprovalModal
