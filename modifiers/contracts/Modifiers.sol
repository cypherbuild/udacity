//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Modifiers {
    uint public minimumBid = 1000;

    modifier min(uint amount) {
        if(amount > minimumBid){
            revert("Minimum bid threshold not met.");
        }
        _;
    }

    function bid(uint amount) external min(amount) {

    }
}