import React, { Component } from 'react';
import { Route, NavLink} from 'react-router-dom';
import './App.css'
// import logo from './logo.svg';

// var herf = '../public/todolist.html';

function gotodoList(route){
  window.location.hash =route;
}

class lb extends Component {
  render() {
    return (
        <div>
            <h2>李白</h2>
            <p>天门中断楚江开,碧水东流至此回</p>
            <p>两岸青山相对出,孤帆一片日边来</p>
        </div>
    );
  }
}

class df extends Component {
  render() {
    return (
        <div>
            <h2>杜甫</h2>
            <p>天门中断楚江开,碧水东流至此回</p>
            <p>两岸青山相对出,孤帆一片日边来</p>
        </div>
    );
  }
}

class lsy extends Component {
  render() {
    return (
        <div>
            <h2>锦瑟</h2>
            <ol>
              <li>锦瑟无端五十弦，一弦一柱思华年</li>
              <li>庄生晓梦迷蝴蝶，望帝春心托杜鹃</li>
              <li>沧海月明珠有泪，蓝田日暖玉生烟</li>
              <li>此情可待成追忆，只是当时已惘然</li>
            </ol>
        </div>
    );
  }
}


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Simple SAP</h1>
        <ul className="header">
          <nav>
            {/* NavLink 判断链接点击状态高亮显示 */}
          <li><NavLink to="/" exact activeClassName="active">李白</NavLink></li>
          <li><NavLink to="/df" activeClassName="active">杜甫</NavLink></li>
          <li><NavLink to="/lsy" activeClassName="active">李商隐</NavLink></li>
          <li  onClick={() => gotodoList('../public/todolist.html')}><NavLink to="/todolist" activeClassName="active">To Do List</NavLink></li>
          </nav>
        </ul>

        <div className="content">
          {/* 和路由要匹配否则不显示component */}
          <Route path="/" exact component={lb} />
          <Route path="/df" component={df} />
          <Route path="/lsy" component={lsy} />
        </div>
      </div>
    );
  }
}

export default App;
