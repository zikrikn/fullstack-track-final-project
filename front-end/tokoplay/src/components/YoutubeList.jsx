import { Card, List, Tag } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import '../YoutubeList.css'; // Import a CSS file to define positioning styles
const { Meta } = Card;

const data = [
  { title: 'Title 1' },
  { title: 'Title 2' },
  { title: 'Title 3' },
  { title: 'Title 4' },
  { title: 'Title 5' },
  { title: 'Title 6' },
];

const App = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={() => (
      <List.Item>
          <Card
            hoverable
            cover={<img alt="example" src="https://img.youtube.com/vi/hCPYxwLSZM4/maxresdefault.jpg" />}
          >
              <Tag className="live-tag" color="#f50">
                LIVE
              </Tag>
              <Tag className="viewers-tag" icon={<PlayCircleOutlined />} color="grey">
                1000 Viewers
              </Tag>
              <Meta title="Cincau Murah!!" description="Bonus cincau hijau" style={{lineHeight:'14px'}} />
          </Card>
      </List.Item>
    )}
  />
);

export default App;
