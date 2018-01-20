pragma solidity ^0.4.18;

contract sh4 {
    
    string entry;
    address owner;

    event Data(
        string fentry
    );
    
    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }

    function sh4() public{
        owner = msg.sender;
    }

    function setText(string _entry) onlyOwner public{
        entry = _entry;
        Data(_entry);
    }

    function getText() view public returns (string){
        return (entry);
    }


}