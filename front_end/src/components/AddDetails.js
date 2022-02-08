import React from 'react';

import {
    Button,
    Checkbox,
    Form,
    Input,
    Icon,
    Image,
    TextArea,
  } from 'semantic-ui-react'

  function AddDetails() {
    return (
      <div>
        <div style={{margin:'15px',paddingBottom:'70px'}}>
        <Form>
          <Form.Field
            required
            control={Input}
            label='Title'
            placeholder='...'
          /> 
        <Form.Field>
            <label>Detail Description</label>
            <TextArea placeholder='...' style={{ minHeight: 180 }} />
        </Form.Field>
        <Form.Field inline>
            <label style={{marginBottom:'30px'}} required>Price</label>
            <Input placeholder='price' style={{width:'30%'}}/>
            <label>&nbsp; $</label>
        </Form.Field>
        <div style={{marginBottom:'20px'}}>
            <Icon name='upload' size='big' link />
            <div>images</div>
        </div>
            
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'  style={{marginBottom:'30px'}}/>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
        </div>
      </div>
    );
  }
  
  export default AddDetails