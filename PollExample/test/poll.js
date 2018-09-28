var Poll = artifacts.require("./Poll.sol");
var assertRevertHelper = require("./assertRevert");
/*const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")) */


contract('PollExample', function(accounts) {
  
  
  it("should fail because we are sending less ether than required", async function () {
    let poll = await Poll.deployed();
    assertRevertHelper.assertRevert(poll.vote.call(true,{from:accounts[1], value: 1}));
  });

  it("should fail because user is voting twice", async function () {
    let poll = await Poll.deployed();
    await poll.vote(true,{from:accounts[4], value: 10000000000000000});
    assertRevertHelper.assertRevert(poll.vote(true,{from:accounts[4], value: 10000000000000000}));
  });
  
  it("should pass because we are adding a vote", async function () {
    let poll = await Poll.deployed();
    await poll.vote(true,{from:accounts[2], value: 10000000000000000});
    var votes = await poll.getPollResults();
    assert(votes.length > 0);
  });
  
  it("should find the vote in the array", async function () {
    let poll = await Poll.deployed();
    await poll.vote(true,{from:accounts[3], value: 10000000000000000});
    var result = await poll.getVoteByAddress({from: accounts[3]});
    assert.equal(result[0], accounts[3]);
  });

});