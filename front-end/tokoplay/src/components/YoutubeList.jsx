import { useState, useEffect } from 'react';
import { Card, List, Tag } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link } from 'react-router-dom'; // import Link from react-router-dom
import '../YoutubeList.css'; // Pastikan Anda memiliki file CSS yang sesuai
const { Meta } = Card;

const App = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    axios.get('https://backend-imrz.onrender.com/api/videos')
      .then(response => {
        setVideoData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
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
      dataSource={videoData}
      renderItem={item => (
        <List.Item>
          
          <Link to={`/detail/${item.videoId}`}> {/* add Link to Card */}
            <Card
              hoverable
              cover={<img alt={item.title} src={item.thumbnailUrl} />}
            >
              {item.live ? (
                <Tag className="live-tag" color="#f50">
                  LIVE
                </Tag>
              ) : null}
              <Tag className="viewers-tag" icon={<PlayCircleOutlined />} color="grey">
                {`${item.viewers} Viewers`}
              </Tag>
              <Meta title={item.title} description={item.description} style={{ lineHeight: '14px' }} />
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
};

export default App;
