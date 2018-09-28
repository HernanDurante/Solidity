pragma solidity ^0.4.23;
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Poll is Ownable {

    event VoteCasted(bool option);

    using SafeMath for uint16;
    using SafeMath for uint;

    struct VoteStruct {
        address voter;
        bool option;
    }

    VoteStruct[] private votes;
    uint voteFee = 10 finney;

    modifier pendingVote() {
        address voter;
        (voter,) = getVoteByAddress();
        require(voter == address(0));
        _;
    }

    function setVoteFee(uint _fee) external onlyOwner  {
        voteFee = _fee;
    }  

    function vote(bool _option) external payable pendingVote {
        require(msg.value >= voteFee, "Ether sent is not enough to vote");
        VoteStruct memory ballot = VoteStruct(msg.sender, _option);
        votes.push(ballot);
        if(msg.value > voteFee)
        {
            uint change = msg.value.sub(voteFee);
            msg.sender.transfer(change);
        }
        emit VoteCasted(_option);
    }  
    
    function getPollResults() public view returns(uint16 positiveVotes,uint16 negativeVotes) {
        
        positiveVotes = 0;
        negativeVotes = 0;
        uint32 index = 0;
        while(index < votes.length)
        {
            if(votes[index].option) {
                positiveVotes.add(1); 
            } else {
                negativeVotes.add(1);
            }
            index++;
        }
    }

    function getVoteByAddress() public view returns(address voter, bool option)
    {
        VoteStruct memory result = VoteStruct(address(0),false);
        if(votes.length > 0)
        {       
            uint index = 0;
            while(index < votes.length && voter == address(0))
            {
                if(votes[index].voter == msg.sender)
                {
                    result = votes[index];
                }
                index++;
            }
         }
        return(result.voter,result.option);  
    }

}
