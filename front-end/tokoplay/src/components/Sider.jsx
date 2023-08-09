import { Card } from 'antd';
const App = () => (
  <>
  <h2>Product List</h2>
  <Card
  hoverable
  style={{ margin:'0 0 10px 0' }}
  >
    <p>
      <b style="font-size: 17px">Card content</b>
      <br />
      Price: $120
    </p>
  </Card>
  <Card
  hoverable
  style={{ margin:'0 0 10px 0' }}
  >
    <p>
    <b style="font-size: 17px">Card content</b>
      <br />
      Price: $120
    </p>
  </Card>
  <Card
  hoverable
  style={{ margin:'0 0 10px 0' }}
  >
    <p>
    <b style="font-size: 17px">Card content</b>
      <br />  
      Price: $120
    </p>
  </Card>
  </>
);
export default App;