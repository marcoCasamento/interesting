import * as React from 'react';

interface HelloProps {
  name: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>Hello, {this.props.name}! Please insert the basic facts</div>;
  }
}

interface MainInputProps {
  mainText: string;
}

class MainInput extends React.Component<MainInputProps, {}> {
  render() {
    return <div id="">
      <Hello/>
      <input />
    </div>
  }
}

export {Hello, MainInput};
