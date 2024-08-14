const SimpleToken = artifacts.require("SimpleToken");

module.exports = function (deployer) {
    const initialSupply = 1000000; // Specify the initial supply of tokens
    deployer.deploy(SimpleToken, initialSupply);
};
