const axios = require('axios');

const api = {
  async getUser(userResponses) {
    try { let response = await axios
        // Sample URL: https://api.github.com/users/connietran-dev
        .get(`https://api.github.com/users/${userResponses.username}`, {
          headers: {
            authorization: `token c0ab849fc0166ff196c493291f560a5be5eb385c`
          }
        });
        return response.data;
      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = api;
