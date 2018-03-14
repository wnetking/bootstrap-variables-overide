import React, { Component } from 'react';
import Button from '../../components/button';
import './style.css';

class Panel extends Component {
  render() {
    return (
      <section className="main-panel">
        <ul className="panel-numbers">
          <li>
            <Button type="number">7</Button>
          </li>
          <li>
            <Button type="number">8</Button>
          </li>
          <li>
            <Button type="number">9</Button>
          </li>
          <li>
            <Button type="number">4</Button>
          </li>
          <li>
            <Button type="number">5</Button>
          </li>
          <li>
            <Button type="number">6</Button>
          </li>
          <li>
            <Button type="number">1</Button>
          </li>
          <li>
            <Button type="number">2</Button>
          </li>
          <li>
            <Button type="number">3</Button>
          </li>
          <li>
            <Button>.</Button>
          </li>
          <li>
            <Button type="number">0</Button>
          </li>
          <li>
            <Button type="equally">=</Button>
          </li>
        </ul>
        <ul className="panel-operations">
          <li>
            <Button type="operation">/</Button>
          </li>
          <li>
            <Button type="operation">*</Button>
          </li>
          <li>
            <Button type="operation">-</Button>
          </li>
          <li>
            <Button type="operation">+</Button>
          </li>
        </ul>
      </section>
    );
  }
}

export default Panel;
