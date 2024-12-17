// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
// @title Nuva Automated Claims Processing
/// @dev A smart contract for managing insurance claims workflow
contract NuvaAutomatedClaims {
    struct Claim {
        uint256 claimId;
        uint256 policyId;
        address claimant;
        uint256 claimAmount;
        string claimDetails;
        ClaimStatus status;
    }

    enum ClaimStatus { Pending, Approved, Rejected, Paid }

    uint256 private claimCounter;
    address public admin;

    mapping(uint256 => Claim) public claims;

    /// @dev Emitted when a new claim is submitted
    event ClaimSubmitted(uint256 claimId, uint256 policyId, address claimant, uint256 claimAmount);

    /// @dev Emitted when a claim status changes
    event ClaimStatusChanged(uint256 claimId, ClaimStatus newStatus);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    /// @notice Submit a claim against a policy
    /// @param _policyId ID of the policy
    /// @param _claimAmount Amount being claimed
    /// @param _claimDetails Details about the claim
    function submitClaim(uint256 _policyId, uint256 _claimAmount, string memory _claimDetails) external {
        uint256 claimId = claimCounter++;
        claims[claimId] = Claim({
            claimId: claimId,
            policyId: _policyId,
            claimant: msg.sender,
            claimAmount: _claimAmount,
            claimDetails: _claimDetails,
            status: ClaimStatus.Pending
        });

        emit ClaimSubmitted(claimId, _policyId, msg.sender, _claimAmount);
    }

    /// @notice Approve or reject a claim (admin only)
    /// @param _claimId ID of the claim
    /// @param _approve Whether to approve the claim
    function processClaim(uint256 _claimId, bool _approve) external onlyAdmin {
        Claim storage claim = claims[_claimId];
        require(claim.status == ClaimStatus.Pending, "Claim already processed");

        if (_approve) {
            claim.status = ClaimStatus.Approved;
        } else {
            claim.status = ClaimStatus.Rejected;
        }

        emit ClaimStatusChanged(_claimId, claim.status);
    }

    /// @notice Pay an approved claim (admin only)
    /// @param _claimId ID of the claim
    function payClaim(uint256 _claimId) external onlyAdmin {
        Claim storage claim = claims[_claimId];
        require(claim.status == ClaimStatus.Approved, "Claim not approved");

        claim.status = ClaimStatus.Paid;
        payable(claim.claimant).transfer(claim.claimAmount);

        emit ClaimStatusChanged(_claimId, ClaimStatus.Paid);
    }
}
