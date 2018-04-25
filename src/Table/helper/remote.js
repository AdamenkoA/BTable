export const remote = (remoteObj) => {
    remoteObj.cellEdit = true;
    remoteObj.insertRow = true;
    remoteObj.dropRow = true;
    remoteObj.deleteRow = true;
    return remoteObj;
};