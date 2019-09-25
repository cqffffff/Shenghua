import React from 'react'
import {Card, Spin, Button, Radio, List, Switch, Avatar,BackTop,Anchor,Affix,Icon,Carousel,Modal,Tabs,message} from 'antd'
import axios from 'axios'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'
import './css/style.css'
import 'animate.css'

const TabPane = Tabs.TabPane
const animations = [
  ['bounceInDown','bounceInUp'],
  ['bounceInLeft','bounceInRight'],
  ['rotateIn','rotateIn'],
  ['flipInX','flipInY'],
  ['rotateInDownLeft','rotateInUpRight'],
  ['rotateInDownRight','rotateInUpLeft'],
  ['zoomInLeft','zoomInRight'],
  ['zoomInDown','zoomInUp'],
  ['zoomIn','zoomIn'],
  ['lightSpeedIn','bounceInLeft'],
]
// const colors = ['#364d79','#64cbcc','sandybrown','darksalmon','goldenrod','burlywood','darkseagreen','indianred']

function getAnimation(animations){
  let index = Math.floor(Math.random()*animations.length)
  let arr = animations[index]
  arr = arr.map(item=>{
    return `${item} animated slider-active`
  })
  return arr
}
const data3 = [
  {
    title: `SJTU`,
    id: 0,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '隶属于：教育部 院校特性：211院校 985院校',
    content: '上海交通大学（Shanghai Jiao Tong University）简称“上海交大”，位于上海市，是由中华人民共和国教育部直属、中央直管副部级建制的全国重点大学，是中国历史最悠久、享誉海内外的著名高等学府之一，位列“985工程”、“211工程”、“世界一流大学建设高校”。',
    details: {
      bachelor: {
        briefInfo: 'asdf',
        academyInfo: 'jasdc',
        majorInfo: 'asd', 
        enrollRule: 'asdcaio',
        scholarshipInfo: 'asjjio',
      },
      master: {
        briefInfo: 'asdf',
        academyInfo: 'jasdc',
        majorInfo: 'asd', 
        enrollRule: 'asdcaio',
        scholarshipInfo: 'asjjio',
      },
    },
  },
  {
    title: `ant design part 2`,
    id: 1,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    details: {
      bachelor: {
        briefInfo: 'asdf',
        academyInfo: 'jasdc',
        majorInfo: 'asd', 
        enrollRule: 'asdcaio',
        scholarshipInfo: 'asjjio',
      },
      master: {
        briefInfo: 'asdf',
        academyInfo: 'jasdc',
        majorInfo: 'asd', 
        enrollRule: 'asdcaio',
        scholarshipInfo: 'asjjio',
      },
    },
  },
  {
    title: `ant design part 3`,
    id: 2,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    details: {
      bachelor: {
        briefInfo: 'asdf',
        academyInfo: 'jasdc',
        majorInfo: 'asd', 
        enrollRule: 'asdcaio',
        scholarshipInfo: 'asjjio',
      },
      master: {
        briefInfo: 'asdf',
        academyInfo: 'jasdc',
        majorInfo: 'asd', 
        enrollRule: 'asdcaio',
        scholarshipInfo: 'asjjio',
      },
    },
  },
  {
    title: `ant design part 4`,
    id: 3,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    details: {
      bachelor: {
        briefInfo: 'asdf',
        academyInfo: 'jasdc',
        majorInfo: 'asd', 
        enrollRule: 'asdcaio',
        scholarshipInfo: 'asjjio',
      },
      master: {
        briefInfo: 'asdf',
        academyInfo: 'jasdc',
        majorInfo: 'asd', 
        enrollRule: 'asdcaio',
        scholarshipInfo: 'asjjio',
      },
    },
  },
  {
    title: `ant design part 5`,
    id: 4,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    details: {
      bachelor: {
        briefInfo: 'asdf',
        academyInfo: 'jasdc',
        majorInfo: 'asd', 
        enrollRule: 'asdcaio',
        scholarshipInfo: 'asjjio',
      },
      master: {
        briefInfo: 'asdf',
        academyInfo: 'jasdc',
        majorInfo: 'asd', 
        enrollRule: 'asdcaio',
        scholarshipInfo: 'asjjio',
      },
    },
  },
]
// for(let i=0;i<23;i++){
//   data3.push({
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   })
// }
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const visible = [false, false, false, false, false]
class SchoolInfo extends React.Component {
  state = {
    size: 'default',
    bordered: true,
    data2: [],
    loading: false,
    loadingMore: false,
    current:0,
    visible: visible
  }
  animations = getAnimation(animations)

