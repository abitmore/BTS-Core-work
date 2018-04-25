This is a bugfix release.

### Who need to upgrade, and what to do

Businesses (E.G. exchanges, payment processors and gateways) who're running `witness_node` or `delayed_node` with `track-account` option, if rely on accuracy of operation history object IDs (`1.11.x`), please:
1. upgrade the node(s), and
2. restart the node(s) with `--replay-blockchain` parameter, and
3. carefully check historical data retrieved from the node(s) and stored outside, by comparing them to new data returned by upgraded node, and
4. perhaps review business data process logic.

Please be aware that the 3rd step is important to **avoid potential double-spending**. After restarted with `--replay-blockchain`, history object IDs may have changed. For example, before restart, `get_relative_account_history [account_name] 0 1 0` may return an operation ID `1.11.123456789` which indicates a deposit, but after restart, operation ID of the same deposit may have changed to `1.11.123456700`.

All earlier versions are affected.

### Who are not affected

* Businesses that don't rely on accuracy of `1.11.x` IDs, for example those always compare transaction IDs or signatures with locally saved data, don't need to upgrade.

* Nodes that were not running with `track-account` option are not affected, so no need to upgrade.
  * Nodes running with default options are in this categary.
  * Public seed nodes, API nodes and witnesses should be in this categary.

* Personal nodes that are not interested in history object IDs are probably affected, but usually don't need to upgrade.

### More info about the bug

The bug was in account history plugin, if `track-account` option is used in a node, when forking occurs (E.G. due to network latency issues), the node may unintendedly skip some IDs, so incorrect IDs will be stored and then be returned when being queried. A restart with `--replay-blockchain` may correct IDs of existing/historical data, but doesn't prevent new incorrect IDs from being stored.

After upgraded, the node won't skip IDs, so will always store correct IDs.

Related issue and pull request: https://github.com/bitshares/bitshares-core/issues/585, https://github.com/bitshares/bitshares-core/pull/873.
