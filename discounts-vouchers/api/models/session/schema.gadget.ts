import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://discounts-vouchers.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "9MwgcTj32Q1b",
  fields: {
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "dQcj5r_nTkRm",
    },
  },
  shopify: { fields: ["shop", "shopifySID"] },
};
