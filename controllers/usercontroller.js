const Project = require("../models/project");
const Course = require("../models/course");
const Internship = require("../models/internship");
const ProjectDevelop = require("../models/projectdevelop")
const Thesis = require("../models/Thesis");
const PaperWriting = require("../models/PaperWriting");
const PaperPublication = require("../models/Paperpublication");

//register api

exports.registerProject = async (req, res) => {
  try {
    if (!req.body.username) {
      return res.status(400).send({ message: "Please enter userName!" });
    }
    if (!req.body.email) {
      return res.status(400).send({ message: "Please enter email!" });
    }
    if (!req.body.contactnumber) {
      return res.status(400).send({ message: "Please enter contactNumber!" });
    }
    if (!req.body.message) {
      return res.status(400).send({ message: "Please enter message!" });
    }

    const project = new Project({
      username: req.body.username,
      email: req.body.email,
      contactnumber: req.body.contactnumber,
      message: req.body.message,
    });

    await project.save();

    if (project) {
      return res.status(200).json(project);
    } else {
      return res.status(400).json({ message: "Project not created!" });
    }
  } catch (err) {
    console.error("❌ Error in registerProject:", err);
    return res.status(500).json({ message: err.message || "Internal Server Error" });
  }
};


exports.registerCourse = async (req, res) => {
  try {
    const { fullname, contactnumber, email, course } = req.body;

    if (!fullname) {
      return res.status(400).json({ message: "Please enter fullName!" });
    }
    if (!contactnumber) {
      return res.status(400).json({ message: "Please enter contactNumber!" });
    }
    if (!email) {
      return res.status(400).json({ message: "Please enter email!" });
    }
    if (!course) {
      return res.status(400).json({ message: "Please enter course!" });
    }
    

    const courseEntry = new Course({ 
      fullname, 
      contactnumber, 
      email, 
      course 
    });

    await courseEntry.save();

    if (courseEntry) {
      return res.status(200).json(courseEntry);
    } else {
      return res.status(400).json({ message: "Course not created!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


exports.registerInternship = async (req, res) => {
  try {
    const { fullName, contactNumber, email, college, branch, qualification, message } = req.body;

    if (!fullName) {
      return res.status(400).json({ message: "Please enter fullName!" });
    }
    if (!contactNumber) {
      return res.status(400).json({ message: "Please enter contactNumber!" });
    }
    if (!email) {
      return res.status(400).json({ message: "Please enter email!" });
    }
    if (!college) {
      return res.status(400).json({ message: "Please enter college!" });
    }
    if (!branch) {
      return res.status(400).json({ message: "Please enter branch!" });
    }
    if (!qualification) {
      return res.status(400).json({ message: "Please enter qualification!" });
    }

    const internship = new Internship({
      fullName,
      contactNumber,
      email,
      college,
      branch,
      qualification,
      message: message || ""
    });
    await internship.save();

    if (internship) {
      return res.status(201).json(internship);
    } else {
      return res.status(400).json({ message: "Internship not created!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//regsiter get api

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });;
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });;
    res.status(200).json({ success: true, data: internships });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllproject = async (req, res) => {
  try {
    const project = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


// project devlopment api

exports.ProjectDevelopment = async (req, res) => {
  try {
    if (!req.body.thoughts) {
      return res.status(400).json({ message: "Please enter thoughts!" });
    }
    if (!req.body.fullname) {
      return res.status(400).json({ message: "Please enter fullname!" });
    }
    if (!req.body.emailid) {
      return res.status(400).json({ message: "Please enter emailid!" });
    }
    if (!req.body.phonenumber) {
      return res.status(400).json({ message: "Please enter phonenumber!" });
    }
    if (!req.body.budget) {
      return res.status(400).json({ message: "Please enter bought!" });
    }
    if (!req.body.duration) {
      return res.status(400).json({ message: "Please enter duration!" });
    }
    if (!req.body.schedule) {
      return res.status(400).json({ message: "Please enter schedule!" });
    }
    const fileUrl = req.file.location;
    const projectdevelop = new ProjectDevelop({
      thoughts: req.body.thoughts,
      fileup:  fileUrl,
      fullname: req.body.fullname,
      emailid: req.body.emailid,
      phonenumber: req.body.phonenumber,
      budget: req.body.budget,
      duration: req.body.duration,
      schedule: req.body.schedule
    });

    await projectdevelop.save();

    return res.status(201).json({ success: true, data: projectdevelop});
  } 
  catch (error) 
  {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProjectDevelopment = async (req,res) =>{
  try{
    const projectdevelop = await ProjectDevelop.find().sort({createdAt: -1})
    return res.status(200).json({ sucess: true, message:projectdevelop})
  }
  catch (error) {
    return res.status(500).json({ success : false, message: error.message });
  }
}

exports.Thesis = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: "Please enter title!" });
    }
    if (!req.body.fullname) {
      return res.status(400).json({ message: "Please enter fullname!" });
    }
    if (!req.body.emailid) {
      return res.status(400).json({ message: "Please enter emailid!" });
    }
    if (!req.body.phonenumber) {
      return res.status(400).json({ message: "Please enter phonenumber!" });
    }
    if (!req.body.topic) {
      return res.status(400).json({ message: "Please enter topic!" });
    }
    if (!req.body.duration) {
      return res.status(400).json({ message: "Please enter duration!" });
    }
    if (!req.body.schedule) {
      return res.status(400).json({ message: "Please enter schedule!" });
    }
    const fileUrl = req.file.location;
    const thesis = new Thesis({
      title: req.body.title,
      fileup: fileUrl,
      fullname: req.body.fullname,
      emailid: req.body.emailid,
      phonenumber: req.body.phonenumber,
      topic: req.body.topic,
      duration: req.body.duration,
      schedule: req.body.schedule
    });

    await thesis.save();

    return res.status(201).json({ success: true, data: thesis });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


exports.getThesis = async (req,res) =>{
  try{
    const thesis = await Thesis.find().sort({createdAt: -1})
    return res.status(200).json({ success: true, message:thesis})
  }
  catch (error) {
    return res.status(500).json({ success : false, message: error.message });
  }
}



exports.PaperWriting = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: "Please enter title!" });
    }
    if (!req.body.fullname) {
      return res.status(400).json({ message: "Please enter fullname!" });
    }
    if (!req.body.emailid) {
      return res.status(400).json({ message: "Please enter emailid!" });
    }
    if (!req.body.phonenumber) {
      return res.status(400).json({ message: "Please enter phonenumber!" });
    }
    if (!req.body.subject) {
      return res.status(400).json({ message: "Please enter subject!" });
    }
    if (!req.body.duration) {
      return res.status(400).json({ message: "Please enter duration!" });
    }
    if (!req.body.schedule) {
      return res.status(400).json({ message: "Please enter schedule!" });
    }
    const fileUrl = req.file.location;
    const paperWriting = new PaperWriting({
      title: req.body.title,
      fileup: fileUrl,
      fullname: req.body.fullname,
      emailid: req.body.emailid,
      phonenumber: req.body.phonenumber,
      subject: req.body.subject,
      duration: req.body.duration,
      schedule: req.body.schedule
    });

    await paperWriting.save();

    return res.status(201).json({ success: true, data: paperWriting });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getPaperWriting = async (req,res) =>{
  try{
    const paperWriting = await PaperWriting.find().sort({createdAt: -1})
    return res.status(200).json({ success: true, message: paperWriting })
  }
  catch (error) {
    return res.status(500).json({ success : false, message: error.message });
  }
}

exports.PaperPublication = async (req, res) => {
  try {
    if (!req.body.journal) {
      return res.status(400).json({ message: "Please enter journal!" });
    }
    if (!req.body.fullname) {
      return res.status(400).json({ message: "Please enter fullname!" });
    }
    if (!req.body.emailid) {
      return res.status(400).json({ message: "Please enter emailid!" });
    }
    if (!req.body.phonenumber) {
      return res.status(400).json({ message: "Please enter phonenumber!" });
    }
    if (!req.body.publicationType) {
      return res.status(400).json({ message: "Please enter publicationType!" });
    }
    if (!req.body.duration) {
      return res.status(400).json({ message: "Please enter duration!" });
    }
    if (!req.body.schedule) {
      return res.status(400).json({ message: "Please enter schedule!" });
    }
    const fileUrl = req.file.location;
    const paperPublication = new PaperPublication({
      journal: req.body.journal,
      fileup: fileUrl,
      fullname: req.body.fullname,
      emailid: req.body.emailid,
      phonenumber: req.body.phonenumber,
      publicationType: req.body.publicationType,
      duration: req.body.duration,
      schedule: req.body.schedule
    });

    await paperPublication.save();
    return res.status(201).json({ success: true, data: paperPublication });
  } 
  catch (error) 
  {
    return res.status(500).json({ success: false, message: error.message });
  }
};


exports.getPaperpublication = async (req,res) =>{
  try{
    const paperPublication = await PaperPublication.find().sort({createdAt: -1})
    return res.status(200).json({ success: true, message: paperPublication })
  }
  catch (error) {
    return res.status(500).json({ success : false, message: error.message });
  }
}


