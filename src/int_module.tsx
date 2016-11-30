import * as React from "react";

interface IHelloProps {
  name: string;
}

class Hello extends React.Component<IHelloProps, {}> {
  public render() {
    return <div>Hello, {this.props.name}. Please insert the basic facts</div>;
  }
}


export default Hello;
