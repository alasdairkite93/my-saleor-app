"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddressSectionContainer = void 0;
const react_1 = require("react");
const UserAddressSectionContainer = ({ children }) => {
  const [displayAddressCreate, setDisplayAddressCreate] = (0, react_1.useState)(false);
  const [editedAddressId, setDisplayAddressEdit] = (0, react_1.useState)();
  const displayAddressEdit = !!editedAddressId;
  const displayAddressList = !displayAddressEdit && !displayAddressCreate;
  const childrenProps = {
    displayAddressList,
    displayAddressEdit,
    displayAddressCreate,
    setDisplayAddressCreate,
    setDisplayAddressEdit,
    editedAddressId,
  };
  return children(childrenProps);
};
exports.UserAddressSectionContainer = UserAddressSectionContainer;
