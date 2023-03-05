const app = require('express')();

app.get('/', (req, res) => res.send('Apply bot'));

module.exports = () => {

  app.listen(3000);

}
