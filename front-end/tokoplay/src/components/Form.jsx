import { Button, Form, Input, Card, Divider } from 'antd';
const layout = {
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!'
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const AddForm = () => (
  <>
  <h2>Comments</h2>
  <Card>
  <p style={{textAlign: 'left'}}>
    From: <strong>Bella</strong>
    <br />
    Hello Dunia!
  </p>
  <Divider />
  <p style={{textAlign: 'left'}}>
    From: <strong>Zikri</strong>
    <br />
    Hello Dunia!
  </p>
  <Divider />
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'comments']} label="Pesan">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </Card>
  </>
);
export default AddForm;