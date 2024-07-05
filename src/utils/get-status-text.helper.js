export const getMinorStatusText = (status) => {
  switch (status) {
    case 0:
      return 'Idle';
    case 1:
      return 'Traveling';
    case 2:
      return 'Mining';
    case 3:
      return 'Transferring minerals to planet';
    default:
      return 'Unknown';
  }
};

export const getMinorHistoryStatusText = (status) => {
  switch (status) {
    case 1:
      return 'Leaving planet';
    case 2:
      return 'Treaveling to asteroid';
    case 3:
      return 'Mining';
    case 4:
      return 'Traveling back to planet';
    case 5:
      return 'Transferring minerals to planet';
    default:
      return 'Unknown';
  }
};
