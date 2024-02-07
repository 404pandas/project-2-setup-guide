module.exports = {
  // function to format a timestamp, accepts the timestamp and an options object as optional parameters
  formatDate: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
};
