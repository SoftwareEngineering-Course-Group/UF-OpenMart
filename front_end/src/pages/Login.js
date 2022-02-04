
import { Button, Form, Input, message, Modal } from 'semantic-ui-react';
import React from 'react';
class Login extends React.Component {
    state = {
      displayModal: false
    }
   
    handleCancel = () => {
      this.setState({
        displayModal: false,
      })
    }
   
    signinOnClick = () => {
      this.setState({
        displayModal: true,
      })
    }
   
    // onFinish = (data) => {
    //   login(data)
    //   .then((data) => {
    //       this.setState({
    //         displayModal: false,
    //       })
    //       message.success(`Welcome back, ${data.name}`);
    //       this.props.onSuccess();
    //     }).catch((err) => {
    //       message.error(err.message);
    //     })
    // }
   
    render = () => {
      return (
        <>
          <Button shape="round" onClick={this.signinOnClick} style={{ marginRight: '20px' }}>
          Login</Button>
          <Modal
            title="Log in"
            visible={this.state.displayModal}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose={true}
          >
            <Form
              name="normal_login"
              onFinish={this.onFinish}
              preserve={false}
            >
              <Form.Item
                name="user_id"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input  placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  placeholder="Password"
                />
              </Form.Item>
   
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Login</Button>
              </Form.Item>
            </Form>
          </Modal>
        </>
      )
    }
  }
   
  export default Login;