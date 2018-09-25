var PollExample = artifacts.require("./Poll.sol");

module.exports = function(deployer) {
  deployer.deploy(PollExample);
};