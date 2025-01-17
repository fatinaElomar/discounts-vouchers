import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.3.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2024-10",
        enabledModels: [
          "shopifyCollection",
          "shopifyDiscount",
          "shopifyDiscountCode",
          "shopifyDiscountCustomerBuysCollection",
          "shopifyDiscountCustomerBuysProduct",
          "shopifyDiscountCustomerBuysProductVariant",
          "shopifyDiscountCustomerGetsCollection",
          "shopifyDiscountCustomerGetsProduct",
          "shopifyDiscountCustomerGetsProductVariant",
          "shopifyDiscountRedeemCode",
          "shopifyFile",
          "shopifyPriceRule",
          "shopifyProduct",
          "shopifyProductImage",
          "shopifyProductMedia",
          "shopifyProductOption",
          "shopifyProductVariant",
          "shopifyProductVariantMedia",
        ],
        type: "partner",
        scopes: [
          "read_products",
          "write_products",
          "read_discounts",
          "write_discounts",
          "read_price_rules",
          "read_discounts_allocator_functions",
          "write_discounts_allocator_functions",
          "write_price_rules",
        ],
      },
    },
  },
};
