// Sets up the API client for interacting with your backend. 
// For your API reference, visit: https://docs.gadget.dev/api/discounts-vouchers
import { Client } from "@gadget-client/discounts-vouchers";

export const api = new Client({ environment: window.gadgetConfig.environment });
