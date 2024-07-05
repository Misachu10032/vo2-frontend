export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false // Ensure 24-hour format
    }).replace(/(\d+)\/(\d+)\/(\d+),/, '$1/$2/$3'); // Replace commas if necessary
    return formattedDate;
  };
  