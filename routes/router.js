const express = require('express');
const router = express.Router();
const { uploadProductImages, uploadProjectFiles , uploadWorkshopFiles }  = require('../service/awsimageupload'); 
const usercontroller = require('../controllers/usercontroller')
const { createAchievement , getAllAchievements } = require ('../controllers/achievement')
const adddetails = require ("../controllers/adddetails")


router.post('/registerproject', usercontroller.registerProject);
router.post('/registercourse', usercontroller.registerCourse);
router.post('/registerinternship', usercontroller.registerInternship);

router.get('/regsiterprojects', usercontroller.getAllproject)
router.get('/registercourses', usercontroller.getAllCourses);
router.get('/registerinternships',usercontroller.getAllInternships);

router.post('/achievements',uploadProductImages.single('image') , createAchievement);
router.get('/achievements' , getAllAchievements);

router.post('/projectdevelopment', uploadProjectFiles.single('fileup') , usercontroller.ProjectDevelopment);
router.get('/projectdevelopment',usercontroller.getProjectDevelopment);

router.post('/Thesis', uploadProjectFiles.single('fileup'),usercontroller.Thesis);
router.get('/Thesis', usercontroller.getThesis);

router.post('/PaperWriting',uploadProjectFiles.single('fileup'), usercontroller.PaperWriting);
router.get('/PaperWriting', usercontroller.getPaperWriting);

router.post('/PaperPublication', uploadProjectFiles.single('fileup'), usercontroller.PaperPublication);
router.get('/PaperPublication', usercontroller.getPaperpublication)

router.post("/addworkshop",uploadWorkshopFiles.fields([{ name: "image", maxCount: 1 }, { name: "file", maxCount: 1 } ]),adddetails.addworkshop);
router.get("/addworkshop",adddetails.getWorkshopsByTypeall)

router.post("/addproject",uploadWorkshopFiles.fields([{ name: "image", maxCount: 1 }, { name: "file", maxCount: 1 } ]),adddetails.addProject);
router.get("/addproject",adddetails.getProjectsGroupedall)

router.post("/addinternship",uploadWorkshopFiles.fields([{ name: "image", maxCount: 1 }, { name: "file", maxCount: 1 } ]),adddetails.addinternship);
router.get("/addinternship",adddetails.getallinternshipall)

module.exports = router;
