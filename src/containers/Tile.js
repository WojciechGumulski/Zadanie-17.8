import React from "react";
import tileStyle from "./Tile.css";


class Tile extends React.Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleDisabled = this.handleDisabled.bind(this);
  }
  handleChange(e) {
      if (e.target.value.length > 1) {
          e.target.value = e.target.value.slice(0, 1);
      }
      return this.props.onClick(e);
  }
  handleDisabled(i) {
      if (typeof i === "number") {
          if (this.props.isDisabled[i] == this.props.val) {
              return true;
          }
      }
  }
  render() {
    return (
      <input
        type="number"
        min="1"
        max="9"
        value={this.props.val}
        onChange={e => this.handleChange(e)}
        className={tileStyle.tileStyle}
        disabled={this.handleDisabled(this.props.index) ? "disabled" : ""}
      />
    );
  }
}
export default Tile;
