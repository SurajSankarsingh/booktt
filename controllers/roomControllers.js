const allRooms = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Successfully retrieved all rooms',
  });
};

export {
  allRooms
};
