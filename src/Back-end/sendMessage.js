import axios from "axios";
const BOT_TOKEN = '6296101223:AAHHd0zeoNJ9SfK6oa97Gtw5BfyVY6M3etw';

const sendMessage = async (chatId, messageText) => {
  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    await axios.post(url, {
      chat_id: chatId,
      text: messageText,
    });
    console.log('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message: ', error);
  }
};
export  {sendMessage,BOT_TOKEN}






