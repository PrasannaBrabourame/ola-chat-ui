import * as React from 'react';
import ChatBubbleProps from './interface';
import styles from './styles';

const defaultBubbleStyles = {
  userBubble: {},
  chatbubble: {},
  text: {},
};

export default class ChatBubble extends React.Component {
  props;

  constructor(props: ChatBubbleProps) {
    super(props);
  }

  public render() {
    const { bubblesCentered } = this.props;
    let { bubbleStyles } = this.props;
    bubbleStyles = bubbleStyles || defaultBubbleStyles;
    const { userBubble, chatbubble, text, userText, chatText, userTime, chatTime } = bubbleStyles;

    // message.id 0 is reserved for blue
    const chatBubbleStyles =
      this.props.message.id === 0
        ? {
          ...styles.chatbubble,
          ...bubblesCentered ? {} : styles.chatbubbleOrientationNormal,
          ...chatbubble,
          ...userBubble,
        }
        : {
          ...styles.chatbubble,
          ...styles.recipientChatbubble,
          ...bubblesCentered
            ? {}
            : styles.recipientChatbubbleOrientationNormal,
          ...userBubble,
          ...chatbubble,
        };
    const bubbleStyleText = this.props.message.id === 0 ? userText : chatText
    const bubbleStyleTime = this.props.message.id === 0 ? userTime : chatTime
    return (
      <div
        style={{
          ...styles.chatbubbleWrapper,
        }}
      >
        <div style={chatBubbleStyles}>
          <div style={bubbleStyleText}>{this.props.message.message}<div style={bubbleStyleTime}>{this.props.message.time}</div></div>
        </div>
      </div>
    );
  }
}

export { ChatBubbleProps };


// "use strict";
// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
// var __assign = (this && this.__assign) || function () {
//     __assign = Object.assign || function (t) {
//         for (var s, i = 1, n = arguments.length; i < n; i++) {
//             s = arguments[i];
//             for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
//                 t[p] = s[p];
//         }
//         return t;
//     };
//     return __assign.apply(this, arguments);
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// var React = require("react");
// var styles_1 = require("./styles");
// var defaultBubbleStyles = {
//     userBubble: {},
//     chatbubble: {},
//     text: {},
// };
// var ChatBubble = (function (_super) {
//     __extends(ChatBubble, _super);
//     function ChatBubble(props) {
//         return _super.call(this, props) || this;
//     }
//     ChatBubble.prototype.render = function () {
//         var bubblesCentered = this.props.bubblesCentered;
//         var bubbleStyles = this.props.bubbleStyles;
//         bubbleStyles = bubbleStyles || defaultBubbleStyles;
//         var userBubble = bubbleStyles.userBubble, chatbubble = bubbleStyles.chatbubble, text = bubbleStyles.text,  = bubbleStyles.userText,  = bubbleStyles.userText,  = bubbleStyles.userTime, chatTime = bubbleStyles.chatTime;
//         var chatBubbleStyles = this.props.message.id === 0 
//             ? __assign(__assign(__assign(__assign({}, styles_1.default.chatbubble), bubblesCentered ? {} : styles_1.default.chatbubbleOrientationNormal), chatbubble), userBubble) : __assign(__assign(__assign(__assign(__assign({}, styles_1.default.chatbubble), styles_1.default.recipientChatbubble), bubblesCentered
//                 ? {}
//                 : styles_1.default.recipientChatbubbleOrientationNormal), userBubble), chatbubble);
//         var bubbleStyleText = this.props.message.id === 0 ? userText : chatText
//         var bubbleStyleTime = this.props.message.id === 0 ? userTime : chatTime
//         return (React.createElement("div", { style: __assign({}, styles_1.default.chatbubbleWrapper) },
//             React.createElement("div", { style: chatBubbleStyles },
//                 React.createElement("div", { style: bubbleStyleText }, this.props.message.message), React.createElement("div", { style: bubbleStyleTime }, "10:08PM"))));
//     };
//     return ChatBubble;
// }(React.Component));
// exports.default = ChatBubble;
// //# sourceMappingURL=index.js.map