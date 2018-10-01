
      var pollContractInstance;
      var userAccount;
      var pollresults = {"positive": 0, "negative": 0};
      var blockNbr = 0;
      const pollAddress = '0x0189870ccc57f845d69b8777dc522cecf52599cd';

      $(document).ready(function() {
        $("#btnVoteYes").click(function(){
            vote(true);
        });
        $("#btnVoteNo").click(function(){
            vote(false);
        });
      });

      function startApp() {       
        var pollContract = web3js.eth.contract(pollABI.abi);
        pollContractInstance = pollContract.at(pollAddress);
        var voteCastedEvent = pollContractInstance.VoteCasted({},{fromBlock: blockNbr, toBlock: 'latest'});
        voteCastedEvent.watch(function(error, result) {
          if (!error)
          {
            if(blockNbr < result.blockNumber) {
              blockNbr = result.blockNumber;
              if(result.args.option){
                pollresults.positive++;
              }else {
                pollresults.negative++;
              }
              if(result.args.from == userAccount) {
                //if the vote was casted by this account, refresh the ui
                displayUsersVote(result.args.option);
              }
              displayPollresults();
              $("#loadingMessage").hide(); 
            } 
          } else{
            $("#loadingMessage").hide(); 
            alert(JSON.stringify(error));
          }
        });
        getVoteByAddress();
        getPollResults();
        var accountInterval = setInterval(function() {
          if (web3js.eth.accounts[0] !== userAccount) {
            location.reload();
          }
        }, 100);
      }

      function vote(option) {
        $("#loadingMessage").show();
        pollContractInstance.vote(option,{from: userAccount, value: web3.toWei(0.01, "ether")}, function(error, response) 
        {
          if(!error) {
            console.log(response);
          } else {
            console.error(error);
            $("#loadingMessage").hide();
          }
        });
      }
      
      function getVoteByAddress() {
         pollContractInstance.getVoteByAddress.call(function(error,result){
          if(!error) {
            if(result[0] == userAccount) {
              displayUsersVote(result[1])             
            } else {
              console.log(result[0]);
            }
          } else {
            console.error(error);
          }
        });
      }

      function getPollResults() {
         pollContractInstance.getPollResults.call(function(error,result){
          if(!error) {
            pollresults.positive = parseInt(result[0].toString());
            pollresults.negative = parseInt(result[1].toString());
            displayPollresults();
          } else {
            console.error(error);
          }
        });
      }
      
      function displayUsersVote(option)
      {
        $('.pendingVote').hide();
        if(option) {
          $('.votedYes').show();
        } else {
          $('.votedNo').show();
        }
      }

      function displayPollresults()
      {
        $("#yesResults").empty().text(pollresults.positive + " votes ");
        $("#noResults").empty().text(pollresults.negative + " votes ");
      }

      window.addEventListener('load', function() {

        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof web3 !== 'undefined') {
          web3js = new Web3(web3.currentProvider);
          userAccount = web3js.eth.accounts[0];
          web3js.eth.getBlockNumber(function(error, result){
            if(!error){
              blockNbr = result;
              startApp();
            }
            else
              console.error('error');
          });
        } else {
            alert('Please install Metamask in order to continue');
        }

      });
