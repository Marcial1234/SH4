pragma solidity ^0.4.18;

contract Coursetro{
    
    
    string fName;
    uint age;
    
    function setInstructor(string _fname, uint _age) public{
      fName = _fname;
      age = _age;
    }
    
    function getInstructor() public constant returns (string, uint){
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