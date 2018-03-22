import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

// class RequestModal extends Component {
const RequestModal = (props) => {
      return (<Modal trigger={<Button basic color='blue' size='small' onClick={props.handleRequest}>Request To Collaborate</Button>}>
      <Modal.Header>Your Request Has Been Submitted!</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <p>Now Pending Approval </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>)

  }
  export default RequestModal

  // basic onClick={handleRequest} color='blue'

  //   state = { open: false }
  //
  //   show = size => () => this.setState({ size, open: true })
  //   close = () => this.setState({ open: false })
  //
  //   request = () => {
  //
  //     this.show('mini')
  //     this.props.handleRequest
  //   }
  //
  //   render() {
  //     const { open, size } = this.state
  //
  //     return (
  //       <div>
  //         <Button basic color='blue' onClick={this.request}>Request To Collaborate</Button>
  //
  //
  //         <Modal size={size} open={open} onClose={this.close}>
  //           <Modal.Header>
  //             Your Request Has Been Submitted!
  //           </Modal.Header>
  //           <Modal.Content>
  //             <p>Pending Approval from </p>
  //           </Modal.Content>
  //         </Modal>
  //       </div>
  //     )
  //   }
  // }
