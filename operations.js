export const call_order_update_operation_options = new Serializer(
    "call_order_update_operation_options", {
    target_collateral_ratio: optional(uint16)
}
);

export const call_order_update = new Serializer(
    "call_order_update", {
    fee: asset,
    funding_account: protocol_id_type("account"),
    delta_collateral: asset,
    delta_debt: asset,
    extensions: extension(call_order_update_operation_options)
}
);
