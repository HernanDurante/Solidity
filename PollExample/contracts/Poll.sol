pragma solidity ^0.4.23;
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Poll is Ownable {
  mapping(address => bool) votes;
  uint positiveVotes;
  uint negativeVotes;

}
