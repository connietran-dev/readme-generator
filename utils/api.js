const axios = require('axios');

const api = {
  async getUser(userResponses) {
    try { let response = await axios
        // Sample URL: https://api.github.com/users/connietran-dev
        .get(`https://api.github.com/users/${userResponses.username}`, {
          headers: {
            authorization: `token 6797cbe26c3fc74c731752cd8f9bee60959e8b2a`
          }
        });
        return response.data;
      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = api;
