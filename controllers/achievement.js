const Achievement = require('../models/Achievement');

exports.createAchievement = async (req, res) => {
  const { type, smallDescription } = req.body;

  if (!req.file || !type || !smallDescription) {
    return res.status(400).json({
      success: false,
      message: "Type, small description, and image are required.",
    });
  }

  try {
    const imageUrl = req.file.location;
    const achievement = new Achievement({
      type,
      imageurl: imageUrl,
      smallDescription,
    });

    await achievement.save();

    res.status(201).json({ success: true, data: achievement });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



exports.getAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: achievements });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
