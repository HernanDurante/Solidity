var pollABI = {
  "contractName": "Poll",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "option",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        }
      ],
      "name": "VoteCasted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_fee",
          "type": "uint256"
        }
      ],
      "name": "setVoteFee",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_option",
          "type": "bool"
        }
      ],
      "name": "vote",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPollResults",
      "outputs": [
        {
          "name": "positiveVotes",
          "type": "uint16"
        },
        {
          "name": "negativeVotes",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getVoteByAddress",
      "outputs": [
        {
          "name": "voter",
          "type": "address"
        },
        {
          "name": "option",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052662386f26fc10000600255336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a8d8061005e6000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630564a9a7146100885780633e36c413146100ca5780634b9f5c98146100f7578063715018a6146101195780638da5cb5b14610130578063f2fde38b14610187578063fef923db146101ca575b600080fd5b34801561009457600080fd5b5061009d61022c565b604051808361ffff1661ffff1681526020018261ffff1661ffff1681526020019250505060405180910390f35b3480156100d657600080fd5b506100f5600480360381019080803590602001909291905050506102d7565b005b61011760048036038101908080351515906020019092919050505061033c565b005b34801561012557600080fd5b5061012e6105aa565b005b34801561013c57600080fd5b506101456106ac565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019357600080fd5b506101c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106d1565b005b3480156101d657600080fd5b506101df610738565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b600080600080925060009150600090505b6001805490508163ffffffff1610156102cc5760018163ffffffff1681548110151561026557fe5b9060005260206000200160000160149054906101000a900460ff16156102a45761029d60018461ffff166108f890919063ffffffff16565b92506102bf565b6102bc60018361ffff166108f890919063ffffffff16565b91505b808060010191505061023d565b828292509250509091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561033257600080fd5b8060028190555050565b610344610a2f565b60008061034f610738565b5080915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151561038f57600080fd5b6002543410151515610409576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f45746865722073656e74206973206e6f7420656e6f75676820746f20766f746581525060200191505060405180910390fd5b60408051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001851515815250925060018390806001815401808255809150509060018203906000526020600020016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff021916908315150217905550505050600254341115610535576104eb6002543461091c90919063ffffffff16565b91503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610533573d6000803e3d6000fd5b505b7f4ab09a117afba86344aebfd9cfdcaacfbd7f6c1db94e0dda78b89f72acf3731a843360405180831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561060557600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072c57600080fd5b61073581610935565b50565b600080610743610a2f565b60006040805190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152509150600060018054905011156108e457600090505b600180549050811080156107c95750600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16145b156108e3573373ffffffffffffffffffffffffffffffffffffffff166001828154811015156107f457fe5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156108d65760018181548110151561084d57fe5b906000526020600020016040805190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff16151515158152505091505b8080600101915050610789565b5b816000015182602001519350935050509091565b600081830190508261ffff168161ffff161015151561091357fe5b80905092915050565b600082821115151561092a57fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561097157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6040805190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250905600a165627a7a72305820cee0585f573bb3f0978bd2201ea9593bf5a514778a584bd557b299a6aa7ac9310029",
  "deployedBytecode": "0x608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630564a9a7146100885780633e36c413146100ca5780634b9f5c98146100f7578063715018a6146101195780638da5cb5b14610130578063f2fde38b14610187578063fef923db146101ca575b600080fd5b34801561009457600080fd5b5061009d61022c565b604051808361ffff1661ffff1681526020018261ffff1661ffff1681526020019250505060405180910390f35b3480156100d657600080fd5b506100f5600480360381019080803590602001909291905050506102d7565b005b61011760048036038101908080351515906020019092919050505061033c565b005b34801561012557600080fd5b5061012e6105aa565b005b34801561013c57600080fd5b506101456106ac565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019357600080fd5b506101c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106d1565b005b3480156101d657600080fd5b506101df610738565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b600080600080925060009150600090505b6001805490508163ffffffff1610156102cc5760018163ffffffff1681548110151561026557fe5b9060005260206000200160000160149054906101000a900460ff16156102a45761029d60018461ffff166108f890919063ffffffff16565b92506102bf565b6102bc60018361ffff166108f890919063ffffffff16565b91505b808060010191505061023d565b828292509250509091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561033257600080fd5b8060028190555050565b610344610a2f565b60008061034f610738565b5080915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151561038f57600080fd5b6002543410151515610409576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f45746865722073656e74206973206e6f7420656e6f75676820746f20766f746581525060200191505060405180910390fd5b60408051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001851515815250925060018390806001815401808255809150509060018203906000526020600020016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff021916908315150217905550505050600254341115610535576104eb6002543461091c90919063ffffffff16565b91503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610533573d6000803e3d6000fd5b505b7f4ab09a117afba86344aebfd9cfdcaacfbd7f6c1db94e0dda78b89f72acf3731a843360405180831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561060557600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072c57600080fd5b61073581610935565b50565b600080610743610a2f565b60006040805190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152509150600060018054905011156108e457600090505b600180549050811080156107c95750600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16145b156108e3573373ffffffffffffffffffffffffffffffffffffffff166001828154811015156107f457fe5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156108d65760018181548110151561084d57fe5b906000526020600020016040805190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff16151515158152505091505b8080600101915050610789565b5b816000015182602001519350935050509091565b600081830190508261ffff168161ffff161015151561091357fe5b80905092915050565b600082821115151561092a57fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561097157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6040805190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250905600a165627a7a72305820cee0585f573bb3f0978bd2201ea9593bf5a514778a584bd557b299a6aa7ac9310029",
  "sourceMap": "192:2059:0:-;;;472:9;457:24;;575:10:3;567:5;;:18;;;;;;;;;;;;;;;;;;192:2059:0;;;;;;",
  "deployedSourceMap": "192:2059:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1185:506;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1185:506:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:84;;8:9:-1;5:2;;;30:1;27;20:12;5:2;644:84:0;;;;;;;;;;;;;;;;;;;;;;;;;;738:433;;;;;;;;;;;;;;;;;;;;;;;;;;;;1001:111:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1001:111:3;;;;;;238:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:3;;;;;;;;;;;;;;;;;;;;;;;;;;;1274:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1274:103:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;1699:547:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1699:547:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1185:506;1231:20;1252;1351:12;1311:1;1295:17;;1339:1;1323:17;;1366:1;1351:16;;1378:258;1392:5;:12;;;;1384:5;:20;;;1378:258;;;1433:5;1439;1433:12;;;;;;;;;;;;;;;;;;;:19;;;;;;;;;;;;1430:173;;;1489:20;1507:1;1489:13;:17;;;;:20;;;;:::i;:::-;1473:36;;1430:173;;;1567:20;1585:1;1567:13;:17;;;;:20;;;;:::i;:::-;1551:36;;1430:173;1617:7;;;;;;;1378:258;;;1653:13;1667;1646:35;;;;1185:506;;;:::o;644:84::-;719:5:3;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;716:4:0;706:7;:14;;;;644:84;:::o;738:433::-;882:24;;:::i;:::-;1028:11;524:13;559:18;:16;:18::i;:::-;548:29;;;;;613:1;596:19;;:5;:19;;;588:28;;;;;;;;827:7;;814:9;:20;;806:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;909:31;;;;;;;;;920:10;909:31;;;;;;932:7;909:31;;;;;882:58;;951:5;962:6;951:18;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;951:18:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;995:7;;983:9;:19;980:138;;;1042:22;1056:7;;1042:9;:13;;:22;;;;:::i;:::-;1028:36;;1079:10;:19;;:27;1099:6;1079:27;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1079:27:0;980:138;1133:30;1144:7;1152:10;1133:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;738:433;;;;:::o;1001:111:3:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1077:5;;;;;;;;;;;1058:25;;;;;;;;;;;;1105:1;1089:5;;:18;;;;;;;;;;;;;;;;;;1001:111::o;238:20::-;;;;;;;;;;;;;:::o;1274:103::-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1343:29;1362:9;1343:18;:29::i;:::-;1274:103;:::o;1699:547:0:-;1747:13;1762:11;1791:24;;:::i;:::-;1909:10;1818:28;;;;;;;;;1837:1;1818:28;;;;;;1840:5;1818:28;;;;;1791:55;;1875:1;1860:5;:12;;;;:16;1857:335;;;1922:1;1909:14;;1938:242;1952:5;:12;;;;1944:5;:20;:43;;;;;1985:1;1968:19;;:5;:19;;;1944:43;1938:242;;;2046:10;2024:32;;:5;2030;2024:12;;;;;;;;;;;;;;;;;:18;;;;;;;;;;;;:32;;;2021:118;;;2107:5;2113;2107:12;;;;;;;;;;;;;;;;;2098:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2021:118;2157:7;;;;;;;1938:242;;;1857:335;2209:6;:12;;;2222:6;:13;;;2202:34;;;;1699:547;;;;:::o;1339:129:1:-;1397:8;1423:2;1418;:7;1414:11;;1444:2;1439:7;;:1;:7;;;;1432:15;;;;;;1461:1;1454:8;;1339:129;;;;:::o;1060:116:2:-;1120:7;1148:2;1142;:8;;1135:16;;;;;;1169:2;1164;:7;1157:14;;1060:116;;;;:::o;1512:171:3:-;1603:1;1582:23;;:9;:23;;;;1574:32;;;;;;;;1645:9;1617:38;;1638:5;;;;;;;;;;;1617:38;;;;;;;;;;;;1669:9;1661:5;;:17;;;;;;;;;;;;;;;;;;1512:171;:::o;192:2059:0:-;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.23;\r\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\r\nimport \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\r\nimport \"./libraries/SafeMath16.sol\";\r\n\r\ncontract Poll is Ownable {\r\n\r\n    event VoteCasted(bool option, address from);\r\n\r\n    using SafeMath16 for uint16;\r\n    using SafeMath for uint;\r\n\r\n    struct VoteStruct {\r\n        address voter;\r\n        bool option;\r\n    }\r\n\r\n    VoteStruct[] private votes;\r\n    uint voteFee = 10 finney;\r\n\r\n    modifier pendingVote() {\r\n        address voter;\r\n        (voter,) = getVoteByAddress();\r\n        require(voter == address(0));\r\n        _;\r\n    }\r\n\r\n    function setVoteFee(uint _fee) external onlyOwner  {\r\n        voteFee = _fee;\r\n    }  \r\n\r\n    function vote(bool _option) external payable pendingVote {\r\n        require(msg.value >= voteFee, \"Ether sent is not enough to vote\");\r\n        VoteStruct memory ballot = VoteStruct(msg.sender, _option);\r\n        votes.push(ballot);\r\n        if(msg.value > voteFee)\r\n        {\r\n            uint change = msg.value.sub(voteFee);\r\n            msg.sender.transfer(change);\r\n        }\r\n        emit VoteCasted(_option,msg.sender);\r\n    }  \r\n    \r\n    function getPollResults() public view returns(uint16 positiveVotes,uint16 negativeVotes) {\r\n        \r\n        positiveVotes = 0;\r\n        negativeVotes = 0;\r\n        uint32 index = 0;\r\n        while(index < votes.length)\r\n        {\r\n            if(votes[index].option) {\r\n                positiveVotes = positiveVotes.add(1); \r\n            } else {\r\n                negativeVotes = negativeVotes.add(1);\r\n            }\r\n            index++;\r\n        }\r\n        return(positiveVotes,negativeVotes);  \r\n    }\r\n\r\n    function getVoteByAddress() public view returns(address voter, bool option)\r\n    {\r\n        VoteStruct memory result = VoteStruct(address(0),false);\r\n        if(votes.length > 0)\r\n        {       \r\n            uint index = 0;\r\n            while(index < votes.length && voter == address(0))\r\n            {\r\n                if(votes[index].voter == msg.sender)\r\n                {\r\n                    result = votes[index];\r\n                }\r\n                index++;\r\n            }\r\n         }\r\n        return(result.voter,result.option);  \r\n    }\r\n\r\n}\r\n",
  "sourcePath": "D:\\Code\\Solidity\\PollExample\\contracts\\Poll.sol",
  "ast": {
    "absolutePath": "/D/Code/Solidity/PollExample/contracts/Poll.sol",
    "exportedSymbols": {
      "Poll": [
        238
      ]
    },
    "id": 239,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 239,
        "sourceUnit": 513,
        "src": "26:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 239,
        "sourceUnit": 427,
        "src": "91:59:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/D/Code/Solidity/PollExample/contracts/libraries/SafeMath16.sol",
        "file": "./libraries/SafeMath16.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 239,
        "sourceUnit": 333,
        "src": "152:36:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 512,
              "src": "209:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$512",
                "typeString": "contract Ownable"
              }
            },
            "id": 6,
            "nodeType": "InheritanceSpecifier",
            "src": "209:7:0"
          }
        ],
        "contractDependencies": [
          512
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 238,
        "linearizedBaseContracts": [
          238,
          512
        ],
        "name": "Poll",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 12,
            "name": "VoteCasted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8,
                  "indexed": false,
                  "name": "option",
                  "nodeType": "VariableDeclaration",
                  "scope": 12,
                  "src": "243:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "243:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 12,
                  "src": "256:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "242:27:0"
            },
            "src": "226:44:0"
          },
          {
            "id": 15,
            "libraryName": {
              "contractScope": null,
              "id": 13,
              "name": "SafeMath16",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 332,
              "src": "284:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath16_$332",
                "typeString": "library SafeMath16"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "278:28:0",
            "typeName": {
              "id": 14,
              "name": "uint16",
              "nodeType": "ElementaryTypeName",
              "src": "299:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint16",
                "typeString": "uint16"
              }
            }
          },
          {
            "id": 18,
            "libraryName": {
              "contractScope": null,
              "id": 16,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 426,
              "src": "318:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$426",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "312:24:0",
            "typeName": {
              "id": 17,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "331:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "Poll.VoteStruct",
            "id": 23,
            "members": [
              {
                "constant": false,
                "id": 20,
                "name": "voter",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "373:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 19,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "373:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 22,
                "name": "option",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "397:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 21,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "397:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "VoteStruct",
            "nodeType": "StructDefinition",
            "scope": 238,
            "src": "344:72:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 26,
            "name": "votes",
            "nodeType": "VariableDeclaration",
            "scope": 238,
            "src": "424:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
              "typeString": "struct Poll.VoteStruct[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 24,
                "name": "VoteStruct",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 23,
                "src": "424:10:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_VoteStruct_$23_storage_ptr",
                  "typeString": "struct Poll.VoteStruct"
                }
              },
              "id": 25,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "424:12:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage_ptr",
                "typeString": "struct Poll.VoteStruct[]"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 29,
            "name": "voteFee",
            "nodeType": "VariableDeclaration",
            "scope": 238,
            "src": "457:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 27,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "457:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130",
              "id": 28,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "472:9:0",
              "subdenomination": "finney",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              },
              "value": "10"
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 49,
              "nodeType": "Block",
              "src": "513:123:0",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32,
                      "name": "voter",
                      "nodeType": "VariableDeclaration",
                      "scope": 50,
                      "src": "524:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 31,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "524:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 33,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "524:13:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 38,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 34,
                          "name": "voter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "549:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        null
                      ],
                      "id": 35,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "548:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$__$",
                        "typeString": "tuple(address,)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 36,
                        "name": "getVoteByAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 237,
                        "src": "559:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$_t_bool_$",
                          "typeString": "function () view returns (address,bool)"
                        }
                      },
                      "id": 37,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "559:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_bool_$",
                        "typeString": "tuple(address,bool)"
                      }
                    },
                    "src": "548:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 39,
                  "nodeType": "ExpressionStatement",
                  "src": "548:29:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 45,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 41,
                          "name": "voter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "596:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 43,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "613:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 42,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "605:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 44,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "605:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "596:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 40,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        530,
                        531
                      ],
                      "referencedDeclaration": 530,
                      "src": "588:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 46,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "588:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47,
                  "nodeType": "ExpressionStatement",
                  "src": "588:28:0"
                },
                {
                  "id": 48,
                  "nodeType": "PlaceholderStatement",
                  "src": "627:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 50,
            "name": "pendingVote",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "510:2:0"
            },
            "src": "490:146:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 61,
              "nodeType": "Block",
              "src": "695:33:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 57,
                      "name": "voteFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29,
                      "src": "706:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 58,
                      "name": "_fee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "716:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "706:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "706:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 62,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 55,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 54,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 460,
                  "src": "684:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "684:9:0"
              }
            ],
            "name": "setVoteFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "name": "_fee",
                  "nodeType": "VariableDeclaration",
                  "scope": 62,
                  "src": "664:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "664:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "663:11:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "695:0:0"
            },
            "scope": 238,
            "src": "644:84:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 119,
              "nodeType": "Block",
              "src": "795:376:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 73,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 70,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 527,
                            "src": "814:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 71,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "814:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 72,
                          "name": "voteFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 29,
                          "src": "827:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "814:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "45746865722073656e74206973206e6f7420656e6f75676820746f20766f7465",
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "836:34:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e36a5e91a025410909a77ed45e048967c63790e3cc15e9764834034d1a7078c9",
                          "typeString": "literal_string \"Ether sent is not enough to vote\""
                        },
                        "value": "Ether sent is not enough to vote"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e36a5e91a025410909a77ed45e048967c63790e3cc15e9764834034d1a7078c9",
                          "typeString": "literal_string \"Ether sent is not enough to vote\""
                        }
                      ],
                      "id": 69,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        530,
                        531
                      ],
                      "referencedDeclaration": 531,
                      "src": "806:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "806:65:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "806:65:0"
                },
                {
                  "assignments": [
                    78
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78,
                      "name": "ballot",
                      "nodeType": "VariableDeclaration",
                      "scope": 120,
                      "src": "882:24:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                        "typeString": "struct Poll.VoteStruct"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 77,
                        "name": "VoteStruct",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 23,
                        "src": "882:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_VoteStruct_$23_storage_ptr",
                          "typeString": "struct Poll.VoteStruct"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 84,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 80,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 527,
                          "src": "920:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 81,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "920:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "_option",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64,
                        "src": "932:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 79,
                      "name": "VoteStruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "909:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_VoteStruct_$23_storage_ptr_$",
                        "typeString": "type(struct Poll.VoteStruct storage pointer)"
                      }
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "909:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_VoteStruct_$23_memory",
                      "typeString": "struct Poll.VoteStruct memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "882:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "ballot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "962:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                          "typeString": "struct Poll.VoteStruct memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                          "typeString": "struct Poll.VoteStruct memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 85,
                        "name": "votes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "951:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                          "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                        }
                      },
                      "id": 87,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "951:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_VoteStruct_$23_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct Poll.VoteStruct storage ref) returns (uint256)"
                      }
                    },
                    "id": 89,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "951:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 90,
                  "nodeType": "ExpressionStatement",
                  "src": "951:18:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 94,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 91,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 527,
                        "src": "983:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 92,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "983:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 93,
                      "name": "voteFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29,
                      "src": "995:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "983:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 112,
                  "nodeType": "IfStatement",
                  "src": "980:138:0",
                  "trueBody": {
                    "id": 111,
                    "nodeType": "Block",
                    "src": "1013:105:0",
                    "statements": [
                      {
                        "assignments": [
                          96
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 96,
                            "name": "change",
                            "nodeType": "VariableDeclaration",
                            "scope": 120,
                            "src": "1028:11:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 95,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "1028:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 102,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 100,
                              "name": "voteFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 29,
                              "src": "1056:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 97,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 527,
                                "src": "1042:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 98,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1042:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 99,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sub",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 401,
                            "src": "1042:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 101,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1042:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1028:36:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 108,
                              "name": "change",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 96,
                              "src": "1099:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 103,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 527,
                                "src": "1079:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 106,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1079:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 107,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1079:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1079:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 110,
                        "nodeType": "ExpressionStatement",
                        "src": "1079:27:0"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "_option",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64,
                        "src": "1144:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 115,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 527,
                          "src": "1152:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1152:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 113,
                      "name": "VoteCasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "1133:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bool_$_t_address_$returns$__$",
                        "typeString": "function (bool,address)"
                      }
                    },
                    "id": 117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1133:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 118,
                  "nodeType": "EmitStatement",
                  "src": "1128:35:0"
                }
              ]
            },
            "documentation": null,
            "id": 120,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 67,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 66,
                  "name": "pendingVote",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 50,
                  "src": "783:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "783:11:0"
              }
            ],
            "name": "vote",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64,
                  "name": "_option",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "752:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "752:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "751:14:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "795:0:0"
            },
            "scope": 238,
            "src": "738:433:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 173,
              "nodeType": "Block",
              "src": "1274:417:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 127,
                      "name": "positiveVotes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 123,
                      "src": "1295:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1311:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1295:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "id": 130,
                  "nodeType": "ExpressionStatement",
                  "src": "1295:17:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 131,
                      "name": "negativeVotes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "1323:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 132,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1339:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1323:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "id": 134,
                  "nodeType": "ExpressionStatement",
                  "src": "1323:17:0"
                },
                {
                  "assignments": [
                    136
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 136,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 174,
                      "src": "1351:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      },
                      "typeName": {
                        "id": 135,
                        "name": "uint32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1351:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 138,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1366:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1351:16:0"
                },
                {
                  "body": {
                    "id": 167,
                    "nodeType": "Block",
                    "src": "1415:221:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 143,
                              "name": "votes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26,
                              "src": "1433:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                                "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                              }
                            },
                            "id": 145,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 144,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 136,
                              "src": "1439:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1433:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_VoteStruct_$23_storage",
                              "typeString": "struct Poll.VoteStruct storage ref"
                            }
                          },
                          "id": 146,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "option",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 22,
                          "src": "1433:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 162,
                          "nodeType": "Block",
                          "src": "1532:71:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 160,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 155,
                                  "name": "negativeVotes",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 125,
                                  "src": "1551:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 158,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1585:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 156,
                                      "name": "negativeVotes",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 125,
                                      "src": "1567:13:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint16",
                                        "typeString": "uint16"
                                      }
                                    },
                                    "id": 157,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "add",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 331,
                                    "src": "1567:17:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint16_$_t_uint16_$returns$_t_uint16_$bound_to$_t_uint16_$",
                                      "typeString": "function (uint16,uint16) pure returns (uint16)"
                                    }
                                  },
                                  "id": 159,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1567:20:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "1551:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              },
                              "id": 161,
                              "nodeType": "ExpressionStatement",
                              "src": "1551:36:0"
                            }
                          ]
                        },
                        "id": 163,
                        "nodeType": "IfStatement",
                        "src": "1430:173:0",
                        "trueBody": {
                          "id": 154,
                          "nodeType": "Block",
                          "src": "1454:72:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 152,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 147,
                                  "name": "positiveVotes",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 123,
                                  "src": "1473:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 150,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1507:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 148,
                                      "name": "positiveVotes",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 123,
                                      "src": "1489:13:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint16",
                                        "typeString": "uint16"
                                      }
                                    },
                                    "id": 149,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "add",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 331,
                                    "src": "1489:17:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint16_$_t_uint16_$returns$_t_uint16_$bound_to$_t_uint16_$",
                                      "typeString": "function (uint16,uint16) pure returns (uint16)"
                                    }
                                  },
                                  "id": 151,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1489:20:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "1473:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              },
                              "id": 153,
                              "nodeType": "ExpressionStatement",
                              "src": "1473:36:0"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1617:7:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 164,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 136,
                            "src": "1617:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "id": 166,
                        "nodeType": "ExpressionStatement",
                        "src": "1617:7:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 139,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 136,
                      "src": "1384:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 140,
                        "name": "votes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "1392:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                          "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                        }
                      },
                      "id": 141,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1392:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1384:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 168,
                  "nodeType": "WhileStatement",
                  "src": "1378:258:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "id": 169,
                        "name": "positiveVotes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 123,
                        "src": "1653:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint16",
                          "typeString": "uint16"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 170,
                        "name": "negativeVotes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125,
                        "src": "1667:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint16",
                          "typeString": "uint16"
                        }
                      }
                    ],
                    "id": 171,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1652:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint16_$_t_uint16_$",
                      "typeString": "tuple(uint16,uint16)"
                    }
                  },
                  "functionReturnParameters": 126,
                  "id": 172,
                  "nodeType": "Return",
                  "src": "1646:35:0"
                }
              ]
            },
            "documentation": null,
            "id": 174,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPollResults",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 121,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1208:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 123,
                  "name": "positiveVotes",
                  "nodeType": "VariableDeclaration",
                  "scope": 174,
                  "src": "1231:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 122,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125,
                  "name": "negativeVotes",
                  "nodeType": "VariableDeclaration",
                  "scope": 174,
                  "src": "1252:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1230:43:0"
            },
            "scope": 238,
            "src": "1185:506:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 236,
              "nodeType": "Block",
              "src": "1780:466:0",
              "statements": [
                {
                  "assignments": [
                    182
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 182,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 237,
                      "src": "1791:24:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                        "typeString": "struct Poll.VoteStruct"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 181,
                        "name": "VoteStruct",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 23,
                        "src": "1791:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_VoteStruct_$23_storage_ptr",
                          "typeString": "struct Poll.VoteStruct"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 189,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 185,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1837:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1829:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 186,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1829:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1840:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 183,
                      "name": "VoteStruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "1818:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_VoteStruct_$23_storage_ptr_$",
                        "typeString": "type(struct Poll.VoteStruct storage pointer)"
                      }
                    },
                    "id": 188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1818:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_VoteStruct_$23_memory",
                      "typeString": "struct Poll.VoteStruct memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1791:55:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "votes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "1860:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                          "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                        }
                      },
                      "id": 191,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1860:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1875:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1860:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 229,
                  "nodeType": "IfStatement",
                  "src": "1857:335:0",
                  "trueBody": {
                    "id": 228,
                    "nodeType": "Block",
                    "src": "1887:305:0",
                    "statements": [
                      {
                        "assignments": [
                          195
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 195,
                            "name": "index",
                            "nodeType": "VariableDeclaration",
                            "scope": 237,
                            "src": "1909:10:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 194,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "1909:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 197,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 196,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1922:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1909:14:0"
                      },
                      {
                        "body": {
                          "id": 226,
                          "nodeType": "Block",
                          "src": "2002:178:0",
                          "statements": [
                            {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "id": 214,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 208,
                                      "name": "votes",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 26,
                                      "src": "2024:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                                        "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                                      }
                                    },
                                    "id": 210,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 209,
                                      "name": "index",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 195,
                                      "src": "2030:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "2024:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_VoteStruct_$23_storage",
                                      "typeString": "struct Poll.VoteStruct storage ref"
                                    }
                                  },
                                  "id": 211,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "voter",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20,
                                  "src": "2024:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 212,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 527,
                                    "src": "2046:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 213,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2046:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "2024:32:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": null,
                              "id": 222,
                              "nodeType": "IfStatement",
                              "src": "2021:118:0",
                              "trueBody": {
                                "id": 221,
                                "nodeType": "Block",
                                "src": "2075:64:0",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 219,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "argumentTypes": null,
                                        "id": 215,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 182,
                                        "src": "2098:6:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                                          "typeString": "struct Poll.VoteStruct memory"
                                        }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 216,
                                          "name": "votes",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 26,
                                          "src": "2107:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                                            "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                                          }
                                        },
                                        "id": 218,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 217,
                                          "name": "index",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 195,
                                          "src": "2113:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2107:12:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_VoteStruct_$23_storage",
                                          "typeString": "struct Poll.VoteStruct storage ref"
                                        }
                                      },
                                      "src": "2098:21:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                                        "typeString": "struct Poll.VoteStruct memory"
                                      }
                                    },
                                    "id": 220,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2098:21:0"
                                  }
                                ]
                              }
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 224,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "2157:7:0",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 223,
                                  "name": "index",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 195,
                                  "src": "2157:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 225,
                              "nodeType": "ExpressionStatement",
                              "src": "2157:7:0"
                            }
                          ]
                        },
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 201,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 195,
                              "src": "1944:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 199,
                                "name": "votes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26,
                                "src": "1952:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                                  "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                                }
                              },
                              "id": 200,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1952:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1944:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 206,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 202,
                              "name": "voter",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 177,
                              "src": "1968:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 204,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1985:1:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 203,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1977:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 205,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1977:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1968:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1944:43:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 227,
                        "nodeType": "WhileStatement",
                        "src": "1938:242:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 230,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 182,
                          "src": "2209:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                            "typeString": "struct Poll.VoteStruct memory"
                          }
                        },
                        "id": 231,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "voter",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20,
                        "src": "2209:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 232,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 182,
                          "src": "2222:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                            "typeString": "struct Poll.VoteStruct memory"
                          }
                        },
                        "id": 233,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "option",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 22,
                        "src": "2222:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 234,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2208:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_bool_$",
                      "typeString": "tuple(address,bool)"
                    }
                  },
                  "functionReturnParameters": 180,
                  "id": 235,
                  "nodeType": "Return",
                  "src": "2202:34:0"
                }
              ]
            },
            "documentation": null,
            "id": 237,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getVoteByAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 175,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1724:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 177,
                  "name": "voter",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "1747:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 176,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1747:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 179,
                  "name": "option",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "1762:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 178,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1762:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1746:28:0"
            },
            "scope": 238,
            "src": "1699:547:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 239,
        "src": "192:2059:0"
      }
    ],
    "src": "0:2253:0"
  },
  "legacyAST": {
    "absolutePath": "/D/Code/Solidity/PollExample/contracts/Poll.sol",
    "exportedSymbols": {
      "Poll": [
        238
      ]
    },
    "id": 239,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 239,
        "sourceUnit": 513,
        "src": "26:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 239,
        "sourceUnit": 427,
        "src": "91:59:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/D/Code/Solidity/PollExample/contracts/libraries/SafeMath16.sol",
        "file": "./libraries/SafeMath16.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 239,
        "sourceUnit": 333,
        "src": "152:36:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 512,
              "src": "209:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$512",
                "typeString": "contract Ownable"
              }
            },
            "id": 6,
            "nodeType": "InheritanceSpecifier",
            "src": "209:7:0"
          }
        ],
        "contractDependencies": [
          512
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 238,
        "linearizedBaseContracts": [
          238,
          512
        ],
        "name": "Poll",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 12,
            "name": "VoteCasted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8,
                  "indexed": false,
                  "name": "option",
                  "nodeType": "VariableDeclaration",
                  "scope": 12,
                  "src": "243:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "243:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 12,
                  "src": "256:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "242:27:0"
            },
            "src": "226:44:0"
          },
          {
            "id": 15,
            "libraryName": {
              "contractScope": null,
              "id": 13,
              "name": "SafeMath16",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 332,
              "src": "284:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath16_$332",
                "typeString": "library SafeMath16"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "278:28:0",
            "typeName": {
              "id": 14,
              "name": "uint16",
              "nodeType": "ElementaryTypeName",
              "src": "299:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint16",
                "typeString": "uint16"
              }
            }
          },
          {
            "id": 18,
            "libraryName": {
              "contractScope": null,
              "id": 16,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 426,
              "src": "318:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$426",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "312:24:0",
            "typeName": {
              "id": 17,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "331:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "Poll.VoteStruct",
            "id": 23,
            "members": [
              {
                "constant": false,
                "id": 20,
                "name": "voter",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "373:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 19,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "373:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 22,
                "name": "option",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "397:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 21,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "397:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "VoteStruct",
            "nodeType": "StructDefinition",
            "scope": 238,
            "src": "344:72:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 26,
            "name": "votes",
            "nodeType": "VariableDeclaration",
            "scope": 238,
            "src": "424:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
              "typeString": "struct Poll.VoteStruct[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 24,
                "name": "VoteStruct",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 23,
                "src": "424:10:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_VoteStruct_$23_storage_ptr",
                  "typeString": "struct Poll.VoteStruct"
                }
              },
              "id": 25,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "424:12:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage_ptr",
                "typeString": "struct Poll.VoteStruct[]"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 29,
            "name": "voteFee",
            "nodeType": "VariableDeclaration",
            "scope": 238,
            "src": "457:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 27,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "457:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130",
              "id": 28,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "472:9:0",
              "subdenomination": "finney",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              },
              "value": "10"
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 49,
              "nodeType": "Block",
              "src": "513:123:0",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32,
                      "name": "voter",
                      "nodeType": "VariableDeclaration",
                      "scope": 50,
                      "src": "524:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 31,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "524:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 33,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "524:13:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 38,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 34,
                          "name": "voter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "549:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        null
                      ],
                      "id": 35,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "548:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$__$",
                        "typeString": "tuple(address,)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 36,
                        "name": "getVoteByAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 237,
                        "src": "559:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$_t_bool_$",
                          "typeString": "function () view returns (address,bool)"
                        }
                      },
                      "id": 37,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "559:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_bool_$",
                        "typeString": "tuple(address,bool)"
                      }
                    },
                    "src": "548:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 39,
                  "nodeType": "ExpressionStatement",
                  "src": "548:29:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 45,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 41,
                          "name": "voter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "596:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 43,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "613:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 42,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "605:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 44,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "605:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "596:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 40,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        530,
                        531
                      ],
                      "referencedDeclaration": 530,
                      "src": "588:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 46,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "588:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47,
                  "nodeType": "ExpressionStatement",
                  "src": "588:28:0"
                },
                {
                  "id": 48,
                  "nodeType": "PlaceholderStatement",
                  "src": "627:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 50,
            "name": "pendingVote",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "510:2:0"
            },
            "src": "490:146:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 61,
              "nodeType": "Block",
              "src": "695:33:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 57,
                      "name": "voteFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29,
                      "src": "706:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 58,
                      "name": "_fee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "716:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "706:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "706:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 62,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 55,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 54,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 460,
                  "src": "684:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "684:9:0"
              }
            ],
            "name": "setVoteFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "name": "_fee",
                  "nodeType": "VariableDeclaration",
                  "scope": 62,
                  "src": "664:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "664:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "663:11:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "695:0:0"
            },
            "scope": 238,
            "src": "644:84:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 119,
              "nodeType": "Block",
              "src": "795:376:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 73,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 70,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 527,
                            "src": "814:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 71,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "814:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 72,
                          "name": "voteFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 29,
                          "src": "827:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "814:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "45746865722073656e74206973206e6f7420656e6f75676820746f20766f7465",
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "836:34:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e36a5e91a025410909a77ed45e048967c63790e3cc15e9764834034d1a7078c9",
                          "typeString": "literal_string \"Ether sent is not enough to vote\""
                        },
                        "value": "Ether sent is not enough to vote"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e36a5e91a025410909a77ed45e048967c63790e3cc15e9764834034d1a7078c9",
                          "typeString": "literal_string \"Ether sent is not enough to vote\""
                        }
                      ],
                      "id": 69,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        530,
                        531
                      ],
                      "referencedDeclaration": 531,
                      "src": "806:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "806:65:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "806:65:0"
                },
                {
                  "assignments": [
                    78
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78,
                      "name": "ballot",
                      "nodeType": "VariableDeclaration",
                      "scope": 120,
                      "src": "882:24:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                        "typeString": "struct Poll.VoteStruct"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 77,
                        "name": "VoteStruct",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 23,
                        "src": "882:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_VoteStruct_$23_storage_ptr",
                          "typeString": "struct Poll.VoteStruct"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 84,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 80,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 527,
                          "src": "920:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 81,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "920:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "_option",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64,
                        "src": "932:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 79,
                      "name": "VoteStruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "909:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_VoteStruct_$23_storage_ptr_$",
                        "typeString": "type(struct Poll.VoteStruct storage pointer)"
                      }
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "909:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_VoteStruct_$23_memory",
                      "typeString": "struct Poll.VoteStruct memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "882:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "ballot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "962:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                          "typeString": "struct Poll.VoteStruct memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                          "typeString": "struct Poll.VoteStruct memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 85,
                        "name": "votes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "951:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                          "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                        }
                      },
                      "id": 87,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "951:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_VoteStruct_$23_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct Poll.VoteStruct storage ref) returns (uint256)"
                      }
                    },
                    "id": 89,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "951:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 90,
                  "nodeType": "ExpressionStatement",
                  "src": "951:18:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 94,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 91,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 527,
                        "src": "983:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 92,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "983:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 93,
                      "name": "voteFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29,
                      "src": "995:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "983:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 112,
                  "nodeType": "IfStatement",
                  "src": "980:138:0",
                  "trueBody": {
                    "id": 111,
                    "nodeType": "Block",
                    "src": "1013:105:0",
                    "statements": [
                      {
                        "assignments": [
                          96
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 96,
                            "name": "change",
                            "nodeType": "VariableDeclaration",
                            "scope": 120,
                            "src": "1028:11:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 95,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "1028:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 102,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 100,
                              "name": "voteFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 29,
                              "src": "1056:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 97,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 527,
                                "src": "1042:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 98,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1042:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 99,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sub",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 401,
                            "src": "1042:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 101,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1042:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1028:36:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 108,
                              "name": "change",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 96,
                              "src": "1099:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 103,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 527,
                                "src": "1079:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 106,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1079:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 107,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1079:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1079:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 110,
                        "nodeType": "ExpressionStatement",
                        "src": "1079:27:0"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "_option",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64,
                        "src": "1144:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 115,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 527,
                          "src": "1152:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1152:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 113,
                      "name": "VoteCasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "1133:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bool_$_t_address_$returns$__$",
                        "typeString": "function (bool,address)"
                      }
                    },
                    "id": 117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1133:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 118,
                  "nodeType": "EmitStatement",
                  "src": "1128:35:0"
                }
              ]
            },
            "documentation": null,
            "id": 120,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 67,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 66,
                  "name": "pendingVote",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 50,
                  "src": "783:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "783:11:0"
              }
            ],
            "name": "vote",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64,
                  "name": "_option",
                  "nodeType": "VariableDeclaration",
                  "scope": 120,
                  "src": "752:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "752:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "751:14:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "795:0:0"
            },
            "scope": 238,
            "src": "738:433:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 173,
              "nodeType": "Block",
              "src": "1274:417:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 127,
                      "name": "positiveVotes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 123,
                      "src": "1295:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1311:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1295:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "id": 130,
                  "nodeType": "ExpressionStatement",
                  "src": "1295:17:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 131,
                      "name": "negativeVotes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "1323:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 132,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1339:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1323:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "id": 134,
                  "nodeType": "ExpressionStatement",
                  "src": "1323:17:0"
                },
                {
                  "assignments": [
                    136
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 136,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 174,
                      "src": "1351:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      },
                      "typeName": {
                        "id": 135,
                        "name": "uint32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1351:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 138,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1366:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1351:16:0"
                },
                {
                  "body": {
                    "id": 167,
                    "nodeType": "Block",
                    "src": "1415:221:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 143,
                              "name": "votes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26,
                              "src": "1433:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                                "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                              }
                            },
                            "id": 145,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 144,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 136,
                              "src": "1439:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1433:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_VoteStruct_$23_storage",
                              "typeString": "struct Poll.VoteStruct storage ref"
                            }
                          },
                          "id": 146,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "option",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 22,
                          "src": "1433:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 162,
                          "nodeType": "Block",
                          "src": "1532:71:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 160,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 155,
                                  "name": "negativeVotes",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 125,
                                  "src": "1551:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 158,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1585:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 156,
                                      "name": "negativeVotes",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 125,
                                      "src": "1567:13:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint16",
                                        "typeString": "uint16"
                                      }
                                    },
                                    "id": 157,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "add",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 331,
                                    "src": "1567:17:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint16_$_t_uint16_$returns$_t_uint16_$bound_to$_t_uint16_$",
                                      "typeString": "function (uint16,uint16) pure returns (uint16)"
                                    }
                                  },
                                  "id": 159,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1567:20:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "1551:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              },
                              "id": 161,
                              "nodeType": "ExpressionStatement",
                              "src": "1551:36:0"
                            }
                          ]
                        },
                        "id": 163,
                        "nodeType": "IfStatement",
                        "src": "1430:173:0",
                        "trueBody": {
                          "id": 154,
                          "nodeType": "Block",
                          "src": "1454:72:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 152,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 147,
                                  "name": "positiveVotes",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 123,
                                  "src": "1473:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 150,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1507:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 148,
                                      "name": "positiveVotes",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 123,
                                      "src": "1489:13:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint16",
                                        "typeString": "uint16"
                                      }
                                    },
                                    "id": 149,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "add",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 331,
                                    "src": "1489:17:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint16_$_t_uint16_$returns$_t_uint16_$bound_to$_t_uint16_$",
                                      "typeString": "function (uint16,uint16) pure returns (uint16)"
                                    }
                                  },
                                  "id": 151,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1489:20:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "1473:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              },
                              "id": 153,
                              "nodeType": "ExpressionStatement",
                              "src": "1473:36:0"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1617:7:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 164,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 136,
                            "src": "1617:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "id": 166,
                        "nodeType": "ExpressionStatement",
                        "src": "1617:7:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 139,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 136,
                      "src": "1384:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 140,
                        "name": "votes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "1392:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                          "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                        }
                      },
                      "id": 141,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1392:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1384:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 168,
                  "nodeType": "WhileStatement",
                  "src": "1378:258:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "id": 169,
                        "name": "positiveVotes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 123,
                        "src": "1653:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint16",
                          "typeString": "uint16"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 170,
                        "name": "negativeVotes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125,
                        "src": "1667:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint16",
                          "typeString": "uint16"
                        }
                      }
                    ],
                    "id": 171,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1652:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint16_$_t_uint16_$",
                      "typeString": "tuple(uint16,uint16)"
                    }
                  },
                  "functionReturnParameters": 126,
                  "id": 172,
                  "nodeType": "Return",
                  "src": "1646:35:0"
                }
              ]
            },
            "documentation": null,
            "id": 174,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPollResults",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 121,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1208:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 123,
                  "name": "positiveVotes",
                  "nodeType": "VariableDeclaration",
                  "scope": 174,
                  "src": "1231:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 122,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125,
                  "name": "negativeVotes",
                  "nodeType": "VariableDeclaration",
                  "scope": 174,
                  "src": "1252:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1230:43:0"
            },
            "scope": 238,
            "src": "1185:506:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 236,
              "nodeType": "Block",
              "src": "1780:466:0",
              "statements": [
                {
                  "assignments": [
                    182
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 182,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 237,
                      "src": "1791:24:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                        "typeString": "struct Poll.VoteStruct"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 181,
                        "name": "VoteStruct",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 23,
                        "src": "1791:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_VoteStruct_$23_storage_ptr",
                          "typeString": "struct Poll.VoteStruct"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 189,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 185,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1837:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1829:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 186,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1829:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1840:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 183,
                      "name": "VoteStruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "1818:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_VoteStruct_$23_storage_ptr_$",
                        "typeString": "type(struct Poll.VoteStruct storage pointer)"
                      }
                    },
                    "id": 188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1818:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_VoteStruct_$23_memory",
                      "typeString": "struct Poll.VoteStruct memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1791:55:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "votes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "1860:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                          "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                        }
                      },
                      "id": 191,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1860:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1875:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1860:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 229,
                  "nodeType": "IfStatement",
                  "src": "1857:335:0",
                  "trueBody": {
                    "id": 228,
                    "nodeType": "Block",
                    "src": "1887:305:0",
                    "statements": [
                      {
                        "assignments": [
                          195
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 195,
                            "name": "index",
                            "nodeType": "VariableDeclaration",
                            "scope": 237,
                            "src": "1909:10:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 194,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "1909:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 197,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 196,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1922:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1909:14:0"
                      },
                      {
                        "body": {
                          "id": 226,
                          "nodeType": "Block",
                          "src": "2002:178:0",
                          "statements": [
                            {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "id": 214,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 208,
                                      "name": "votes",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 26,
                                      "src": "2024:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                                        "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                                      }
                                    },
                                    "id": 210,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 209,
                                      "name": "index",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 195,
                                      "src": "2030:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "2024:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_VoteStruct_$23_storage",
                                      "typeString": "struct Poll.VoteStruct storage ref"
                                    }
                                  },
                                  "id": 211,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "voter",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20,
                                  "src": "2024:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 212,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 527,
                                    "src": "2046:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 213,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2046:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "2024:32:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": null,
                              "id": 222,
                              "nodeType": "IfStatement",
                              "src": "2021:118:0",
                              "trueBody": {
                                "id": 221,
                                "nodeType": "Block",
                                "src": "2075:64:0",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 219,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "argumentTypes": null,
                                        "id": 215,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 182,
                                        "src": "2098:6:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                                          "typeString": "struct Poll.VoteStruct memory"
                                        }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 216,
                                          "name": "votes",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 26,
                                          "src": "2107:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                                            "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                                          }
                                        },
                                        "id": 218,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 217,
                                          "name": "index",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 195,
                                          "src": "2113:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2107:12:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_VoteStruct_$23_storage",
                                          "typeString": "struct Poll.VoteStruct storage ref"
                                        }
                                      },
                                      "src": "2098:21:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                                        "typeString": "struct Poll.VoteStruct memory"
                                      }
                                    },
                                    "id": 220,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2098:21:0"
                                  }
                                ]
                              }
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 224,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "2157:7:0",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 223,
                                  "name": "index",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 195,
                                  "src": "2157:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 225,
                              "nodeType": "ExpressionStatement",
                              "src": "2157:7:0"
                            }
                          ]
                        },
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 201,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 195,
                              "src": "1944:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 199,
                                "name": "votes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26,
                                "src": "1952:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_VoteStruct_$23_storage_$dyn_storage",
                                  "typeString": "struct Poll.VoteStruct storage ref[] storage ref"
                                }
                              },
                              "id": 200,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1952:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1944:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 206,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 202,
                              "name": "voter",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 177,
                              "src": "1968:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 204,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1985:1:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 203,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1977:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 205,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1977:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1968:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1944:43:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 227,
                        "nodeType": "WhileStatement",
                        "src": "1938:242:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 230,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 182,
                          "src": "2209:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                            "typeString": "struct Poll.VoteStruct memory"
                          }
                        },
                        "id": 231,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "voter",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20,
                        "src": "2209:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 232,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 182,
                          "src": "2222:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_VoteStruct_$23_memory_ptr",
                            "typeString": "struct Poll.VoteStruct memory"
                          }
                        },
                        "id": 233,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "option",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 22,
                        "src": "2222:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 234,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2208:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_bool_$",
                      "typeString": "tuple(address,bool)"
                    }
                  },
                  "functionReturnParameters": 180,
                  "id": 235,
                  "nodeType": "Return",
                  "src": "2202:34:0"
                }
              ]
            },
            "documentation": null,
            "id": 237,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getVoteByAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 175,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1724:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 177,
                  "name": "voter",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "1747:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 176,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1747:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 179,
                  "name": "option",
                  "nodeType": "VariableDeclaration",
                  "scope": 237,
                  "src": "1762:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 178,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1762:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1746:28:0"
            },
            "scope": 238,
            "src": "1699:547:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 239,
        "src": "192:2059:0"
      }
    ],
    "src": "0:2253:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x0189870ccc57f845d69b8777dc522cecf52599cd",
      "transactionHash": "0xd7890705592188ca86d8e833b5c665a07b3169e133bd7c0e683c7e22f7aed466"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-30T23:19:17.570Z"
}