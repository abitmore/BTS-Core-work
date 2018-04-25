This is a bugfix release.

In this release we fixed a bug in account history plugin, which may result in incorrect operation history IDs being stored under certain circumtances. Account history is mainly used by 3rd-party businesses for integration.

This bug doesn't affect consensus or chain security.

### Who need to upgrade, and what to do

Businesses (E.G. exchanges, payment processors, gateways or merchants) who're running `witness_node` with `track-account` option, if rely on correctness of operation history object IDs (`1.11.x`) returned by `witness_node` to identify transactions, are likely affected.

Please:
1. upgrade the node, and
2. restart the node with `--replay-blockchain` parameter, and
3. carefully check historical data retrieved from the node and stored outside before, by comparing them to new data returned by upgraded node, and
4. perhaps review business data process logic.

Please be aware that the 3rd step is important for businesses to avoid processing same transaction (E.G. a deposit) more than once. After restarted with `--replay-blockchain`, history object IDs may have changed. For example, before restart, `get_relative_account_history [account_name] 0 1 0` may return an operation ID `1.11.123456789` which indicates a deposit, but after restart, operation ID of the same deposit may have changed to `1.11.123456700`.

All earlier versions are affected.

### Who are not affected

Here are some cases likely not affected by the bug. However, for your own safety, please make decision by your own.

* The bug doesn't affect `delayed_node`, so data stored and returned by `delayed_node` is always correct. IDs stored in `witness_node` can be different than those stored in `delayed_node`. If a business only reads data from `delayed_node`, it's not affected.
  * However, if the business also reads data from `witness_node`, it can be affected.

* Businesses that don't rely on correctness of `1.11.x` IDs to identify transactions, for example those identify transactions by transaction IDs or signatures, are likely not affected, so don't need to upgrade.

* Nodes that were not running with `track-account` option are not affected, so no need to upgrade.
  * Nodes running with default options are in this categary.
  * Public seed nodes, API nodes and witnesses should be in this categary.

* Personal nodes that are not interested in history object IDs are probably affected, but usually don't need to upgrade.

### More info about the bug

The bug was in account history plugin, if `track-account` option is used in a node, when forking occurs (E.G. due to network latency issues), the node may unintendedly skip some IDs, so incorrect IDs will be stored and then be returned when being queried. A restart with `--replay-blockchain` may correct IDs of existing/historical data, but doesn't prevent new incorrect IDs from being stored.

After upgraded, the node won't skip IDs, so will always store correct IDs.

Related issue and pull request: https://github.com/bitshares/bitshares-core/issues/585, https://github.com/bitshares/bitshares-core/pull/873.
