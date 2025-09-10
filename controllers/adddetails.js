const Project = require ("../models/center/project")
const internship = require("../models/center/internship")
const Workshop = require ("../models/center/workshop");

exports.addworkshop = async (req, res) => {
  try {
    if (!req.body.type) {
      return res.status(400).send({ message: "Please enter type!" });
    }
    if (!req.body.heading) {
      return res.status(400).send({ message: "Please enter heading!" });
    }
    if (!req.body.description) {
      return res.status(400).send({ message: "Please enter description!" });
    }
    if (!req.body.joinNow) {
      return res.status(400).send({ message: "Please enter joiNnow!" });
    }
    
    const imageUrl = req.files?.image ? req.files.image[0].location : null;
    const pdfUrl = req.files?.file ? req.files.file[0].location : null;

    if (!imageUrl) 
        return res.status(400).send({ message: "Image is required!" });
    if (!pdfUrl) 
        return res.status(400).send({ message: "file is required!" });

    const workshop = new Workshop({
      type: req.body.type,
      image: imageUrl,
      heading: req.body.heading,
      description: req.body.description,
      file : pdfUrl,
      joinNow : req.body.joinNow
    });

    await workshop.save();
    return res.status(200).json(workshop);

  } catch (err) {
    console.error("❌ Error in registerProject:", err);
    return res.status(500).json({ message: err.message || "Internal Server Error" });
  }
};

exports.getWorkshopsByTypeall = async (req, res) => {
  try {
    const workshops = await Workshop.aggregate([
      {
        $group: {
          _id: "$type",
          workshops: { $push: "$$ROOT" }
        }
      },
      {
        $project: {
          _id: 0,
          type: "$_id",
          workshops: 1
        }
      }
    ]);
    const formatted = workshops.map(item => ({
      type: item.type,
      workshops: item.workshops
    }));

    return res.status(200).json({ success: true, data: formatted });
  } catch (err) {
    console.error("❌ Error in getWorkshopsByType:", err);
    return res.status(500).json({ message: err.message || "Internal Server Error" });
  }
};



exports.addProject = async (req, res) => {s
  try {
    if (!req.body.category) {
      return res.status(400).send({ message: "Please enter category!" });
    }
    if (!req.body.type) {
      return res.status(400).send({ message: "Please enter type!" });
    }
    if (!req.body.heading) {
      return res.status(400).send({ message: "Please enter heading!" });
    }
    if (!req.body.description) {
      return res.status(400).send({ message: "Please enter description!" });
    }
    if (!req.body.joinNow) {
      return res.status(400).send({ message: "Please enter joinNow!" });
    }

    const imageUrl = req.files?.image ? req.files.image[0].location : null;
    const fileUrl  = req.files?.file ? req.files.file[0].location : null;

    if (!imageUrl) 
      return res.status(400).send({ message: "Image is required!" });
    if (!fileUrl) 
      return res.status(400).send({ message: "File is required!" });

    const project = new Project({
      category: req.body.category,
      type:req.body.type,
      image: imageUrl,
      heading: req.body.heading,
      description: req.body.description,
      file: fileUrl,
      joinNow: req.body.joinNow
    });

    await project.save();
    return res.status(201).json({ success: true, data: project });

  } catch (err) {
    console.error("❌ Error in addProject:", err);
    return res.status(500).json({ message: err.message || "Internal Server Error" });
  }
};

exports.getProjectsGroupedall = async (req, res) => {
  try {
    const projects = await Project.aggregate([
      {
        $group: {
          _id: {
            category: "$category",
            type: "$type"
          },
          projects: { $push: "$$ROOT" }
        }
      },
      {
        $group: {
          _id: "$_id.category",
          types: {
            $push: {
              type: "$_id.type",
              projects: "$projects"
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          types: 1
        }
      }
    ]);
    const formatted = projects.map(item => ({
      category: item.category,
      types: item.types.map(typeItem => ({
        type: typeItem.type,
        projects: typeItem.projects
      }))
    }));

    return res.status(200).json({ success: true, data: formatted });
  } catch (err) {
    console.error("❌ Error in getProjectsGroupedall:", err);
    return res.status(500).json({ message: err.message || "Internal Server Error" });
  }
};




exports.addinternship = async (req, res) => {
  try {
    if (!req.body.type) {
      return res.status(400).send({ message: "Please enter type!" });
    }
    if (!req.body.heading) {
      return res.status(400).send({ message: "Please enter heading!" });
    }
    if (!req.body.description) {
      return res.status(400).send({ message: "Please enter description!" });
    }
    if (!req.body.joinNow) {
      return res.status(400).send({ message: "Please enter joinNow!" });
    }

    const imageUrl = req.files?.image ? req.files.image[0].location : null;
    const fileUrl  = req.files?.file ? req.files.file[0].location : null;

    if (!imageUrl) 
      return res.status(400).send({ message: "Image is required!" });
    if (!fileUrl) 
      return res.status(400).send({ message: "File is required!" });

    const Internship = new internship({
      type : req.body.type,
      image: imageUrl,
      heading: req.body.heading,
      description: req.body.description,
      file: fileUrl,
      joinNow: req.body.joinNow
    });

    await Internship.save();
    return res.status(201).json({ success: true, data: Internship });

  } catch (err) {
    console.error("❌ Error in addProject:", err);
    return res.status(500).json({ message: err.message || "Internal Server Error" });
  }
};

exports.getallinternshipall = async (req, res) => {
  try {
    const internships = await internship.aggregate([
      {
        $group: {
          _id: "$type",
          internships: { $push: "$$ROOT" }
        }
      },
      {
        $project: {
          _id: 0,
          type: "$_id",
          internships: 1
        }
      }
    ]);
    const formatted = internships.map(item => ({
      type: item.type,
      internships: item.internships
    }));
    return res.status(200).json({ success: true, data: formatted });
  } catch (error) {
    console.error("❌ Error in getallinternshipall:", error);
    return res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};



