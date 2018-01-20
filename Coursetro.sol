pragma solidity ^0.4.18;

contract Coursetro {
    
    string fName;
    uint age;
    address owner; //address

    function Coursetro() public { //constructor
        owner = msg.sender; //owner is msg sender
    }

    modifier onlyOwner { //function modifier
        require(msg.sender == owner);
        _; //if condition true then run function body
        //to use modifier place on function
    }
    
    event Instructor(
       string name,
       uint age
    );
    
    function setInstructor(string _fName, uint _age) onlyOwner public {
       fName = _fName;
       age = _age;
       Instructor(_fName, _age);
    }
    
    function getInstructor() view public returns (string, uint) {
       return (fName, age);
    }
    
    
    
    //bool t or f
    //int + and -
    //uint
    //address 20 byte store ether address
    //bytes1-32 fixed size byte array
    //bytes dynamic size byte array
    //string dynamic signed string
    //mapping hash table with key type and value type
    //struct allows you to define new types
    
    
}