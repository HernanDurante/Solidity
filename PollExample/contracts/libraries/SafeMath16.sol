pragma solidity ^0.4.24;


/**
 * @title SafeMath16
 * @dev Math operations with safety checks that throw on error for uint16. Stolen from safemath, just changed the uint type
 */
library SafeMath16 {

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */
  function mul(uint16 _a, uint16 _b) internal pure returns (uint16 c) {
    // Gas optimization: this is cheaper than asserting 'a' not being zero, but the
    // benefit is lost if 'b' is also tested.
    // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
    if (_a == 0) {
      return 0;
    }

    c = _a * _b;
    assert(c / _a == _b);
    return c;
  }

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */
  function div(uint16 _a, uint16 _b) internal pure returns (uint16) {
    // assert(_b > 0); // Solidity automatically throws when dividing by 0
    // uint16 c = _a / _b;
    // assert(_a == _b * c + _a % _b); // There is no case in which this doesn't hold
    return _a / _b;
  }

  /**
  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint16 _a, uint16 _b) internal pure returns (uint16) {
    assert(_b <= _a);
    return _a - _b;
  }

  /**
  * @dev Adds two numbers, throws on overflow.
  */
  function add(uint16 _a, uint16 _b) internal pure returns (uint16 c) {
    c = _a + _b;
    assert(c >= _a);
    return c;
  }
}
