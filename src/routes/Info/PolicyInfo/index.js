import React from 'react'
import {Card, Spin, Button, Radio, List, Switch, Avatar,BackTop,Anchor,Affix,Icon} from 'antd'
import axios from 'axios'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

const data = [
  {
    'content': 'Racing car sprays burning fuel into crowd.',
    'time': '2019-09-18',
  },
  {
    'content': 'Japanese princess to wed commoner.',
    'time': '2019-09-18',
  },
  {
    'content': 'Australian walks 100km after outback crash.',
    'time': '2019-09-18',
  },
  {
    'content': 'Man charged over missing wedding girl.',
    'time': '2019-09-18',
  },
  {
    'content': 'Los Angeles battles huge wildfires.',
    'time': '2019-09-18',
  },
];
const data3 = []
for(let i=0;i<23;i++){
  data3.push({
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class PolicyInfo extends React.Component {
  state = {
    size: 'default',
    bordered: true,
    data2: [],
    loading: false,
    loadingMore: false,
  }

  componentDidMount() {
    this.setState({
      loading: true,
    })
    this.getData2();
    this.setState({
      loading: false
    })
  }

  getData2 = () => {
    this.setState({
      loadingMore: true
    })
    axios.get('https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo').then(res => {
      this.setState({
        data2: this.state.data2.concat(res.data.results),
        loadingMore: false
      })
    })
  }

  render() {
    const {size, bordered, loading, data2, loadingMore} = this.state
    const loadMore = (
      <div style={styles.loadMore}>
        {/*不知道为什么这种写法有问题，会报错*/}
        {/*{loadingMore ? <Spin/> : <Button onClick={() => this.getData2()}>加载更多</Button>}*/}
          <Spin style={loadingMore?{}:{display:'none'}}/>
          <Button style={!loadingMore?{}:{display:'none'}} onClick={() => this.getData2()}>加载更多</Button>
      </div>
    )
    return (
      <div>
        <CustomBreadcrumb arr={['信息检索', '政策法规']}/>
        <TypingCard id='howUse' source='此页面用于展示相关政策法规。'/>
        <Card bordered={false} title='本科生招生' style={{marginBottom: 10}} id='bachelorPolicy'>
          <List dataSource={data}
                bordered={bordered}
                size={size}
                style={bordered ? styles.haveBorder : styles.noBorder}
                renderItem={item => (<List.Item actions={[<p>{item.time}</p>, <a>more</a>]}>{item.content}</List.Item>)}/>
        </Card>
        <Card bordered={false} title='研究生招生' style={{marginBottom: 10}} id='masterPolicy'>
          <List dataSource={data}
                bordered={bordered}
                size={size}
                style={bordered ? styles.haveBorder : styles.noBorder}
                renderItem={item => (<List.Item actions={[<p>{item.time}</p>, <a>more</a>]}>{item.content}</List.Item>)}/>
        </Card>

        <BackTop visibilityHeight={200} style={{right: 50}}/>
        <Affix style={styles.affixBox}>
          <Anchor offsetTop={50} affix={false}>
            <Anchor.Link href='#howUse' title='何时使用'/>
            <Anchor.Link href='#bachelorPolicy' title='本科生招生'/>
            <Anchor.Link href='#masterPolicy' title='研究生招生'/>
          </Anchor>
        </Affix>
      </div>
    )
  }
}

const styles = {
  haveBorder: {
    minHeight: 270,
    width:'80%',
    boxSizing: 'border-box'
  },
  noBorder: {
    minHeight: 270,
    width:'80%',
    padding: '0 24px',
    boxSizing: 'border-box',
    border: '1px solid #fff'
  },
  loadMore: {
    height: 32,
    marginTop: 16,
    lineHeight: '32px',
    textAlign: 'center',
  },
  listStyle:{
    width:'80%'
  },
  affixBox:{
    position: 'absolute',
    top: 100,
    right: 50,
    with: 170
  }
}

export default PolicyInfo