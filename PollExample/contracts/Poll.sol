pragma solidity ^0.4.23;
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Poll is Ownable {

    using SafeMath for uint16;

    struct VoteStruct {
        address voter;
        bool option;
    }

    VoteStruct[] private votes;
    uint voteFee = 10 finney;
    
    modifier voted() {
        require(adressVoted());
        _;
    }

    modifier pendingVote() {
        require(!adressVoted());
        _;
    }

    function setVoteFee(uint _fee) external onlyOwner  {
        voteFee = _fee;
    }  

    function vote(bool _option) external payable pendingVote {
        require(msg.value >= voteFee, "Ether sent is not enough to vote");
        VoteStruct memory ballot = VoteStruct(msg.sender, _option);
        votes.push(ballot);
    }  
    
    function getPollResults() public view voted returns(uint16 positiveVotes,uint16 negativeVotes) {
        
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
        }
        //return (positiveVotes,negativeVotes);
    }

    function adressVoted() public view returns(bool)
    {
        bool result = false;
        if(votes.length > 0)
        {       
            uint index = 0;
            while(index < votes.length || result)
            {
                if(votes[index].voter == msg.sender)
                {
                    result = true;
                }
            }
         }  
        return result;
    }

}
