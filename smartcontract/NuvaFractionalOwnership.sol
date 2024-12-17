// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/// @title Nuva Fractional Ownership
/// @dev A smart contract for fractional ownership of insurance policies
contract NuvaFractionalOwnership {
    struct Policy {
        uint256 policyId;
        address insurer;
        string policyDetails;
        uint256 totalValue;
        uint256 fractionalShares;
        uint256 pricePerShare;
        mapping(address => uint256) ownershipShares;
        bool isActive;
    }

    uint256 private policyCounter;
    address public admin;

    mapping(uint256 => Policy) public policies;

    /// @dev Emitted when a new policy is created
    event PolicyCreated(uint256 policyId, address insurer, uint256 totalValue);

    /// @dev Emitted when a fractional share is purchased
    event SharePurchased(uint256 policyId, address buyer, uint256 sharesBought);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    /// @notice Create a new insurance policy
    /// @param _policyDetails Details of the insurance policy
    /// @param _totalValue Total value of the policy
    /// @param _fractionalShares Total shares available for fractional ownership
    function createPolicy(string memory _policyDetails, uint256 _totalValue, uint256 _fractionalShares) external {
        require(_fractionalShares > 0, "Fractional shares must be greater than zero");
        require(_totalValue > 0, "Total value must be greater than zero");
        uint256 policyId = policyCounter++;
        Policy storage newPolicy = policies[policyId];
        newPolicy.policyId = policyId;
        newPolicy.insurer = msg.sender;
        newPolicy.policyDetails = _policyDetails;
        newPolicy.totalValue = _totalValue;
        newPolicy.fractionalShares = _fractionalShares;
        newPolicy.pricePerShare = _totalValue / _fractionalShares;
        newPolicy.isActive = true;
        emit PolicyCreated(policyId, msg.sender, _totalValue);
    }

    /// @notice Purchase fractional shares of a policy
    /// @param _policyId ID of the policy
    /// @param _shares Number of shares to purchase
    function purchaseShares(uint256 _policyId, uint256 _shares) external payable {
        Policy storage policy = policies[_policyId];
        require(policy.isActive, "Policy is not active");
        require(_shares > 0, "Shares must be greater than zero");
        uint256 cost = policy.pricePerShare * _shares;
        require(msg.value == cost, "Incorrect payment amount");
        policy.ownershipShares[msg.sender] += _shares;
        emit SharePurchased(_policyId, msg.sender, _shares);
    }
}