  componentDidMount() {
    this.setState({
      loading: true,
    })
    this.setState({
      loading: false
    })
  }
  componentWillUpdate(){
    //当current变化时，也就是state变化时重新给animations赋值，否则animations不会改变.实现类似vue的watch
    //用componentWUpdate还是componentDidUpdate根据具体场景，componentDidUpdate一般是需要用到state时调用（因为setState是异步，需要等更新完成）
    let temp  =  getAnimation(animations)
    while (this.animations[0] === temp[0] ) {
      temp = getAnimation(animations)
    }
    this.animations = temp
  }
  closeModal(id) {
    let temp = this.state.visible
    temp[id] = false
    this.setState({
      visible: temp
    })
  }
  setVisible(id){
    let temp = this.state.visible
    temp[id] = true
    this.setState({
      visible: temp
    })
  }
  render() {
    const {size, bordered, loading, loadingMore, current, visible} = this.state
    
    return (
      <div>
        <CustomBreadcrumb arr={['信息检索', '信息公开']}/>
        <TypingCard id='howUse' source='此页面用于展示公开的学校信息。'/>
        <Card title='最新资讯'>
          <Carousel speed={100} arrows afterChange={(current)=>this.setState({current})} autoplay>
            <div>
              <div className='slider-item' style={{backgroundImage:`url('https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide1.jpg?raw=true')`}}>
                <h3 className={current === 0 ? this.animations[0] : ''}>SJTU</h3>
                <p className={current === 0 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
            <div>
              <div className='slider-item' style={{background:'#64cbcc'}}>
                <h3 className={current === 1 ? this.animations[0] : ''}>孵蛋大学</h3>
                <p className={current === 1 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
            <div>
              <div className='slider-item' style={{background:'sandybrown'}}>
                <h3 className={current === 2 ? this.animations[0] : ''}>清华北大</h3>
                <p className={current === 2 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
            <div>
              <div className='slider-item' style={{background:'darkseagreen'}}>
                <h3 className={current === 3 ? this.animations[0] : ''}>家里蹲</h3>
                <p className={current === 3 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
          </Carousel>
        </Card>
        <Card bordered={false} title='信息公开' style={{marginBottom: 15}} id='verticalStyle'>
          <List dataSource={data3}
                itemLayout='vertical'
                pagination={{pageSize: 3}}
                style={styles.listStyle}
                renderItem={item=>{
                  return (
                    <List.Item
                      actions={[<IconText type="star-o" text="" />, <IconText type="like-o" text="" />, <IconText type="message" text="" />]}
                      extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<p>{item.title}&emsp;&emsp;&emsp;
                          <Button onClick={() => this.setVisible(item.id)}>详情</Button>
                          <Modal
                            visible={visible[item.id]}
                            title={item.title}
                            onOk={() => this.closeModal(item.id)}
                            onCancel={() => this.closeModal(item.id)}>
                            <Tabs defaultActiveKey={item.id+"1"}>
                              <Tabs.TabPane tab='本科生' key={item.id+"1"}>
                                <Tabs defaultActiveKey='1' tabPosition='left'
                                    style={{height: 300}}>
                                  <TabPane tab="大学简介" key="1">{item.details.bachelor.briefInfo}</TabPane>
                                  <TabPane tab="院系设置" key="2">{item.details.bachelor.academyInfo}</TabPane>
                                  <TabPane tab="专业介绍" key="3">{item.details.bachelor.majorInfo}</TabPane>
                                  <TabPane tab="录取规则" key="4">{item.details.bachelor.enrollRule}</TabPane>
                                  <TabPane tab="奖学金" key="5">{item.details.bachelor.scholarshipInfo}</TabPane>
                                </Tabs>
                              </Tabs.TabPane>
                              <Tabs.TabPane tab='研究生' key={item.id+"2"}>
                                <Tabs defaultActiveKey='1' tabPosition='left'
                                    style={{height: 300}}>
                                  <TabPane tab="大学简介" key="1">{item.details.master.briefInfo}</TabPane>
                                  <TabPane tab="院系设置" key="2">{item.details.master.academyInfo}</TabPane>
                                  <TabPane tab="专业介绍" key="3">{item.details.master.majorInfo}</TabPane>
                                  <TabPane tab="录取规则" key="4">{item.details.master.enrollRule}</TabPane>
                                  <TabPane tab="奖学金" key="5">{item.details.master.scholarshipInfo}</TabPane>
                                </Tabs>
                              </Tabs.TabPane>
                            </Tabs>
                          </Modal></p>
                        }
                        description={item.description}
                      />
                      
                      {item.content}
                      </List.Item>
                  )
                }}
          />
        </Card>
        
        <BackTop visibilityHeight={200} style={{right: 50}}/>
        
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
    width:'100%'
  },
  affixBox:{
    position: 'absolute',
    top: 100,
    right: 50,
    with: 170
  }
}

export default SchoolInfo