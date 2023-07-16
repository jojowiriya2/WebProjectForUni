// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;


contract EtherTran {
    uint256 transactionCount; // hold how much tran had make.

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp); // admit or call
  
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] transactions; // an array of transaction

    function addToBlockchain(address payable receiver, uint amount, string memory message) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    // return the array of transaction
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }
    
    // return transactionCount
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}