import * as React from "react";
import Hello from "./int_module";
interface IMainInputProps {
  mainText: string;
}

interface IMainInputStates {
  loanAmount: number;
}

class MainInput extends React.Component<IMainInputProps, IMainInputStates> {
  constructor(props) {
    super(props);
    this.state = {loanAmount: 10000};
  }
  public render() {
    return <div id="">
      <Hello name={this.props.mainText} />
      <label>
        Loan Amount: <input type="number" value={this.state.loanAmount} />
      </label>
    </div>;
  }
}

export default MainInput;
