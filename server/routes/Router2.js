const express = require('express');
const router = express.Router();
const Course = require('../Modal/NewCourse');

router.post('/entrycourse', async (req, res) => {
  try {
    const newCourse = new Course({
      courseType: 'Diploma',
      courseNames: [
                 {
            courseName: 'DIPLOMA PHARMACY ',
            branches: [
              {
                branchName: 'PHARMACY',
                eligibility: '10+2 (PCM/PCB) With 45% (UR), 40% (ST/SC/OBC)',
                eligibilityGradPer: {
                  gen: 45,
                  obc:40,
                  sc: 40,
                  st: 40,
                  ph: 45
                }
              },
            
            ]
          },
        {
          courseName: 'DIPLOMA BLOOD TRANSFUSION',
          branches: [
            {
              branchName: 'BLOOD TRANSFUSION',
              eligibility: '10+2 (PCB) With 50% (UR), 45% (ST/SC/OBC)',
              eligibilityGradPer: {
                gen: 50,
                obc:45,
                sc: 45,
                st: 45,
                ph: 45
              }
            },
            
            
          ],
        }, 
        {
          courseName: 'DIPLOMA DIALYSIS TECHNICIAN',
          branches: [
            {
              branchName: 'DIALYSIS TECHNICIAN',
              eligibility: '10+2 (PCB) With 50% (UR), 45% (ST/SC/OBC)',
              eligibilityGradPer: {
                gen: 50,
                obc:45,
                sc: 45,
                st: 45,
                ph: 45
              }
            },
            
            
          ],
        },
        {
          courseName: 'DIPLOMA PHARMACY (AYURVED)',
          branches: [
            {
              branchName: 'AYURVED',
              eligibility: '10+2 (PCB) With 50% (UR), 45% (ST/SC/OBC)',
              eligibilityGradPer: {
                gen: 50,
                obc:45,
                sc: 45,
                st: 45,
                ph: 45
              }
            },
            
            
          ],
        },
        {
          courseName: 'DIPLOMA HUMAN NUTRITION',
          branches: [
            {
              branchName: 'HUMAN NUTRITION',
              eligibility: '10+2 (PCB) With 50% (UR), 45% (ST/SC/OBC)',
              eligibilityGradPer: {
                gen: 50,
                obc:45,
                sc: 45,
                st: 45,
                ph: 45
              }
            },
            
            
          ],
        },
        {
          courseName: 'DIPLOMA MEDICAL LAB AND TECHNICIAN',
          branches: [
            {
              branchName: 'MEDICAL LAB TECHNICIAN',
              eligibility: '10+2 (PCB) With 50% (UR), 45% (ST/SC/OBC)',
              eligibilityGradPer: {
                gen: 50,
                obc:45,
                sc: 45,
                st: 45,
                ph: 45
              }
            },
            
            
          ],
        },
        {
          courseName: 'DIPLOMA X-RAY RADIOGRAPHER TECHNICIAN',
          branches: [
            {
              branchName: 'X-RAY RADIOGRAPHER TECHNICIAN',
              eligibility: '10+2 (PCB) With 50% (UR), 45% (ST/SC/OBC)',
              eligibilityGradPer: {
                gen: 50,
                obc:45,
                sc: 45,
                st: 45,
                ph: 45
              }
            },
            
            
          ],
        },
        {
          courseName: 'DIPLOMA YOGA',
          branches: [
            {
              branchName: 'YOGA',
              eligibility: '10+2 (PCB) With 50% (UR), 45% (ST/SC/OBC)',
              eligibilityGradPer: {
                gen: 50,
                obc:45,
                sc: 45,
                st: 45,
                ph: 45
              }
            },
            
            
          ],
        },
        {
          courseName: 'DIPLOMA ENGINEERING',
          branches: [
            {
              branchName: 'CHEMICAL ENGINEERING',
              eligibility: '10th Or Equivalent Examination Passed',
              eligibilityGradPer: {
                gen: 0,
                obc:0,
                sc: 0,
                st: 0,
                ph: 0
              }
            },
            {
              branchName: 'CIVIL ENGINEERING',
              eligibility: '10th Or Equivalent Examination Passed',
              eligibilityGradPer: {
                gen: 0,
                obc:0,
                sc: 0,
                st: 0,
                ph: 0
              }
            },
            {
              branchName: 'COMPUTER SCIENCE AND ENGINEERING',
              eligibility: '10th Or Equivalent Examination Passed',
              eligibilityGradPer: {
                gen: 0,
                obc:0,
                sc: 0,
                st: 0,
                ph: 0
              }
            },
            {
              branchName: 'MECHANICAL ENGINEERING',
              eligibility: '10th Or Equivalent Examination Passed',
              eligibilityGradPer: {
                gen: 0,
                obc:0,
                sc: 0,
                st: 0,
                ph: 0
              }
            },

            
            
          ],
        },
        {
          courseName: 'DIPLOMA PHARMACY (HOMEOPATHY)',
          branches: [
            {
              branchName: 'HOMEOPATHIC',
              eligibility: '10+2 (PCB) With 50% (UR), 45% (ST/SC/OBC)',
              eligibilityGradPer: {
                gen: 50,
                obc:45,
                sc: 45,
                st: 45,
                ph: 45
              }
            },
            
            
          ],
        },
        {
          courseName: 'DIPLOMA PARAMEDICAL OPTHALMIC ASSISTENT',
          branches: [
            {
              branchName: 'OPTHALMIC',
              eligibility: '10+2 (PCB) With 50% (UR), 45% (ST/SC/OBC)',
              eligibilityGradPer: {
                gen: 50,
                obc:45,
                sc: 45,
                st: 45,
                ph: 45
              }
            },
            
            
          ],
        },
        {
          courseName: 'DIPLOMA ENGINEERING  (Lateral)',
          branches: [
            {
              branchName: 'CHEMICAL ENGINEERING',
              eligibility: '10+2 (PCM)',
              eligibilityGradPer: {
                gen: 0,
                obc:0,
                sc: 0,
                st: 0,
                ph: 0
              }
            },
            {
              branchName: 'CIVIL ENGINEERING',
              eligibility: '10+2 (PCM)',
              eligibilityGradPer: {
                gen: 0,
                obc:0,
                sc: 0,
                st: 0,
                ph: 0
              }
            },
            {
              branchName: 'COMPUTER SCIENCE AND ENGINEERING',
              eligibility: '10+2 (PCM)',
              eligibilityGradPer: {
                gen: 0,
                obc:0,
                sc: 0,
                st: 0,
                ph: 0
              }
            },
            {
              branchName: 'MECHANICAL ENGINEERING',
              eligibility: '10+2 (PCM)',
              eligibilityGradPer: {
                gen: 0,
                obc:0,
                sc: 0,
                st: 0,
                ph: 0
              }
            },

            
            
          ],
        },





      ],
    });

    const savedCourse = await newCourse.save();
 
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/geteligibility', async (req, res) => {
    const { courseType, courseName, courseBranch } = req.body;
  
    try {
      const course = await Course.findOne({
        courseType: courseType,
        'courseNames.courseName': courseName,
        'courseNames.branches.branchName': courseBranch,
      });
  
      if (course) {
        const { branches } = course.courseNames.find(
          (item) => item.courseName === courseName
        );
  
        const branch = branches.find(
          (item) => item.branchName === courseBranch
        );
  
        if (branch) {
          const { eligibility ,  eligibilityGradPer } = branch;
          return res.status(200).json({ eligibility ,  eligibilityGradPer });
        }
      }
  
      return res.status(404).json({ error: 'Course not found' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
