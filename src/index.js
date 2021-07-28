const messages = [
  "sebastian",
  "Nana",
  "Bruno",
  "Maximiliano",
  "Tobby",
  "Mottas",
  "Luna"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`Hi, my friend ${message}`);
};

module.exports = { randomMsg };
