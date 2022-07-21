import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";

export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [...actionInfo.action.payload, { name: "silverio" }];
  const updateActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updateActionInfo);
};
