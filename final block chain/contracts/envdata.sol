// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract envdata {
    address admin;
    constructor(address ads){
        admin = ads;
    }
    // Structure to hold environmental data
    struct EnvironmentData {
        string temperature; // Temperature in string format
        string humidity;    // Humidity in string format
    }

    // Arrays to store temperature and humidity data
    EnvironmentData[] public environmentData;

    // Function to add environmental data
    function addEnvironmentData(
        string memory _temperature,
        string memory _humidity
    ) public {
        require(msg.sender==admin);
        EnvironmentData memory newData;
        newData.temperature = _temperature;
        newData.humidity = _humidity;
        environmentData.push(newData);
    }

    function getLen() public view returns (uint128) {
        return uint128(environmentData.length);
    }
}
