//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SampleToken is ERC20 {
    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint _initialSupply) ERC20(_name,_symbol){
        require(_initialSupply > 0, "INITIAL_SUPPLY has to be greater than 0");
        decimals = decimals;
        _mint(msg.sender, _initialSupply);
    }
}