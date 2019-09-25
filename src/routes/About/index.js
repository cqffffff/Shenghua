import React from 'react'
import {Card} from 'antd'
export default class About extends React.Component{
  render(){
    return (
      <Card title='基本用法'>
        <img style={{width: '100%', height: '100%'}} src={require('../../assets/img/teammember.jpg')} alt=""/>
      </Card>
    )
  }
}