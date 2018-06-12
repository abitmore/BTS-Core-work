This is a protocol upgrade release. All nodes should upgrade before `2018-07-19 14:00:00 UTC`.

## Consensus changes

* [BSIP26: Refund Order Creation Fee in Originally Paid Asset when order is cancelled](https://github.com/bitshares/bsips/blob/master/bsip-0026.md)
* [BSIP27: Asset Issuer Reclaim Fee Pool Funds](https://github.com/bitshares/bsips/blob/master/bsip-0027.md)
* [BSIP29: Require owner authority to change asset issuer](https://github.com/bitshares/bsips/blob/master/bsip-0029.md)
* [BSIP30: Always Allow Increasing Collateral Ratio If Debt Not Increased](https://github.com/bitshares/bsips/blob/master/bsip-0030.md)
* [BSIP31: Update Short Position's Margin Call Price After Partially Called Or Settled](https://github.com/bitshares/bsips/blob/master/bsip-0031.md)
* [BSIP32: Always Match Orders At Maker Price](https://github.com/bitshares/bsips/blob/master/bsip-0032.md)
* [BSIP33: Maker Orders With Better Prices Take Precedence](https://github.com/bitshares/bsips/blob/master/bsip-0033.md)
* [BSIP34: Always Trigger Margin Call When Call Price Above Or At Price Feed](https://github.com/bitshares/bsips/blob/master/bsip-0034.md)
* [BSIP35: Mitigate Rounding Issue On Order Matching](https://github.com/bitshares/bsips/blob/master/bsip-0035.md)
* [BSIP36: Remove expired price feeds on maintenance interval](https://github.com/bitshares/bsips/blob/master/bsip-0036.md)
* [BSIP37: Allow new asset name to end with a number](https://github.com/bitshares/bsips/blob/master/bsip-0037.md)
* [BSIP38: Add target collateral ratio option to short positions](https://github.com/bitshares/bsips/blob/master/bsip-0038.md)
* [Bugfix #184: Potential something-for-nothing fill bug](https://github.com/bitshares/bitshares-core/issues/184)
* [Bugfix #214: Proposal cannot contain proposal_update_operation](https://github.com/bitshares/bitshares-core/issues/214)
* [Bugfix #453: Multiple limit order and call order matching issue](https://github.com/bitshares/bitshares-core/issues/453)
* [Bugfix #588: Virtual operations should be excluded from transactions](https://github.com/bitshares/bitshares-core/issues/588)
* [Bugfix #868: Clear price feed data after updated a bitAsset's backing asset ID](https://github.com/bitshares/bitshares-core/issues/868)
* [Bugfix #890: Update median feeds after feed_lifetime_sec changed](https://github.com/bitshares/bitshares-core/issues/890)
* [Bugfix #922 / #931 / #970] Fixed missing checks when updating a smart coin's `bitasset` options E.G. force settlement delay, backing asset ID or etc;
* [Bugfix #942] Fixed missing asset authorities check for "from" account when claiming from a withdraw permission.

## API changes

* `extensions` field of `call_order_update_operation` changed from an array to an object, which affects all related API's E.G. `get_block`, `get_account_history`, `get_relative_account_history` and etc. Due to this, old version of `cli_wallet` won't be compatible with new API nodes when that operation would occur in result.
* [Issue #862, PR #872] Improved pagination of `list_assets` node API
* [Issue #863, PR #871] Node `get_ticker` API now returns time stamp of latest block instead of server time
* [Issue #811, PR #861] Added `get_full_account` command/API to `cli_wallet`


## Other changes

* [[FC PR #36](https://github.com/bitshares/bitshares-fc/pull/36)] Support Boost 1.64-1.65

* [[FC PR #43](https://github.com/bitshares/bitshares-fc/pull/43)] Fixed a memory leak issue in TCP socket destruction

* [[FC PR #44](https://github.com/bitshares/bitshares-fc/pull/44)] Fixed Diffie-Hellman shared key computation (related to memo encryption)

* [Issue #727, PR #880] Added stack trace printing when node crashes (only for boost 1.65)

* [Issue #878, PR #927] Made number of IO threads configurable (can be manual or auto)

* [Issue #805, PR #840 / #919 / #937] Improved logging level and messages; added logging options about log-rotation

* [PR #938] Fixed an issue that may cause the node to store incorrect block ID to disk when switching forks

* [Issue #582, PR #813] Fixed macOS witness node crash issue when being used as an API server

* [Issue #776, PR #816 / #955] Fixed missing notification to RPC clients when changes occurred on some types of objects

* [Issue #888, PR #954] Fixed an integer overflow issue when checking whether a price feed has expired

* [Issue #864, PR #865] Fixed a `cli_wallet` transaction signing issue when creating proposals with transaction builder

* [Issue #859, PR #801 / #817] Fixed macOS and Ninja build errors introduced in last release

* [Issue #136, PR #928] Fixed an asset supply calculation error in test case

* [Issue #943, PR #869 / #945] Improved a few assertion error messages

* [PR #850] Removed unused asset cache from `cli_wallet`

* [PR #918] Fixed in-code documentation for `set_desired_witness_and_committee_member_count` command/API in `cli_wallet`

* [PR #804] Refactored `node.cpp` and `application.cpp` for easier testing

* [PR #851 / #853 / #854 / #855] Fixed several compiler warnings

## Contributors

* @abitmore
* @jmjatlanta 
* @oxarbitrage
* @pmconrad
* @xeroc
* @cifer-lee
* @ihla
* @zhuliting
* @Zapata
