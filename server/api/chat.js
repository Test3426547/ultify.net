// server/api/chat.js
export default defineEventHandler(async (event) => {
    try {
      // Your logic here, for example, return a simple message
      return { message: 'Hello from the chat API!' };
    } catch (error) {
      console.error(error);
      // Return a proper error response
      event.res.statusCode = 500;
      return { error: 'Internal Server Error' };
    }
  });  