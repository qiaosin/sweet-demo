import React, { Component, PropTypes } from 'react';

import styles from './mainLayout.less';
import AppMenu from '../components/menus';
import {Menu} from 'antd';
import { connect } from 'react-redux'
import icon from './img/logo.png'
import defaultUser from './img/defaultUser.jpg'
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
class App extends Component{
  constructor(props) {
    super(props);
  }
  handleMenuClick(e){
    if(e.key === 'logout'){}
  }
  render(){
    return (
      <div className={styles.normal}>
        <div className={styles.head} id="react-top">
          <div className={styles.logo} >
            <a href="#" ><img src={icon} height="34" /></a>
          </div>
          <div className={styles.rightnav}>
              <Menu  
                mode="horizontal" theme="dark" style={{lineHeight:"44px",height:44}}
                onClick={this.handleMenuClick}>
                <SubMenu title={<span><img height="24" src={defaultUser} style={{marginRight:8,borderRadius:'50%',verticalAlign: 'middle'}} />管理员</span>}>
                 <Item key="logout">注销</Item>
                  <Menu.Divider />
                  <Item key="user">个人中心</Item>
                  <Menu.Divider />
                  <Item key="about">关于</Item>
                  <Menu.Divider />
                  <Item key="help">帮助</Item>
                </SubMenu>
              </Menu>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.side} id="react-menu">
            <AppMenu current="sub1,sub2"/>
          </div>
          <div className={styles.main} id="react-content">
            {this.props.children}
          </div>
        </div>
        <div className={styles.foot} id="react-bottom">
          易云公司 Built with react, react-router, ant-tool, css-modules, antd...
        </div>
      </div>
    )
  }
};

App.propTypes = {
  //TODO
};

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(App)
