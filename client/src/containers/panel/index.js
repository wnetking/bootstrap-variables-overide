import React, { Component } from "react";
import Button from "../../components/button";
import "./style.css"

class Panel extends Component {
  render() {
    return (
      <section className="main-panel">
        <ul className="panel-numbers">
          <li>
            <Button>7</Button>
          </li>
          <li>
            <Button>8</Button>
          </li>
          <li>
            <Button>9</Button>
          </li>
          <li>
            <Button>4</Button>
          </li>
          <li>
            <Button>5</Button>
          </li>
          <li>
            <Button>6</Button>
          </li>
          <li>
            <Button>1</Button>
          </li>
          <li>
            <Button>2</Button>
          </li>
          <li>
            <Button>3</Button>
          </li>
          <li>
            <Button>+-</Button>
          </li>
          <li>
            <Button>0</Button>
          </li>
          <li>
            <Button>.</Button>
          </li>
        </ul>
      </section>
    );
  }
}

export default Panel;
