//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Modifiers {
    uint public minimumBid = 1000;

    modifier min() {
        if(msg.value >= minimumBid){
            _;
        } else {
            revert("Minimum bid threshold not met.");
        }
    }

    function bid(uint amount) external payable min returns(bool) {
        return true;
    }
}